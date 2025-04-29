
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X } from "lucide-react";
import { allProducts } from "@/data/products";
import { Product } from "@/types";
import { useDebounce } from "@/hooks/useDebounce";
import { Input } from "@/components/ui/input";

const ProductSearch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const debouncedQuery = useDebounce(query, 300);
  const navigate = useNavigate();
  const searchRef = useRef<HTMLDivElement>(null);

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle search with debounced query
  useEffect(() => {
    if (debouncedQuery.trim() === "") {
      setResults([]);
      return;
    }

    const filteredProducts = allProducts.filter((product) => {
      const matchName = product.name.toLowerCase().includes(debouncedQuery.toLowerCase());
      const matchDescription = product.description.toLowerCase().includes(debouncedQuery.toLowerCase());
      const matchCategory = product.category.toLowerCase().includes(debouncedQuery.toLowerCase());
      
      return matchName || matchDescription || matchCategory;
    });

    setResults(filteredProducts.slice(0, 5)); // Limit to 5 results
  }, [debouncedQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
      setIsOpen(false);
    }
  };

  const highlightMatch = (text: string) => {
    if (!query) return text;
    
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    
    return parts.map((part, index) => 
      part.toLowerCase() === query.toLowerCase() ? 
        <span key={index} className="bg-sari-terracotta-200">{part}</span> : part
    );
  };

  return (
    <div ref={searchRef} className="relative flex-grow max-w-sm mx-4">
      {!isOpen ? (
        <button 
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 text-sari-terracotta-600 hover:text-sari-terracotta-800 bg-sari-cream-100 hover:bg-sari-cream-200 rounded-md px-4 py-2 w-full transition-colors"
          aria-label="Search products"
        >
          <Search className="h-5 w-5" />
          <span className="text-sari-terracotta-700">Search products...</span>
        </button>
      ) : (
        <div className="w-full">
          <form onSubmit={handleSearch} className="relative">
            <div className="relative">
              <Input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full pl-10 pr-10 bg-white border-sari-terracotta-300 focus:border-sari-terracotta-500 focus:ring-sari-terracotta-500"
                autoFocus
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-sari-terracotta-400" />
              {query && (
                <button 
                  type="button"
                  onClick={() => setQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  <X className="h-4 w-4 text-sari-terracotta-400 hover:text-sari-terracotta-600" />
                </button>
              )}
            </div>
            
            {results.length > 0 && (
              <div className="mt-4 max-h-96 overflow-y-auto divide-y divide-sari-cream-200 bg-white rounded-lg shadow-lg z-50 border border-sari-cream-200">
                {results.map((product) => (
                  <div 
                    key={product.id}
                    onClick={() => {
                      navigate(`/product/${product.slug}`);
                      setIsOpen(false);
                    }}
                    className="flex items-center gap-3 py-3 px-2 hover:bg-sari-cream-100 cursor-pointer"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-sari-cream-200 rounded overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-grow min-w-0">
                      <div className="font-medium text-sari-terracotta-800">
                        {highlightMatch(product.name)}
                      </div>
                      <div className="text-sm text-sari-terracotta-600">{product.category}</div>
                    </div>
                    <div className="flex-shrink-0 font-medium text-sari-terracotta-800">
                      ${product.price.toFixed(2)}
                    </div>
                  </div>
                ))}
                
                <button
                  onClick={() => {
                    navigate(`/search?q=${encodeURIComponent(query)}`);
                    setIsOpen(false);
                  }}
                  className="w-full text-center py-2 text-sari-terracotta-600 hover:text-sari-terracotta-800 text-sm"
                >
                  See all results for "{query}"
                </button>
              </div>
            )}
            
            {debouncedQuery && results.length === 0 && (
              <div className="mt-4 py-3 text-center text-sari-terracotta-600 bg-white rounded-lg shadow-lg border border-sari-cream-200">
                No products found for "{query}"
              </div>
            )}
          </form>
        </div>
      )}
    </div>
  );
};

export default ProductSearch;
