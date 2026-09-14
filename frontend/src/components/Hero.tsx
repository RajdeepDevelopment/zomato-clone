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
          className="w-full h-full object-cover object-center scale-105 animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40 backdrop-blur-[2px]" />
        {/* Soft vignette for more cinematic depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.35)_100%)]" />
      </div>

      {/* Navbar overlay */}
      <Navbar isHeroMode={true} searchQuery={searchQuery} setSearchQuery={setSearchQuery} onSearch={onSearch} />

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center flex flex-col items-center mt-16 md:mt-12 animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white text-xs md:text-sm font-medium mb-6 border border-white/20 shadow-lg">
          <Sparkles className="size-4 text-zomato" />
          Discover the best food & drinks in Bengaluru
        </div>

        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4 drop-shadow-md animate-fade-in-up [animation-delay:100ms]">
          zomato
        </h1>
        <p className="text-lg md:text-2xl font-light text-gray-200 mb-8 max-w-2xl drop-shadow animate-fade-in-up [animation-delay:200ms]">
          Find the best restaurants, cafés, and deliveries at your doorstep
        </p>

        {/* Central Search Widget */}
        <div className="w-full max-w-3xl bg-white rounded-2xl p-2 md:p-3 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.45)] flex flex-col md:flex-row items-center gap-2 text-gray-800 animate-fade-in-up [animation-delay:300ms]">
          {/* Location selector */}
          <button className="flex items-center gap-2 px-3 py-2 w-full md:w-1/3 border-b md:border-b-0 md:border-r border-gray-200 cursor-pointer hover:bg-gray-50/70 rounded-lg transition-colors text-left group">
            <MapPin className="text-zomato size-5 shrink-0" />
            <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">Bengaluru</span>
            <ChevronDown className="size-4 text-gray-400 ml-auto shrink-0" />
          </button>

          {/* Search input */}
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

        {/* Popular quick-search hints */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6 text-xs text-gray-300 animate-fade-in-up [animation-delay:400ms]">
          <span className="font-medium text-gray-400">Popular:</span>
          {["Pizza", "Biryani", "Burgers", "Shakes", "South Indian"].map((tag) => (
            <button
              key={tag}
              onClick={() => {
                setSearchQuery(tag);
                onSearch(tag);
              }}
              className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 hover:bg-white/20 hover:border-white/30 transition-all duration-200"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}