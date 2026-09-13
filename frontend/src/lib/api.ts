import { ApiResponse, HomeFeed, Restaurant, Category, Collection } from "../types";

export const api = {
  async getHomeFeed(): Promise<HomeFeed> {
    const res = await fetch("/api/home/feed");
    if (!res.ok) throw new Error("Failed to fetch home feed");
    const json: ApiResponse<HomeFeed> = await res.json();
    return json.data;
  },

  async getRestaurants(params: {
    categoryId?: string;
    query?: string;
    sort?: "rating" | "price" | "delivery" | "relevance";
  } = {}): Promise<{ items: Restaurant[]; total: number; limit: number }> {
    const queryParams = new URLSearchParams();
    if (params.categoryId) queryParams.set("category", params.categoryId);
    if (params.query) queryParams.set("q", params.query);
    if (params.sort) queryParams.set("sort", params.sort);

    const res = await fetch(`/api/restaurants?${queryParams.toString()}`);
    if (!res.ok) throw new Error("Failed to fetch restaurants");
    const json: ApiResponse<{ items: Restaurant[]; total: number; limit: number }> = await res.json();
    return json.data;
  },

  async getRestaurantDetail(id: string): Promise<Restaurant> {
    const res = await fetch(`/api/restaurants/${id}`);
    if (!res.ok) throw new Error("Failed to fetch restaurant details");
    const json: ApiResponse<Restaurant> = await res.json();
    return json.data;
  },

  async getCategories(): Promise<Category[]> {
    const res = await fetch("/api/categories");
    if (!res.ok) throw new Error("Failed to fetch categories");
    const json: ApiResponse<Category[]> = await res.json();
    return json.data;
  },

  async getCollections(): Promise<Collection[]> {
    const res = await fetch("/api/collections");
    if (!res.ok) throw new Error("Failed to fetch collections");
    const json: ApiResponse<Collection[]> = await res.json();
    return json.data;
  }
};
