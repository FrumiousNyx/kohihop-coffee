"use client";

import Image from "next/image";
import { useState } from "react";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export function LazyImage({ 
  src, 
  alt, 
  className = "", 
  priority = false 
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 1200px"
        className={`
          object-cover 
          transition-opacity duration-500 
          ${isLoaded ? 'opacity-100' : 'opacity-0'}
          ${hasError ? 'blur-sm' : ''}
        `}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        priority={priority}
      />
      
      {/* Loading skeleton */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-white/10 animate-pulse" />
      )}
      
      {/* Error fallback */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <span className="text-white/60 text-sm">Image not available</span>
        </div>
      )}
    </div>
  );
}
