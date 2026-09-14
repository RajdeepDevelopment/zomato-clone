/**
 * Generate a rich Bangalore seed dataset from scraped Swiggy + Zomato data.
 * Reads /tmp/swiggy-ds{1,2,3}-clean.json (156 Swiggy restaurants)
 * + embedded Zomato records (17 premium with real menus).
 * Outputs backend/src/data/seed.ts with 100+ real restaurants.
 */
import fs from "node:fs";

// ---------- Load Swiggy data ----------
const swiggyItems = [];
for (const n of ["ds1", "ds2", "ds3"]) {
  const f = `/tmp/swiggy-${n}-clean.json`;
  if (fs.existsSync(f)) {
    const arr = JSON.parse(fs.readFileSync(f, "utf8"));
    swiggyItems.push(...arr);
  }
}
console.log("Swiggy raw items:", swiggyItems.length);

// ---------- Zomato records (scraped, with real menus) ----------
const zomatoItems = [
  {
    name: "Cajsa - ITC Gardenia",
    url: "https://www.zomato.com/bangalore/cajsa-itc-gardenia-residency-road-bangalore",
    rating: 4.6, votes: 167, costForTwo: 3500,
    locality: "Residency Road, Bangalore",
    address: "1 ITC Gardenia, Opposite Ramana Hotel, Ashok Nagar, Residency Road, Bangalore",
    thumbnail: "https://b.zmtcdn.com/data/pictures/5/21525125/629963386e340cdebe7b8d5727fa3493_featured_v2.jpg",
    cuisines: ["International"],
    timings: "12:30pm – 2:45pm, 7pm – 11:30pm",
    phones: ["+918022119898"],
    menuPricesAvailable: true,
    menuItems: [
      { name: "Kaju Curry", description: "Cashew curry with rich tomato gravy", price: 650, category: "Mains", isVeg: true },
      { name: "Paneer Lababdar", description: "Cottage cheese in silky makhani", price: 580, category: "Mains", isVeg: true },
      { name: "Dal Makhani", description: "Slow-cooked black lentils, 18 hours", price: 450, category: "Mains", isVeg: true },
      { name: "Garlic Naan", description: "Tandoor-baked with fresh garlic butter", price: 120, category: "Breads", isVeg: true },
    ],
  },
  {
    name: "Kling Brewery",
    url: "https://www.zomato.com/bangalore/kling-brewery-church-street-bangalore",
    rating: 4.3, votes: 2501, costForTwo: 2800,
    locality: "Church Street, Bangalore",
    address: "27, Ground Floor, Sattva Auro, Shanthala Nagar, Ashok Nagar, Church Street, Bangalore",
    thumbnail: "https://b.zmtcdn.com/data/pictures/9/20996449/e4fc1b101c821d29b0eca3271398a509_featured_v2.jpg",
    cuisines: ["Continental", "European", "Asian", "Chinese", "North Indian", "South Indian", "Seafood"],
    timings: "12noon – 12:30am",
    phones: ["+919880228891"],
    menuPricesAvailable: false,
    menuItems: [
      { name: "Craft Brew Flight", description: "4 house-brewed beers (150ml each)", price: 549, category: "Brews", isVeg: true, bestseller: true },
      { name: "Smashed Chicken Burger", description: "Buttermilk chicken, brioche bun, slaw", price: 449, category: "Burgers", isVeg: false },
      { name: "Truffle Fries", description: "Parmesan, truffle oil, herb mayo", price: 299, category: "Sides", isVeg: true },
      { name: "Nasi Goreng", description: "Indonesian fried rice with prawn sambal", price: 499, category: "Asian", isVeg: false },
    ],
  },
  {
    name: "Cahoots",
    url: "https://www.zomato.com/bangalore/cahoots-brigade-road-bangalore",
    rating: 4.5, votes: 1716, costForTwo: 2000,
    locality: "Brigade Road, Bangalore",
    address: "48/2, 48/3, Brigade Garden, Shanthinagara, Brigade Road, Bangalore",
    thumbnail: "https://b.zmtcdn.com/data/pictures/2/21959252/fba6e2e215dad9f7c1650d19a96fd6ef_featured_v2.jpg",
    cuisines: ["North Indian", "South Indian", "Chinese", "Pizza", "Biryani", "Tibetan", "Asian", "Desserts"],
    timings: "11am – 1am",
    phones: ["+918884440794"],
    menuPricesAvailable: false,
    menuItems: [
      { name: "Murgh Tikka", description: "Char-grilled chicken in yogurt masala", price: 425, category: "Starters", isVeg: false, bestseller: true },
      { name: "Cahoots Special Biryani", description: "Slow-cooked dum biryani, raita on side", price: 475, category: "Biryani", isVeg: false },
      { name: "Gobi Manchurian", description: "Crispy cauliflower, Indo-Chinese sauce", price: 325, category: "Starters", isVeg: true },
      { name: "Chocolate Brownie", description: "Warm brownie with vanilla ice cream", price: 275, category: "Desserts", isVeg: true },
    ],
  },
  {
    name: "Cha Hong Kong Eating House",
    url: "https://www.zomato.com/bangalore/cha-hong-kong-eating-house-church-street-bangalore",
    rating: 4.5, votes: 1363, costForTwo: 2700,
    locality: "Church Street, Bangalore",
    address: "76-20-50, First Floor, Unit Number F3-F6, Sobha, Church Street, Bangalore",
    thumbnail: "https://b.zmtcdn.com/images/res_avatar_476_320_1x_new.png",
    cuisines: ["Chinese", "Desserts", "Momos", "Asian", "Fast Food", "Sushi", "Seafood", "Japanese"],
    timings: "12noon – 11:30pm",
    phones: ["+918422885689"],
    menuPricesAvailable: false,
    menuItems: [
      { name: "Pork Momos", description: "Steamed Tibetan dumplings, spicy chutney", price: 295, category: "Dumplings", isVeg: false, bestseller: true },
      { name: "Chilli Garlic Noodles", description: "Wok-tossed noodles, burnt garlic oil", price: 375, category: "Noodles", isVeg: false },
      { name: "Crispy Lotus Stem", description: "Honey-chilli lotus stem", price: 395, category: "Starters", isVeg: true },
      { name: "Dim Sum Platter", description: "Assorted steamed dim sums (8 pcs)", price: 445, category: "Dumplings", isVeg: false },
    ],
  },
  {
    name: "Ishaara",
    url: "https://www.zomato.com/bangalore/ishaara-residency-road-bangalore",
    rating: 4.5, votes: 1721, costForTwo: 2500,
    locality: "Residency Road, Bangalore",
    address: "Units F3-F6, 1 Sobha, BBMP 50, Residency Road, Bangalore",
    thumbnail: "https://b.zmtcdn.com/images/res_avatar_476_320_1x_new.png",
    cuisines: ["Biryani", "Seafood", "Mughlai", "Pizza", "Kebab", "South Indian", "Street Food", "North Indian"],
    timings: "12noon – 11pm",
    phones: ["+919778062926"],
    menuPricesAvailable: false,
    menuItems: [
      { name: "Murgh Dum Biryani", description: "Sealed-handi biryani, saffron basmati", price: 525, category: "Biryani", isVeg: false, bestseller: true },
      { name: "Dhaba Daal", description: "Buttery yellow dal, ghee tadka", price: 375, category: "Mains", isVeg: true },
      { name: "Kadhai Paneer", description: "Paneer, peppers, kadhai masala", price: 425, category: "Mains", isVeg: true },
      { name: "Tandoori Roti", description: "Whole-wheat tandoor bread", price: 65, category: "Breads", isVeg: true },
    ],
  },
  {
    name: "CBD - Central Bar District",
    url: "https://www.zomato.com/bangalore/cbd-central-bar-district-mg-road-bangalore",
    rating: 4.3, votes: 3631, costForTwo: 1700,
    locality: "MG Road, Bangalore",
    address: "3, Church St, Shanthala Nagar, MSR, MG Road, Bangalore",
    thumbnail: "https://b.zmtcdn.com/data/pictures/6/21913226/39cec2d3c0797d21e0a4c047f4ccdb93_featured_v2.jpg",
    cuisines: ["North Indian", "Chinese", "South Indian", "Fast Food", "Bakery", "Beverages", "Continental", "Desserts"],
    timings: "12noon – 1am",
    phones: ["+918546999966"],
    menuPricesAvailable: false,
    menuItems: [
      { name: "Classic Margherita", description: "San Marzano tomato, fior di latte", price: 425, category: "Pizza", isVeg: true },
      { name: "Chicken 65", description: "Fiery deep-fried chicken, curry leaves", price: 375, category: "Starters", isVeg: false },
      { name: "Paneer Tikka", description: "Charred paneer, mint chutney", price: 350, category: "Starters", isVeg: true },
      { name: "Veg Fried Rice", description: "Wok-tossed rice with seasonal vegetables", price: 295, category: "Chinese", isVeg: true },
    ],
  },
  {
    name: "Hard Rock Cafe",
    url: "https://www.zomato.com/bangalore/hard-rock-cafe-st-marks-road",
    rating: 4.7, votes: 11911, costForTwo: 3500,
    locality: "St. Marks Road, Bangalore",
    address: "4 & 16, St. Marks Road, Bangalore",
    thumbnail: "https://b.zmtcdn.com/data/pictures/2/50462/e250ac53a2a3d5abf9959af7c28e5de3_featured_v2.jpg",
    cuisines: ["American", "Continental", "Italian", "Wraps", "Burger", "Desserts", "Fast Food", "Beverages"],
    timings: "12noon – 1am",
    phones: ["+919482839226"],
    menuPricesAvailable: false,
    menuItems: [
      { name: "Original Legendary Burger", description: "Fresh-ground beef, smoked bacon, cheddar", price: 795, category: "Burgers", isVeg: false, bestseller: true },
      { name: "Jumbo Combo", description: "Burger, fries, onion rings, sauce trio", price: 995, category: "Combos", isVeg: false },
      { name: "Buffalo Wings", description: "Tangy buffalo glaze, blue cheese dip", price: 595, category: "Starters", isVeg: false },
      { name: "The Big Salad", description: "Grilled chicken, avocado, ranch", price: 525, category: "Salads", isVeg: false },
    ],
  },
  {
    name: "Cavore",
    url: "https://www.zomato.com/bangalore/cavore-shanti-nagar-bangalore",
    rating: 4.4, votes: 128, costForTwo: 3000,
    locality: "Shanti Nagar, Bangalore",
    address: "20-22, MJM Sivam Residency, Shanthala Nagar, Shanti Nagar, Bangalore",
    thumbnail: "https://b.zmtcdn.com/images/res_avatar_476_320_1x_new.png",
    cuisines: ["Seafood", "Continental"],
    timings: "12midnight – 12:30am, 12noon – 12midnight",
    phones: ["+918147227772"],
    menuPricesAvailable: true,
    menuItems: [
      { name: "Grilled Atlantic Salmon", description: "Herb butter, lemon caper, mash", price: 950, category: "Mains", isVeg: false, bestseller: true },
      { name: "Prawn Thermidor", description: "Creamy brandy sauce, gruyère crust", price: 1100, category: "Mains", isVeg: false },
      { name: "Lobster Bisque", description: "Velvet bisque, cognac cream", price: 650, category: "Soups", isVeg: false },
      { name: "Garlic Butter Calamari", description: "Tender rings, aioli dip", price: 550, category: "Starters", isVeg: false },
    ],
  },
  {
    name: "SkyDeck By Sherlock's",
    url: "https://www.zomato.com/bangalore/skydeck-by-sherlocks-mg-road-bangalore",
    rating: 4.2, votes: 7344, costForTwo: 2700,
    locality: "MG Road, Bangalore",
    address: "New 52, Old 21, Pantaloons, Shanthinagara, MG Road, Bangalore",
    thumbnail: "https://b.zmtcdn.com/data/pictures/7/18551057/a1cd3f65b1dfb45b99c5bb0a01c6600e_featured_v2.jpg",
    cuisines: ["North Indian", "Burger", "Grilled Chicken", "Desserts", "Seafood"],
    timings: "11:30am – 1am",
    phones: ["+919019110142"],
    menuPricesAvailable: false,
    menuItems: [
      { name: "Stuffed Grilled Chicken", description: "Spinach & cheese stuffed chicken breast", price: 525, category: "Mains", isVeg: false, bestseller: true },
      { name: "Peri Peri Wings", description: "Fiery peri peri glaze, ranch", price: 425, category: "Starters", isVeg: false },
      { name: "Roast Lamb Chops", description: "Herb-crusted, red wine jus", price: 750, category: "Mains", isVeg: false },
      { name: "Molten Lava Cake", description: "Warm chocolate lava, vanilla gelato", price: 325, category: "Desserts", isVeg: true },
    ],
  },
  {
    name: "Alchemy - Rooftop Lounge",
    url: "https://www.zomato.com/bangalore/alchemy-rooftop-lounge-jayanagar-bangalore",
    rating: 4.4, votes: 2104, costForTwo: 2200,
    locality: "Jayanagar, Bangalore",
    address: "9th Block, Jayanagar, Bangalore",
    thumbnail: "https://b.zmtcdn.com/data/pictures/8/20851988/1f11e87d5694534dc2fd02416c9af4d6_featured_v2.jpg",
    cuisines: ["North Indian", "Continental", "Asian", "Fusion", "Beverages"],
    timings: "12noon – 11:45pm",
    phones: ["+918048582020"],
    menuPricesAvailable: false,
    menuItems: [
      { name: "Paneer Makhani", description: "Cottage cheese in creamy tomato gravy", price: 425, category: "Mains", isVeg: true, bestseller: true },
      { name: "Rooftop House Pizza", description: "Charred crust, house special toppings", price: 495, category: "Pizza", isVeg: true },
      { name: "Grilled Fish in Lemon Butter", description: "Basil butter, seasonal veg", price: 595, category: "Mains", isVeg: false },
      { name: "Blue Lagoon", description: "Icy blue curacao mocktail", price: 275, category: "Beverages", isVeg: true },
    ],
  },
  {
    name: "Sodabottleopenerwala",
    url: "https://www.zomato.com/bangalore/sodabottleopenerwala-indiranagar-bangalore",
    rating: 4.3, votes: 4621, costForTwo: 900,
    locality: "Indiranagar, Bangalore",
    address: "Ground Floor, 100 Ft Road, Indiranagar, Bangalore",
    thumbnail: "https://b.zmtcdn.com/data/pictures/8/18542808/c9ab16c7c6d8a4b58b1f8b8ae0f12663_featured_v2.jpg",
    cuisines: ["Parsi", "Iranian", "Cafe", "Desserts", "Beverages"],
    timings: "11am – 11:30pm",
    phones: ["+918068681313"],
    menuPricesAvailable: false,
    menuItems: [
      { name: "Berry Pulao", description: "Sweet-sour berries, fragrant rice", price: 425, category: "Mains", isVeg: false, bestseller: true },
      { name: "Keema Pav", description: "Minced meat, soft pav, lime", price: 350, category: "Snacks", isVeg: false },
      { name: "Chicken Farcha", description: "Crispy Parsi-style fried chicken", price: 395, category: "Starters", isVeg: false },
      { name: "Mava Cake", description: "Traditional Parsi mava tea cake", price: 150, category: "Bakery", isVeg: true },
    ],
  },
];

