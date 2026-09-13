import { Search, MapPin, ChevronDown, Sparkles } from "lucide-react";
import { Navbar } from "./Navbar";

interface HeroProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  onSearch: (q: string) => void;
}

export function Hero({ searchQuery, setSearchQuery, onSearch }: HeroProps) {
  return (
    <div className="relative min-h-[500px] md:min-h-[540px] flex flex-col items-center justify-center text-white bg-gray-900 overflow-hidden">
      {/* Background Image with Cinematic Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&q=80"
          alt="Zomato Hero Background"
          className="w-full h-full object-cover object-center scale-105 animate-pulse duration-[10000ms]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40 backdrop-blur-[2px]" />
      </div>

      {/* Navbar overlay */}
      <Navbar isHeroMode={true} searchQuery={searchQuery} setSearchQuery={setSearchQuery} onSearch={onSearch} />

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center flex flex-col items-center mt-16 md:mt-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white text-xs md:text-sm font-medium mb-6 border border-white/20 shadow-lg">
          <Sparkles className="size-4 text-zomato animate-spin" />
          Discover the best food & drinks in Bengaluru
        </div>

        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4 drop-shadow-md">
          zomato
        </h1>
        <p className="text-lg md:text-2xl font-light text-gray-200 mb-8 max-w-2xl drop-shadow">
          Find the best restaurants, cafés, and deliveries at your doorstep
        </p>

        {/* Central Search Widget */}
        <div className="w-full max-w-3xl bg-white rounded-2xl p-2 md:p-3 shadow-2xl flex flex-col md:flex-row items-center gap-2 text-gray-800">
          <div className="flex items-center gap-2 px-3 py-2 w-full md:w-1/3 border-b md:border-b-0 md:border-r border-gray-200">
            <MapPin className="text-zomato size-5 shrink-0" />
            <span className="text-sm font-medium text-gray-700 truncate">Bengaluru</span>
            <ChevronDown className="size-4 text-gray-400 ml-auto" />
          </div>

          <div className="flex items-center gap-2 px-3 py-2 w-full md:w-2/3">
            <Search className="text-gray-400 size-5 shrink-0" />
            <input
              type="text"
              placeholder="Search for restaurant, cuisine or dish..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                onSearch(e.target.value);
              }}
              className="w-full text-sm md:text-base outline-none bg-transparent text-gray-800 placeholder-gray-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
