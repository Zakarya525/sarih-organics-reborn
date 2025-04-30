
import React, { useState, useEffect } from "react";
import { ProductReview } from "@/types";
import ProductReviews from "@/components/reviews/ProductReviews";
import { supabase } from "@/integrations/supabase/client";

interface ProductReviewSectionProps {
  productId: number | string;
}

const ProductReviewSection = ({ productId }: ProductReviewSectionProps) => {
  const [reviews, setReviews] = useState<ProductReview[]>([]);

  useEffect(() => {
    fetchReviews();
  }, [productId]);

  const fetchReviews = async () => {
    try {
      const { data, error } = await supabase
        .from('reviews')
        .select('*')
        .eq('product_id', productId.toString())
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
  };

  const handleReviewAdded = () => {
    fetchReviews();
  };

  return (
    <ProductReviews
      productId={productId.toString()}
      reviews={reviews}
      onReviewAdded={handleReviewAdded}
    />
  );
};

export default ProductReviewSection;
