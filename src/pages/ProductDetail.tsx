
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Product } from "@/types";
import Layout from "@/components/layout/Layout";
import OptimizedImage from "@/components/ui/OptimizedImage";
import ImageSlider from "@/components/products/ImageSlider";
import ProductInfo from "@/components/products/ProductInfo";
import ProductReviewSection from "@/components/products/ProductReviewSection";
import RelatedProducts from "@/components/products/RelatedProducts";
import { getProductBySlug, getRelatedProducts } from "@/services/productService";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    if (slug) {
      const foundProduct = getProductBySlug(slug);
      setProduct(foundProduct);
    }
  }, [slug]);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      if (product) {
        // Fetch related products by category
        const related = await getRelatedProducts(product.category);
        // Filter out the current product
        const filtered = related.filter(p => p.id.toString() !== product.id.toString());
        setRelatedProducts(filtered);
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

  const handleImageSelect = (index: number) => {
    setSelectedImageIndex(index);
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
            <ProductInfo product={product} />
          </div>

          {/* Product Reviews */}
          {product.id && (
            <ProductReviewSection productId={product.id} />
          )}
          
          {/* Related Products */}
          <RelatedProducts products={relatedProducts} />
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