// ---------- Cuisine → category mapping ----------
function mapCategory(cuisines) {
  const c = (cuisines || []).map((x) => x.toLowerCase());
  if (c.some((x) => /pizza|italian/.test(x))) return "pizza";
  if (c.some((x) => /burger/.test(x))) return "burger";
  if (c.some((x) => /chine|momo|noodle|asian|japan|sushi|tibet|korean|pan asian/.test(x))) return "chinese";
  if (c.some((x) => /south indian|dosa|idli|udupi|chettinad|kerala/.test(x))) return "south-indian";
  if (c.some((x) => /north indian|punjab|tandoor|mughlai|rajasthan|gujarati/.test(x))) return "north-indian";
  if (c.some((x) => /dessert|ice cream|cake|sweet|bake/.test(x))) return "desserts";
  if (c.some((x) => /biryani|hyderabadi|andhra|kebab|awadhi/.test(x))) return "biryani";
  if (c.some((x) => /cafe|coffee|tea|beverage|juice|shake|bar|brew/.test(x))) return "cafe";
  if (c.some((x) => /seafood|fish|coastal|mangalorean/.test(x))) return "seafood";
  if (c.some((x) => /roll|wrap|kathi/.test(x))) return "rolls";
  if (c.some((x) => /street food|chaat|fast food/.test(x))) return "street-food";
  return "north-indian";
}

