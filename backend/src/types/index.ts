/** Core domain types for the Zomato clone API. */

export interface Restaurant {
  id: string;
  name: string;
  cuisine: string[];
  priceForTwo: number;
  rating: number;
  ratingCount: number;
  deliveryTimeMins: number;
  image: string;
  location: string;
  categoryId: string;
  offers: string[];
  tags?: string[];
}

export interface Category {
  id: string;
  name: string;
  image: string;
  description: string;
}

export interface HomeFeed {
  categories: Category[];
  popular: Restaurant[];
  trending: Restaurant[];
  collections: Collection[];
}

export interface Collection {
  id: string;
  title: string;
  description: string;
  image: string;
  count: number;
}

export interface ApiErrorShape {
  error: {
    code: string;
    message: string;
    details?: unknown;
  };
}