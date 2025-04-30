
import React from "react";

interface ProductPriceDisplayProps {
  price: number;
  oldPrice?: number;
  size?: "sm" | "md" | "lg";
}

const ProductPriceDisplay = ({ price, oldPrice, size = "sm" }: ProductPriceDisplayProps) => {
  const priceClass = 
    size === "sm" ? "text-lg" : 
    size === "md" ? "text-xl" : 
    "text-2xl";
  
  const oldPriceClass =
    size === "sm" ? "text-sm" :
    size === "md" ? "text-base" :
    "text-lg";

  return (
    <div className="text-right">
      <p className={`${priceClass} font-medium text-sari-terracotta-800`}>
        ${price.toFixed(2)}
      </p>
      {oldPrice && (
        <p className={`${oldPriceClass} text-sari-terracotta-500 line-through`}>
          ${oldPrice.toFixed(2)}
        </p>
      )}
    </div>
  );
};

export default ProductPriceDisplay;
