import { Collection } from "../types";
import { ChevronRight, ArrowRight } from "lucide-react";

interface CollectionsProps {
  collections: Collection[];
}

export function Collections({ collections }: CollectionsProps) {
  if (!collections || collections.length === 0) return null;

  return (
    <div className="bg-gradient-to-b from-gray-50 via-gray-50/60 to-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zomato/10 text-zomato text-xs font-bold uppercase tracking-wider">
                Curated for you
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900">
              Collections
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Explore curated lists of top restaurants, cafes, pubs, and bars in Bengaluru
            </p>
          </div>
          <button className="group flex items-center gap-1.5 text-zomato font-semibold hover:text-zomato-dark transition-colors px-3 py-2 rounded-xl hover:bg-zomato/5">
            <span>All collections in Bengaluru</span>
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((col, i) => (
            <div
              key={col.id}
              style={{ animationDelay: `${i * 80}ms` }}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-soft-md hover:shadow-soft-xl transition-all duration-500 cursor-pointer animate-fade-in-up [animation-fill-mode:backwards]"
            >
              <img
                src={col.image}
                alt={col.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent group-hover:from-black/90 transition-colors duration-500" />

              {/* Hover accent border */}
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl group-hover:ring-zomato/40 transition-all duration-500" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white flex flex-col justify-end">
                <h3 className="font-bold text-lg leading-snug mb-1 group-hover:text-zomato-light transition-colors duration-300">
                  {col.title}
                </h3>
                <div className="flex items-center justify-between text-xs text-gray-200">
                  <span>{col.count} Places</span>
                  <div className="size-7 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-zomato transition-colors duration-300 group-hover:shadow-lg group-hover:shadow-zomato/30">
                    <ChevronRight className="size-4 text-white group-hover:translate-x-0.5 transition-transform duration-300" />
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