
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductBySlug } from "@/data/products";
import { Product } from "@/types";
import Layout from "@/components/layout/Layout";
import OptimizedImage from "@/components/ui/OptimizedImage";
import ImageSlider from "@/components/products/ImageSlider";
import ProductReviews from "@/components/reviews/ProductReviews";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { toast } from "@/components/ui/sonner";
import { supabase } from "@/integrations/supabase/client";
import ProductCard from "@/components/products/ProductCard";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const { addToCart } = useCart();
  const [reviews, setReviews] = useState<any[]>([]); // Using any[] for simplicity
  
  useEffect(() => {
    if (slug) {
      const foundProduct = getProductBySlug(slug);
      setProduct(foundProduct);
    }
  }, [slug]);

  useEffect(() => {
    const fetchReviews = async () => {
      if (product) {
        try {
          const { data, error } = await supabase
            .from('reviews')
            .select('*')
            .eq('product_id', product.id.toString())
            .eq('is_approved', true)
            .order('created_at', { ascending: false });
          
          if (error) {
            console.error("Error fetching reviews:", error);
          } else {
            // Map Supabase data to your ProductReview type
            const formattedReviews = data.map(review => ({
              id: review.id,
              userId: review.user_id,
              userName: review.name,
              rating: review.rating,
              comment: review.comment,
              date: new Date(review.created_at).toLocaleDateString(),
            }));
            setReviews(formattedReviews);
          }
        } catch (error) {
          console.error("Error fetching reviews:", error);
        }
      }
    };

    fetchReviews();
  }, [product]);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      if (product) {
        // Convert numeric ID to string for Supabase compatibility
        const related = await getRelatedProducts(product.category);
        setRelatedProducts(related);
      }
    };
    
    fetchRelatedProducts();
  }, [product]);

  if (!product) {
    return (
      <Layout>
        <div className="container-custom py-20 text-center text-sari-terracotta-700">
          <h2 className="text-3xl font-bold mb-4">Loading product...</h2>
          <p>Please wait, we are fetching the product details for you.</p>
        </div>
      </Layout>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, 1);
    toast.success(`Added ${product.name} to your cart`);
  };

  const handleImageSelect = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleReviewAdded = () => {
    // Refresh reviews after a new review is added
    if (product) {
      supabase
        .from('reviews')
        .select('*')
        .eq('product_id', product.id.toString())
        .eq('is_approved', true)
        .order('created_at', { ascending: false })
        .then(({ data, error }) => {
          if (error) {
            console.error("Error fetching reviews:", error);
          } else {
            // Map Supabase data to your ProductReview type
            const formattedReviews = data.map(review => ({
              id: review.id,
              userId: review.user_id,
              userName: review.name,
              rating: review.rating,
              comment: review.comment,
              date: new Date(review.created_at).toLocaleDateString(),
            }));
            setReviews(formattedReviews);
          }
        });
    }
  };

  // Get related products by category
  const getRelatedProducts = async (category: string): Promise<Product[]> => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('category', category);
      
      if (error) {
        console.error("Error fetching related products:", error);
        return [];
      }
      
      // Filter out the current product
      const filteredProducts = data.filter(p => p.id.toString() !== product.id.toString())
        .map(item => ({
          id: Number(item.id) || parseInt(item.id, 10) || Date.now(),
          name: item.name,
          slug: item.slug,
          description: item.description,
          price: item.price,
          oldPrice: item.old_price,
          discount: item.discount,
          image: item.image,
          images: item.images,
          category: item.category,
          isNew: item.is_new,
          isBestSeller: item.is_best_seller,
          inStock: item.in_stock,
          stockQuantity: item.stock_quantity,
          weight: item.weight,
          ingredients: item.ingredients,
          tags: item.tags,
        }));
      return filteredProducts as Product[];
    } catch (error) {
      console.error("Error fetching related products:", error);
      return [];
    }
  };

  return (
    <Layout>
      <div className="bg-sari-cream-50 py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Image Gallery */}
            <div>
              {product.images && product.images.length > 0 ? (
                <ImageSlider
                  images={product.images}
                  productName={product.name}
                  onSelect={handleImageSelect}
                  selectedIndex={selectedImageIndex}
                />
              ) : (
                <div className="aspect-square rounded-lg overflow-hidden bg-sari-cream-100">
                  <OptimizedImage
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
            </div>

            {/* Product Details */}
            <div>
              <h1 className="text-3xl font-display font-bold text-sari-terracotta-800 mb-2">
                {product.name}
              </h1>
              <p className="text-sari-terracotta-600 mb-4">{product.category}</p>

              <div className="flex items-center mb-4">
                {/* You can use a star rating component here */}
                {/* Example: <StarRating rating={product.rating} /> */}
                {/* <span className="ml-2 text-sari-terracotta-500">
                  ({product.reviews?.length || 0} reviews)
                </span> */}
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
          </div>

          {/* Product Reviews */}
          {product.id && (
            <ProductReviews 
              productId={product.id.toString()} // Convert to string for Supabase
              reviews={reviews}
              onReviewAdded={handleReviewAdded}
            />
          )}
          
          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-16">
              <h3 className="text-2xl font-display font-bold text-sari-terracotta-800 mb-6">
                Related Products
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <ProductCard key={relatedProduct.id} product={relatedProduct} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
