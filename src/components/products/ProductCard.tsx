
import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  return (
    <div className="group relative">
      <Link to={`/product/${product.slug}`} className="block">
        <div className="aspect-square rounded-lg overflow-hidden bg-sari-cream-200">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="mt-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-medium text-sari-terracotta-800">{product.name}</h3>
              <p className="text-sm text-sari-terracotta-600">{product.category}</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-medium text-sari-terracotta-800">${product.price.toFixed(2)}</p>
              {product.oldPrice && (
                <p className="text-sm text-sari-terracotta-500 line-through">
                  ${product.oldPrice.toFixed(2)}
                </p>
              )}
            </div>
          </div>
        </div>
        
        <button
          onClick={handleAddToCart}
          className="absolute bottom-20 right-4 bg-white shadow-md rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-sari-cream-100"
          aria-label="Add to cart"
        >
          <ShoppingCart className="h-5 w-5 text-sari-terracotta-700" />
        </button>
        
        {product.isNew && (
          <span className="absolute top-4 left-4 bg-sari-terracotta-600 text-white text-xs font-bold px-2 py-1 rounded">
            NEW
          </span>
        )}
        
        {product.isBestSeller && (
          <span className="absolute top-4 left-4 bg-sari-brown-500 text-white text-xs font-bold px-2 py-1 rounded">
            BESTSELLER
          </span>
        )}
        
        {product.discount > 0 && (
          <span className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            -{product.discount}%
          </span>
        )}
      </Link>
    </div>
  );
};

export default ProductCard;