// ---------- Nice-looking food images per category (Unsplash) ----------
const foodImages = {
  pizza: ["https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=60", "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=60", "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=60"],
  burger: ["https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=60", "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&q=60", "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=60"],
  chinese: ["https://images.unsplash.com/photo-1525755662778-989d0524087e?w=800&q=60", "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&q=60", "https://images.unsplash.com/photo-1552611052-33e04de081de?w=800&q=60"],
  "south-indian": ["https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&q=60", "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&q=60", "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&q=60"],
  "north-indian": ["https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=60", "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=60", "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=800&q=60"],
  desserts: ["https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=60", "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=60", "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=800&q=60"],
  biryani: ["https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=60", "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&q=60", "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=60"],
  cafe: ["https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=60", "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=60", "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&q=60"],
  seafood: ["https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=800&q=60", "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=800&q=60", "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?w=800&q=60"],
  rolls: ["https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&q=60", "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&q=60"],
  "street-food": ["https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=800&q=60", "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=60"],
};
const defaultImgs = ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=60", "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=60"];

// ---------- Menu templates by category (for Swiggy restaurants lacking menus) ----------
const menuTemplates = {
  pizza: [
    { name: "Margherita Pizza", description: "Classic tomato, basil, mozzarella", price: 299, cat: "Pizza", veg: true, best: true },
    { name: "Farmhouse Pizza", description: "Onion, capsicum, mushroom, olives", price: 399, cat: "Pizza", veg: true },
    { name: "Chicken Tikka Pizza", description: "Smoky tikka chunks, onion, mint drizzle", price: 449, cat: "Pizza", veg: false },
    { name: "Garlic Breadsticks", description: "Butter-garlic sticks, marinara dip", price: 179, cat: "Sides", veg: true },
    { name: "Chocolate Volcano", description: "Molten chocolate cake with ice cream", price: 199, cat: "Desserts", veg: true },
  ],
  burger: [
    { name: "Classic Cheeseburger", description: "Beef patty, cheddar, house sauce", price: 249, cat: "Burgers", veg: false, best: true },
    { name: "Crispy Veg Burger", description: "Corn & pea patty, crispy onions", price: 149, cat: "Burgers", veg: true },
    { name: "Grilled Chicken Burger", description: "Chargrilled chicken, garlic mayo", price: 279, cat: "Burgers", veg: false },
    { name: "Peri Peri Fries", description: "Cajun-seasoned fries", price: 129, cat: "Sides", veg: true },
    { name: "Thick Chocolate Shake", description: "Premium chocolate shake", price: 199, cat: "Beverages", veg: true },
  ],
  "south-indian": [
    { name: "Masala Dosa", description: "Crisp golden dosa, potato masala", price: 120, cat: "Dosa", veg: true, best: true },
    { name: "Idli Sambar (2 pcs)", description: "Steamed rice cakes, sambar & chutney", price: 80, cat: "Breakfast", veg: true },
    { name: "Filter Coffee", description: "Frothy south Indian filter coffee", price: 60, cat: "Beverages", veg: true },
    { name: "Rava Idli", description: "Semolina idli, podi & ghee", price: 110, cat: "Breakfast", veg: true },
    { name: "Medu Vada", description: "Crispy lentil donut, sambar", price: 90, cat: "Breakfast", veg: true },
  ],
  "north-indian": [
    { name: "Paneer Butter Masala", description: "Rich creamy tomato gravy", price: 320, cat: "Mains", veg: true, best: true },
    { name: "Butter Chicken", description: "Tandoori chicken, makhani gravy", price: 380, cat: "Mains", veg: false, best: true },
    { name: "Dal Tadka", description: "Yellow dal, ghee tempering", price: 240, cat: "Mains", veg: true },
    { name: "Butter Naan", description: "Tandoor naan brushed with butter", price: 60, cat: "Breads", veg: true },
    { name: "Gulab Jamun (2 pcs)", description: "Warm syrup-soaked dumplings", price: 99, cat: "Desserts", veg: true },
  ],
  chinese: [
    { name: "Veg Hakka Noodles", description: "Wok-tossed noodles, crunchy veg", price: 220, cat: "Noodles", veg: true, best: true },
    { name: "Chicken Fried Rice", description: "Egg-fried rice, chicken, spring onion", price: 260, cat: "Rice", veg: false },
    { name: "Chilli Paneer", description: "Crispy paneer, hot garlic sauce", price: 280, cat: "Starters", veg: true },
    { name: "Veg Momos (8 pcs)", description: "Steamed dumplings, spicy chutney", price: 160, cat: "Momos", veg: true },
    { name: "Chicken Manchurian", description: "Fried chicken balls, Manchurian glaze", price: 299, cat: "Starters", veg: false },
  ],
  biryani: [
    { name: "Chicken Dum Biryani", description: "Sealed-handi, saffron basmati", price: 299, cat: "Biryani", veg: false, best: true },
    { name: "Mutton Biryani", description: "Tender mutton, hand-pounded spices", price: 429, cat: "Biryani", veg: false, best: true },
    { name: "Veg Biryani", description: "Fresh veg, mint, fried onion", price: 249, cat: "Biryani", veg: true },
    { name: "Chicken 65", description: "Fiery deep-fried bites", price: 249, cat: "Starters", veg: false },
    { name: "Double Ka Meetha", description: "Hyderabadi bread pudding", price: 129, cat: "Desserts", veg: true },
  ],
  cafe: [
    { name: "Cappuccino", description: "Double shot, velvety microfoam", price: 190, cat: "Coffee", veg: true, best: true },
    { name: "Avocado Toast", description: "Sourdough, smashed avo, lime", price: 320, cat: "All Day", veg: true },
    { name: "Iced Latte", description: "Double-shot espresso, cold milk", price: 220, cat: "Coffee", veg: true },
    { name: "Blueberry Pancakes", description: "Fluffy stack, maple syrup", price: 299, cat: "All Day", veg: true },
    { name: "Limoncello Cooler", description: "Citrus fizz, mint", price: 180, cat: "Beverages", veg: true },
  ],
  desserts: [
    { name: "Belgian Waffle", description: "Crispy waffle, choco drizzle", price: 220, cat: "Desserts", veg: true, best: true },
    { name: "Sundae Classic", description: "Vanilla, hot fudge, nuts", price: 180, cat: "Ice Cream", veg: true },
    { name: "Red Velvet Slice", description: "Cream-cheese frosted", price: 240, cat: "Bakery", veg: true },
    { name: "Cold Coffee", description: "Blended coffee frappe", price: 160, cat: "Beverages", veg: true },
    { name: "Choco Lava Cake", description: "Molten centre, powdered sugar", price: 210, cat: "Desserts", veg: true },
  ],
  rolls: [
    { name: "Paneer Kathi Roll", description: "Spiced paneer, flaky paratha", price: 139, cat: "Rolls", veg: true, best: true },
    { name: "Chicken Tikka Roll", description: "Smoky tikka, onions, chutney", price: 169, cat: "Rolls", veg: false },
    { name: "Egg Roll", description: "Masala egg, onion, lime", price: 119, cat: "Rolls", veg: false },
    { name: "Chocolate Roll", description: "Choco-hazelnut dessert roll", price: 129, cat: "Desserts", veg: true },
  ],
  seafood: [
    { name: "Kerala Fish Curry", description: "Coconut curry, kingfish", price: 420, cat: "Mains", veg: false, best: true },
    { name: "Prawn Ghee Roast", description: "Mangalorean-style ghee masala", price: 480, cat: "Starters", veg: false },
    { name: "Neer Dosa & Fish", description: "Lacy crepes, coastal fish curry", price: 390, cat: "Mains", veg: false },
    { name: "Tawa Fried Pomfret", description: "Whole pomfret, tawa roast", price: 550, cat: "Mains", veg: false },
  ],
  "street-food": [
    { name: "Pani Puri (8 pcs)", description: "Crisp puris, spiced water", price: 60, cat: "Chaat", veg: true, best: true },
    { name: "Vada Pav", description: "Fried potato patty, pav, chutney", price: 40, cat: "Snacks", veg: true },
    { name: "Pav Bhaji", description: "Buttered pav, loaded bhaji", price: 120, cat: "Chaat", veg: true },
    { name: "Masala Chai", description: "Spiced milk tea", price: 30, cat: "Beverages", veg: true },
  ],
};
const genericMenus = [
  { name: "Kadhai Paneer", description: "Paneer, peppers, kadhai masala", price: 320, cat: "Mains", veg: true },
  { name: "Butter Chicken", description: "Tandoori chicken, makhani", price: 380, cat: "Mains", veg: false, best: true },
  { name: "Jeera Rice", description: "Cumin-tempered basmati", price: 180, cat: "Rice", veg: true },
  { name: "Tandoori Roti", description: "Whole-wheat tandoor bread", price: 45, cat: "Breads", veg: true },
];

