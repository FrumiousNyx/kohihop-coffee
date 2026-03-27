// Performance utilities for Kohihop website

export function debounce<T extends (...args: any[]) => (
  func: (...args: T) => any,
  delay: number
): ((...args: T) => any) => {
  let timeoutId: NodeJS.Timeout;
  return (...args: T) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

export function throttle<T extends (...args: any[]) => (
  func: (...args: T) => any,
  delay: number
): ((...args: T) => any) => {
  let inThrottle = false;
  let lastTime = 0;
  
  return (...args: T) => {
    const now = Date.now();
    if (inThrottle || now - lastTime >= delay) {
      func(...args);
      lastTime = now;
      inThrottle = true;
      
      setTimeout(() => {
        inThrottle = false;
      }, delay);
    }
  };
};

export function preloadImages(src: string[]) {
  // Preload critical images for faster loading
  src.forEach(imageSrc => {
    const img = new Image();
    img.src = imageSrc;
  });
}

export function optimizeAnimation() {
  // Reduce motion for better performance
  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3, ease: "easeOut" }
  };
}
