
import React, { useState } from "react";
import { getOptimizedImageUrl, getResponsiveSrcSet } from "@/utils/imageOptimization";

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
}

const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className = "",
  objectFit = "cover",
  ...props
}: OptimizedImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  
  return (
    <div className={`overflow-hidden relative ${isLoading ? "bg-sari-cream-200 animate-pulse" : ""}`}>
      <img
        src={getOptimizedImageUrl(src, width || 800)}
        srcSet={getResponsiveSrcSet(src)}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoading(false)}
        className={`transition-opacity duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        } ${className}`}
        style={{ objectFit }}
        {...props}
      />
    </div>
  );
};

export default OptimizedImage;