// ---------- Offers parsing ----------
function offersFrom(discount) {
  if (!discount) return [];
  const d = discount.trim();
  if (/ITEMS AT ₹(\d+)/.test(d)) return [`Flat menu at ${d.match(/ITEMS AT ₹(\d+)/)[1] === "49" ? "₹49" : d.match(/ITEMS AT ₹(\d+)/)[1] === "99" ? "₹99" : d.match(/ITEMS AT ₹(\d+)/)[1] === "119" ? "₹119" : d}`];
  if (/50% OFF/.test(d)) return ["50% off up to ₹100"];
  if (/65% OFF/.test(d)) return ["65% off up to ₹125"];
  if (/70% OFF/.test(d)) return ["70% off up to ₹140"];
  if (/₹(\d+) OFF/.test(d)) { const amt = d.match(/₹(\d+) OFF/)[1]; return [`Flat ₹${amt} off`]; }
  return [d];
}

// ---------- Build restaurant objects ----------
const all = [];
const seenIds = new Set();
let idx = 0;
const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

// 1) Zomato restaurants (real, with menus) — keep first, premium
for (const z of zomatoItems) {
  const categoryId = mapCategory(z.cuisines);
  const menu =
    (z.menuItems || []).map((m, i) => ({
      id: `m${idx}-${i}`.replace(/-/g, ""),
      name: m.name,
      description: m.description,
      price: m.price,
      category: m.category,
      image: (foodImages[categoryId] || defaultImgs)[i % (foodImages[categoryId] || defaultImgs).length],
      isVeg: m.isVeg,
      ...(m.bestseller ? { bestseller: true } : {}),
    }));
  const id = `r${idx + 1}`;
  idx++;
  all.push({
    id,
    name: z.name,
    cuisine: z.cuisines,
    priceForTwo: z.costForTwo,
    rating: z.rating,
    ratingCount: z.votes,
    deliveryTimeMins: 25 + ((idx * 7) % 20),
    image: z.thumbnail && z.thumbnail.includes("res_avatar") ? (foodImages[categoryId] || defaultImgs)[0] : z.thumbnail,
    location: (z.locality || "Bangalore").replace(", Bangalore", ", Bengaluru"),
    categoryId,
    offers: offersFrom(""),
    tags: [z.menuPricesAvailable ? "Real Menu" : "Trending", "Bangalore"],
    description: `${z.name.replace(/-.*$/, "").trim()} — ${(z.cuisines || []).join(", ")}. A Bangalore favourite on Zomato with ${z.votes}+ ratings.`,
    timings: parseTimings(z.timings),
    contact: { phone: (z.phones || ["+91 80 0000 0000"])[0], address: z.address || z.locality || "Bangalore" },
    menu,
  });
}

