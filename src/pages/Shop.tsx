
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/products/ProductCard";
import { allProducts } from "@/data/products";
import { Filter, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Shop = () => {
  const [category, setCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<string | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const categories = ["All", "Granola", "Honey", "Cookies", "Jams & Spreads"];
  const priceRanges = [
    { label: "All Prices", value: null },
    { label: "Under $10", value: "under-10" },
    { label: "$10 - $15", value: "10-15" },
    { label: "Over $15", value: "over-15" }
  ];

  const toggleFilterPanel = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const filteredProducts = allProducts.filter(product => {
    let matchesCategory = true;
    let matchesPrice = true;
    
    if (category && category !== "All") {
      matchesCategory = product.category === category;
    }
    
    if (priceRange) {
      if (priceRange === "under-10") {
        matchesPrice = product.price < 10;
      } else if (priceRange === "10-15") {
        matchesPrice = product.price >= 10 && product.price <= 15;
      } else if (priceRange === "over-15") {
        matchesPrice = product.price > 15;
      }
    }
    
    return matchesCategory && matchesPrice;
  });

  return (
    <Layout>
      <div className="bg-sari-cream-100 py-10">
        <div className="container-custom">
          <div className="mb-10 text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-sari-terracotta-800 mb-4">
              Our Products
            </h1>
            <p className="text-lg text-sari-terracotta-600 max-w-2xl mx-auto">
              Explore our range of 100% organic, handcrafted products made with love in Bali
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Mobile Filter Toggle */}
            <div className="md:hidden mb-4">
              <Button 
                onClick={toggleFilterPanel}
                variant="outline"
                className="w-full flex justify-between items-center"
              >
                <span className="flex items-center">
                  <Filter className="mr-2 h-5 w-5" />
                  Filter Products
                </span>
                <ChevronDown className={`h-5 w-5 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
              </Button>
            </div>
            
            {/* Filters */}
            <div className={`md:w-1/4 lg:w-1/5 ${isFilterOpen ? 'block' : 'hidden md:block'}`}>
              <Card>
                <CardContent className="p-6">
                  <div className="mb-6">
                    <h3 className="font-medium text-lg mb-3 text-sari-terracotta-800">
                      Categories
                    </h3>
                    <div className="space-y-2">
                      {categories.map((cat) => (
                        <div key={cat} className="flex items-center">
                          <button
                            className={`text-left w-full py-1 px-2 rounded-md ${
                              (category === cat || (cat === "All" && !category)) 
                                ? "bg-sari-terracotta-100 text-sari-terracotta-800 font-medium" 
                                : "text-sari-terracotta-600 hover:bg-sari-cream-200"
                            }`}
                            onClick={() => setCategory(cat === "All" ? null : cat)}
                          >
                            {cat}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-lg mb-3 text-sari-terracotta-800">
                      Price
                    </h3>
                    <div className="space-y-2">
                      {priceRanges.map((range) => (
                        <div key={range.label} className="flex items-center">
                          <button
                            className={`text-left w-full py-1 px-2 rounded-md ${
                              priceRange === range.value || (range.value === null && !priceRange)
                                ? "bg-sari-terracotta-100 text-sari-terracotta-800 font-medium" 
                                : "text-sari-terracotta-600 hover:bg-sari-cream-200"
                            }`}
                            onClick={() => setPriceRange(range.value)}
                          >
                            {range.label}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Products Grid */}
            <div className="md:w-3/4 lg:w-4/5">
              {filteredProducts.length === 0 ? (
                <div className="text-center py-16 bg-white rounded-lg shadow-sm">
                  <p className="text-sari-terracotta-600 text-lg">No products found.</p>
                  <Button
                    variant="link"
                    onClick={() => {setCategory(null); setPriceRange(null);}}
                    className="mt-2 text-sari-terracotta-500"
                  >
                    Reset filters
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
