
import React from "react";
import { Product } from "@/types";
import ProductCard from "@/components/products/ProductCard";

interface RelatedProductsProps {
  products: Product[];
}

const RelatedProducts = ({ products }: RelatedProductsProps) => {
  if (products.length === 0) {
    return null;
  }

  return (
    <div className="mt-16">
      <h3 className="text-2xl font-display font-bold text-sari-terracotta-800 mb-6">
        Related Products
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((relatedProduct) => (
          <ProductCard key={relatedProduct.id} product={relatedProduct} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
