import { Restaurant } from "../types";
import { Star, Clock, Flame } from "lucide-react";
import { Card, CardContent } from "./ui/card";

interface RestaurantGridProps {
  restaurants: Restaurant[];
  title?: string;
  subtitle?: string;
  onSelectRestaurant?: (restaurant: Restaurant) => void;
}

export function RestaurantGrid({
  restaurants,
  title = "Delivery Restaurants in Bengaluru",
  subtitle = "Explore curated lists of top restaurants, cafes, pubs, and bars",
  onSelectRestaurant,
}: RestaurantGridProps) {
  if (!restaurants || restaurants.length === 0) {
    return (
      <div className="container mx-auto px-4 md:px-6 py-12 text-center">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">{title}</h2>
        <p className="text-gray-500 mb-6">{subtitle}</p>
        <div className="p-12 bg-gray-50 rounded-2xl border border-dashed border-gray-200 max-w-md mx-auto">
          <p className="text-gray-600 font-medium">No restaurants found matching your criteria.</p>
          <p className="text-xs text-gray-400 mt-1">Try searching for another dish, cuisine, or clearing filters.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900">
          {title}
        </h2>
        <p className="text-gray-500 text-sm mt-1">{subtitle}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {restaurants.map((restaurant, i) => (
          <Card
            key={restaurant.id}
            onClick={() => onSelectRestaurant && onSelectRestaurant(restaurant)}
            style={{ animationDelay: `${i * 60}ms` }}
            className="group cursor-pointer overflow-hidden border border-gray-100 hover:border-zomato/20 rounded-2xl shadow-soft-sm hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5 bg-white animate-fade-in-up [animation-fill-mode:backwards]"
          >
            {/* Image & Overlays */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
              <img
                src={restaurant.image}
                alt={restaurant.name}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

              {/* Rating badge (top right) */}
              <div className="absolute top-3 right-3 flex items-center gap-1 bg-emerald-700 text-white text-xs font-bold px-2 py-1 rounded-md shadow-md">
                <span>{restaurant.rating}</span>
                <Star className="size-3 fill-current" />
              </div>

              {/* Delivery time badge */}
              <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-black/70 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-lg font-medium group-hover:bg-black/85 transition-colors duration-300">
                <Clock className="size-3.5 text-zomato" />
                <span>{restaurant.deliveryTimeMins} mins</span>
              </div>

              {/* Offers badge */}
              {restaurant.offers && restaurant.offers.length > 0 && (
                <div className="absolute top-3 left-3 flex items-center gap-1 bg-blue-600/95 text-white text-[11px] font-bold px-2.5 py-1 rounded-lg shadow-md uppercase tracking-wider backdrop-blur-sm">
                  <Flame className="size-3" />
                  {restaurant.offers[0]}
                </div>
              )}
            </div>

            {/* Content */}
            <CardContent className="p-4">
              <div className="flex items-start justify-between gap-2 mb-1.5">
                <h3 className="font-bold text-lg text-gray-900 truncate group-hover:text-zomato transition-colors">
                  {restaurant.name}
                </h3>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                <p className="truncate max-w-[180px]">{restaurant.cuisine.join(", ")}</p>
                <span className="font-medium text-gray-700 whitespace-nowrap ml-2">₹{restaurant.priceForTwo} for two</span>
              </div>

              <div className="border-t border-gray-100 pt-3 flex items-center justify-between text-xs text-gray-400">
                <span className="truncate">{restaurant.location}</span>
                {restaurant.tags && restaurant.tags[0] && (
                  <span className="text-zomato font-semibold bg-zomato-light px-2 py-0.5 rounded-lg group-hover:bg-zomato/10 transition-colors">
                    {restaurant.tags[0]}
                  </span>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}