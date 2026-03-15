const fs = require("fs");

function notSymlinkError() {
  const err = new Error("EINVAL: invalid argument, readlink");
  err.code = "EINVAL";
  err.errno = -22;
  err.syscall = "readlink";
  return err;
}

function isSymlinkSync(path) {
  try {
    return fs.lstatSync(path).isSymbolicLink();
  } catch {
    return false;
  }
}

const origReadlink = fs.readlink;
const origReadlinkSync = fs.readlinkSync;

fs.readlink = function readlinkPatched(path, options, callback) {
  if (typeof options === "function") {
    callback = options;
    options = undefined;
  }
  const cb = typeof callback === "function" ? callback : () => {};

  if (!isSymlinkSync(path)) {
    cb(notSymlinkError());
    return;
  }

  return origReadlink.call(fs, path, options, (err, linkString) => {
    if (err && err.code === "EISDIR") {
      cb(notSymlinkError());
      return;
    }
    cb(err, linkString);
  });
};

fs.readlinkSync = function readlinkSyncPatched(path, options) {
  if (!isSymlinkSync(path)) {
    throw notSymlinkError();
  }
  try {
    return origReadlinkSync.call(fs, path, options);
  } catch (err) {
    if (err && err.code === "EISDIR") {
      throw notSymlinkError();
    }
    throw err;
  }
};

if (fs.promises && typeof fs.promises.readlink === "function") {
  const origPromisesReadlink = fs.promises.readlink.bind(fs.promises);
  fs.promises.readlink = async (path, options) => {
    if (!isSymlinkSync(path)) {
      throw notSymlinkError();
    }
    try {
      return await origPromisesReadlink(path, options);
    } catch (err) {
      if (err && err.code === "EISDIR") throw notSymlinkError();
      throw err;
    }
  };
}

