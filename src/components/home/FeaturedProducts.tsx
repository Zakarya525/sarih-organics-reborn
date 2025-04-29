
import React from "react";
import ProductCard from "@/components/products/ProductCard";
import { featuredProducts } from "@/data/products";

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-sari-cream-100">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-sari-green-800">
            Our Popular Products
          </h2>
          <p className="mt-4 text-sari-green-600 max-w-2xl mx-auto">
            Hand-picked selections loved by our customers
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/shop"
            className="inline-flex items-center justify-center px-6 py-3 border border-sari-green-600 text-base font-medium rounded-md text-sari-green-700 bg-white hover:bg-sari-green-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sari-green-500 transition"
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
