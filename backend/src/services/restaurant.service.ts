import { restaurantRepo } from "../repositories/restaurant.repository";
import { Category, Collection, Restaurant } from "../types";

/** Business logic for the restaurant catalog — thin over the repo. */
export const restaurantService = {
  getHomeFeed() {
    return {
      categories: restaurantRepo.getCategories(),
      popular: restaurantRepo.getPopular(),
      trending: restaurantRepo.getTrending(),
      collections: restaurantRepo.getCollections(),
    };
  },

  list(params: {
    categoryId?: string;
    query?: string;
    limit?: number;
    sort?: "rating" | "price" | "delivery" | "relevance";
  }): { items: Restaurant[]; total: number; limit: number } {
    let items: Restaurant[];

    if (params.categoryId) {
      items = restaurantRepo.getByCategory(params.categoryId);
    } else if (params.query) {
      items = restaurantRepo.search(params.query);
    } else {
      items = restaurantRepo.getAll();
    }

    switch (params.sort) {
      case "rating":
        items = [...items].sort((a, b) => b.rating - a.rating);
        break;
      case "price":
        items = [...items].sort((a, b) => a.priceForTwo - b.priceForTwo);
        break;
      case "delivery":
        items = [...items].sort((a, b) => a.deliveryTimeMins - b.deliveryTimeMins);
        break;
      default:
        items = [...items].sort((a, b) => b.ratingCount - a.ratingCount);
    }

    const total = items.length;
    const safeLimit = Math.min(Math.max(params.limit ?? 20, 1), 50);
    return { items: items.slice(0, safeLimit), total, limit: safeLimit };
  },

  detail(id: string): Restaurant | undefined {
    return restaurantRepo.getById(id);
  },

  categories(): Category[] {
    return restaurantRepo.getCategories();
  },

  collections(): Collection[] {
    return restaurantRepo.getCollections();
  },
};