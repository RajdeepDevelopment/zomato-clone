import { Request, Response } from "express";
import { restaurantService } from "../services/restaurant.service";
import { asyncHandler, notFound } from "../utils/http";

/** Query-string validation with sane defaults + bounds. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function parseListParams(query: Record<string, any>) {
  const categoryId = typeof query.category === "string" ? query.category.trim() : undefined;
  const q = typeof query.q === "string" ? query.q.trim() : undefined;
  const limitRaw = typeof query.limit === "string" ? Number(query.limit) : NaN;
  const sortRaw = typeof query.sort === "string" ? query.sort : undefined;

  const validSorts = ["rating", "price", "delivery", "relevance"] as const;
  const sort = validSorts.includes(sortRaw as (typeof validSorts)[number])
    ? (sortRaw as (typeof validSorts)[number])
    : "relevance";

  return {
    categoryId: categoryId || undefined,
    query: q || undefined,
    limit: Number.isFinite(limitRaw) ? limitRaw : undefined,
    sort,
  };
}

export const restaurantController = {
  /** GET /api/home/feed — everything the home page needs in one call. */
  homeFeed: asyncHandler(async (_req: Request, res: Response) => {
    res.json({ data: restaurantService.getHomeFeed() });
  }),

  /** GET /api/restaurants — list w/ category, search, sort, limit. */
  list: asyncHandler(async (req: Request, res: Response) => {
    const params = parseListParams(req.query);
    if (params.categoryId) {
      const exists = restaurantService
        .categories()
        .some((c) => c.id === params.categoryId);
      if (!exists) {
        notFound(`Category "${params.categoryId}"`);
      }
    }
    res.json({ data: restaurantService.list(params) });
  }),

  /** GET /api/restaurants/:id */
  detail: asyncHandler(async (req: Request, res: Response) => {
    const id = typeof req.params.id === "string" ? req.params.id : String(req.params.id ?? "");
    const restaurant = restaurantService.detail(id);
    if (!restaurant) notFound(`Restaurant "${id}"`);
    res.json({ data: restaurant });
  }),

  /** GET /api/categories */
  categories: asyncHandler(async (_req: Request, res: Response) => {
    res.json({ data: restaurantService.categories() });
  }),

  /** GET /api/collections */
  collections: asyncHandler(async (_req: Request, res: Response) => {
    res.json({ data: restaurantService.collections() });
  }),
};