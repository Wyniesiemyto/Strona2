import React, { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  webpSrc?: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  width?: number;
  height?: number;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  webpSrc,
  alt,
  className,
  loading = 'lazy',
  width,
  height
}) => {
  const [imgError, setImgError] = useState(false);
  
  return (
    <picture>
      {webpSrc && !imgError && (
        <source srcSet={webpSrc} type="image/webp" />
      )}
      <img
        src={src}
        alt={alt}
        className={className}
        loading={loading}
        width={width}
        height={height}
        onError={() => setImgError(true)}
      />
    </picture>
  );
};