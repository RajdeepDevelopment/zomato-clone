import { Category } from "../types";
import { cn } from "../lib/utils";

interface CategoryBarProps {
  categories: Category[];
  selectedCategoryId?: string;
  onSelectCategory: (categoryId: string | undefined) => void;
}

export function CategoryBar({
  categories,
  selectedCategoryId,
  onSelectCategory,
}: CategoryBarProps) {
  if (!categories || categories.length === 0) return null;

  return (
    <div className="container mx-auto px-4 md:px-6 py-10">
      <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900 mb-2">
        Inspiration for your first order
      </h2>
      <p className="text-gray-500 text-sm mb-6">
        Take a culinary tour through Bengaluru's most-loved flavours
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-4">
        {categories.map((cat, i) => {
          const isSelected = selectedCategoryId === cat.id;
          return (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(isSelected ? undefined : cat.id)}
              style={{ animationDelay: `${i * 40}ms` }}
              className={cn(
                "group cursor-pointer flex flex-col items-center p-3 rounded-2xl transition-all duration-300 border bg-white shadow-soft-sm hover:shadow-soft-md hover:-translate-y-1.5 animate-fade-in [animation-fill-mode:backwards]",
                isSelected
                  ? "border-zomato/50 bg-zomato-light ring-2 ring-zomato/20 shadow-zomato-glow"
                  : "border-gray-100 hover:border-zomato/20"
              )}
            >
              <div className="size-20 md:size-24 rounded-full overflow-hidden mb-3 ring-1 ring-black/5 group-hover:ring-zomato/30 transition-all">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3
                className={cn(
                  "text-sm font-semibold text-center transition-colors truncate w-full",
                  isSelected ? "text-zomato font-bold" : "text-gray-700 group-hover:text-gray-900"
                )}
              >
                {cat.name}
              </h3>
              <p className="text-[10px] text-gray-400 text-center truncate w-full mt-0.5 group-hover:text-gray-500 transition-colors">
                {cat.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}