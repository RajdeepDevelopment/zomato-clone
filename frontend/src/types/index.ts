export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  isVeg: boolean;
  bestseller?: boolean;
}

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
  photos?: string[];
  description?: string;
  timings?: { open: string; close: string };
  highlights?: string[];
  menu?: MenuItem[];
  contact?: { phone: string; address: string; website?: string };
}

export interface Category {
  id: string;
  name: string;
  image: string;
  description: string;
}

export interface Collection {
  id: string;
  title: string;
  description: string;
  image: string;
  count: number;
}

export interface HomeFeed {
  categories: Category[];
  popular: Restaurant[];
  trending: Restaurant[];
  collections: Collection[];
}

export interface ApiResponse<T> {
  data: T;
}
