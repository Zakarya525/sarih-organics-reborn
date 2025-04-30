
import React from "react";
import { Product } from "@/types";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { toast } from "@/components/ui/sonner";

interface ProductInfoProps {
  product: Product;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, 1);
    toast.success(`Added ${product.name} to your cart`);
  };

  return (
    <div>
      <h1 className="text-3xl font-display font-bold text-sari-terracotta-800 mb-2">
        {product.name}
      </h1>
      <p className="text-sari-terracotta-600 mb-4">{product.category}</p>

      <div className="flex items-center mb-4">
        {/* You can use a star rating component here */}
        {/* Example: <StarRating rating={product.rating} /> */}
      </div>

      <div className="mb-4">
        <span className="text-2xl font-medium text-sari-terracotta-800">
          ${product.price?.toFixed(2)}
        </span>
        {product.oldPrice && (
          <span className="ml-2 text-sari-terracotta-500 line-through">
            ${product.oldPrice?.toFixed(2)}
          </span>
        )}
      </div>

      <p className="text-sari-terracotta-700 mb-6">{product.description}</p>

      <Button
        onClick={handleAddToCart}
        className="bg-sari-terracotta-500 hover:bg-sari-terracotta-600"
      >
        <ShoppingCart className="mr-2 h-4 w-4" />
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductInfo;
