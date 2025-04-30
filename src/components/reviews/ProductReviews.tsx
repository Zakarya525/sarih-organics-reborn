
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/components/ui/sonner";
import { supabase } from "@/integrations/supabase/client";
import type { Product } from "@/types";

interface ReviewFormData {
  name: string;
  email: string;
  rating: number;
  comment: string;
}

interface ProductReviewsProps {
  product: Product;
  reviews?: ProductReview[];
}

interface ProductReview {
  id: string;
  name: string;
  rating: number;
  comment: string;
  created_at: string;
}

const ProductReviews = ({ product, reviews = [] }: ProductReviewsProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedRating, setSelectedRating] = useState(5);
  const [submittedReview, setSubmittedReview] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ReviewFormData>();
  
  const onSubmit = async (data: ReviewFormData) => {
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase.from('reviews').insert({
        product_id: product.id,
        name: data.name,
        email: data.email,
        rating: selectedRating,
        comment: data.comment
      });
      
      if (error) throw error;
      
      toast.success("Thank you for your review! It will appear after moderation.");
      reset();
      setSelectedRating(5);
      setSubmittedReview(true);
    } catch (error) {
      console.error("Error submitting review:", error);
      toast.error("Failed to submit review. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const calculateAverageRating = () => {
    if (reviews.length === 0) return 0;
    const sum = reviews.reduce((total, review) => total + review.rating, 0);
    return sum / reviews.length;
  };
  
  const averageRating = calculateAverageRating();
  
  const renderRatingStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className="w-5 h-5"
        fill={i < Math.round(rating) ? "#F59E0B" : "transparent"}
        color={i < Math.round(rating) ? "#F59E0B" : "#D1D5DB"}
      />
    ));
  };

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-display font-bold text-sari-terracotta-800 mb-6">
        Customer Reviews
      </h2>
      
      {reviews.length > 0 ? (
        <div className="mb-8">
          <div className="flex items-center mb-6">
            <div className="flex items-center">
              {renderRatingStars(averageRating)}
            </div>
            <span className="ml-2 text-sari-terracotta-700">
              Based on {reviews.length} {reviews.length === 1 ? "review" : "reviews"}
            </span>
          </div>
          
          {reviews.map((review) => (
            <div key={review.id} className="border-b border-sari-cream-200 last:border-b-0 py-6">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <h3 className="text-lg font-medium text-sari-terracotta-800">{review.name}</h3>
                  <div className="flex items-center mt-1">
                    <div className="flex">
                      {renderRatingStars(review.rating)}
                    </div>
                  </div>
                </div>
                <div className="text-sm text-sari-terracotta-500">
                  {new Date(review.created_at).toLocaleDateString()}
                </div>
              </div>
              <p className="mt-3 text-sari-terracotta-600">{review.comment}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="mb-8">
          <p className="text-sari-terracotta-600">There are no reviews yet. Be the first to review this product!</p>
        </div>
      )}
      
      <Separator className="my-8" />
      
      {!submittedReview ? (
        <div>
          <h3 className="text-xl font-medium text-sari-terracotta-800 mb-4">Write a Review</h3>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-1">
              <Label htmlFor="rating">Rating*</Label>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <button
                    key={rating}
                    type="button"
                    onClick={() => setSelectedRating(rating)}
                    className="focus:outline-none"
                  >
                    <Star
                      className="w-8 h-8 cursor-pointer"
                      fill={rating <= selectedRating ? "#F59E0B" : "transparent"}
                      color={rating <= selectedRating ? "#F59E0B" : "#D1D5DB"}
                    />
                  </button>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label htmlFor="name">Name*</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  {...register("name", { required: "Name is required" })}
                  className={errors.name ? "border-red-500" : ""}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>
              
              <div className="space-y-1">
                <Label htmlFor="email">Email*</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your email"
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Invalid email address",
                    },
                  })}
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>
            </div>
            
            <div className="space-y-1">
              <Label htmlFor="comment">Review*</Label>
              <Textarea
                id="comment"
                placeholder="Write your review here..."
                className={errors.comment ? "border-red-500" : ""}
                {...register("comment", { required: "Review is required" })}
                rows={5}
              />
              {errors.comment && (
                <p className="text-red-500 text-sm">{errors.comment.message}</p>
              )}
            </div>
            
            <Button 
              type="submit"
              className="bg-sari-terracotta-500 hover:bg-sari-terracotta-600"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Review"}
            </Button>
          </form>
        </div>
      ) : (
        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="text-xl font-medium text-sari-terracotta-800 mb-2">Thank You!</h3>
          <p className="text-sari-terracotta-600">
            Your review has been submitted and will appear after moderation.
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductReviews;
