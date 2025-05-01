
import { Product } from "@/types";
import { getProductBySlug as getProductBySlugLocal } from "@/data/products";
import { supabase } from "@/integrations/supabase/client";

// Get product by slug
export const getProductBySlug = (slug?: string): Product | null => {
  if (!slug) return null;
  return getProductBySlugLocal(slug) || null;
};

// Get related products by category
export const getRelatedProducts = async (category: string): Promise<Product[]> => {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('category', category)
      .limit(4);
    
    if (error) {
      console.error("Error fetching related products:", error);
      return [];
    }
    
    // Map Supabase data to Product type
    const products = data.map(item => ({
      id: item.id,
      name: item.name,
      slug: item.slug,
      description: item.description || "",
      price: item.price,
      oldPrice: item.old_price,
      discount: item.discount || 0,
      image: item.image,
      images: item.images,
      category: item.category,
      isNew: item.is_new,
      isBestSeller: item.is_best_seller,
      inStock: item.in_stock !== false, // Handle null/undefined
      stockQuantity: item.stock_quantity,
      weight: item.weight,
      ingredients: item.ingredients,
      tags: item.tags,
    }));
    
    return products as Product[];
  } catch (error) {
    console.error("Error fetching related products:", error);
    return [];
  }
};
