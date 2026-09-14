import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { api } from "./lib/api";
import { Category, Collection, Restaurant } from "./types";
import { Hero } from "./components/Hero";
import { CategoryBar } from "./components/CategoryBar";
import { Collections } from "./components/Collections";
import { RestaurantGrid } from "./components/RestaurantGrid";
import { Footer } from "./components/Footer";
import { Skeleton } from "./components/ui/skeleton";
import { Button } from "./components/ui/button";
import { Flame, Star, Clock } from "lucide-react";
import RestaurantDetailPage from "./pages/RestaurantDetailPage";

function HomePage() {
  const navigate = useNavigate();
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

      if (!catId && !query && sort === "relevance") {
        const feed = await api.getHomeFeed();
        setCategories(feed.categories);
        setCollections(feed.collections);
        setRestaurants(feed.popular);
      } else {
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

  const handleSelectCategory = (categoryId: string | undefined) => {
    setSelectedCategoryId(categoryId);
    setSearchQuery("");
  };

  const handleSelectRestaurant = (restaurant: Restaurant) => {
    navigate(`/restaurant/${restaurant.id}`);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <Hero
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearch={handleSearch}
      />

      <main>
        {error ? (
          <div className="container mx-auto px-4 md:px-6 py-16 text-center">
            <div className="max-w-md mx-auto p-10 bg-gray-50 rounded-2xl border border-gray-100 shadow-soft-sm">
              <p className="text-red-500 text-lg font-medium mb-2">Something went wrong</p>
              <p className="text-gray-500 text-sm mb-6">{error}</p>
              <Button onClick={() => loadData(selectedCategoryId, searchQuery, sortBy)} variant="outline" size="sm">
                Retry
              </Button>
            </div>
          </div>
        ) : (
          <>
            {/* Category bar */}
            <CategoryBar
              categories={categories}
              selectedCategoryId={selectedCategoryId}
              onSelectCategory={handleSelectCategory}
            />

            {/* Collections */}
            {!selectedCategoryId && !searchQuery && collections.length > 0 && (
              <Collections collections={collections} />
            )}

            {/* Filters / Sort bar */}
            <div className="container mx-auto px-4 md:px-6 pt-6 border-b border-gray-100 pb-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <p className="text-sm text-gray-500 font-medium">
                  <span className="font-bold text-gray-900 tabular-nums">{restaurants.length}</span>{" "}
                  restaurant{restaurants.length !== 1 ? "s" : ""} found
                </p>

                {/* Sort pills */}
                <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 no-scrollbar">
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
                            ? "bg-zomato text-white border-zomato shadow-md shadow-zomato/25"
                            : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50 hover:border-gray-300 active:scale-95"
                        }`}
                      >
                        {Icon && <Icon className="size-3.5" />}
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </div>
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
                onSelectRestaurant={handleSelectRestaurant}
              />
            )}
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}

export function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/restaurant/:id" element={<RestaurantDetailPage />} />
    </Routes>
  );
}

export default App;