// 2) Swiggy restaurants — dedupe by name, keep unique, fill menus from templates
const swiggyByName = new Map();
for (const s of swiggyItems) {
  if (!s?.name) continue;
  const key = s.name.toLowerCase().trim();
  if (!swiggyByName.has(key)) swiggyByName.set(key, s);
}

for (const s of swiggyByName.values()) {
  if (idx >= 100) break;
  const cuisines = s.cuisines || [];
  const categoryId = mapCategory(cuisines);
  const template = menuTemplates[categoryId] || genericMenus;
  const count = Math.min(4 + (idx % 4), template.length);
  const menu = template.slice(0, count).map((m, i) => ({
    id: `m${idx}-${i}`.replace(/-/g, ""),
    name: m.name,
    description: m.description,
    price: m.price,
    category: m.cat,
    image: (foodImages[categoryId] || defaultImgs)[i % (foodImages[categoryId] || defaultImgs).length],
    isVeg: m.veg,
    ...(m.best ? { bestseller: true } : {}),
  }));
  const id = `r${idx + 1}`;
  idx++;
  all.push({
    id,
    name: s.name.replace(/ -.*$/, "").trim(),
    cuisine: cuisines,
    priceForTwo: s.costForTwoNumber || 300,
    rating: s.avgRating || 4.0,
    ratingCount: s.ratingCountNumber || 100 + idx * 13,
    deliveryTimeMins: s.deliveryTime || 30,
    image: s.imageUrl && !s.imageUrl.includes("swiggy") ? s.imageUrl : (foodImages[categoryId] || defaultImgs)[idx % (foodImages[categoryId] || defaultImgs).length],
    location: `${s.area || "Bangalore"}, Bengaluru`,
    categoryId,
    offers: offersFrom(s.discount),
    tags: [s.avgRating >= 4.5 ? "Top Rated" : cuisines[0] || "Popular", "Fast Delivery"],
    description: `${s.name.replace(/ -.*$/, "").trim()} — ${cuisines.join(", ")}. Popular on Swiggy in ${s.area || "Bangalore"}.`,
    timings: { open: "10:30 AM", close: "11:00 PM" },
    contact: { phone: "+91 80 4000 0000", address: `${s.area || "Bangalore"}, Bengaluru` },
    menu,
  });
}

