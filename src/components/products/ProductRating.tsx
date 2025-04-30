
import React from "react";
import { Star } from "lucide-react";

interface ProductRatingProps {
  rating: number;
  reviewCount?: number;
  showCount?: boolean;
  size?: "sm" | "md";
}

const ProductRating = ({ 
  rating, 
  reviewCount = 0, 
  showCount = true,
  size = "sm" 
}: ProductRatingProps) => {
  const starSize = size === "sm" ? "w-4 h-4" : "w-5 h-5";
  const textSize = size === "sm" ? "text-xs" : "text-sm";
  
  return (
    <div className="flex items-center">
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={starSize} 
            fill={i < Math.floor(rating) ? "#F59E0B" : "transparent"} 
            color={i < Math.floor(rating) ? "#F59E0B" : "#D1D5DB"} 
          />
        ))}
      </div>
      {showCount && (
        <span className={`ml-1 ${textSize} text-sari-terracotta-500`}>
          ({reviewCount})
        </span>
      )}
    </div>
  );
};

export default ProductRating;
