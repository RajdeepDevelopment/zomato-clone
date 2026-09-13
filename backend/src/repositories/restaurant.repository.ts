import { categories, collections, restaurants } from "../data/seed";
import { Category, Collection, Restaurant } from "../types";

/**
 * In-memory "repository" over static seed data.
 * Swapping in a real DB later only touches this file.
 */
export const restaurantRepo = {
  getCategories(): Category[] {
    return categories;
  },

  getAll(): Restaurant[] {
    return restaurants;
  },

  getById(id: string): Restaurant | undefined {
    return restaurants.find((r) => r.id === id);
  },

  getByCategory(categoryId: string): Restaurant[] {
    return restaurants.filter((r) => r.categoryId === categoryId);
  },

  search(query: string): Restaurant[] {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return restaurants.filter((r) => {
      const haystack = [
        r.name,
        r.location,
        r.cuisine.join(" "),
        ...(r.tags ?? []),
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  },

  getPopular(): Restaurant[] {
    return [...restaurants].sort((a, b) => b.ratingCount - a.ratingCount).slice(0, 8);
  },

  getTrending(): Restaurant[] {
    return [...restaurants].sort((a, b) => b.rating - a.rating).slice(0, 8);
  },

  getCollections(): Collection[] {
    return collections;
  },
};