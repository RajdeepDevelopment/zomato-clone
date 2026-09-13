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
  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <h2 className="text-2xl font-bold tracking-tight mb-6 text-gray-900">
        Inspiration for your first order
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-4">
        {categories.map((cat) => {
          const isSelected = selectedCategoryId === cat.id;
          return (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(isSelected ? undefined : cat.id)}
              className={cn(
                "group cursor-pointer flex flex-col items-center p-3 rounded-2xl transition-all duration-300 border bg-white shadow-xs hover:shadow-md hover:-translate-y-1",
                isSelected
                  ? "border-zomato bg-zomato-light ring-2 ring-zomato/20"
                  : "border-gray-100 hover:border-gray-200"
              )}
            >
              <div className="size-20 md:size-24 rounded-full overflow-hidden mb-3 shadow-inner">
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
              <p className="text-[10px] text-gray-400 text-center truncate w-full mt-0.5">
                {cat.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
