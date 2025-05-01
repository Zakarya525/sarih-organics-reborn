// Product related types
export interface Product {
  id: number | string;
  name: string;
  slug: string;
  description: string;
  price: number;
  oldPrice?: number;
  discount: number;
  image: string;
  images?: string[];
  category: string;
  isNew?: boolean;
  isBestSeller?: boolean;
  inStock: boolean;
  stockQuantity?: number;
  weight?: string;
  dimensions?: string;
  ingredients?: string;
  nutrition?: {
    calories?: number;
    protein?: number;
    carbs?: number;
    fat?: number;
  };
  tags?: string[];
  reviews?: ProductReview[];
  relatedProducts?: (number | string)[];
  rating?: number;
  reviewCount?: number;
  weightVariations?: string[];
}

export interface ProductReview {
  id: number | string;
  userId: number | string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

// Cart related types
export interface CartItem extends Product {
  quantity: number;
}

// Order related types
export enum OrderStatus {
  Pending = "pending",
  Processing = "processing",
  Shipped = "shipped",
  Delivered = "delivered",
  Cancelled = "cancelled",
}

export interface OrderItem {
  id: number | string;
  productId: number | string;
  productName: string;
  quantity: number;
  price: number;
  total: number;
}

export interface Order {
  id: number | string;
  userId: number | string;
  orderNumber: string;
  date: string;
  status: OrderStatus;
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  shippingAddress: Address;
  billingAddress?: Address;
  paymentMethod: string;
  trackingNumber?: string;
}

// User related types
export interface User {
  id: number | string;
  email: string;
  firstName: string;
  lastName: string;
  role: "customer" | "admin";
  phone?: string;
  addresses?: Address[];
  orders?: Order[];
}

export interface Address {
  id: number | string;
  name: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  isDefault?: boolean;
}
