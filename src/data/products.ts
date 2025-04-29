
import { Product } from "@/types";

export const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Original Granola",
    slug: "original-granola",
    description: "Our signature granola made with organic oats, honey, nuts, and dried fruits. Perfect for breakfast or as a snack.",
    price: 12.99,
    discount: 0,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3",
    category: "Granola",
    isBestSeller: true,
    inStock: true,
    stockQuantity: 50,
    weight: "500g",
    ingredients: "Organic rolled oats, organic honey, organic coconut oil, organic almonds, organic cashews, organic dried fruits (raisins, cranberries), organic cinnamon, sea salt",
    tags: ["breakfast", "organic", "healthy"]
  },
  {
    id: 2,
    name: "Wild Forest Honey",
    slug: "wild-forest-honey",
    description: "100% pure wild forest honey collected from the remote areas of Bali. Rich in flavor and natural enzymes.",
    price: 15.99,
    oldPrice: 18.99,
    discount: 15,
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3",
    category: "Honey",
    isNew: true,
    inStock: true,
    stockQuantity: 30,
    weight: "350g",
    ingredients: "100% pure wild forest honey",
    tags: ["natural", "sweetener", "immune-boosting"]
  },
  {
    id: 3,
    name: "Coconut Cookies",
    slug: "coconut-cookies",
    description: "Crunchy cookies made with organic coconut flakes and sweetened with our forest honey. Gluten-free.",
    price: 9.99,
    discount: 0,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3",
    category: "Cookies",
    inStock: true,
    stockQuantity: 45,
    weight: "250g",
    ingredients: "Organic coconut flour, organic coconut flakes, organic eggs, organic honey, vanilla extract, sea salt",
    tags: ["snack", "gluten-free", "dessert"]
  },
  {
    id: 4,
    name: "Mango Passion Jam",
    slug: "mango-passion-jam",
    description: "A tropical blend of organic mangoes and passion fruits, lightly sweetened with our wild honey.",
    price: 11.99,
    discount: 0,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3",
    category: "Jams & Spreads",
    inStock: true,
    stockQuantity: 25,
    weight: "300g",
    ingredients: "Organic mangoes, organic passion fruits, organic wild honey, organic lemon juice",
    tags: ["spread", "breakfast", "natural"]
  }
];

export const allProducts: Product[] = [
  ...featuredProducts,
  {
    id: 5,
    name: "Chocolate Granola",
    slug: "chocolate-granola",
    description: "Our popular granola with added organic cacao for a rich chocolate flavor.",
    price: 14.99,
    discount: 0,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3",
    category: "Granola",
    inStock: true,
    stockQuantity: 40,
    weight: "500g",
    ingredients: "Organic rolled oats, organic honey, organic coconut oil, organic cacao powder, organic almonds, organic cashews, organic dark chocolate chunks, sea salt",
    tags: ["breakfast", "organic", "chocolate"]
  },
  {
    id: 6,
    name: "Cinnamon Granola",
    slug: "cinnamon-granola",
    description: "Warm cinnamon flavor blended with our original granola recipe.",
    price: 13.99,
    discount: 0,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3",
    category: "Granola",
    inStock: true,
    stockQuantity: 35,
    weight: "500g",
    ingredients: "Organic rolled oats, organic honey, organic coconut oil, organic cinnamon, organic nutmeg, organic almonds, organic pecans, organic dried apples, sea salt",
    tags: ["breakfast", "organic", "cinnamon"]
  },
  {
    id: 7,
    name: "Clover Honey",
    slug: "clover-honey",
    description: "Light and sweet honey collected from clover fields. Perfect for teas and baking.",
    price: 14.99,
    discount: 0,
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3",
    category: "Honey",
    inStock: true,
    stockQuantity: 28,
    weight: "350g",
    ingredients: "100% pure clover honey",
    tags: ["natural", "sweetener", "baking"]
  },
  {
    id: 8,
    name: "Almond Cookies",
    slug: "almond-cookies",
    description: "Crunchy almond cookies made with organic ingredients and sweetened with our honey.",
    price: 10.99,
    discount: 0,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3",
    category: "Cookies",
    inStock: true,
    stockQuantity: 40,
    weight: "250g",
    ingredients: "Organic almond flour, organic butter, organic honey, organic almonds, organic vanilla extract, sea salt",
    tags: ["snack", "gluten-free", "dessert"]
  }
];

// Function to get product by id
export function getProductById(id: number): Product | undefined {
  return allProducts.find(product => product.id === id);
}

// Function to get product by slug
export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find(product => product.slug === slug);
}

// Function to get products by category
export function getProductsByCategory(category: string): Product[] {
  return allProducts.filter(product => product.category === category);
}

// Function to get related products
export function getRelatedProducts(productId: number, limit: number = 4): Product[] {
  const product = getProductById(productId);
  if (!product) return [];
  
  return allProducts
    .filter(p => p.id !== productId && p.category === product.category)
    .slice(0, limit);
}
