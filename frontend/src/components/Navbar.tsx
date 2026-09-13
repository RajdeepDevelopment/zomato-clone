import { useState, type ChangeEvent } from "react";
import { Search, MapPin, Menu, ChevronDown, Bell, Utensils, X } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface NavbarProps {
  isHeroMode?: boolean;
  onSearch?: (query: string) => void;
  onSelectCategory?: (categoryId: string | undefined) => void;
  searchQuery?: string;
  setSearchQuery?: (query: string) => void;
}

export function Navbar({
  isHeroMode = false,
  onSearch,
  onSelectCategory,
  searchQuery = "",
  setSearchQuery,
}: NavbarProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const userLocation = "Bengaluru";

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (setSearchQuery) setSearchQuery(e.target.value);
    if (onSearch) onSearch(e.target.value);
  };

  const clearSearch = () => {
    if (setSearchQuery) setSearchQuery("");
    if (onSearch) onSearch("");
  };

  return (
    <header
      className={`w-full transition-all duration-300 ${
        isHeroMode
          ? "absolute top-0 left-0 right-0 z-50 bg-transparent text-white"
          : "sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm text-gray-800"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between gap-4">
        {/* Logo */}
        <div 
          onClick={() => {
            if (onSelectCategory) onSelectCategory(undefined);
            clearSearch();
          }} 
          className="flex items-center gap-2 cursor-pointer select-none"
        >
          <div className="size-10 bg-zomato rounded-xl flex items-center justify-center text-white shadow-lg shadow-zomato/20 animate-pulse">
            <Utensils className="size-5" />
          </div>
          <span className="text-2xl md:text-3xl font-extrabold tracking-tight">
            zomato<span className="text-zomato">.</span>
          </span>
        </div>

        {/* Search & Location Bar (Only show if not in pure hero mode, or responsive) */}
        {!isHeroMode && (
          <div className="hidden lg:flex items-center flex-1 max-w-2xl bg-white border border-gray-200 rounded-lg shadow-sm divide-x divide-gray-200 h-12 ml-4">
            <div className="flex items-center gap-2 px-3 flex-shrink-0 w-44 cursor-pointer hover:bg-gray-50/50 rounded-l-lg h-full transition-colors">
              <MapPin className="text-zomato size-5 shrink-0" />
              <span className="text-sm font-medium truncate text-gray-700">{userLocation}</span>
              <ChevronDown className="size-4 text-gray-400 ml-auto shrink-0" />
            </div>
            
            <div className="flex items-center gap-2 px-3 flex-1 h-full relative">
              <Search className="text-gray-400 size-5 shrink-0" />
              <input
                type="text"
                placeholder="Search for restaurant, cuisine or a dish..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full text-sm outline-none bg-transparent text-gray-800 placeholder-gray-400"
              />
              {searchQuery && (
                <button 
                  onClick={clearSearch}
                  className="p-1 hover:bg-gray-100 rounded-full text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="size-4" />
                </button>
              )}
            </div>
          </div>
        )}

        {/* Actions / Auth */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            className={`text-sm font-medium hover:scale-105 transition-all duration-200 ${
              isHeroMode ? "text-white/90 hover:text-white" : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Investor Relations
          </button>
          <button 
            className={`text-sm font-medium hover:scale-105 transition-all duration-200 ${
              isHeroMode ? "text-white/90 hover:text-white" : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Add restaurant
          </button>

          {isLoggedIn ? (
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="relative rounded-full text-current hover:bg-black/5 dark:hover:bg-white/5">
                <Bell className="size-5" />
                <span className="absolute top-1.5 right-1.5 size-2 bg-zomato rounded-full"></span>
              </Button>
              <div className="flex items-center gap-2 pl-2 border-l border-gray-200 cursor-pointer group">
                <Avatar className="size-9 border-2 border-zomato/20 group-hover:border-zomato transition-colors">
                  <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80" />
                  <AvatarFallback>RD</AvatarFallback>
                </Avatar>
                <div className="text-left hidden lg:block">
                  <p className={`text-xs font-semibold leading-none ${isHeroMode ? "text-white" : "text-gray-800"}`}>Rajdeep Sadhu</p>
                  <p className="text-[10px] text-gray-400">Pro Member</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                onClick={() => setIsLoggedIn(true)}
                className={`text-sm font-medium transition-all ${
                  isHeroMode 
                    ? "text-white hover:bg-white/10" 
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100/50"
                }`}
              >
                Log in
              </Button>
              <Button
                onClick={() => setIsLoggedIn(true)}
                className="bg-zomato hover:bg-zomato-dark text-white rounded-lg shadow-md shadow-zomato/10 hover:shadow-zomato/25 hover:scale-105 transition-all duration-200 font-semibold"
              >
                Sign up
              </Button>
            </div>
          )}
        </div>

        {/* Mobile menu trigger */}
        <div className="md:hidden flex items-center gap-3">
          {isLoggedIn && (
            <Avatar className="size-8 border-2 border-zomato/20">
              <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80" />
              <AvatarFallback>RD</AvatarFallback>
            </Avatar>
          )}

          <Sheet>
<SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className={`rounded-xl ${isHeroMode ? "text-white hover:bg-white/10" : "text-gray-700 hover:bg-gray-100"}`}
                />
              }
            >
              <Menu className="size-6" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px] p-6 bg-white flex flex-col justify-between">
              <div className="grid gap-6 py-6">
                <div className="flex items-center gap-2 border-b pb-4">
                  <div className="size-8 bg-zomato rounded-lg flex items-center justify-center text-white">
                    <Utensils className="size-4" />
                  </div>
                  <span className="text-xl font-bold tracking-tight">zomato</span>
                </div>
                
                {isLoggedIn ? (
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <Avatar className="size-12 border-2 border-zomato/20">
                      <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80" />
                      <AvatarFallback>RD</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-gray-800">Rajdeep Sadhu</p>
                      <p className="text-xs text-gray-400">Pro Member</p>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" onClick={() => setIsLoggedIn(true)} className="w-full">
                      Log In
                    </Button>
                    <Button onClick={() => setIsLoggedIn(true)} className="w-full bg-zomato hover:bg-zomato-dark text-white">
                      Sign Up
                    </Button>
                  </div>
                )}

                <div className="grid gap-2 mt-4">
                  <button className="flex items-center justify-between p-3 text-left font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                    Investor Relations
                  </button>
                  <button className="flex items-center justify-between p-3 text-left font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                    Add restaurant
                  </button>
                  <button className="flex items-center justify-between p-3 text-left font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                    Apps for Foodies
                  </button>
                </div>
              </div>

              {isLoggedIn && (
                <Button 
                  variant="outline" 
                  onClick={() => setIsLoggedIn(false)}
                  className="w-full mt-auto text-destructive border-destructive/20 hover:bg-destructive/5 hover:text-destructive"
                >
                  Log Out
                </Button>
              )}
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