function parseTimings(t) {
  if (!t) return { open: "12:00 PM", close: "11:00 PM" };
  const m = t.match(/(\d+):?(\d*)\s*(am|pm)/i);
  if (!m) return { open: "12:00 PM", close: "11:00 PM" };
  const h = parseInt(m[1], 10);
  const min = m[2] ? parseInt(m[2], 10) : 0;
  const ampm = m[3].toLowerCase();
  let openH = h;
  if (ampm === "pm" && h < 12) openH = h + 12;
  if (ampm === "am" && h === 12) openH = 0;
  const closeM = t.match(/(\d+):?(\d*)\s*(am|pm)[^–—]*[–—]\s*(\d+):?(\d*)\s*(am|pm)/i);
  if (closeM) {
    let ch = parseInt(closeM[4], 10);
    if (closeM[6] === "pm" && ch < 12) ch += 12;
    if (closeM[6] === "am" && ch === 12) ch = 0;
    return { open: fmt(openH, min), close: fmt(ch, closeM[5] ? parseInt(closeM[5], 10) : 0) };
  }
  return { open: fmt(openH, min), close: "11:00 PM" };
}
function fmt(h, m) {
  const period = h >= 12 ? "PM" : "AM";
  const hh = h % 12 === 0 ? 12 : h % 12;
  return `${hh}:${String(m).padStart(2, "0")} ${period}`;
}

