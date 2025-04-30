
/**
 * Image optimization utility
 * Handles responsive image loading and optimization
 */

/**
 * Get optimized image URL by appending quality and size parameters
 * This works with Unsplash and similar services that support URL parameters
 */
export const getOptimizedImageUrl = (url: string, width: number = 800, quality: number = 80): string => {
  // Handle unsplash URLs
  if (url.includes('unsplash.com')) {
    // Unsplash allows for size and quality parameters
    const separator = url.includes('?') ? '&' : '?';
    return `${url}${separator}w=${width}&q=${quality}&auto=format`;
  }
  
  // For other URLs, return as is
  return url;
};

/**
 * Get responsive image sizes for different viewports
 * Returns srcSet string for use in <img> elements
 */
export const getResponsiveSrcSet = (url: string, maxWidth: number = 1200): string => {
  if (url.includes('unsplash.com')) {
    // Create different sized versions for responsive loading
    const sizes = [320, 480, 640, 768, 1024, maxWidth];
    return sizes
      .map(size => `${getOptimizedImageUrl(url, size)} ${size}w`)
      .join(', ');
  }
  
  return '';
};
