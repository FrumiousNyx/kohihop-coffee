const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"]
  },
  webpack: (config) => {
    config.cache = false;
    config.resolve.symlinks = false;
    return config;
  }
};

export default nextConfig;
