
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/sonner";
import { supabase } from "@/integrations/supabase/client";
import { ProductReview } from "@/types";

interface ProductReviewsProps {
  productId: string; // Changed to string to match Supabase's UUID type
  reviews: ProductReview[];
  onReviewAdded: () => void;
}

const ProductReviews = ({ productId, reviews, onReviewAdded }: ProductReviewsProps) => {
  const [rating, setRating] = useState(5);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      name: "",
      email: "",
      comment: ""
    }
  });
  
  const onSubmit = async (data: { name: string; email: string; comment: string }) => {
    setIsSubmitting(true);
    
    try {
      await supabase.from("reviews").insert({
        product_id: productId, // This is now a string to match UUID
        name: data.name,
        email: data.email,
        rating,
        comment: data.comment,
        is_approved: false
      });
      
      toast.success("Thank you! Your review has been submitted for approval.");
      reset();
      setRating(5);
      onReviewAdded();
    } catch (error) {
      console.error("Error submitting review:", error);
      toast.error("Failed to submit review. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-display font-bold text-sari-terracotta-800 mb-6">Customer Reviews</h3>
      
      {/* List of reviews */}
      <div className="space-y-6 mb-10">
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <div key={review.id} className="border-b border-sari-cream-300 pb-6">
              <div className="flex justify-between">
                <div>
                  <p className="font-medium text-sari-terracotta-800">{review.userName}</p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-4 h-4" 
                        fill={i < review.rating ? "#F59E0B" : "transparent"} 
                        color={i < review.rating ? "#F59E0B" : "#D1D5DB"} 
                      />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-sari-terracotta-500">{review.date}</p>
              </div>
              <p className="mt-3 text-sari-terracotta-600">{review.comment}</p>
            </div>
          ))
        ) : (
          <p className="text-sari-terracotta-500 italic">No reviews yet. Be the first to review this product!</p>
        )}
      </div>
      
      {/* Review form */}
      <div className="bg-sari-cream-50 p-6 rounded-lg">
        <h4 className="text-xl font-medium text-sari-terracotta-800 mb-4">Write a Review</h4>
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-sari-terracotta-700 mb-1">
                Name
              </label>
              <Input
                id="name"
                {...register("name", { required: true })}
                className={`${errors.name ? "border-red-500" : ""}`}
              />
              {errors.name && (
                <p className="text-sm text-red-500 mt-1">Name is required</p>
              )}
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-sari-terracotta-700 mb-1">
                Email
              </label>
              <Input
                id="email"
                type="email"
                {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                className={`${errors.email ? "border-red-500" : ""}`}
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">Valid email is required</p>
              )}
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-sari-terracotta-700 mb-1">
              Rating
            </label>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <button 
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className="p-1"
                >
                  <Star 
                    className="w-6 h-6" 
                    fill={star <= rating ? "#F59E0B" : "transparent"} 
                    color={star <= rating ? "#F59E0B" : "#D1D5DB"} 
                  />
                </button>
              ))}
            </div>
          </div>
          
          <div className="mb-4">
            <label htmlFor="comment" className="block text-sm font-medium text-sari-terracotta-700 mb-1">
              Your Review
            </label>
            <Textarea
              id="comment"
              rows={4}
              {...register("comment", { required: true })}
              className={`${errors.comment ? "border-red-500" : ""}`}
            />
            {errors.comment && (
              <p className="text-sm text-red-500 mt-1">Review comment is required</p>
            )}
          </div>
          
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-sari-terracotta-600 hover:bg-sari-terracotta-700"
          >
            {isSubmitting ? "Submitting..." : "Submit Review"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ProductReviews;
