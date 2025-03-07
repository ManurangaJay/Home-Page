export interface Category {
  id: number;
  name: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  discountedPrice?: number;
  image: string;
  description: string;
  rating: number;
  reviewsCount?: number;
  isDeal?: boolean;
  categoryId: number | null;
  category: Category; // Ensure category is included
}
