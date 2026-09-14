import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../lib/api";
import { Restaurant, MenuItem } from "../types";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import { Skeleton } from "../components/ui/skeleton";
import {
  ArrowLeft,
  Star,
  Clock,
  MapPin,
  Phone,
  Globe,
  ChevronLeft,
  ChevronRight,
  Leaf,
  Flame,
  ShoppingCart,
  Plus,
  Minus,
  Info,
  Heart,
  Share2,
} from "lucide-react";

/* ──────────────────── helpers ──────────────────── */

function rupees(n: number) {
  return `₹${n}`;
}

/* ──────────────────── gallery ──────────────────── */

function PhotoGallery({ photos }: { photos: string[] }) {
  const [idx, setIdx] = useState(0);
  if (!photos || photos.length === 0) return null;

  const prev = () => setIdx((i) => (i === 0 ? photos.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === photos.length - 1 ? 0 : i + 1));

  return (
    <div className="relative w-full aspect-[16/7] rounded-2xl overflow-hidden bg-gray-100 group">
      <img
        src={photos[idx]}
        alt={`Photo ${idx + 1}`}
        className="w-full h-full object-cover transition-opacity duration-300"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      {/* Nav arrows */}
      {photos.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 size-9 rounded-full bg-white/90 backdrop-blur shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 size-9 rounded-full bg-white/90 backdrop-blur shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronRight className="size-5" />
          </button>
        </>
      )}

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {photos.map((_, i) => (
          <span
            key={i}
            className={`size-2 rounded-full transition-all ${
              i === idx ? "bg-white scale-110" : "bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Photo count */}
      <span className="absolute top-3 right-3 text-xs font-medium text-white bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full">
        {idx + 1} / {photos.length}
      </span>
    </div>
  );
}

/* ──────────────────── menu item card ──────────────────── */

function MenuItemCard({
  item,
  qty,
  onAdd,
  onRemove,
}: {
  item: MenuItem;
  qty: number;
  onAdd: () => void;
  onRemove: () => void;
}) {
  return (
    <div className="flex gap-4 py-4 border-b border-gray-100 last:border-0">
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5 mb-1">
          {item.isVeg ? (
            <span className="size-4 border-2 border-green-600 rounded-sm flex items-center justify-center shrink-0">
              <span className="size-1.5 bg-green-600 rounded-full" />
            </span>
          ) : (
            <span className="size-4 border-2 border-red-500 rounded-sm flex items-center justify-center shrink-0">
              <span className="size-1.5 bg-red-500 rounded-full" />
            </span>
          )}
          <h4 className="font-semibold text-gray-900 truncate">{item.name}</h4>
          {item.bestseller && (
            <Badge variant="secondary" className="text-[10px] px-1.5 py-0 bg-amber-50 text-amber-700 border border-amber-200 ml-1">
              <Flame className="size-2.5 mr-0.5" />
              Bestseller
            </Badge>
          )}
        </div>
        <p className="text-sm font-bold text-gray-800">{rupees(item.price)}</p>
        <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">{item.description}</p>
      </div>
      <div className="flex flex-col items-center gap-1.5 shrink-0">
        <div className="w-24 h-24 rounded-xl overflow-hidden bg-gray-100">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        {qty === 0 ? (
          <Button
            size="sm"
            onClick={onAdd}
            className="w-24 h-8 text-xs font-bold rounded-lg bg-white text-green-700 border border-green-600 hover:bg-green-50"
          >
            ADD
          </Button>
        ) : (
          <div className="flex items-center gap-0 w-24 h-8 rounded-lg bg-green-600 text-white text-xs font-bold overflow-hidden">
            <button onClick={onRemove} className="flex-1 h-full flex items-center justify-center hover:bg-green-700 transition-colors">
              <Minus className="size-3" />
            </button>
            <span className="w-8 text-center">{qty}</span>
            <button onClick={onAdd} className="flex-1 h-full flex items-center justify-center hover:bg-green-700 transition-colors">
              <Plus className="size-3" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/* ──────────────────── menu category tabs ──────────────────── */

function MenuTabs({
  categories,
  active,
  onSelect,
}: {
  categories: string[];
  active: string;
  onSelect: (c: string) => void;
}) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
      {categories.map((c) => (
        <button
          key={c}
          onClick={() => onSelect(c)}
          className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all border ${
            active === c
              ? "bg-gray-900 text-white border-gray-900"
              : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
          }`}
        >
          {c}
        </button>
      ))}
    </div>
  );
}

/* ──────────────────── skeleton state ──────────────────── */