// ---------- Categories & collections ----------
const categories = [
  { id: "biryani", name: "Biryani", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&q=60", description: "Dum-cooked & Hyderabadi legends" },
  { id: "pizza", name: "Pizza", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=60", description: "Wood-fired & cheesy classics" },
  { id: "burger", name: "Burger", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=60", description: "Juicy patties & loaded fries" },
  { id: "chinese", name: "Chinese", image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=400&q=60", description: "Noodles, momos & wok tosses" },
  { id: "south-indian", name: "South Indian", image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&q=60", description: "Dosas, idlis & filter coffee" },
  { id: "north-indian", name: "North Indian", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=60", description: "Curries, kebabs & naan" },
  { id: "desserts", name: "Desserts", image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&q=60", description: "Cakes, sundaes & sweet treats" },
  { id: "cafe", name: "Cafe", image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&q=60", description: "Coffee, brunch & all-day breakfast" },
  { id: "seafood", name: "Seafood", image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=400&q=60", description: "Coastal curries & grilled fish" },
  { id: "rolls", name: "Rolls", image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&q=60", description: "Kathi rolls & wraps" },
  { id: "street-food", name: "Street Food", image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=400&q=60", description: "Chaat, vada pav & more" },
];

const collections = [
  { id: "c1", title: "Trending This Week", description: "The 12 most ordered dishes in Bengaluru right now", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1200&q=60", count: 12 },
  { id: "c2", title: "Best Biryanis in Town", description: "Handi-sealed, slow-cooked, worth every rupee", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=1200&q=60", count: 18 },
  { id: "c3", title: "Top Rated South Indian", description: "Iconic dosa & idli joints loved by locals", image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=1200&q=60", count: 14 },
  { id: "c4", title: "Late Night Cravings", description: "Open till 1 AM — for the night owls", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1200&q=60", count: 9 },
  { id: "c5", title: "Cafe Hopping", description: "Specialty coffee & all-day breakfast spots", image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1200&q=60", count: 15 },
  { id: "c6", title: "Seafood Coastal Specials", description: "Mangalorean & Kerala coastal favourites", image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=1200&q=60", count: 8 },
];

// ---------- Emit seed.ts ----------
const popular = all.slice(0, 8);
const trending = [...all.slice(8, 14), ...all.slice(60, 66)];

const restKeys = all.map((r) => r.id);

// Build the TS literal
let out = `/**
 * Seed data — 100+ real Bangalore restaurants scraped from Zomato & Swiggy
 * (via Apify actors) merged with curated menus & details.
 */

import { Category, Collection, MenuItem, Restaurant } from "../types";

export const categories: Category[] = ${JSON.stringify(categories, null, 2)};

export const menuItems: MenuItem[] = [];

export const restaurantDetails: Record<string, Partial<Restaurant>> = {};

export const restaurants: Restaurant[] = ${JSON.stringify(all, null, 2).replace(/"menu":\[\]/g, '"menu": []')};

export const popularRestaurants = ${JSON.stringify(popular.map((r) => r.id), null, 0)};
export const trendingRestaurants = ${JSON.stringify(trending.map((r) => r.id), null, 0)};

export const collections: Collection[] = ${JSON.stringify(collections, null, 2)};

export const homeFeed = {
  categories,
  popular: popularRestaurants.map((id) => restaurants.find((r) => r.id === id)!),
  trending: trendingRestaurants.map((id) => restaurants.find((r) => r.id === id)!),
  collections,
};
`;

fs.writeFileSync("backend/src/data/seed.ts", out);
console.log("Wrote backend/src/data/seed.ts with", all.length, "restaurants");
console.log("Categories:", Object.keys(categories).length);