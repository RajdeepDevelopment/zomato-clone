import { useEffect, useState } from "react";
import { api } from "./lib/api";
import { Category, Collection, Restaurant } from "./types";
import { Hero } from "./components/Hero";
import { CategoryBar } from "./components/CategoryBar";
import { Collections } from "./components/Collections";
import { RestaurantGrid } from "./components/RestaurantGrid";
import { Footer } from "./components/Footer";
import { Skeleton } from "./components/ui/skeleton";
import { Button } from "./components/ui/button";
import { Flame, Star, Clock, SlidersHorizontal, RefreshCw } from "lucide-react";

export function App() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [collections, setCollections] = useState<Collection[]>([]);
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | undefined>(undefined);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"rating" | "price" | "delivery" | "relevance">("relevance");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadData = async (catId?: string, query?: string, sort?: "rating" | "price" | "delivery" | "relevance") => {
    try {
      setLoading(true);
      setError(null);

      // If no category and no search, fetch home feed
      if (!catId && !query && sort === "relevance") {
        const feed = await api.getHomeFeed();
        setCategories(feed.categories);
        setCollections(feed.collections);
        setRestaurants(feed.popular);
      } else {
        // Otherwise fetch filtered list
        const [cats, cols, resData] = await Promise.all([
          categories.length === 0 ? api.getCategories() : Promise.resolve(categories),
          collections.length === 0 ? api.getCollections() : Promise.resolve(collections),
          api.getRestaurants({ categoryId: catId, query, sort })
        ]);
        if (categories.length === 0) setCategories(cats);
        if (collections.length === 0) setCollections(cols);
        setRestaurants(resData.items);
      }
    } catch (err: any) {
      console.error("Failed to load app data:", err);
      setError(err?.message || "Failed to connect to backend API");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData(selectedCategoryId, searchQuery, sortBy);
  }, [selectedCategoryId, sortBy]);

  const handleSearch = (q: string) => {
    setSearchQuery(q);
    loadData(selectedCategoryId, q, sortBy);
  };

  const handleSelectCategory = (catId: string | undefined) => {
    setSelectedCategoryId(catId);
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans">
      {/* Hero with Search */}
      <Hero
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearch={handleSearch}
      />

      {/* Main Container */}
      <main className="flex-1">
        {error ? (
          <div className="container mx-auto px-4 py-20 text-center">
            <div className="max-w-md mx-auto p-8 bg-destructive/10 border border-destructive/20 rounded-2xl">
              <h3 className="text-lg font-bold text-destructive mb-2">Connection Error</h3>
              <p className="text-sm text-gray-600 mb-6">{error}</p>
              <Button onClick={() => loadData(selectedCategoryId, searchQuery, sortBy)} className="bg-zomato hover:bg-zomato-dark text-white gap-2">
                <RefreshCw className="size-4" />
                Retry Connection
              </Button>
            </div>
          </div>
        ) : (
          <>
            {/* Category Bar */}
            {categories.length > 0 && (
              <CategoryBar
                categories={categories}
                selectedCategoryId={selectedCategoryId}
                onSelectCategory={handleSelectCategory}
              />
            )}

            {/* Collections Section (Only show if not filtering or searching) */}
            {!selectedCategoryId && !searchQuery && collections.length > 0 && (
              <Collections collections={collections} />
            )}

            {/* Sort & Filter Bar */}
            <div className="container mx-auto px-4 md:px-6 pt-8 pb-4 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="size-5 text-gray-500" />
                <span className="font-bold text-gray-800 text-lg">
                  {selectedCategoryId
                    ? `Restaurants in ${selectedCategoryId.toUpperCase()}`
                    : searchQuery
                    ? `Search results for "${searchQuery}"`
                    : "Trending Restaurants"}
                </span>
                <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full font-semibold">
                  {restaurants.length} places
                </span>
              </div>

              {/* Sort pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
                {[
                  { id: "relevance", label: "Relevance", icon: Flame },
                  { id: "rating", label: "Rating 4.0+", icon: Star },
                  { id: "delivery", label: "Delivery Time", icon: Clock },
                  { id: "price", label: "Price: Low to High", icon: null },
                ].map((tab) => {
                  const Icon = tab.icon;
                  const isActive = sortBy === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setSortBy(tab.id as any)}
                      className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all border ${
                        isActive
                          ? "bg-zomato text-white border-zomato shadow-sm"
                          : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
                      }`}
                    >
                      {Icon && <Icon className="size-3.5" />}
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Restaurant Grid or Skeletons */}
            {loading ? (
              <div className="container mx-auto px-4 md:px-6 py-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="flex flex-col gap-3">
                      <Skeleton className="aspect-[4/3] w-full rounded-2xl" />
                      <Skeleton className="h-6 w-3/4 rounded-lg" />
                      <Skeleton className="h-4 w-1/2 rounded-lg" />
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <RestaurantGrid
                restaurants={restaurants}
                title={
                  selectedCategoryId
                    ? `Best ${selectedCategoryId} Restaurants`
                    : searchQuery
                    ? `Results for "${searchQuery}"`
                    : "Delivery Restaurants in Bengaluru"
                }
                subtitle="All restaurants sorted by quality, delivery time & rating"
              />
            )}
          </>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
