
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { getProductBySlug, getRelatedProducts } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ChevronLeft, ChevronRight, Star, Plus, Minus } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { toast } from "@/components/ui/sonner";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug || "");
  const relatedProducts = product ? getRelatedProducts(product.id) : [];
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  
  // Exit early if product doesn't exist
  if (!product) {
    return (
      <Layout>
        <div className="container-custom py-16 text-center">
          <h1 className="text-3xl font-display text-sari-terracotta-800 mb-4">Product Not Found</h1>
          <p className="mb-8 text-sari-terracotta-600">The product you're looking for doesn't exist or has been removed.</p>
          <Link 
            to="/shop" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sari-terracotta-500 hover:bg-sari-terracotta-600 transition"
          >
            Return to Shop
          </Link>
        </div>
      </Layout>
    );
  }

  // Create an array of images (use the main image if no additional images)
  const images = product.images ? [product.image, ...product.images] : [product.image];

  const handlePrevImage = () => {
    setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const increaseQuantity = () => {
    if (quantity < (product.stockQuantity || 10)) { // Default limit if stockQuantity not available
      setQuantity(prev => prev + 1);
    } else {
      toast.warning(`Only ${product.stockQuantity} items available`);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <Layout>
      <div className="container-custom py-12">
        {/* Breadcrumbs */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-sari-terracotta-500">
            <li>
              <Link to="/" className="hover:text-sari-terracotta-700">Home</Link>
            </li>
            <li>/</li>
            <li>
              <Link to="/shop" className="hover:text-sari-terracotta-700">Shop</Link>
            </li>
            <li>/</li>
            <li>
              <Link to={`/shop/${product.category.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-sari-terracotta-700">
                {product.category}
              </Link>
            </li>
            <li>/</li>
            <li className="font-medium text-sari-terracotta-800">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-6">
            {/* Main Image */}
            <div className="relative bg-sari-cream-100 rounded-lg overflow-hidden aspect-square">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-contain"
              />
              
              {images.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-5 w-5 text-sari-terracotta-800" />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-5 w-5 text-sari-terracotta-800" />
                  </button>
                </>
              )}
              
              {/* Product badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.isNew && (
                  <span className="bg-sari-terracotta-500 text-white text-xs font-bold px-2 py-1 rounded">
                    NEW
                  </span>
                )}
                {product.isBestSeller && (
                  <span className="bg-sari-brown-500 text-white text-xs font-bold px-2 py-1 rounded">
                    BESTSELLER
                  </span>
                )}
              </div>
              
              {product.discount > 0 && (
                <span className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  -{product.discount}%
                </span>
              )}
            </div>
            
            {/* Thumbnail Images */}
            {images.length > 1 && (
              <div className="grid grid-cols-5 gap-3">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`rounded-md overflow-hidden aspect-square border-2 ${
                      selectedImage === index ? "border-sari-terracotta-500" : "border-transparent"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} - image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-display font-bold text-sari-terracotta-800 mb-2">
                {product.name}
              </h1>
              <p className="text-sari-terracotta-600 mb-4">{product.category}</p>
              
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5" fill="#F59E0B" color="#F59E0B" />
                  ))}
                </div>
                <span className="ml-2 text-sari-terracotta-600">
                  {product.reviews?.length || 0} reviews
                </span>
              </div>
              
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-2xl font-medium text-sari-terracotta-800">
                  ${product.price.toFixed(2)}
                </span>
                {product.oldPrice && (
                  <span className="text-lg text-sari-terracotta-500 line-through">
                    ${product.oldPrice.toFixed(2)}
                  </span>
                )}
                {product.discount > 0 && (
                  <span className="bg-red-100 text-red-800 text-sm font-medium px-2.5 py-0.5 rounded">
                    Save {product.discount}%
                  </span>
                )}
              </div>
            </div>
            
            <div className="prose max-w-none text-sari-terracotta-700 mb-6">
              <p>{product.description}</p>
            </div>
            
            {/* Product attributes */}
            <div className="space-y-4 border-y border-sari-cream-300 py-6">
              {product.weight && (
                <div className="flex justify-between">
                  <span className="text-sari-terracotta-600">Weight:</span>
                  <span className="font-medium text-sari-terracotta-800">{product.weight}</span>
                </div>
              )}
              
              {product.ingredients && (
                <div>
                  <div className="text-sari-terracotta-600">Ingredients:</div>
                  <div className="font-medium text-sari-terracotta-800 mt-1">
                    {product.ingredients}
                  </div>
                </div>
              )}
              
              <div className="flex justify-between">
                <span className="text-sari-terracotta-600">Availability:</span>
                <span className={`font-medium ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                  {product.inStock ? 'In stock' : 'Out of stock'}
                </span>
              </div>
            </div>
            
            {/* Add to cart */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center border border-sari-cream-300 rounded-md">
                <button
                  onClick={decreaseQuantity}
                  className="px-4 py-2 text-sari-terracotta-600 hover:text-sari-terracotta-800"
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="px-4 py-2 border-x border-sari-cream-300 min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={increaseQuantity}
                  className="px-4 py-2 text-sari-terracotta-600 hover:text-sari-terracotta-800"
                  disabled={quantity >= (product.stockQuantity || 10)}
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              
              <Button
                onClick={handleAddToCart}
                className="bg-sari-terracotta-500 hover:bg-sari-terracotta-600 text-white flex-1"
                disabled={!product.inStock}
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-display font-bold text-sari-terracotta-800 mb-6">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProductDetail;
