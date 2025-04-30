
import React from "react";

interface ProductBadgesProps {
  isNew?: boolean;
  isBestSeller?: boolean;
  discount?: number;
}

const ProductBadges = ({ isNew, isBestSeller, discount = 0 }: ProductBadgesProps) => {
  return (
    <>
      {isNew && (
        <span className="absolute top-4 left-4 bg-sari-terracotta-600 text-white text-xs font-bold px-2 py-1 rounded">
          NEW
        </span>
      )}
      
      {isBestSeller && (
        <span className="absolute top-4 left-4 bg-sari-brown-500 text-white text-xs font-bold px-2 py-1 rounded">
          BESTSELLER
        </span>
      )}
      
      {discount > 0 && (
        <span className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
          -{discount}%
        </span>
      )}
    </>
  );
};

export default ProductBadges;