function DetailSkeleton() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-8 max-w-6xl">
      <Skeleton className="h-6 w-24 mb-6" />
      <Skeleton className="aspect-[16/7] w-full rounded-2xl mb-8" />
      <div className="space-y-4">
        <Skeleton className="h-8 w-2/3" />
        <Skeleton className="h-4 w-1/3" />
        <Skeleton className="h-4 w-1/2" />
      </div>
      <Separator className="my-8" />
      <Skeleton className="h-6 w-32 mb-4" />
      {[...Array(4)].map((_, i) => (
        <div key={i} className="flex gap-4 py-4 border-b border-gray-100">
          <div className="flex-1 space-y-2">
            <Skeleton className="h-5 w-1/3" />
            <Skeleton className="h-4 w-1/4" />
            <Skeleton className="h-3 w-2/3" />
          </div>
          <Skeleton className="w-24 h-24 rounded-xl" />
        </div>
      ))}
    </div>
  );
}

/* ──────────────────── main page ──────────────────── */

export default function RestaurantDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeMenuCategory, setActiveMenuCategory] = useState("All");
  const [cart, setCart] = useState<Record<string, number>>({});

  useEffect(() => {
    if (!id) return;
    let cancelled = false;
    setLoading(true);
    setError(null);
    api
      .getRestaurantDetail(id)
      .then((r) => {
        if (!cancelled) setRestaurant(r);
      })
      .catch((e) => {
        if (!cancelled) setError(e?.message || "Restaurant not found");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [id]);

  if (loading) return <DetailSkeleton />;

  if (error || !restaurant) {
    return (
      <div className="container mx-auto px-4 md:px-6 py-20 text-center">
        <p className="text-lg font-semibold text-gray-700 mb-2">
          {error || "Restaurant not found"}
        </p>
        <Button variant="outline" onClick={() => navigate("/")} className="mt-4">
          <ArrowLeft className="size-4 mr-2" /> Back to Home
        </Button>
      </div>
    );
  }

  /* menu helpers */
  const menu = restaurant.menu ?? [];
  const menuCategories = ["All", ...Array.from(new Set(menu.map((m) => m.category)))];
  const filteredMenu =
    activeMenuCategory === "All" ? menu : menu.filter((m) => m.category === activeMenuCategory);

  const cartQty = Object.values(cart).reduce((a, b) => a + b, 0);
  const cartTotal = menu.reduce((sum, item) => sum + item.price * (cart[item.id] ?? 0), 0);

  const addToCart = (itemId: string) =>
    setCart((prev) => ({ ...prev, [itemId]: (prev[itemId] ?? 0) + 1 }));
  const removeFromCart = (itemId: string) =>
    setCart((prev) => {
      const next = { ...prev };
      const current = next[itemId] ?? 0;
      if (current > 1) next[itemId] = current - 1;
      else delete next[itemId];
      return next;
    });

  return (
    <div className="min-h-screen bg-white">
      {/* ── Sticky top bar ── */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6 h-14 flex items-center gap-4">
          <button
            onClick={() => navigate("/")}
            className="size-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
          >
            <ArrowLeft className="size-4 text-gray-700" />
          </button>
          <div className="flex-1 min-w-0">
            <h1 className="text-sm font-bold text-gray-900 truncate">{restaurant.name}</h1>
            <p className="text-[11px] text-gray-500 truncate">
              {restaurant.cuisine.join(" • ")}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button className="size-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
              <Heart className="size-4 text-gray-600" />
            </button>
            <button className="size-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
              <Share2 className="size-4 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="container mx-auto px-4 md:px-6 py-6 max-w-6xl">
        {/* Gallery */}
        <PhotoGallery photos={restaurant.photos ?? [restaurant.image]} />

        {/* Info header */}
        <div className="mt-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
                {restaurant.name}
              </h2>
              <p className="text-sm text-gray-500 mt-1">{restaurant.cuisine.join(", ")}</p>
            </div>
            <div className="flex items-center gap-1 shrink-0 bg-green-600 text-white px-2.5 py-1 rounded-lg text-sm font-bold">
              <Star className="size-3.5 fill-current" />
              {restaurant.rating}
            </div>
          </div>

          {/* Quick info row */}
          <div className="flex flex-wrap items-center gap-3 mt-3 text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <Clock className="size-3.5" />
              {restaurant.deliveryTimeMins} min
            </span>
            <span className="text-gray-300">•</span>
            <span>{rupees(restaurant.priceForTwo)} for two</span>
            <span className="text-gray-300">•</span>
            <span className="flex items-center gap-1">
              <MapPin className="size-3.5" />
              {restaurant.location}
            </span>
          </div>

          {/* Description */}
          {restaurant.description && (
            <p className="text-sm text-gray-600 mt-3 leading-relaxed max-w-3xl">
              {restaurant.description}
            </p>
          )}

          {/* Highlights */}
          {restaurant.highlights && restaurant.highlights.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {restaurant.highlights.map((h) => (
                <Badge
                  key={h}
                  variant="secondary"
                  className="text-xs bg-gray-50 text-gray-700 border border-gray-200"
                >
                  {h.includes("Veg") || h.includes("Pure") ? (
                    <Leaf className="size-3 mr-1 text-green-600" />
                  ) : null}
                  {h}
                </Badge>
              ))}
            </div>
          )}

          {/* Offers */}
          {restaurant.offers && restaurant.offers.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {restaurant.offers.map((offer) => (
                <div
                  key={offer}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-green-50 border border-green-200 rounded-lg text-xs font-semibold text-green-700"
                >
                  <Flame className="size-3" />
                  {offer}
                </div>
              ))}
            </div>
          )}

          {/* Timings */}
          {restaurant.timings && (
            <div className="flex items-center gap-2 mt-3 text-xs text-gray-500">
              <Clock className="size-3.5" />
              <span>
                {restaurant.timings.open} – {restaurant.timings.close}
              </span>
            </div>
          )}
        </div>

        <Separator className="my-8" />

        {/* ── Menu Section ── */}
        <section id="menu">
          <h3 className="text-xl font-extrabold text-gray-900 mb-1">Menu</h3>
          <p className="text-xs text-gray-500 mb-4">{menu.length} items</p>

          {menuCategories.length > 1 && (
            <MenuTabs
              categories={menuCategories}
              active={activeMenuCategory}
              onSelect={setActiveMenuCategory}
            />
          )}

          <div className="mt-4 divide-y divide-gray-50">
            {filteredMenu.map((item) => (
              <MenuItemCard
                key={item.id}
                item={item}
                qty={cart[item.id] ?? 0}
                onAdd={() => addToCart(item.id)}
                onRemove={() => removeFromCart(item.id)}
              />
            ))}
            {filteredMenu.length === 0 && (
              <p className="py-8 text-center text-sm text-gray-400">
                No items in this category.
              </p>
            )}
          </div>
        </section>

        <Separator className="my-8" />

        {/* ── Reviews Section (placeholder) ── */}
        <section>
          <h3 className="text-xl font-extrabold text-gray-900 mb-4">Reviews</h3>
          <div className="bg-gray-50 rounded-2xl p-8 text-center border border-dashed border-gray-200">
            <Info className="size-8 text-gray-300 mx-auto mb-3" />
            <p className="text-sm font-medium text-gray-600">
              Reviews coming soon — be the first to rate {restaurant.name}!
            </p>
            <div className="flex items-center justify-center gap-1 mt-3">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star
                  key={s}
                  className="size-6 text-gray-300 hover:text-amber-400 cursor-pointer transition-colors"
                />
              ))}
            </div>
          </div>
        </section>

        <Separator className="my-8" />

        {/* ── Contact Section ── */}
        {restaurant.contact && (
          <section>
            <h3 className="text-xl font-extrabold text-gray-900 mb-4">Contact</h3>
            <div className="bg-gray-50 rounded-2xl p-5 space-y-3 border border-gray-100">
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="size-4 text-gray-500 mt-0.5 shrink-0" />
                <span className="text-gray-700">{restaurant.contact.address}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-gray-500 shrink-0" />
                <span className="text-gray-700">{restaurant.contact.phone}</span>
              </div>
              {restaurant.contact.website && (
                <div className="flex items-center gap-3 text-sm">
                  <Globe className="size-4 text-gray-500 shrink-0" />
                  <a
                    href={restaurant.contact.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:underline"
                  >
                    {restaurant.contact.website}
                  </a>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Spacer for sticky cart */}
        <div className="h-24" />
      </div>

      {/* ── Sticky cart sidebar (bottom bar on mobile) ── */}
      {cartQty > 0 && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-green-600 text-white shadow-[0_-4px_20px_rgba(0,0,0,0.15)]">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-3">
                <ShoppingCart className="size-5" />
                <div>
                  <span className="text-sm font-bold">{cartQty} item{cartQty > 1 ? "s" : ""}</span>
                  <span className="text-xs ml-2 opacity-80">{rupees(cartTotal)}</span>
                </div>
              </div>
              <Button className="bg-white text-green-700 hover:bg-gray-100 font-bold text-sm h-10 px-6 rounded-xl">
                View Cart
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
