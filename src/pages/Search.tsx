
import React from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/products/ProductCard";
import { allProducts } from "@/data/products";
import { Product } from "@/types";

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  
  const results = allProducts.filter((product) => {
    const matchName = product.name.toLowerCase().includes(query.toLowerCase());
    const matchDescription = product.description.toLowerCase().includes(query.toLowerCase());
    const matchCategory = product.category.toLowerCase().includes(query.toLowerCase());
    
    return matchName || matchDescription || matchCategory;
  });

  return (
    <Layout>
      <div className="container-custom py-12">
        <h1 className="text-3xl font-display font-bold text-sari-terracotta-800 mb-6">
          Search Results for "{query}"
        </h1>
        
        {results.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {results.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="py-12 text-center">
            <p className="text-xl text-sari-terracotta-600 mb-4">
              No products found matching your search.
            </p>
            <p className="text-sari-terracotta-500">
              Try using different keywords or browse our categories.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Search;
