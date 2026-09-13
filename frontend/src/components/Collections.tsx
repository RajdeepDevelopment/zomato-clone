import { Collection } from "../types";
import { ChevronRight } from "lucide-react";

interface CollectionsProps {
  collections: Collection[];
}

export function Collections({ collections }: CollectionsProps) {
  if (!collections || collections.length === 0) return null;

  return (
    <div className="bg-gradient-to-b from-gray-50/50 to-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900">
              Collections
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Explore curated lists of top restaurants, cafes, pubs, and bars in Bengaluru
            </p>
          </div>
          <button className="flex items-center gap-1 text-zomato font-semibold hover:text-zomato-dark transition-colors group">
            <span>All collections in Bengaluru</span>
            <ChevronRight className="size-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((col) => (
            <div
              key={col.id}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              <img
                src={col.image}
                alt={col.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white flex flex-col justify-end">
                <h3 className="font-bold text-lg leading-snug mb-1 group-hover:text-zomato-light transition-colors">
                  {col.title}
                </h3>
                <div className="flex items-center justify-between text-xs text-gray-200">
                  <span>{col.count} Places</span>
                  <div className="size-7 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-zomato transition-colors">
                    <ChevronRight className="size-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
