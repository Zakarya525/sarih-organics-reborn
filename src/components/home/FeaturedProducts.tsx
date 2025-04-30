
import React from "react";
import ProductCard from "@/components/products/ProductCard";
import { featuredProducts } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import OptimizedImage from "@/components/ui/OptimizedImage";

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-sari-cream-100">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-sari-terracotta-800">
            Our Popular Products
          </h2>
          <p className="mt-4 text-sari-terracotta-600 max-w-2xl mx-auto">
            Hand-picked selections loved by our customers
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-flex items-center justify-center px-6 py-3 border border-sari-terracotta-600 text-base font-medium rounded-md text-sari-terracotta-700 bg-white hover:bg-sari-cream-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sari-terracotta-500 transition"
          >
            View All Products
          </Link>
        </div>
        
        {/* Promotional Banner */}
        <div className="mt-16 bg-gradient-to-r from-sari-terracotta-500 to-sari-terracotta-600 rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <span className="inline-block px-4 py-1 rounded-full bg-white text-sari-terracotta-700 text-sm font-medium mb-4">
                Limited Time Offer
              </span>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                25% Off on All Organic Granola
              </h3>
              <p className="text-sari-cream-100 mb-6">
                Enjoy our premium handcrafted granola with rich flavors and all-natural ingredients. Perfect way to start your healthy day!
              </p>
              <div>
                <Button className="bg-white text-sari-terracotta-700 hover:bg-sari-cream-100">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Shop Now
                </Button>
              </div>
            </div>
            <div className="relative h-64 md:h-auto">
              <OptimizedImage 
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3" 
                alt="Organic Granola"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
