/**
 * Seed data — 100+ real Bangalore restaurants scraped from Zomato & Swiggy
 * (via Apify actors) merged with curated menus & details.
 */

import { Category, Collection, MenuItem, Restaurant } from "../types";

export const categories: Category[] = [
  {
    "id": "biryani",
    "name": "Biryani",
    "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&q=60",
    "description": "Dum-cooked & Hyderabadi legends"
  },
  {
    "id": "pizza",
    "name": "Pizza",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=60",
    "description": "Wood-fired & cheesy classics"
  },
  {
    "id": "burger",
    "name": "Burger",
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=60",
    "description": "Juicy patties & loaded fries"
  },
  {
    "id": "chinese",
    "name": "Chinese",
    "image": "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=400&q=60",
    "description": "Noodles, momos & wok tosses"
  },
  {
    "id": "south-indian",
    "name": "South Indian",
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&q=60",
    "description": "Dosas, idlis & filter coffee"
  },
  {
    "id": "north-indian",
    "name": "North Indian",
    "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=60",
    "description": "Curries, kebabs & naan"
  },
  {
    "id": "desserts",
    "name": "Desserts",
    "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&q=60",
    "description": "Cakes, sundaes & sweet treats"
  },
  {
    "id": "cafe",
    "name": "Cafe",
    "image": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&q=60",
    "description": "Coffee, brunch & all-day breakfast"
  },
  {
    "id": "seafood",
    "name": "Seafood",
    "image": "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=400&q=60",
    "description": "Coastal curries & grilled fish"
  },
  {
    "id": "rolls",
    "name": "Rolls",
    "image": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&q=60",
    "description": "Kathi rolls & wraps"
  },
  {
    "id": "street-food",
    "name": "Street Food",
    "image": "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=400&q=60",
    "description": "Chaat, vada pav & more"
  }
];

export const menuItems: MenuItem[] = [];

export const restaurantDetails: Record<string, Partial<Restaurant>> = {};

export const restaurants: Restaurant[] = [
  {
    "id": "r1",
    "name": "Cajsa - ITC Gardenia",
    "cuisine": [
      "International"
    ],
    "priceForTwo": 3500,
    "rating": 4.6,
    "ratingCount": 167,
    "deliveryTimeMins": 32,
    "image": "https://b.zmtcdn.com/data/pictures/5/21525125/629963386e340cdebe7b8d5727fa3493_featured_v2.jpg",
    "location": "Residency Road, Bengaluru",
    "categoryId": "north-indian",
    "offers": [],
    "tags": [
      "Real Menu",
      "Bangalore"
    ],
    "description": "Cajsa — International. A Bangalore favourite on Zomato with 167+ ratings.",
    "timings": {
      "open": "12:30 PM",
      "close": "2:45 PM"
    },
    "contact": {
      "phone": "+918022119898",
      "address": "1 ITC Gardenia, Opposite Ramana Hotel, Ashok Nagar, Residency Road, Bangalore"
    },
    "menu": [
      {
        "id": "m00",
        "name": "Kaju Curry",
        "description": "Cashew curry with rich tomato gravy",
        "price": 650,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m01",
        "name": "Paneer Lababdar",
        "description": "Cottage cheese in silky makhani",
        "price": 580,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m02",
        "name": "Dal Makhani",
        "description": "Slow-cooked black lentils, 18 hours",
        "price": 450,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m03",
        "name": "Garlic Naan",
        "description": "Tandoor-baked with fresh garlic butter",
        "price": 120,
        "category": "Breads",
        "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r2",
    "name": "Kling Brewery",
    "cuisine": [
      "Continental",
      "European",
      "Asian",
      "Chinese",
      "North Indian",
      "South Indian",
      "Seafood"
    ],
    "priceForTwo": 2800,
    "rating": 4.3,
    "ratingCount": 2501,
    "deliveryTimeMins": 39,
    "image": "https://b.zmtcdn.com/data/pictures/9/20996449/e4fc1b101c821d29b0eca3271398a509_featured_v2.jpg",
    "location": "Church Street, Bengaluru",
    "categoryId": "chinese",
    "offers": [],
    "tags": [
      "Trending",
      "Bangalore"
    ],
    "description": "Kling Brewery — Continental, European, Asian, Chinese, North Indian, South Indian, Seafood. A Bangalore favourite on Zomato with 2501+ ratings.",
    "timings": {
      "open": "12:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+919880228891",
      "address": "27, Ground Floor, Sattva Auro, Shanthala Nagar, Ashok Nagar, Church Street, Bangalore"
    },
    "menu": [
      {
        "id": "m10",
        "name": "Craft Brew Flight",
        "description": "4 house-brewed beers (150ml each)",
        "price": 549,
        "category": "Brews",
        "image": "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m11",
        "name": "Smashed Chicken Burger",
        "description": "Buttermilk chicken, brioche bun, slaw",
        "price": 449,
        "category": "Burgers",
        "image": "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&q=60",
        "isVeg": false
      },
      {
        "id": "m12",
        "name": "Truffle Fries",
        "description": "Parmesan, truffle oil, herb mayo",
        "price": 299,
        "category": "Sides",
        "image": "https://images.unsplash.com/photo-1552611052-33e04de081de?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m13",
        "name": "Nasi Goreng",
        "description": "Indonesian fried rice with prawn sambal",
        "price": 499,
        "category": "Asian",
        "image": "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=800&q=60",
        "isVeg": false
      }
    ]
  },
  {
    "id": "r3",
    "name": "Cahoots",
    "cuisine": [
      "North Indian",
      "South Indian",
      "Chinese",
      "Pizza",
      "Biryani",
      "Tibetan",
      "Asian",
      "Desserts"
    ],
    "priceForTwo": 2000,
    "rating": 4.5,
    "ratingCount": 1716,
    "deliveryTimeMins": 26,
    "image": "https://b.zmtcdn.com/data/pictures/2/21959252/fba6e2e215dad9f7c1650d19a96fd6ef_featured_v2.jpg",
    "location": "Brigade Road, Bengaluru",
    "categoryId": "pizza",
    "offers": [],
    "tags": [
      "Trending",
      "Bangalore"
    ],
    "description": "Cahoots — North Indian, South Indian, Chinese, Pizza, Biryani, Tibetan, Asian, Desserts. A Bangalore favourite on Zomato with 1716+ ratings.",
    "timings": {
      "open": "11:00 AM",
      "close": "1:00 AM"
    },
    "contact": {
      "phone": "+918884440794",
      "address": "48/2, 48/3, Brigade Garden, Shanthinagara, Brigade Road, Bangalore"
    },
    "menu": [
      {
        "id": "m20",
        "name": "Murgh Tikka",
        "description": "Char-grilled chicken in yogurt masala",
        "price": 425,
        "category": "Starters",
        "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=60",
        "isVeg": false,
        "bestseller": true
      },
      {
        "id": "m21",
        "name": "Cahoots Special Biryani",
        "description": "Slow-cooked dum biryani, raita on side",
        "price": 475,
        "category": "Biryani",
        "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=60",
        "isVeg": false
      },
      {
        "id": "m22",
        "name": "Gobi Manchurian",
        "description": "Crispy cauliflower, Indo-Chinese sauce",
        "price": 325,
        "category": "Starters",
        "image": "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m23",
        "name": "Chocolate Brownie",
        "description": "Warm brownie with vanilla ice cream",
        "price": 275,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r4",
    "name": "Cha Hong Kong Eating House",
    "cuisine": [
      "Chinese",
      "Desserts",
      "Momos",
      "Asian",
      "Fast Food",
      "Sushi",
      "Seafood",
      "Japanese"
    ],
    "priceForTwo": 2700,
    "rating": 4.5,
    "ratingCount": 1363,
    "deliveryTimeMins": 33,
    "image": "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=800&q=60",
    "location": "Church Street, Bengaluru",
    "categoryId": "chinese",
    "offers": [],
    "tags": [
      "Trending",
      "Bangalore"
    ],
    "description": "Cha Hong Kong Eating House — Chinese, Desserts, Momos, Asian, Fast Food, Sushi, Seafood, Japanese. A Bangalore favourite on Zomato with 1363+ ratings.",
    "timings": {
      "open": "11:30 PM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+918422885689",
      "address": "76-20-50, First Floor, Unit Number F3-F6, Sobha, Church Street, Bangalore"
    },
    "menu": [
      {
        "id": "m30",
        "name": "Pork Momos",
        "description": "Steamed Tibetan dumplings, spicy chutney",
        "price": 295,
        "category": "Dumplings",
        "image": "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=800&q=60",
        "isVeg": false,
        "bestseller": true
      },
      {
        "id": "m31",
        "name": "Chilli Garlic Noodles",
        "description": "Wok-tossed noodles, burnt garlic oil",
        "price": 375,
        "category": "Noodles",
        "image": "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&q=60",
        "isVeg": false
      },
      {
        "id": "m32",
        "name": "Crispy Lotus Stem",
        "description": "Honey-chilli lotus stem",
        "price": 395,
        "category": "Starters",
        "image": "https://images.unsplash.com/photo-1552611052-33e04de081de?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m33",
        "name": "Dim Sum Platter",
        "description": "Assorted steamed dim sums (8 pcs)",
        "price": 445,
        "category": "Dumplings",
        "image": "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=800&q=60",
        "isVeg": false
      }
    ]
  },
  {
    "id": "r5",
    "name": "Ishaara",
    "cuisine": [
      "Biryani",
      "Seafood",
      "Mughlai",
      "Pizza",
      "Kebab",
      "South Indian",
      "Street Food",
      "North Indian"
    ],
    "priceForTwo": 2500,
    "rating": 4.5,
    "ratingCount": 1721,
    "deliveryTimeMins": 40,
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=60",
    "location": "Residency Road, Bengaluru",
    "categoryId": "pizza",
    "offers": [],
    "tags": [
      "Trending",
      "Bangalore"
    ],
    "description": "Ishaara — Biryani, Seafood, Mughlai, Pizza, Kebab, South Indian, Street Food, North Indian. A Bangalore favourite on Zomato with 1721+ ratings.",
    "timings": {
      "open": "11:00 PM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+919778062926",
      "address": "Units F3-F6, 1 Sobha, BBMP 50, Residency Road, Bangalore"
    },
    "menu": [
      {
        "id": "m40",
        "name": "Murgh Dum Biryani",
        "description": "Sealed-handi biryani, saffron basmati",
        "price": 525,
        "category": "Biryani",
        "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=60",
        "isVeg": false,
        "bestseller": true
      },
      {
        "id": "m41",
        "name": "Dhaba Daal",
        "description": "Buttery yellow dal, ghee tadka",
        "price": 375,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m42",
        "name": "Kadhai Paneer",
        "description": "Paneer, peppers, kadhai masala",
        "price": 425,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m43",
        "name": "Tandoori Roti",
        "description": "Whole-wheat tandoor bread",
        "price": 65,
        "category": "Breads",
        "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r6",
    "name": "CBD - Central Bar District",
    "cuisine": [
      "North Indian",
      "Chinese",
      "South Indian",
      "Fast Food",
      "Bakery",
      "Beverages",
      "Continental",
      "Desserts"
    ],
    "priceForTwo": 1700,
    "rating": 4.3,
    "ratingCount": 3631,
    "deliveryTimeMins": 27,
    "image": "https://b.zmtcdn.com/data/pictures/6/21913226/39cec2d3c0797d21e0a4c047f4ccdb93_featured_v2.jpg",
    "location": "MG Road, Bengaluru",
    "categoryId": "chinese",
    "offers": [],
    "tags": [
      "Trending",
      "Bangalore"
    ],
    "description": "CBD — North Indian, Chinese, South Indian, Fast Food, Bakery, Beverages, Continental, Desserts. A Bangalore favourite on Zomato with 3631+ ratings.",
    "timings": {
      "open": "1:00 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+918546999966",
      "address": "3, Church St, Shanthala Nagar, MSR, MG Road, Bangalore"
    },
    "menu": [
      {
        "id": "m50",
        "name": "Classic Margherita",
        "description": "San Marzano tomato, fior di latte",
        "price": 425,
        "category": "Pizza",
        "image": "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m51",
        "name": "Chicken 65",
        "description": "Fiery deep-fried chicken, curry leaves",
        "price": 375,
        "category": "Starters",
        "image": "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&q=60",
        "isVeg": false
      },
      {
        "id": "m52",
        "name": "Paneer Tikka",
        "description": "Charred paneer, mint chutney",
        "price": 350,
        "category": "Starters",
        "image": "https://images.unsplash.com/photo-1552611052-33e04de081de?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m53",
        "name": "Veg Fried Rice",
        "description": "Wok-tossed rice with seasonal vegetables",
        "price": 295,
        "category": "Chinese",
        "image": "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r7",
    "name": "Hard Rock Cafe",
    "cuisine": [
      "American",
      "Continental",
      "Italian",
      "Wraps",
      "Burger",
      "Desserts",
      "Fast Food",
      "Beverages"
    ],
    "priceForTwo": 3500,
    "rating": 4.7,
    "ratingCount": 11911,
    "deliveryTimeMins": 34,
    "image": "https://b.zmtcdn.com/data/pictures/2/50462/e250ac53a2a3d5abf9959af7c28e5de3_featured_v2.jpg",
    "location": "St. Marks Road, Bengaluru",
    "categoryId": "pizza",
    "offers": [],
    "tags": [
      "Trending",
      "Bangalore"
    ],
    "description": "Hard Rock Cafe — American, Continental, Italian, Wraps, Burger, Desserts, Fast Food, Beverages. A Bangalore favourite on Zomato with 11911+ ratings.",
    "timings": {
      "open": "1:00 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+919482839226",
      "address": "4 & 16, St. Marks Road, Bangalore"
    },
    "menu": [
      {
        "id": "m60",
        "name": "Original Legendary Burger",
        "description": "Fresh-ground beef, smoked bacon, cheddar",
        "price": 795,
        "category": "Burgers",
        "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=60",
        "isVeg": false,
        "bestseller": true
      },
      {
        "id": "m61",
        "name": "Jumbo Combo",
        "description": "Burger, fries, onion rings, sauce trio",
        "price": 995,
        "category": "Combos",
        "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=60",
        "isVeg": false
      },
      {
        "id": "m62",
        "name": "Buffalo Wings",
        "description": "Tangy buffalo glaze, blue cheese dip",
        "price": 595,
        "category": "Starters",
        "image": "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=60",
        "isVeg": false
      },
      {
        "id": "m63",
        "name": "The Big Salad",
        "description": "Grilled chicken, avocado, ranch",
        "price": 525,
        "category": "Salads",
        "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=60",
        "isVeg": false
      }
    ]
  },
  {
    "id": "r8",
    "name": "Cavore",
    "cuisine": [
      "Seafood",
      "Continental"
    ],
    "priceForTwo": 3000,
    "rating": 4.4,
    "ratingCount": 128,
    "deliveryTimeMins": 41,
    "image": "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=800&q=60",
    "location": "Shanti Nagar, Bengaluru",
    "categoryId": "seafood",
    "offers": [],
    "tags": [
      "Real Menu",
      "Bangalore"
    ],
    "description": "Cavore — Seafood, Continental. A Bangalore favourite on Zomato with 128+ ratings.",
    "timings": {
      "open": "12:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+918147227772",
      "address": "20-22, MJM Sivam Residency, Shanthala Nagar, Shanti Nagar, Bangalore"
    },
    "menu": [
      {
        "id": "m70",
        "name": "Grilled Atlantic Salmon",
        "description": "Herb butter, lemon caper, mash",
        "price": 950,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=800&q=60",
        "isVeg": false,
        "bestseller": true
      },
      {
        "id": "m71",
        "name": "Prawn Thermidor",
        "description": "Creamy brandy sauce, gruyère crust",
        "price": 1100,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=800&q=60",
        "isVeg": false
      },
      {
        "id": "m72",
        "name": "Lobster Bisque",
        "description": "Velvet bisque, cognac cream",
        "price": 650,
        "category": "Soups",
        "image": "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?w=800&q=60",
        "isVeg": false
      },
      {
        "id": "m73",
        "name": "Garlic Butter Calamari",
        "description": "Tender rings, aioli dip",
        "price": 550,
        "category": "Starters",
        "image": "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=800&q=60",
        "isVeg": false
      }
    ]
  },
  {
    "id": "r9",
    "name": "SkyDeck By Sherlock's",
    "cuisine": [
      "North Indian",
      "Burger",
      "Grilled Chicken",
      "Desserts",
      "Seafood"
    ],
    "priceForTwo": 2700,
    "rating": 4.2,
    "ratingCount": 7344,
    "deliveryTimeMins": 28,
    "image": "https://b.zmtcdn.com/data/pictures/7/18551057/a1cd3f65b1dfb45b99c5bb0a01c6600e_featured_v2.jpg",
    "location": "MG Road, Bengaluru",
    "categoryId": "burger",
    "offers": [],
    "tags": [
      "Trending",
      "Bangalore"
    ],
    "description": "SkyDeck By Sherlock's — North Indian, Burger, Grilled Chicken, Desserts, Seafood. A Bangalore favourite on Zomato with 7344+ ratings.",
    "timings": {
      "open": "11:30 AM",
      "close": "1:00 AM"
    },
    "contact": {
      "phone": "+919019110142",
      "address": "New 52, Old 21, Pantaloons, Shanthinagara, MG Road, Bangalore"
    },
    "menu": [
      {
        "id": "m80",
        "name": "Stuffed Grilled Chicken",
        "description": "Spinach & cheese stuffed chicken breast",
        "price": 525,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=60",
        "isVeg": false,
        "bestseller": true
      },
      {
        "id": "m81",
        "name": "Peri Peri Wings",
        "description": "Fiery peri peri glaze, ranch",
        "price": 425,
        "category": "Starters",
        "image": "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&q=60",
        "isVeg": false
      },
      {
        "id": "m82",
        "name": "Roast Lamb Chops",
        "description": "Herb-crusted, red wine jus",
        "price": 750,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=60",
        "isVeg": false
      },
      {
        "id": "m83",
        "name": "Molten Lava Cake",
        "description": "Warm chocolate lava, vanilla gelato",
        "price": 325,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r10",
    "name": "Alchemy - Rooftop Lounge",
    "cuisine": [
      "North Indian",
      "Continental",
      "Asian",
      "Fusion",
      "Beverages"
    ],
    "priceForTwo": 2200,
    "rating": 4.4,
    "ratingCount": 2104,
    "deliveryTimeMins": 35,
    "image": "https://b.zmtcdn.com/data/pictures/8/20851988/1f11e87d5694534dc2fd02416c9af4d6_featured_v2.jpg",
    "location": "Jayanagar, Bengaluru",
    "categoryId": "chinese",
    "offers": [],
    "tags": [
      "Trending",
      "Bangalore"
    ],
    "description": "Alchemy — North Indian, Continental, Asian, Fusion, Beverages. A Bangalore favourite on Zomato with 2104+ ratings.",
    "timings": {
      "open": "11:45 PM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+918048582020",
      "address": "9th Block, Jayanagar, Bangalore"
    },
    "menu": [
      {
        "id": "m90",
        "name": "Paneer Makhani",
        "description": "Cottage cheese in creamy tomato gravy",
        "price": 425,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m91",
        "name": "Rooftop House Pizza",
        "description": "Charred crust, house special toppings",
        "price": 495,
        "category": "Pizza",
        "image": "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m92",
        "name": "Grilled Fish in Lemon Butter",
        "description": "Basil butter, seasonal veg",
        "price": 595,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1552611052-33e04de081de?w=800&q=60",
        "isVeg": false
      },
      {
        "id": "m93",
        "name": "Blue Lagoon",
        "description": "Icy blue curacao mocktail",
        "price": 275,
        "category": "Beverages",
        "image": "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r11",
    "name": "Sodabottleopenerwala",
    "cuisine": [
      "Parsi",
      "Iranian",
      "Cafe",
      "Desserts",
      "Beverages"
    ],
    "priceForTwo": 900,
    "rating": 4.3,
    "ratingCount": 4621,
    "deliveryTimeMins": 42,
    "image": "https://b.zmtcdn.com/data/pictures/8/18542808/c9ab16c7c6d8a4b58b1f8b8ae0f12663_featured_v2.jpg",
    "location": "Indiranagar, Bengaluru",
    "categoryId": "desserts",
    "offers": [],
    "tags": [
      "Trending",
      "Bangalore"
    ],
    "description": "Sodabottleopenerwala — Parsi, Iranian, Cafe, Desserts, Beverages. A Bangalore favourite on Zomato with 4621+ ratings.",
    "timings": {
      "open": "11:00 AM",
      "close": "11:30 PM"
    },
    "contact": {
      "phone": "+918068681313",
      "address": "Ground Floor, 100 Ft Road, Indiranagar, Bangalore"
    },
    "menu": [
      {
        "id": "m100",
        "name": "Berry Pulao",
        "description": "Sweet-sour berries, fragrant rice",
        "price": 425,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=60",
        "isVeg": false,
        "bestseller": true
      },
      {
        "id": "m101",
        "name": "Keema Pav",
        "description": "Minced meat, soft pav, lime",
        "price": 350,
        "category": "Snacks",
        "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=60",
        "isVeg": false
      },
      {
        "id": "m102",
        "name": "Chicken Farcha",
        "description": "Crispy Parsi-style fried chicken",
        "price": 395,
        "category": "Starters",
        "image": "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=800&q=60",
        "isVeg": false
      },
      {
        "id": "m103",
        "name": "Mava Cake",
        "description": "Traditional Parsi mava tea cake",
        "price": 150,
        "category": "Bakery",
        "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r12",
    "name": "NIC Ice Creams",
    "cuisine": [
      "Ice Cream",
      "Desserts"
    ],
    "priceForTwo": 120,
    "rating": 4.5,
    "ratingCount": 1000,
    "deliveryTimeMins": 36,
    "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=60",
    "location": "BANGALORE SOUTH, Bengaluru",
    "categoryId": "desserts",
    "offers": [
      "Flat menu at ₹49"
    ],
    "tags": [
      "Top Rated",
      "Fast Delivery"
    ],
    "description": "NIC Ice Creams — Ice Cream, Desserts. Popular on Swiggy in BANGALORE SOUTH.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "BANGALORE SOUTH, Bengaluru"
    },
    "menu": [
      {
        "id": "m110",
        "name": "Belgian Waffle",
        "description": "Crispy waffle, choco drizzle",
        "price": 220,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m111",
        "name": "Sundae Classic",
        "description": "Vanilla, hot fudge, nuts",
        "price": 180,
        "category": "Ice Cream",
        "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m112",
        "name": "Red Velvet Slice",
        "description": "Cream-cheese frosted",
        "price": 240,
        "category": "Bakery",
        "image": "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m113",
        "name": "Cold Coffee",
        "description": "Blended coffee frappe",
        "price": 160,
        "category": "Beverages",
        "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m114",
        "name": "Choco Lava Cake",
        "description": "Molten centre, powdered sugar",
        "price": 210,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r13",
    "name": "KFC",
    "cuisine": [
      "Burgers",
      "Fast Food",
      "Rolls & Wraps"
    ],
    "priceForTwo": 400,
    "rating": 4.4,
    "ratingCount": 1300,
    "deliveryTimeMins": 30,
    "image": "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&q=60",
    "location": "Dayanand Sagar, Bengaluru",
    "categoryId": "burger",
    "offers": [
      "50% off up to ₹100"
    ],
    "tags": [
      "Burgers",
      "Fast Delivery"
    ],
    "description": "KFC — Burgers, Fast Food, Rolls & Wraps. Popular on Swiggy in Dayanand Sagar.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "Dayanand Sagar, Bengaluru"
    },
    "menu": [
      {
        "id": "m120",
        "name": "Classic Cheeseburger",
        "description": "Beef patty, cheddar, house sauce",
        "price": 249,
        "category": "Burgers",
        "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=60",
        "isVeg": false,
        "bestseller": true
      },
      {
        "id": "m121",
        "name": "Crispy Veg Burger",
        "description": "Corn & pea patty, crispy onions",
        "price": 149,
        "category": "Burgers",
        "image": "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m122",
        "name": "Grilled Chicken Burger",
        "description": "Chargrilled chicken, garlic mayo",
        "price": 279,
        "category": "Burgers",
        "image": "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=60",
        "isVeg": false
      },
      {
        "id": "m123",
        "name": "Peri Peri Fries",
        "description": "Cajun-seasoned fries",
        "price": 129,
        "category": "Sides",
        "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r14",
    "name": "McDonald's",
    "cuisine": [
      "Burgers",
      "Beverages",
      "Cafe",
      "Desserts"
    ],
    "priceForTwo": 400,
    "rating": 4.3,
    "ratingCount": 63000,
    "deliveryTimeMins": 47,
    "image": "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=60",
    "location": "JP NAGAR 6th phase, Bengaluru",
    "categoryId": "burger",
    "offers": [
      "Flat ₹550 off"
    ],
    "tags": [
      "Burgers",
      "Fast Delivery"
    ],
    "description": "McDonald's — Burgers, Beverages, Cafe, Desserts. Popular on Swiggy in JP NAGAR 6th phase.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "JP NAGAR 6th phase, Bengaluru"
    },
    "menu": [
      {
        "id": "m130",
        "name": "Classic Cheeseburger",
        "description": "Beef patty, cheddar, house sauce",
        "price": 249,
        "category": "Burgers",
        "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=60",
        "isVeg": false,
        "bestseller": true
      },
      {
        "id": "m131",
        "name": "Crispy Veg Burger",
        "description": "Corn & pea patty, crispy onions",
        "price": 149,
        "category": "Burgers",
        "image": "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m132",
        "name": "Grilled Chicken Burger",
        "description": "Chargrilled chicken, garlic mayo",
        "price": 279,
        "category": "Burgers",
        "image": "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=60",
        "isVeg": false
      },
      {
        "id": "m133",
        "name": "Peri Peri Fries",
        "description": "Cajun-seasoned fries",
        "price": 129,
        "category": "Sides",
        "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m134",
        "name": "Thick Chocolate Shake",
        "description": "Premium chocolate shake",
        "price": 199,
        "category": "Beverages",
        "image": "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r15",
    "name": "Thalassery Restaurant",
    "cuisine": [
      "Kerala",
      "Biryani",
      "South Indian",
      "Arabian",
      "Chinese",
      "Beverages",
      "Desserts",
      "Fast Food",
      "Snacks"
    ],
    "priceForTwo": 450,
    "rating": 4.4,
    "ratingCount": 2900,
    "deliveryTimeMins": 36,
    "image": "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=800&q=60",
    "location": "Mysore Road, Bengaluru",
    "categoryId": "chinese",
    "offers": [
      "Flat menu at ₹99"
    ],
    "tags": [
      "Kerala",
      "Fast Delivery"
    ],
    "description": "Thalassery Restaurant — Kerala, Biryani, South Indian, Arabian, Chinese, Beverages, Desserts, Fast Food, Snacks. Popular on Swiggy in Mysore Road.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "Mysore Road, Bengaluru"
    },
    "menu": [
      {
        "id": "m140",
        "name": "Veg Hakka Noodles",
        "description": "Wok-tossed noodles, crunchy veg",
        "price": 220,
        "category": "Noodles",
        "image": "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m141",
        "name": "Chicken Fried Rice",
        "description": "Egg-fried rice, chicken, spring onion",
        "price": 260,
        "category": "Rice",
        "image": "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&q=60",
        "isVeg": false
      },
      {
        "id": "m142",
        "name": "Chilli Paneer",
        "description": "Crispy paneer, hot garlic sauce",
        "price": 280,
        "category": "Starters",
        "image": "https://images.unsplash.com/photo-1552611052-33e04de081de?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m143",
        "name": "Veg Momos (8 pcs)",
        "description": "Steamed dumplings, spicy chutney",
        "price": 160,
        "category": "Momos",
        "image": "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m144",
        "name": "Chicken Manchurian",
        "description": "Fried chicken balls, Manchurian glaze",
        "price": 299,
        "category": "Starters",
        "image": "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&q=60",
        "isVeg": false
      }
    ]
  },
  {
    "id": "r16",
    "name": "RNR Biryani",
    "cuisine": [
      "Biryani",
      "South Indian"
    ],
    "priceForTwo": 350,
    "rating": 4.4,
    "ratingCount": 6800,
    "deliveryTimeMins": 44,
    "image": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&q=60",
    "location": "5th Stage, Bengaluru",
    "categoryId": "south-indian",
    "offers": [
      "Flat menu at ITEMS AT ₹40"
    ],
    "tags": [
      "Biryani",
      "Fast Delivery"
    ],
    "description": "RNR Biryani — Biryani, South Indian. Popular on Swiggy in 5th Stage.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "5th Stage, Bengaluru"
    },
    "menu": [
      {
        "id": "m150",
        "name": "Masala Dosa",
        "description": "Crisp golden dosa, potato masala",
        "price": 120,
        "category": "Dosa",
        "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m151",
        "name": "Idli Sambar (2 pcs)",
        "description": "Steamed rice cakes, sambar & chutney",
        "price": 80,
        "category": "Breakfast",
        "image": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m152",
        "name": "Filter Coffee",
        "description": "Frothy south Indian filter coffee",
        "price": 60,
        "category": "Beverages",
        "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m153",
        "name": "Rava Idli",
        "description": "Semolina idli, podi & ghee",
        "price": 110,
        "category": "Breakfast",
        "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m154",
        "name": "Medu Vada",
        "description": "Crispy lentil donut, sambar",
        "price": 90,
        "category": "Breakfast",
        "image": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r17",
    "name": "Domino's Pizza",
    "cuisine": [
      "Pizzas",
      "Italian",
      "Pastas",
      "Desserts"
    ],
    "priceForTwo": 400,
    "rating": 4.3,
    "ratingCount": 7800,
    "deliveryTimeMins": 20,
    "image": "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=60",
    "location": "Sapthagiri Layout, Bengaluru",
    "categoryId": "pizza",
    "offers": [
      "Flat menu at ₹49"
    ],
    "tags": [
      "Pizzas",
      "Fast Delivery"
    ],
    "description": "Domino's Pizza — Pizzas, Italian, Pastas, Desserts. Popular on Swiggy in Sapthagiri Layout.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "Sapthagiri Layout, Bengaluru"
    },
    "menu": [
      {
        "id": "m160",
        "name": "Margherita Pizza",
        "description": "Classic tomato, basil, mozzarella",
        "price": 299,
        "category": "Pizza",
        "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m161",
        "name": "Farmhouse Pizza",
        "description": "Onion, capsicum, mushroom, olives",
        "price": 399,
        "category": "Pizza",
        "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m162",
        "name": "Chicken Tikka Pizza",
        "description": "Smoky tikka chunks, onion, mint drizzle",
        "price": 449,
        "category": "Pizza",
        "image": "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=60",
        "isVeg": false
      },
      {
        "id": "m163",
        "name": "Garlic Breadsticks",
        "description": "Butter-garlic sticks, marinara dip",
        "price": 179,
        "category": "Sides",
        "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r18",
    "name": "The Belgian Waffle Co.",
    "cuisine": [
      "Waffle",
      "Desserts",
      "Ice Cream",
      "Beverages"
    ],
    "priceForTwo": 200,
    "rating": 4.3,
    "ratingCount": 2200,
    "deliveryTimeMins": 45,
    "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=60",
    "location": "Kengeri Satelliite Town, Bengaluru",
    "categoryId": "desserts",
    "offers": [
      "Flat ₹75 off"
    ],
    "tags": [
      "Waffle",
      "Fast Delivery"
    ],
    "description": "The Belgian Waffle Co. — Waffle, Desserts, Ice Cream, Beverages. Popular on Swiggy in Kengeri Satelliite Town.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "Kengeri Satelliite Town, Bengaluru"
    },
    "menu": [
      {
        "id": "m170",
        "name": "Belgian Waffle",
        "description": "Crispy waffle, choco drizzle",
        "price": 220,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m171",
        "name": "Sundae Classic",
        "description": "Vanilla, hot fudge, nuts",
        "price": 180,
        "category": "Ice Cream",
        "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m172",
        "name": "Red Velvet Slice",
        "description": "Cream-cheese frosted",
        "price": 240,
        "category": "Bakery",
        "image": "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m173",
        "name": "Cold Coffee",
        "description": "Blended coffee frappe",
        "price": 160,
        "category": "Beverages",
        "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m174",
        "name": "Choco Lava Cake",
        "description": "Molten centre, powdered sugar",
        "price": 210,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r19",
    "name": "Dum Safar Biryani",
    "cuisine": [
      "Biryani",
      "Hyderabadi",
      "Kebabs",
      "North Indian",
      "barbeque"
    ],
    "priceForTwo": 500,
    "rating": 3.6,
    "ratingCount": 927,
    "deliveryTimeMins": 44,
    "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=60",
    "location": "Doddakallasandra, Bengaluru",
    "categoryId": "north-indian",
    "offers": [
      "Flat menu at ₹99"
    ],
    "tags": [
      "Biryani",
      "Fast Delivery"
    ],
    "description": "Dum Safar Biryani — Biryani, Hyderabadi, Kebabs, North Indian, barbeque. Popular on Swiggy in Doddakallasandra.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "Doddakallasandra, Bengaluru"
    },
    "menu": [
      {
        "id": "m180",
        "name": "Paneer Butter Masala",
        "description": "Rich creamy tomato gravy",
        "price": 320,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m181",
        "name": "Butter Chicken",
        "description": "Tandoori chicken, makhani gravy",
        "price": 380,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=60",
        "isVeg": false,
        "bestseller": true
      },
      {
        "id": "m182",
        "name": "Dal Tadka",
        "description": "Yellow dal, ghee tempering",
        "price": 240,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m183",
        "name": "Butter Naan",
        "description": "Tandoor naan brushed with butter",
        "price": 60,
        "category": "Breads",
        "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m184",
        "name": "Gulab Jamun (2 pcs)",
        "description": "Warm syrup-soaked dumplings",
        "price": 99,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r20",
    "name": "Baskin Robbins",
    "cuisine": [
      "Desserts",
      "Ice Cream"
    ],
    "priceForTwo": 250,
    "rating": 4.5,
    "ratingCount": 312,
    "deliveryTimeMins": 37,
    "image": "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=800&q=60",
    "location": "B.B.M.P West, Bengaluru",
    "categoryId": "desserts",
    "offers": [
      "Flat menu at ITEMS AT ₹15"
    ],
    "tags": [
      "Top Rated",
      "Fast Delivery"
    ],
    "description": "Baskin Robbins — Desserts, Ice Cream. Popular on Swiggy in B.B.M.P West.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "B.B.M.P West, Bengaluru"
    },
    "menu": [
      {
        "id": "m190",
        "name": "Belgian Waffle",
        "description": "Crispy waffle, choco drizzle",
        "price": 220,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m191",
        "name": "Sundae Classic",
        "description": "Vanilla, hot fudge, nuts",
        "price": 180,
        "category": "Ice Cream",
        "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m192",
        "name": "Red Velvet Slice",
        "description": "Cream-cheese frosted",
        "price": 240,
        "category": "Bakery",
        "image": "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m193",
        "name": "Cold Coffee",
        "description": "Blended coffee frappe",
        "price": 160,
        "category": "Beverages",
        "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m194",
        "name": "Choco Lava Cake",
        "description": "Molten centre, powdered sugar",
        "price": 210,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r21",
    "name": "Magnolia Bakery",
    "cuisine": [
      "Bakery",
      "Desserts",
      "Ice Cream"
    ],
    "priceForTwo": 400,
    "rating": 4.6,
    "ratingCount": 5000,
    "deliveryTimeMins": 48,
    "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=60",
    "location": "Kanakapura Road, Bengaluru",
    "categoryId": "desserts",
    "offers": [
      "Flat ₹550 off"
    ],
    "tags": [
      "Top Rated",
      "Fast Delivery"
    ],
    "description": "Magnolia Bakery — Bakery, Desserts, Ice Cream. Popular on Swiggy in Kanakapura Road.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "Kanakapura Road, Bengaluru"
    },
    "menu": [
      {
        "id": "m200",
        "name": "Belgian Waffle",
        "description": "Crispy waffle, choco drizzle",
        "price": 220,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m201",
        "name": "Sundae Classic",
        "description": "Vanilla, hot fudge, nuts",
        "price": 180,
        "category": "Ice Cream",
        "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m202",
        "name": "Red Velvet Slice",
        "description": "Cream-cheese frosted",
        "price": 240,
        "category": "Bakery",
        "image": "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m203",
        "name": "Cold Coffee",
        "description": "Blended coffee frappe",
        "price": 160,
        "category": "Beverages",
        "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r22",
    "name": "Pizza Hut",
    "cuisine": [
      "Pizzas"
    ],
    "priceForTwo": 350,
    "rating": 4.1,
    "ratingCount": 4700,
    "deliveryTimeMins": 34,
    "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=60",
    "location": "Gottigere, Bengaluru",
    "categoryId": "pizza",
    "offers": [
      "50% off up to ₹100"
    ],
    "tags": [
      "Pizzas",
      "Fast Delivery"
    ],
    "description": "Pizza Hut — Pizzas. Popular on Swiggy in Gottigere.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "Gottigere, Bengaluru"
    },
    "menu": [
      {
        "id": "m210",
        "name": "Margherita Pizza",
        "description": "Classic tomato, basil, mozzarella",
        "price": 299,
        "category": "Pizza",
        "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m211",
        "name": "Farmhouse Pizza",
        "description": "Onion, capsicum, mushroom, olives",
        "price": 399,
        "category": "Pizza",
        "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m212",
        "name": "Chicken Tikka Pizza",
        "description": "Smoky tikka chunks, onion, mint drizzle",
        "price": 449,
        "category": "Pizza",
        "image": "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=60",
        "isVeg": false
      },
      {
        "id": "m213",
        "name": "Garlic Breadsticks",
        "description": "Butter-garlic sticks, marinara dip",
        "price": 179,
        "category": "Sides",
        "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m214",
        "name": "Chocolate Volcano",
        "description": "Molten chocolate cake with ice cream",
        "price": 199,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r23",
    "name": "Grameen Kulfi",
    "cuisine": [
      "Ice Cream",
      "Desserts"
    ],
    "priceForTwo": 120,
    "rating": 4.9,
    "ratingCount": 256,
    "deliveryTimeMins": 37,
    "image": "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=800&q=60",
    "location": "BANGALORE SOUTH, Bengaluru",
    "categoryId": "desserts",
    "offers": [
      "Flat menu at ITEMS AT ₹48"
    ],
    "tags": [
      "Top Rated",
      "Fast Delivery"
    ],
    "description": "Grameen Kulfi — Ice Cream, Desserts. Popular on Swiggy in BANGALORE SOUTH.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "BANGALORE SOUTH, Bengaluru"
    },
    "menu": [
      {
        "id": "m220",
        "name": "Belgian Waffle",
        "description": "Crispy waffle, choco drizzle",
        "price": 220,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m221",
        "name": "Sundae Classic",
        "description": "Vanilla, hot fudge, nuts",
        "price": 180,
        "category": "Ice Cream",
        "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m222",
        "name": "Red Velvet Slice",
        "description": "Cream-cheese frosted",
        "price": 240,
        "category": "Bakery",
        "image": "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m223",
        "name": "Cold Coffee",
        "description": "Blended coffee frappe",
        "price": 160,
        "category": "Beverages",
        "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m224",
        "name": "Choco Lava Cake",
        "description": "Molten centre, powdered sugar",
        "price": 210,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r24",
    "name": "Goila Butter Chicken",
    "cuisine": [
      "North Indian",
      "Biryani",
      "Mughlai"
    ],
    "priceForTwo": 600,
    "rating": 3.9,
    "ratingCount": 1000,
    "deliveryTimeMins": 57,
    "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=60",
    "location": "Raghuvanahalli, Bengaluru",
    "categoryId": "north-indian",
    "offers": [
      "Flat menu at ITEMS AT ₹149"
    ],
    "tags": [
      "North Indian",
      "Fast Delivery"
    ],
    "description": "Goila Butter Chicken — North Indian, Biryani, Mughlai. Popular on Swiggy in Raghuvanahalli.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "Raghuvanahalli, Bengaluru"
    },
    "menu": [
      {
        "id": "m230",
        "name": "Paneer Butter Masala",
        "description": "Rich creamy tomato gravy",
        "price": 320,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m231",
        "name": "Butter Chicken",
        "description": "Tandoori chicken, makhani gravy",
        "price": 380,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=60",
        "isVeg": false,
        "bestseller": true
      },
      {
        "id": "m232",
        "name": "Dal Tadka",
        "description": "Yellow dal, ghee tempering",
        "price": 240,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m233",
        "name": "Butter Naan",
        "description": "Tandoor naan brushed with butter",
        "price": 60,
        "category": "Breads",
        "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m234",
        "name": "Gulab Jamun (2 pcs)",
        "description": "Warm syrup-soaked dumplings",
        "price": 99,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r25",
    "name": "Paris Panini",
    "cuisine": [
      "sandwich",
      "wrap",
      "Fast Food",
      "Pastas",
      "Italian",
      "Salads",
      "Healthy Food",
      "Desserts",
      "Continental"
    ],
    "priceForTwo": 500,
    "rating": 4.6,
    "ratingCount": 13000,
    "deliveryTimeMins": 48,
    "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=60",
    "location": "JP Nagar, Bengaluru",
    "categoryId": "pizza",
    "offers": [
      "Flat ₹550 off"
    ],
    "tags": [
      "Top Rated",
      "Fast Delivery"
    ],
    "description": "Paris Panini — sandwich, wrap, Fast Food, Pastas, Italian, Salads, Healthy Food, Desserts, Continental. Popular on Swiggy in JP Nagar.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "JP Nagar, Bengaluru"
    },
    "menu": [
      {
        "id": "m240",
        "name": "Margherita Pizza",
        "description": "Classic tomato, basil, mozzarella",
        "price": 299,
        "category": "Pizza",
        "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m241",
        "name": "Farmhouse Pizza",
        "description": "Onion, capsicum, mushroom, olives",
        "price": 399,
        "category": "Pizza",
        "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m242",
        "name": "Chicken Tikka Pizza",
        "description": "Smoky tikka chunks, onion, mint drizzle",
        "price": 449,
        "category": "Pizza",
        "image": "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=60",
        "isVeg": false
      },
      {
        "id": "m243",
        "name": "Garlic Breadsticks",
        "description": "Butter-garlic sticks, marinara dip",
        "price": 179,
        "category": "Sides",
        "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r26",
    "name": "Al Baraka Restaurant",
    "cuisine": [
      "South Indian",
      "Arabian",
      "Indian",
      "Juices"
    ],
    "priceForTwo": 100,
    "rating": 3.9,
    "ratingCount": 883,
    "deliveryTimeMins": 37,
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&q=60",
    "location": "Rajarajeshwari Nagar, Bengaluru",
    "categoryId": "south-indian",
    "offers": [
      "FREE ITEM"
    ],
    "tags": [
      "South Indian",
      "Fast Delivery"
    ],
    "description": "Al Baraka Restaurant — South Indian, Arabian, Indian, Juices. Popular on Swiggy in Rajarajeshwari Nagar.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "Rajarajeshwari Nagar, Bengaluru"
    },
    "menu": [
      {
        "id": "m250",
        "name": "Masala Dosa",
        "description": "Crisp golden dosa, potato masala",
        "price": 120,
        "category": "Dosa",
        "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m251",
        "name": "Idli Sambar (2 pcs)",
        "description": "Steamed rice cakes, sambar & chutney",
        "price": 80,
        "category": "Breakfast",
        "image": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m252",
        "name": "Filter Coffee",
        "description": "Frothy south Indian filter coffee",
        "price": 60,
        "category": "Beverages",
        "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m253",
        "name": "Rava Idli",
        "description": "Semolina idli, podi & ghee",
        "price": 110,
        "category": "Breakfast",
        "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m254",
        "name": "Medu Vada",
        "description": "Crispy lentil donut, sambar",
        "price": 90,
        "category": "Breakfast",
        "image": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r27",
    "name": "Boba Bhai",
    "cuisine": [
      "Bubble Tea",
      "Burger",
      "Korean",
      "Beverages",
      "Fast Food",
      "Juice and shake"
    ],
    "priceForTwo": 200,
    "rating": 4.3,
    "ratingCount": 956,
    "deliveryTimeMins": 54,
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=60",
    "location": "Banshanakari, Bengaluru",
    "categoryId": "burger",
    "offers": [
      "Flat menu at ITEMS AT ₹158"
    ],
    "tags": [
      "Bubble Tea",
      "Fast Delivery"
    ],
    "description": "Boba Bhai — Bubble Tea, Burger, Korean, Beverages, Fast Food, Juice and shake. Popular on Swiggy in Banshanakari.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "Banshanakari, Bengaluru"
    },
    "menu": [
      {
        "id": "m260",
        "name": "Classic Cheeseburger",
        "description": "Beef patty, cheddar, house sauce",
        "price": 249,
        "category": "Burgers",
        "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=60",
        "isVeg": false,
        "bestseller": true
      },
      {
        "id": "m261",
        "name": "Crispy Veg Burger",
        "description": "Corn & pea patty, crispy onions",
        "price": 149,
        "category": "Burgers",
        "image": "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m262",
        "name": "Grilled Chicken Burger",
        "description": "Chargrilled chicken, garlic mayo",
        "price": 279,
        "category": "Burgers",
        "image": "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=60",
        "isVeg": false
      },
      {
        "id": "m263",
        "name": "Peri Peri Fries",
        "description": "Cajun-seasoned fries",
        "price": 129,
        "category": "Sides",
        "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m264",
        "name": "Thick Chocolate Shake",
        "description": "Premium chocolate shake",
        "price": 199,
        "category": "Beverages",
        "image": "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r28",
    "name": "The Pizza Bakery",
    "cuisine": [
      "Pizzas",
      "Pastas",
      "Italian",
      "Desserts",
      "Continental"
    ],
    "priceForTwo": 700,
    "rating": 4.4,
    "ratingCount": 16000,
    "deliveryTimeMins": 54,
    "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=60",
    "location": "JP Nagar, Bengaluru",
    "categoryId": "pizza",
    "offers": [
      "Flat ₹550 off"
    ],
    "tags": [
      "Pizzas",
      "Fast Delivery"
    ],
    "description": "The Pizza Bakery — Pizzas, Pastas, Italian, Desserts, Continental. Popular on Swiggy in JP Nagar.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "JP Nagar, Bengaluru"
    },
    "menu": [
      {
        "id": "m270",
        "name": "Margherita Pizza",
        "description": "Classic tomato, basil, mozzarella",
        "price": 299,
        "category": "Pizza",
        "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m271",
        "name": "Farmhouse Pizza",
        "description": "Onion, capsicum, mushroom, olives",
        "price": 399,
        "category": "Pizza",
        "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m272",
        "name": "Chicken Tikka Pizza",
        "description": "Smoky tikka chunks, onion, mint drizzle",
        "price": 449,
        "category": "Pizza",
        "image": "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=60",
        "isVeg": false
      },
      {
        "id": "m273",
        "name": "Garlic Breadsticks",
        "description": "Butter-garlic sticks, marinara dip",
        "price": 179,
        "category": "Sides",
        "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m274",
        "name": "Chocolate Volcano",
        "description": "Molten chocolate cake with ice cream",
        "price": 199,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r29",
    "name": "Ambari gardenia",
    "cuisine": [
      "North Indian",
      "South Indian",
      "Indian"
    ],
    "priceForTwo": 499,
    "rating": 4.5,
    "ratingCount": 4600,
    "deliveryTimeMins": 41,
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&q=60",
    "location": "Kengeri, Bengaluru",
    "categoryId": "south-indian",
    "offers": [
      "Flat menu at ITEMS AT ₹39"
    ],
    "tags": [
      "Top Rated",
      "Fast Delivery"
    ],
    "description": "Ambari gardenia — North Indian, South Indian, Indian. Popular on Swiggy in Kengeri.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "Kengeri, Bengaluru"
    },
    "menu": [
      {
        "id": "m280",
        "name": "Masala Dosa",
        "description": "Crisp golden dosa, potato masala",
        "price": 120,
        "category": "Dosa",
        "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m281",
        "name": "Idli Sambar (2 pcs)",
        "description": "Steamed rice cakes, sambar & chutney",
        "price": 80,
        "category": "Breakfast",
        "image": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m282",
        "name": "Filter Coffee",
        "description": "Frothy south Indian filter coffee",
        "price": 60,
        "category": "Beverages",
        "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m283",
        "name": "Rava Idli",
        "description": "Semolina idli, podi & ghee",
        "price": 110,
        "category": "Breakfast",
        "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r30",
    "name": "ITC Master Chef Creations",
    "cuisine": [
      "North Indian",
      "Biryani",
      "Kebabs",
      "rolls",
      "Desserts"
    ],
    "priceForTwo": 650,
    "rating": 4.4,
    "ratingCount": 1500,
    "deliveryTimeMins": 41,
    "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=60",
    "location": "Doddakallasandra, Bengaluru",
    "categoryId": "north-indian",
    "offers": [
      "50% off up to ₹100"
    ],
    "tags": [
      "North Indian",
      "Fast Delivery"
    ],
    "description": "ITC Master Chef Creations — North Indian, Biryani, Kebabs, rolls, Desserts. Popular on Swiggy in Doddakallasandra.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "Doddakallasandra, Bengaluru"
    },
    "menu": [
      {
        "id": "m290",
        "name": "Paneer Butter Masala",
        "description": "Rich creamy tomato gravy",
        "price": 320,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m291",
        "name": "Butter Chicken",
        "description": "Tandoori chicken, makhani gravy",
        "price": 380,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=60",
        "isVeg": false,
        "bestseller": true
      },
      {
        "id": "m292",
        "name": "Dal Tadka",
        "description": "Yellow dal, ghee tempering",
        "price": 240,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m293",
        "name": "Butter Naan",
        "description": "Tandoor naan brushed with butter",
        "price": 60,
        "category": "Breads",
        "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m294",
        "name": "Gulab Jamun (2 pcs)",
        "description": "Warm syrup-soaked dumplings",
        "price": 99,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r31",
    "name": "The Brooklyn Creamery",
    "cuisine": [
      "Ice Cream",
      "Desserts",
      "Healthy Food"
    ],
    "priceForTwo": 200,
    "rating": 4.6,
    "ratingCount": 951,
    "deliveryTimeMins": 28,
    "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=60",
    "location": "Gottigere, Bengaluru",
    "categoryId": "desserts",
    "offers": [
      "Flat menu at ITEMS AT ₹59"
    ],
    "tags": [
      "Top Rated",
      "Fast Delivery"
    ],
    "description": "The Brooklyn Creamery — Ice Cream, Desserts, Healthy Food. Popular on Swiggy in Gottigere.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "Gottigere, Bengaluru"
    },
    "menu": [
      {
        "id": "m300",
        "name": "Belgian Waffle",
        "description": "Crispy waffle, choco drizzle",
        "price": 220,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m301",
        "name": "Sundae Classic",
        "description": "Vanilla, hot fudge, nuts",
        "price": 180,
        "category": "Ice Cream",
        "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m302",
        "name": "Red Velvet Slice",
        "description": "Cream-cheese frosted",
        "price": 240,
        "category": "Bakery",
        "image": "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m303",
        "name": "Cold Coffee",
        "description": "Blended coffee frappe",
        "price": 160,
        "category": "Beverages",
        "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m304",
        "name": "Choco Lava Cake",
        "description": "Molten centre, powdered sugar",
        "price": 210,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r32",
    "name": "Samosa Party",
    "cuisine": [
      "Fast Food",
      "Snacks",
      "Beverages",
      "Chaat",
      "North Indian",
      "Street Food",
      "Sweets",
      "Desserts",
      "Punjabi",
      "Bakery"
    ],
    "priceForTwo": 150,
    "rating": 4.3,
    "ratingCount": 493,
    "deliveryTimeMins": 39,
    "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=800&q=60",
    "location": "VAISHNAVI NAGAR, Bengaluru",
    "categoryId": "north-indian",
    "offers": [
      "50% off up to ₹100"
    ],
    "tags": [
      "Fast Food",
      "Fast Delivery"
    ],
    "description": "Samosa Party — Fast Food, Snacks, Beverages, Chaat, North Indian, Street Food, Sweets, Desserts, Punjabi, Bakery. Popular on Swiggy in VAISHNAVI NAGAR.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "VAISHNAVI NAGAR, Bengaluru"
    },
    "menu": [
      {
        "id": "m310",
        "name": "Paneer Butter Masala",
        "description": "Rich creamy tomato gravy",
        "price": 320,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m311",
        "name": "Butter Chicken",
        "description": "Tandoori chicken, makhani gravy",
        "price": 380,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=60",
        "isVeg": false,
        "bestseller": true
      },
      {
        "id": "m312",
        "name": "Dal Tadka",
        "description": "Yellow dal, ghee tempering",
        "price": 240,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m313",
        "name": "Butter Naan",
        "description": "Tandoor naan brushed with butter",
        "price": 60,
        "category": "Breads",
        "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m314",
        "name": "Gulab Jamun (2 pcs)",
        "description": "Warm syrup-soaked dumplings",
        "price": 99,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r33",
    "name": "Oven Story Pizza",
    "cuisine": [
      "Pizzas",
      "Pastas",
      "Italian",
      "Desserts",
      "Beverages"
    ],
    "priceForTwo": 400,
    "rating": 4.6,
    "ratingCount": 6100,
    "deliveryTimeMins": 27,
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=60",
    "location": "DODDAKAMMANAHALLI, Bengaluru",
    "categoryId": "pizza",
    "offers": [
      "Flat menu at ITEMS AT ₹79"
    ],
    "tags": [
      "Top Rated",
      "Fast Delivery"
    ],
    "description": "Oven Story Pizza — Pizzas, Pastas, Italian, Desserts, Beverages. Popular on Swiggy in DODDAKAMMANAHALLI.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "DODDAKAMMANAHALLI, Bengaluru"
    },
    "menu": [
      {
        "id": "m320",
        "name": "Margherita Pizza",
        "description": "Classic tomato, basil, mozzarella",
        "price": 299,
        "category": "Pizza",
        "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m321",
        "name": "Farmhouse Pizza",
        "description": "Onion, capsicum, mushroom, olives",
        "price": 399,
        "category": "Pizza",
        "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m322",
        "name": "Chicken Tikka Pizza",
        "description": "Smoky tikka chunks, onion, mint drizzle",
        "price": 449,
        "category": "Pizza",
        "image": "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=60",
        "isVeg": false
      },
      {
        "id": "m323",
        "name": "Garlic Breadsticks",
        "description": "Butter-garlic sticks, marinara dip",
        "price": 179,
        "category": "Sides",
        "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r34",
    "name": "Brik Oven",
    "cuisine": [
      "Italian",
      "Pizzas",
      "sandwich",
      "Salads",
      "Desserts"
    ],
    "priceForTwo": 800,
    "rating": 4.2,
    "ratingCount": 2600,
    "deliveryTimeMins": 62,
    "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=60",
    "location": "Kanakapura Road, Bengaluru",
    "categoryId": "pizza",
    "offers": [
      "Flat ₹550 off"
    ],
    "tags": [
      "Italian",
      "Fast Delivery"
    ],
    "description": "Brik Oven — Italian, Pizzas, sandwich, Salads, Desserts. Popular on Swiggy in Kanakapura Road.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "Kanakapura Road, Bengaluru"
    },
    "menu": [
      {
        "id": "m330",
        "name": "Margherita Pizza",
        "description": "Classic tomato, basil, mozzarella",
        "price": 299,
        "category": "Pizza",
        "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m331",
        "name": "Farmhouse Pizza",
        "description": "Onion, capsicum, mushroom, olives",
        "price": 399,
        "category": "Pizza",
        "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m332",
        "name": "Chicken Tikka Pizza",
        "description": "Smoky tikka chunks, onion, mint drizzle",
        "price": 449,
        "category": "Pizza",
        "image": "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=60",
        "isVeg": false
      },
      {
        "id": "m333",
        "name": "Garlic Breadsticks",
        "description": "Butter-garlic sticks, marinara dip",
        "price": 179,
        "category": "Sides",
        "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m334",
        "name": "Chocolate Volcano",
        "description": "Molten chocolate cake with ice cream",
        "price": 199,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r35",
    "name": "Truffles",
    "cuisine": [
      "American",
      "Continental",
      "Desserts",
      "Italian",
      "Beverages"
    ],
    "priceForTwo": 350,
    "rating": 4.5,
    "ratingCount": 167000,
    "deliveryTimeMins": 56,
    "image": "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=60",
    "location": "1st Phase, Bengaluru",
    "categoryId": "pizza",
    "offers": [
      "Flat ₹80 off"
    ],
    "tags": [
      "Top Rated",
      "Fast Delivery"
    ],
    "description": "Truffles — American, Continental, Desserts, Italian, Beverages. Popular on Swiggy in 1st Phase.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "1st Phase, Bengaluru"
    },
    "menu": [
      {
        "id": "m340",
        "name": "Margherita Pizza",
        "description": "Classic tomato, basil, mozzarella",
        "price": 299,
        "category": "Pizza",
        "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m341",
        "name": "Farmhouse Pizza",
        "description": "Onion, capsicum, mushroom, olives",
        "price": 399,
        "category": "Pizza",
        "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m342",
        "name": "Chicken Tikka Pizza",
        "description": "Smoky tikka chunks, onion, mint drizzle",
        "price": 449,
        "category": "Pizza",
        "image": "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=60",
        "isVeg": false
      },
      {
        "id": "m343",
        "name": "Garlic Breadsticks",
        "description": "Butter-garlic sticks, marinara dip",
        "price": 179,
        "category": "Sides",
        "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m344",
        "name": "Chocolate Volcano",
        "description": "Molten chocolate cake with ice cream",
        "price": 199,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r36",
    "name": "Cafe Coffee Day",
    "cuisine": [
      "Beverages",
      "Cafe",
      "Snacks",
      "Desserts",
      "Burgers",
      "Ice Cream",
      "Bakery",
      "Fast Food"
    ],
    "priceForTwo": 400,
    "rating": 3.8,
    "ratingCount": 72,
    "deliveryTimeMins": 33,
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=60",
    "location": "Kanakapura Road, Bengaluru",
    "categoryId": "burger",
    "offers": [
      "70% off up to ₹140"
    ],
    "tags": [
      "Beverages",
      "Fast Delivery"
    ],
    "description": "Cafe Coffee Day — Beverages, Cafe, Snacks, Desserts, Burgers, Ice Cream, Bakery, Fast Food. Popular on Swiggy in Kanakapura Road.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "Kanakapura Road, Bengaluru"
    },
    "menu": [
      {
        "id": "m350",
        "name": "Classic Cheeseburger",
        "description": "Beef patty, cheddar, house sauce",
        "price": 249,
        "category": "Burgers",
        "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=60",
        "isVeg": false,
        "bestseller": true
      },
      {
        "id": "m351",
        "name": "Crispy Veg Burger",
        "description": "Corn & pea patty, crispy onions",
        "price": 149,
        "category": "Burgers",
        "image": "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m352",
        "name": "Grilled Chicken Burger",
        "description": "Chargrilled chicken, garlic mayo",
        "price": 279,
        "category": "Burgers",
        "image": "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=60",
        "isVeg": false
      },
      {
        "id": "m353",
        "name": "Peri Peri Fries",
        "description": "Cajun-seasoned fries",
        "price": 129,
        "category": "Sides",
        "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m354",
        "name": "Thick Chocolate Shake",
        "description": "Premium chocolate shake",
        "price": 199,
        "category": "Beverages",
        "image": "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r37",
    "name": "La Pino'z Pizza",
    "cuisine": [
      "Pizzas",
      "Pastas",
      "Italian",
      "Desserts",
      "Beverages"
    ],
    "priceForTwo": 250,
    "rating": 4.4,
    "ratingCount": 1700,
    "deliveryTimeMins": 39,
    "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=60",
    "location": "Kanakapura Main Road, Bengaluru",
    "categoryId": "pizza",
    "offers": [
      "70% off up to ₹140"
    ],
    "tags": [
      "Pizzas",
      "Fast Delivery"
    ],
    "description": "La Pino'z Pizza — Pizzas, Pastas, Italian, Desserts, Beverages. Popular on Swiggy in Kanakapura Main Road.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "Kanakapura Main Road, Bengaluru"
    },
    "menu": [
      {
        "id": "m360",
        "name": "Margherita Pizza",
        "description": "Classic tomato, basil, mozzarella",
        "price": 299,
        "category": "Pizza",
        "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m361",
        "name": "Farmhouse Pizza",
        "description": "Onion, capsicum, mushroom, olives",
        "price": 399,
        "category": "Pizza",
        "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m362",
        "name": "Chicken Tikka Pizza",
        "description": "Smoky tikka chunks, onion, mint drizzle",
        "price": 449,
        "category": "Pizza",
        "image": "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=60",
        "isVeg": false
      },
      {
        "id": "m363",
        "name": "Garlic Breadsticks",
        "description": "Butter-garlic sticks, marinara dip",
        "price": 179,
        "category": "Sides",
        "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r38",
    "name": "Andhra Gunpowder",
    "cuisine": [
      "Andhra",
      "Biryani",
      "South Indian"
    ],
    "priceForTwo": 350,
    "rating": 4.4,
    "ratingCount": 6600,
    "deliveryTimeMins": 28,
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&q=60",
    "location": "Valankni Road, Bengaluru",
    "categoryId": "south-indian",
    "offers": [
      "70% off up to ₹140"
    ],
    "tags": [
      "Andhra",
      "Fast Delivery"
    ],
    "description": "Andhra Gunpowder — Andhra, Biryani, South Indian. Popular on Swiggy in Valankni Road.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "Valankni Road, Bengaluru"
    },
    "menu": [
      {
        "id": "m370",
        "name": "Masala Dosa",
        "description": "Crisp golden dosa, potato masala",
        "price": 120,
        "category": "Dosa",
        "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m371",
        "name": "Idli Sambar (2 pcs)",
        "description": "Steamed rice cakes, sambar & chutney",
        "price": 80,
        "category": "Breakfast",
        "image": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m372",
        "name": "Filter Coffee",
        "description": "Frothy south Indian filter coffee",
        "price": 60,
        "category": "Beverages",
        "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m373",
        "name": "Rava Idli",
        "description": "Semolina idli, podi & ghee",
        "price": 110,
        "category": "Breakfast",
        "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m374",
        "name": "Medu Vada",
        "description": "Crispy lentil donut, sambar",
        "price": 90,
        "category": "Breakfast",
        "image": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r39",
    "name": "Subway",
    "cuisine": [
      "sandwich",
      "Salads",
      "wrap",
      "Healthy Food"
    ],
    "priceForTwo": 350,
    "rating": 4.4,
    "ratingCount": 2000,
    "deliveryTimeMins": 57,
    "image": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&q=60",
    "location": "Kanakapura Road, Bengaluru",
    "categoryId": "rolls",
    "offers": [
      "Flat menu at ITEMS AT ₹69"
    ],
    "tags": [
      "sandwich",
      "Fast Delivery"
    ],
    "description": "Subway — sandwich, Salads, wrap, Healthy Food. Popular on Swiggy in Kanakapura Road.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "Kanakapura Road, Bengaluru"
    },
    "menu": [
      {
        "id": "m380",
        "name": "Paneer Kathi Roll",
        "description": "Spiced paneer, flaky paratha",
        "price": 139,
        "category": "Rolls",
        "image": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m381",
        "name": "Chicken Tikka Roll",
        "description": "Smoky tikka, onions, chutney",
        "price": 169,
        "category": "Rolls",
        "image": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&q=60",
        "isVeg": false
      },
      {
        "id": "m382",
        "name": "Egg Roll",
        "description": "Masala egg, onion, lime",
        "price": 119,
        "category": "Rolls",
        "image": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&q=60",
        "isVeg": false
      },
      {
        "id": "m383",
        "name": "Chocolate Roll",
        "description": "Choco-hazelnut dessert roll",
        "price": 129,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r40",
    "name": "Aligarh House",
    "cuisine": [
      "Biryani",
      "Mughlai",
      "Kebabs",
      "Lucknowi",
      "Fast Food",
      "Desserts",
      "Beverages"
    ],
    "priceForTwo": 400,
    "rating": 4.4,
    "ratingCount": 11000,
    "deliveryTimeMins": 62,
    "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=60",
    "location": "HSR Layout, Bengaluru",
    "categoryId": "north-indian",
    "offers": [],
    "tags": [
      "Biryani",
      "Fast Delivery"
    ],
    "description": "Aligarh House — Biryani, Mughlai, Kebabs, Lucknowi, Fast Food, Desserts, Beverages. Popular on Swiggy in HSR Layout.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "HSR Layout, Bengaluru"
    },
    "menu": [
      {
        "id": "m390",
        "name": "Paneer Butter Masala",
        "description": "Rich creamy tomato gravy",
        "price": 320,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m391",
        "name": "Butter Chicken",
        "description": "Tandoori chicken, makhani gravy",
        "price": 380,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=60",
        "isVeg": false,
        "bestseller": true
      },
      {
        "id": "m392",
        "name": "Dal Tadka",
        "description": "Yellow dal, ghee tempering",
        "price": 240,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m393",
        "name": "Butter Naan",
        "description": "Tandoor naan brushed with butter",
        "price": 60,
        "category": "Breads",
        "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m394",
        "name": "Gulab Jamun (2 pcs)",
        "description": "Warm syrup-soaked dumplings",
        "price": 99,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r41",
    "name": "A2B",
    "cuisine": [
      "South Indian",
      "North Indian",
      "Sweets",
      "Chinese"
    ],
    "priceForTwo": 300,
    "rating": 4.5,
    "ratingCount": 51000,
    "deliveryTimeMins": 49,
    "image": "https://images.unsplash.com/photo-1552611052-33e04de081de?w=800&q=60",
    "location": "Kanakapura Road, Bengaluru",
    "categoryId": "chinese",
    "offers": [
      "Flat menu at ITEMS AT ₹139"
    ],
    "tags": [
      "Top Rated",
      "Fast Delivery"
    ],
    "description": "A2B — South Indian, North Indian, Sweets, Chinese. Popular on Swiggy in Kanakapura Road.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "Kanakapura Road, Bengaluru"
    },
    "menu": [
      {
        "id": "m400",
        "name": "Veg Hakka Noodles",
        "description": "Wok-tossed noodles, crunchy veg",
        "price": 220,
        "category": "Noodles",
        "image": "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m401",
        "name": "Chicken Fried Rice",
        "description": "Egg-fried rice, chicken, spring onion",
        "price": 260,
        "category": "Rice",
        "image": "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&q=60",
        "isVeg": false
      },
      {
        "id": "m402",
        "name": "Chilli Paneer",
        "description": "Crispy paneer, hot garlic sauce",
        "price": 280,
        "category": "Starters",
        "image": "https://images.unsplash.com/photo-1552611052-33e04de081de?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m403",
        "name": "Veg Momos (8 pcs)",
        "description": "Steamed dumplings, spicy chutney",
        "price": 160,
        "category": "Momos",
        "image": "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r42",
    "name": "Salad Days",
    "cuisine": [
      "Salads",
      "healthy",
      "food",
      "Snacks"
    ],
    "priceForTwo": 500,
    "rating": 4.5,
    "ratingCount": 2700,
    "deliveryTimeMins": 27,
    "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=60",
    "location": "Electronic City, Bengaluru",
    "categoryId": "north-indian",
    "offers": [
      "Flat menu at ITEMS AT ₹129"
    ],
    "tags": [
      "Top Rated",
      "Fast Delivery"
    ],
    "description": "Salad Days — Salads, healthy, food, Snacks. Popular on Swiggy in Electronic City.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "Electronic City, Bengaluru"
    },
    "menu": [
      {
        "id": "m410",
        "name": "Paneer Butter Masala",
        "description": "Rich creamy tomato gravy",
        "price": 320,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m411",
        "name": "Butter Chicken",
        "description": "Tandoori chicken, makhani gravy",
        "price": 380,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=60",
        "isVeg": false,
        "bestseller": true
      },
      {
        "id": "m412",
        "name": "Dal Tadka",
        "description": "Yellow dal, ghee tempering",
        "price": 240,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m413",
        "name": "Butter Naan",
        "description": "Tandoor naan brushed with butter",
        "price": 60,
        "category": "Breads",
        "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m414",
        "name": "Gulab Jamun (2 pcs)",
        "description": "Warm syrup-soaked dumplings",
        "price": 99,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r43",
    "name": "Taco Bell",
    "cuisine": [
      "Mexican",
      "Fast Food",
      "Snacks"
    ],
    "priceForTwo": 300,
    "rating": 4.4,
    "ratingCount": 3700,
    "deliveryTimeMins": 55,
    "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=60",
    "location": "Forum Falcon City, Bengaluru",
    "categoryId": "street-food",
    "offers": [
      "65% off up to ₹125"
    ],
    "tags": [
      "Mexican",
      "Fast Delivery"
    ],
    "description": "Taco Bell — Mexican, Fast Food, Snacks. Popular on Swiggy in Forum Falcon City.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "Forum Falcon City, Bengaluru"
    },
    "menu": [
      {
        "id": "m420",
        "name": "Pani Puri (8 pcs)",
        "description": "Crisp puris, spiced water",
        "price": 60,
        "category": "Chaat",
        "image": "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m421",
        "name": "Vada Pav",
        "description": "Fried potato patty, pav, chutney",
        "price": 40,
        "category": "Snacks",
        "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m422",
        "name": "Pav Bhaji",
        "description": "Buttered pav, loaded bhaji",
        "price": 120,
        "category": "Chaat",
        "image": "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m423",
        "name": "Masala Chai",
        "description": "Spiced milk tea",
        "price": 30,
        "category": "Beverages",
        "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r44",
    "name": "Nandhana Palace",
    "cuisine": [
      "Biryani",
      "Andhra",
      "South Indian",
      "North Indian"
    ],
    "priceForTwo": 500,
    "rating": 4.3,
    "ratingCount": 37000,
    "deliveryTimeMins": 51,
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&q=60",
    "location": "Kanakapura Road, Bengaluru",
    "categoryId": "south-indian",
    "offers": [
      "Flat menu at ₹49"
    ],
    "tags": [
      "Biryani",
      "Fast Delivery"
    ],
    "description": "Nandhana Palace — Biryani, Andhra, South Indian, North Indian. Popular on Swiggy in Kanakapura Road.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "Kanakapura Road, Bengaluru"
    },
    "menu": [
      {
        "id": "m430",
        "name": "Masala Dosa",
        "description": "Crisp golden dosa, potato masala",
        "price": 120,
        "category": "Dosa",
        "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m431",
        "name": "Idli Sambar (2 pcs)",
        "description": "Steamed rice cakes, sambar & chutney",
        "price": 80,
        "category": "Breakfast",
        "image": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m432",
        "name": "Filter Coffee",
        "description": "Frothy south Indian filter coffee",
        "price": 60,
        "category": "Beverages",
        "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m433",
        "name": "Rava Idli",
        "description": "Semolina idli, podi & ghee",
        "price": 110,
        "category": "Breakfast",
        "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m434",
        "name": "Medu Vada",
        "description": "Crispy lentil donut, sambar",
        "price": 90,
        "category": "Breakfast",
        "image": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r45",
    "name": "Big Bowl",
    "cuisine": [
      "Chinese",
      "Tibetan",
      "Desserts"
    ],
    "priceForTwo": 250,
    "rating": 4.2,
    "ratingCount": 2700,
    "deliveryTimeMins": 49,
    "image": "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=800&q=60",
    "location": "Yelachenahalli, Bengaluru",
    "categoryId": "chinese",
    "offers": [
      "Flat menu at ITEMS AT ₹109"
    ],
    "tags": [
      "Chinese",
      "Fast Delivery"
    ],
    "description": "Big Bowl — Chinese, Tibetan, Desserts. Popular on Swiggy in Yelachenahalli.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "Yelachenahalli, Bengaluru"
    },
    "menu": [
      {
        "id": "m440",
        "name": "Veg Hakka Noodles",
        "description": "Wok-tossed noodles, crunchy veg",
        "price": 220,
        "category": "Noodles",
        "image": "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m441",
        "name": "Chicken Fried Rice",
        "description": "Egg-fried rice, chicken, spring onion",
        "price": 260,
        "category": "Rice",
        "image": "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&q=60",
        "isVeg": false
      },
      {
        "id": "m442",
        "name": "Chilli Paneer",
        "description": "Crispy paneer, hot garlic sauce",
        "price": 280,
        "category": "Starters",
        "image": "https://images.unsplash.com/photo-1552611052-33e04de081de?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m443",
        "name": "Veg Momos (8 pcs)",
        "description": "Steamed dumplings, spicy chutney",
        "price": 160,
        "category": "Momos",
        "image": "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r46",
    "name": "Biryani By Kilo",
    "cuisine": [
      "Biryani",
      "Hyderabadi",
      "Kebabs",
      "Mughlai",
      "Desserts"
    ],
    "priceForTwo": 600,
    "rating": 4.1,
    "ratingCount": 2000,
    "deliveryTimeMins": 61,
    "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=60",
    "location": "Raghuvanhalli, Bengaluru",
    "categoryId": "north-indian",
    "offers": [
      "Flat menu at ITEMS AT ₹149"
    ],
    "tags": [
      "Biryani",
      "Fast Delivery"
    ],
    "description": "Biryani By Kilo — Biryani, Hyderabadi, Kebabs, Mughlai, Desserts. Popular on Swiggy in Raghuvanhalli.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "Raghuvanhalli, Bengaluru"
    },
    "menu": [
      {
        "id": "m450",
        "name": "Paneer Butter Masala",
        "description": "Rich creamy tomato gravy",
        "price": 320,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m451",
        "name": "Butter Chicken",
        "description": "Tandoori chicken, makhani gravy",
        "price": 380,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=60",
        "isVeg": false,
        "bestseller": true
      },
      {
        "id": "m452",
        "name": "Dal Tadka",
        "description": "Yellow dal, ghee tempering",
        "price": 240,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m453",
        "name": "Butter Naan",
        "description": "Tandoor naan brushed with butter",
        "price": 60,
        "category": "Breads",
        "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m454",
        "name": "Gulab Jamun (2 pcs)",
        "description": "Warm syrup-soaked dumplings",
        "price": 99,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r47",
    "name": "Bengali Food Hotel",
    "cuisine": [
      "Bengali"
    ],
    "priceForTwo": 200,
    "rating": 4.1,
    "ratingCount": 1300,
    "deliveryTimeMins": 56,
    "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=800&q=60",
    "location": "Garvebhavi Palya, Bengaluru",
    "categoryId": "north-indian",
    "offers": [
      "Flat ₹550 off"
    ],
    "tags": [
      "Bengali",
      "Fast Delivery"
    ],
    "description": "Bengali Food Hotel — Bengali. Popular on Swiggy in Garvebhavi Palya.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "Garvebhavi Palya, Bengaluru"
    },
    "menu": [
      {
        "id": "m460",
        "name": "Paneer Butter Masala",
        "description": "Rich creamy tomato gravy",
        "price": 320,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m461",
        "name": "Butter Chicken",
        "description": "Tandoori chicken, makhani gravy",
        "price": 380,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=60",
        "isVeg": false,
        "bestseller": true
      },
      {
        "id": "m462",
        "name": "Dal Tadka",
        "description": "Yellow dal, ghee tempering",
        "price": 240,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m463",
        "name": "Butter Naan",
        "description": "Tandoor naan brushed with butter",
        "price": 60,
        "category": "Breads",
        "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m464",
        "name": "Gulab Jamun (2 pcs)",
        "description": "Warm syrup-soaked dumplings",
        "price": 99,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r48",
    "name": "Chinese Wok",
    "cuisine": [
      "Chinese",
      "Asian",
      "Tibetan",
      "Desserts"
    ],
    "priceForTwo": 250,
    "rating": 4.3,
    "ratingCount": 5800,
    "deliveryTimeMins": 47,
    "image": "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=800&q=60",
    "location": "Kumaraswamy Layout, Bengaluru",
    "categoryId": "chinese",
    "offers": [
      "Flat menu at ITEMS AT ₹109"
    ],
    "tags": [
      "Chinese",
      "Fast Delivery"
    ],
    "description": "Chinese Wok — Chinese, Asian, Tibetan, Desserts. Popular on Swiggy in Kumaraswamy Layout.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "Kumaraswamy Layout, Bengaluru"
    },
    "menu": [
      {
        "id": "m470",
        "name": "Veg Hakka Noodles",
        "description": "Wok-tossed noodles, crunchy veg",
        "price": 220,
        "category": "Noodles",
        "image": "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m471",
        "name": "Chicken Fried Rice",
        "description": "Egg-fried rice, chicken, spring onion",
        "price": 260,
        "category": "Rice",
        "image": "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&q=60",
        "isVeg": false
      },
      {
        "id": "m472",
        "name": "Chilli Paneer",
        "description": "Crispy paneer, hot garlic sauce",
        "price": 280,
        "category": "Starters",
        "image": "https://images.unsplash.com/photo-1552611052-33e04de081de?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m473",
        "name": "Veg Momos (8 pcs)",
        "description": "Steamed dumplings, spicy chutney",
        "price": 160,
        "category": "Momos",
        "image": "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m474",
        "name": "Chicken Manchurian",
        "description": "Fried chicken balls, Manchurian glaze",
        "price": 299,
        "category": "Starters",
        "image": "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&q=60",
        "isVeg": false
      }
    ]
  },
  {
    "id": "r49",
    "name": "Theobroma",
    "cuisine": [
      "Desserts"
    ],
    "priceForTwo": 400,
    "rating": 4.4,
    "ratingCount": 5300,
    "deliveryTimeMins": 31,
    "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=60",
    "location": "Electronic City, Bengaluru",
    "categoryId": "desserts",
    "offers": [
      "Flat menu at ITEMS AT ₹47"
    ],
    "tags": [
      "Desserts",
      "Fast Delivery"
    ],
    "description": "Theobroma — Desserts. Popular on Swiggy in Electronic City.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "Electronic City, Bengaluru"
    },
    "menu": [
      {
        "id": "m480",
        "name": "Belgian Waffle",
        "description": "Crispy waffle, choco drizzle",
        "price": 220,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m481",
        "name": "Sundae Classic",
        "description": "Vanilla, hot fudge, nuts",
        "price": 180,
        "category": "Ice Cream",
        "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m482",
        "name": "Red Velvet Slice",
        "description": "Cream-cheese frosted",
        "price": 240,
        "category": "Bakery",
        "image": "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m483",
        "name": "Cold Coffee",
        "description": "Blended coffee frappe",
        "price": 160,
        "category": "Beverages",
        "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r50",
    "name": "Sadda Punjabi Dhaba",
    "cuisine": [
      "Punjabi",
      "North Indian",
      "Kebabs"
    ],
    "priceForTwo": 450,
    "rating": 3.9,
    "ratingCount": 142,
    "deliveryTimeMins": 52,
    "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=800&q=60",
    "location": "Kanakapura Road, Bengaluru",
    "categoryId": "north-indian",
    "offers": [
      "FREE ITEM"
    ],
    "tags": [
      "Punjabi",
      "Fast Delivery"
    ],
    "description": "Sadda Punjabi Dhaba — Punjabi, North Indian, Kebabs. Popular on Swiggy in Kanakapura Road.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "Kanakapura Road, Bengaluru"
    },
    "menu": [
      {
        "id": "m490",
        "name": "Paneer Butter Masala",
        "description": "Rich creamy tomato gravy",
        "price": 320,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m491",
        "name": "Butter Chicken",
        "description": "Tandoori chicken, makhani gravy",
        "price": 380,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=60",
        "isVeg": false,
        "bestseller": true
      },
      {
        "id": "m492",
        "name": "Dal Tadka",
        "description": "Yellow dal, ghee tempering",
        "price": 240,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m493",
        "name": "Butter Naan",
        "description": "Tandoor naan brushed with butter",
        "price": 60,
        "category": "Breads",
        "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m494",
        "name": "Gulab Jamun (2 pcs)",
        "description": "Warm syrup-soaked dumplings",
        "price": 99,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r51",
    "name": "Beijing Bites",
    "cuisine": [
      "Chinese"
    ],
    "priceForTwo": 450,
    "rating": 4.3,
    "ratingCount": 19000,
    "deliveryTimeMins": 47,
    "image": "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=800&q=60",
    "location": "Rajarajeshwari Nagar, Bengaluru",
    "categoryId": "chinese",
    "offers": [
      "70% off up to ₹140"
    ],
    "tags": [
      "Chinese",
      "Fast Delivery"
    ],
    "description": "Beijing Bites — Chinese. Popular on Swiggy in Rajarajeshwari Nagar.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "Rajarajeshwari Nagar, Bengaluru"
    },
    "menu": [
      {
        "id": "m500",
        "name": "Veg Hakka Noodles",
        "description": "Wok-tossed noodles, crunchy veg",
        "price": 220,
        "category": "Noodles",
        "image": "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m501",
        "name": "Chicken Fried Rice",
        "description": "Egg-fried rice, chicken, spring onion",
        "price": 260,
        "category": "Rice",
        "image": "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&q=60",
        "isVeg": false
      },
      {
        "id": "m502",
        "name": "Chilli Paneer",
        "description": "Crispy paneer, hot garlic sauce",
        "price": 280,
        "category": "Starters",
        "image": "https://images.unsplash.com/photo-1552611052-33e04de081de?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m503",
        "name": "Veg Momos (8 pcs)",
        "description": "Steamed dumplings, spicy chutney",
        "price": 160,
        "category": "Momos",
        "image": "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m504",
        "name": "Chicken Manchurian",
        "description": "Fried chicken balls, Manchurian glaze",
        "price": 299,
        "category": "Starters",
        "image": "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&q=60",
        "isVeg": false
      }
    ]
  },
  {
    "id": "r52",
    "name": "1947 Restaurant",
    "cuisine": [
      "North Indian",
      "Chinese",
      "Desserts",
      "Biryani",
      "Continental"
    ],
    "priceForTwo": 500,
    "rating": 4.2,
    "ratingCount": 5000,
    "deliveryTimeMins": 50,
    "image": "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&q=60",
    "location": "JP Nagar, Bengaluru",
    "categoryId": "chinese",
    "offers": [
      "Flat menu at ₹119"
    ],
    "tags": [
      "North Indian",
      "Fast Delivery"
    ],
    "description": "1947 Restaurant — North Indian, Chinese, Desserts, Biryani, Continental. Popular on Swiggy in JP Nagar.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "JP Nagar, Bengaluru"
    },
    "menu": [
      {
        "id": "m510",
        "name": "Veg Hakka Noodles",
        "description": "Wok-tossed noodles, crunchy veg",
        "price": 220,
        "category": "Noodles",
        "image": "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m511",
        "name": "Chicken Fried Rice",
        "description": "Egg-fried rice, chicken, spring onion",
        "price": 260,
        "category": "Rice",
        "image": "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&q=60",
        "isVeg": false
      },
      {
        "id": "m512",
        "name": "Chilli Paneer",
        "description": "Crispy paneer, hot garlic sauce",
        "price": 280,
        "category": "Starters",
        "image": "https://images.unsplash.com/photo-1552611052-33e04de081de?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m513",
        "name": "Veg Momos (8 pcs)",
        "description": "Steamed dumplings, spicy chutney",
        "price": 160,
        "category": "Momos",
        "image": "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m514",
        "name": "Chicken Manchurian",
        "description": "Fried chicken balls, Manchurian glaze",
        "price": 299,
        "category": "Starters",
        "image": "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&q=60",
        "isVeg": false
      }
    ]
  },
  {
    "id": "r53",
    "name": "Olio",
    "cuisine": [
      "Pizzas",
      "Pastas",
      "Italian",
      "Fast Food",
      "Snacks",
      "Beverages",
      "Desserts"
    ],
    "priceForTwo": 300,
    "rating": 4.3,
    "ratingCount": 1400,
    "deliveryTimeMins": 54,
    "image": "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=60",
    "location": "BEML Layout, Bengaluru",
    "categoryId": "pizza",
    "offers": [
      "65% off up to ₹125"
    ],
    "tags": [
      "Pizzas",
      "Fast Delivery"
    ],
    "description": "Olio — Pizzas, Pastas, Italian, Fast Food, Snacks, Beverages, Desserts. Popular on Swiggy in BEML Layout.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "BEML Layout, Bengaluru"
    },
    "menu": [
      {
        "id": "m520",
        "name": "Margherita Pizza",
        "description": "Classic tomato, basil, mozzarella",
        "price": 299,
        "category": "Pizza",
        "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m521",
        "name": "Farmhouse Pizza",
        "description": "Onion, capsicum, mushroom, olives",
        "price": 399,
        "category": "Pizza",
        "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m522",
        "name": "Chicken Tikka Pizza",
        "description": "Smoky tikka chunks, onion, mint drizzle",
        "price": 449,
        "category": "Pizza",
        "image": "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=60",
        "isVeg": false
      },
      {
        "id": "m523",
        "name": "Garlic Breadsticks",
        "description": "Butter-garlic sticks, marinara dip",
        "price": 179,
        "category": "Sides",
        "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r54",
    "name": "Zulu's Pizza",
    "cuisine": [
      "Pizzas",
      "Italian",
      "Fast Food",
      "Desserts",
      "Beverages"
    ],
    "priceForTwo": 200,
    "rating": 4.8,
    "ratingCount": 55,
    "deliveryTimeMins": 25,
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=60",
    "location": "Near Church Mariya Nilaya, Bengaluru",
    "categoryId": "pizza",
    "offers": [
      "Flat menu at ITEMS AT ₹39"
    ],
    "tags": [
      "Top Rated",
      "Fast Delivery"
    ],
    "description": "Zulu's Pizza — Pizzas, Italian, Fast Food, Desserts, Beverages. Popular on Swiggy in Near Church Mariya Nilaya.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "Near Church Mariya Nilaya, Bengaluru"
    },
    "menu": [
      {
        "id": "m530",
        "name": "Margherita Pizza",
        "description": "Classic tomato, basil, mozzarella",
        "price": 299,
        "category": "Pizza",
        "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m531",
        "name": "Farmhouse Pizza",
        "description": "Onion, capsicum, mushroom, olives",
        "price": 399,
        "category": "Pizza",
        "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m532",
        "name": "Chicken Tikka Pizza",
        "description": "Smoky tikka chunks, onion, mint drizzle",
        "price": 449,
        "category": "Pizza",
        "image": "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=60",
        "isVeg": false
      },
      {
        "id": "m533",
        "name": "Garlic Breadsticks",
        "description": "Butter-garlic sticks, marinara dip",
        "price": 179,
        "category": "Sides",
        "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m534",
        "name": "Chocolate Volcano",
        "description": "Molten chocolate cake with ice cream",
        "price": 199,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r55",
    "name": "Faasos",
    "cuisine": [
      "Wraps",
      "rolls",
      "Fast Food",
      "Burger",
      "shawarma",
      "Rice Bowls"
    ],
    "priceForTwo": 200,
    "rating": 4.2,
    "ratingCount": 7000,
    "deliveryTimeMins": 48,
    "image": "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&q=60",
    "location": "Gubbalala Village, Bengaluru",
    "categoryId": "burger",
    "offers": [
      "Flat menu at ITEMS AT ₹10"
    ],
    "tags": [
      "Wraps",
      "Fast Delivery"
    ],
    "description": "Faasos — Wraps, rolls, Fast Food, Burger, shawarma, Rice Bowls. Popular on Swiggy in Gubbalala Village.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "Gubbalala Village, Bengaluru"
    },
    "menu": [
      {
        "id": "m540",
        "name": "Classic Cheeseburger",
        "description": "Beef patty, cheddar, house sauce",
        "price": 249,
        "category": "Burgers",
        "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=60",
        "isVeg": false,
        "bestseller": true
      },
      {
        "id": "m541",
        "name": "Crispy Veg Burger",
        "description": "Corn & pea patty, crispy onions",
        "price": 149,
        "category": "Burgers",
        "image": "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m542",
        "name": "Grilled Chicken Burger",
        "description": "Chargrilled chicken, garlic mayo",
        "price": 279,
        "category": "Burgers",
        "image": "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=60",
        "isVeg": false
      },
      {
        "id": "m543",
        "name": "Peri Peri Fries",
        "description": "Cajun-seasoned fries",
        "price": 129,
        "category": "Sides",
        "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m544",
        "name": "Thick Chocolate Shake",
        "description": "Premium chocolate shake",
        "price": 199,
        "category": "Beverages",
        "image": "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r56",
    "name": "Mealful Rolls",
    "cuisine": [
      "Rolls & Wraps",
      "Fast Food",
      "Snacks"
    ],
    "priceForTwo": 250,
    "rating": 4.3,
    "ratingCount": 502,
    "deliveryTimeMins": 25,
    "image": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&q=60",
    "location": "1st Phase, Bengaluru",
    "categoryId": "rolls",
    "offers": [
      "Flat menu at ITEMS AT ₹69"
    ],
    "tags": [
      "Rolls & Wraps",
      "Fast Delivery"
    ],
    "description": "Mealful Rolls — Rolls & Wraps, Fast Food, Snacks. Popular on Swiggy in 1st Phase.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "1st Phase, Bengaluru"
    },
    "menu": [
      {
        "id": "m550",
        "name": "Paneer Kathi Roll",
        "description": "Spiced paneer, flaky paratha",
        "price": 139,
        "category": "Rolls",
        "image": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m551",
        "name": "Chicken Tikka Roll",
        "description": "Smoky tikka, onions, chutney",
        "price": 169,
        "category": "Rolls",
        "image": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&q=60",
        "isVeg": false
      },
      {
        "id": "m552",
        "name": "Egg Roll",
        "description": "Masala egg, onion, lime",
        "price": 119,
        "category": "Rolls",
        "image": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&q=60",
        "isVeg": false
      },
      {
        "id": "m553",
        "name": "Chocolate Roll",
        "description": "Choco-hazelnut dessert roll",
        "price": 129,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r57",
    "name": "GharSe",
    "cuisine": [
      "Biryani",
      "Thalis",
      "Home Food"
    ],
    "priceForTwo": 200,
    "rating": 4.8,
    "ratingCount": 37,
    "deliveryTimeMins": 25,
    "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=60",
    "location": "Near Church Mariya Nilaya, Bengaluru",
    "categoryId": "biryani",
    "offers": [
      "Flat menu at ₹119"
    ],
    "tags": [
      "Top Rated",
      "Fast Delivery"
    ],
    "description": "GharSe — Biryani, Thalis, Home Food. Popular on Swiggy in Near Church Mariya Nilaya.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "Near Church Mariya Nilaya, Bengaluru"
    },
    "menu": [
      {
        "id": "m560",
        "name": "Chicken Dum Biryani",
        "description": "Sealed-handi, saffron basmati",
        "price": 299,
        "category": "Biryani",
        "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=60",
        "isVeg": false,
        "bestseller": true
      },
      {
        "id": "m561",
        "name": "Mutton Biryani",
        "description": "Tender mutton, hand-pounded spices",
        "price": 429,
        "category": "Biryani",
        "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&q=60",
        "isVeg": false,
        "bestseller": true
      },
      {
        "id": "m562",
        "name": "Veg Biryani",
        "description": "Fresh veg, mint, fried onion",
        "price": 249,
        "category": "Biryani",
        "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m563",
        "name": "Chicken 65",
        "description": "Fiery deep-fried bites",
        "price": 249,
        "category": "Starters",
        "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=60",
        "isVeg": false
      }
    ]
  },
  {
    "id": "r58",
    "name": "Behrouz Biryani",
    "cuisine": [
      "Biryani",
      "North Indian",
      "Kebabs",
      "Mughlai",
      "Lucknowi",
      "Hyderabadi",
      "Desserts",
      "Beverages"
    ],
    "priceForTwo": 500,
    "rating": 4,
    "ratingCount": 3900,
    "deliveryTimeMins": 50,
    "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=60",
    "location": "Gubbalala Village, Bengaluru",
    "categoryId": "north-indian",
    "offers": [
      "65% off up to ₹125"
    ],
    "tags": [
      "Biryani",
      "Fast Delivery"
    ],
    "description": "Behrouz Biryani — Biryani, North Indian, Kebabs, Mughlai, Lucknowi, Hyderabadi, Desserts, Beverages. Popular on Swiggy in Gubbalala Village.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "Gubbalala Village, Bengaluru"
    },
    "menu": [
      {
        "id": "m570",
        "name": "Paneer Butter Masala",
        "description": "Rich creamy tomato gravy",
        "price": 320,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m571",
        "name": "Butter Chicken",
        "description": "Tandoori chicken, makhani gravy",
        "price": 380,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=60",
        "isVeg": false,
        "bestseller": true
      },
      {
        "id": "m572",
        "name": "Dal Tadka",
        "description": "Yellow dal, ghee tempering",
        "price": 240,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m573",
        "name": "Butter Naan",
        "description": "Tandoor naan brushed with butter",
        "price": 60,
        "category": "Breads",
        "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m574",
        "name": "Gulab Jamun (2 pcs)",
        "description": "Warm syrup-soaked dumplings",
        "price": 99,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r59",
    "name": "Sharief Bhai Biryani",
    "cuisine": [
      "Biryani",
      "shawarma",
      "Kebabs",
      "Mughlai",
      "Arabian",
      "rolls",
      "Street Food",
      "Tea",
      "Desserts",
      "Beverages"
    ],
    "priceForTwo": 400,
    "rating": 3.9,
    "ratingCount": 20000,
    "deliveryTimeMins": 36,
    "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=800&q=60",
    "location": "Doddathoguru, Bengaluru",
    "categoryId": "north-indian",
    "offers": [
      "70% off up to ₹140"
    ],
    "tags": [
      "Biryani",
      "Fast Delivery"
    ],
    "description": "Sharief Bhai Biryani — Biryani, shawarma, Kebabs, Mughlai, Arabian, rolls, Street Food, Tea, Desserts, Beverages. Popular on Swiggy in Doddathoguru.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "Doddathoguru, Bengaluru"
    },
    "menu": [
      {
        "id": "m580",
        "name": "Paneer Butter Masala",
        "description": "Rich creamy tomato gravy",
        "price": 320,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m581",
        "name": "Butter Chicken",
        "description": "Tandoori chicken, makhani gravy",
        "price": 380,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=60",
        "isVeg": false,
        "bestseller": true
      },
      {
        "id": "m582",
        "name": "Dal Tadka",
        "description": "Yellow dal, ghee tempering",
        "price": 240,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m583",
        "name": "Butter Naan",
        "description": "Tandoor naan brushed with butter",
        "price": 60,
        "category": "Breads",
        "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m584",
        "name": "Gulab Jamun (2 pcs)",
        "description": "Warm syrup-soaked dumplings",
        "price": 99,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r60",
    "name": "Hotel Empire",
    "cuisine": [
      "North Indian",
      "Tandoor"
    ],
    "priceForTwo": 300,
    "rating": 4.4,
    "ratingCount": 23000,
    "deliveryTimeMins": 40,
    "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=60",
    "location": "Kanakapura Road, Bengaluru",
    "categoryId": "north-indian",
    "offers": [
      "Flat ₹550 off"
    ],
    "tags": [
      "North Indian",
      "Fast Delivery"
    ],
    "description": "Hotel Empire — North Indian, Tandoor. Popular on Swiggy in Kanakapura Road.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "Kanakapura Road, Bengaluru"
    },
    "menu": [
      {
        "id": "m590",
        "name": "Paneer Butter Masala",
        "description": "Rich creamy tomato gravy",
        "price": 320,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m591",
        "name": "Butter Chicken",
        "description": "Tandoori chicken, makhani gravy",
        "price": 380,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=60",
        "isVeg": false,
        "bestseller": true
      },
      {
        "id": "m592",
        "name": "Dal Tadka",
        "description": "Yellow dal, ghee tempering",
        "price": 240,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m593",
        "name": "Butter Naan",
        "description": "Tandoor naan brushed with butter",
        "price": 60,
        "category": "Breads",
        "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m594",
        "name": "Gulab Jamun (2 pcs)",
        "description": "Warm syrup-soaked dumplings",
        "price": 99,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r61",
    "name": "1881 Dum House: Lucknow's Legacy",
    "cuisine": [
      "North Indian",
      "Biryani",
      "Awadhi"
    ],
    "priceForTwo": 200,
    "rating": 4.6,
    "ratingCount": 130,
    "deliveryTimeMins": 25,
    "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=60",
    "location": "Near Church Mariya Nilaya, Bengaluru",
    "categoryId": "north-indian",
    "offers": [
      "Flat menu at ₹99"
    ],
    "tags": [
      "Top Rated",
      "Fast Delivery"
    ],
    "description": "1881 Dum House: Lucknow's Legacy — North Indian, Biryani, Awadhi. Popular on Swiggy in Near Church Mariya Nilaya.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "Near Church Mariya Nilaya, Bengaluru"
    },
    "menu": [
      {
        "id": "m600",
        "name": "Paneer Butter Masala",
        "description": "Rich creamy tomato gravy",
        "price": 320,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m601",
        "name": "Butter Chicken",
        "description": "Tandoori chicken, makhani gravy",
        "price": 380,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=60",
        "isVeg": false,
        "bestseller": true
      },
      {
        "id": "m602",
        "name": "Dal Tadka",
        "description": "Yellow dal, ghee tempering",
        "price": 240,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m603",
        "name": "Butter Naan",
        "description": "Tandoor naan brushed with butter",
        "price": 60,
        "category": "Breads",
        "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r62",
    "name": "Potful",
    "cuisine": [
      "Biryani",
      "North Indian",
      "Kebabs",
      "Mughlai",
      "Desserts",
      "Beverages"
    ],
    "priceForTwo": 500,
    "rating": 4.4,
    "ratingCount": 3300,
    "deliveryTimeMins": 75,
    "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=800&q=60",
    "location": "Vaddarapalya Villag, Bengaluru",
    "categoryId": "north-indian",
    "offers": [
      "40% OFF UPTO ₹80"
    ],
    "tags": [
      "Biryani",
      "Fast Delivery"
    ],
    "description": "Potful — Biryani, North Indian, Kebabs, Mughlai, Desserts, Beverages. Popular on Swiggy in Vaddarapalya Villag.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "Vaddarapalya Villag, Bengaluru"
    },
    "menu": [
      {
        "id": "m610",
        "name": "Paneer Butter Masala",
        "description": "Rich creamy tomato gravy",
        "price": 320,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m611",
        "name": "Butter Chicken",
        "description": "Tandoori chicken, makhani gravy",
        "price": 380,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=60",
        "isVeg": false,
        "bestseller": true
      },
      {
        "id": "m612",
        "name": "Dal Tadka",
        "description": "Yellow dal, ghee tempering",
        "price": 240,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m613",
        "name": "Butter Naan",
        "description": "Tandoor naan brushed with butter",
        "price": 60,
        "category": "Breads",
        "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m614",
        "name": "Gulab Jamun (2 pcs)",
        "description": "Warm syrup-soaked dumplings",
        "price": 99,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r63",
    "name": "Sansho by ITC Master Chef",
    "cuisine": [
      "Pan-Asian",
      "Chinese",
      "Thai",
      "Oriental"
    ],
    "priceForTwo": 650,
    "rating": 4.4,
    "ratingCount": 70,
    "deliveryTimeMins": 46,
    "image": "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=800&q=60",
    "location": "Concept City, Bengaluru",
    "categoryId": "chinese",
    "offers": [
      "Flat ₹125 off"
    ],
    "tags": [
      "Pan-Asian",
      "Fast Delivery"
    ],
    "description": "Sansho by ITC Master Chef — Pan-Asian, Chinese, Thai, Oriental. Popular on Swiggy in Concept City.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "Concept City, Bengaluru"
    },
    "menu": [
      {
        "id": "m620",
        "name": "Veg Hakka Noodles",
        "description": "Wok-tossed noodles, crunchy veg",
        "price": 220,
        "category": "Noodles",
        "image": "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m621",
        "name": "Chicken Fried Rice",
        "description": "Egg-fried rice, chicken, spring onion",
        "price": 260,
        "category": "Rice",
        "image": "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&q=60",
        "isVeg": false
      },
      {
        "id": "m622",
        "name": "Chilli Paneer",
        "description": "Crispy paneer, hot garlic sauce",
        "price": 280,
        "category": "Starters",
        "image": "https://images.unsplash.com/photo-1552611052-33e04de081de?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m623",
        "name": "Veg Momos (8 pcs)",
        "description": "Steamed dumplings, spicy chutney",
        "price": 160,
        "category": "Momos",
        "image": "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m624",
        "name": "Chicken Manchurian",
        "description": "Fried chicken balls, Manchurian glaze",
        "price": 299,
        "category": "Starters",
        "image": "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&q=60",
        "isVeg": false
      }
    ]
  },
  {
    "id": "r64",
    "name": "ITC Sunfeast Baked Creations",
    "cuisine": [
      "Bakery",
      "Desserts",
      "Sweets",
      "Cakes & Pastries"
    ],
    "priceForTwo": 600,
    "rating": 4.4,
    "ratingCount": 135,
    "deliveryTimeMins": 39,
    "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=60",
    "location": "Concept City, Bengaluru",
    "categoryId": "desserts",
    "offers": [
      "Flat ₹125 off"
    ],
    "tags": [
      "Bakery",
      "Fast Delivery"
    ],
    "description": "ITC Sunfeast Baked Creations — Bakery, Desserts, Sweets, Cakes & Pastries. Popular on Swiggy in Concept City.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "Concept City, Bengaluru"
    },
    "menu": [
      {
        "id": "m630",
        "name": "Belgian Waffle",
        "description": "Crispy waffle, choco drizzle",
        "price": 220,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m631",
        "name": "Sundae Classic",
        "description": "Vanilla, hot fudge, nuts",
        "price": 180,
        "category": "Ice Cream",
        "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m632",
        "name": "Red Velvet Slice",
        "description": "Cream-cheese frosted",
        "price": 240,
        "category": "Bakery",
        "image": "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m633",
        "name": "Cold Coffee",
        "description": "Blended coffee frappe",
        "price": 160,
        "category": "Beverages",
        "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m634",
        "name": "Choco Lava Cake",
        "description": "Molten centre, powdered sugar",
        "price": 210,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r65",
    "name": "LunchBox",
    "cuisine": [
      "Thalis",
      "North Indian",
      "Biryani",
      "South Indian",
      "Desserts",
      "Beverages"
    ],
    "priceForTwo": 300,
    "rating": 4.3,
    "ratingCount": 1900,
    "deliveryTimeMins": 47,
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&q=60",
    "location": "Bendre Nagar, Bengaluru",
    "categoryId": "south-indian",
    "offers": [
      "65% off up to ₹125"
    ],
    "tags": [
      "Thalis",
      "Fast Delivery"
    ],
    "description": "LunchBox — Thalis, North Indian, Biryani, South Indian, Desserts, Beverages. Popular on Swiggy in Bendre Nagar.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "Bendre Nagar, Bengaluru"
    },
    "menu": [
      {
        "id": "m640",
        "name": "Masala Dosa",
        "description": "Crisp golden dosa, potato masala",
        "price": 120,
        "category": "Dosa",
        "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m641",
        "name": "Idli Sambar (2 pcs)",
        "description": "Steamed rice cakes, sambar & chutney",
        "price": 80,
        "category": "Breakfast",
        "image": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m642",
        "name": "Filter Coffee",
        "description": "Frothy south Indian filter coffee",
        "price": 60,
        "category": "Beverages",
        "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m643",
        "name": "Rava Idli",
        "description": "Semolina idli, podi & ghee",
        "price": 110,
        "category": "Breakfast",
        "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r66",
    "name": "Sweet Truth",
    "cuisine": [
      "Desserts",
      "Ice Cream",
      "Bakery",
      "Beverages"
    ],
    "priceForTwo": 450,
    "rating": 4.2,
    "ratingCount": 573,
    "deliveryTimeMins": 46,
    "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=60",
    "location": "Bendre Nagar, Bengaluru",
    "categoryId": "desserts",
    "offers": [
      "65% off up to ₹125"
    ],
    "tags": [
      "Desserts",
      "Fast Delivery"
    ],
    "description": "Sweet Truth — Desserts, Ice Cream, Bakery, Beverages. Popular on Swiggy in Bendre Nagar.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "Bendre Nagar, Bengaluru"
    },
    "menu": [
      {
        "id": "m650",
        "name": "Belgian Waffle",
        "description": "Crispy waffle, choco drizzle",
        "price": 220,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m651",
        "name": "Sundae Classic",
        "description": "Vanilla, hot fudge, nuts",
        "price": 180,
        "category": "Ice Cream",
        "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m652",
        "name": "Red Velvet Slice",
        "description": "Cream-cheese frosted",
        "price": 240,
        "category": "Bakery",
        "image": "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m653",
        "name": "Cold Coffee",
        "description": "Blended coffee frappe",
        "price": 160,
        "category": "Beverages",
        "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m654",
        "name": "Choco Lava Cake",
        "description": "Molten centre, powdered sugar",
        "price": 210,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r67",
    "name": "CakeZone Patisserie",
    "cuisine": [
      "Bakery",
      "Desserts",
      "Sweets",
      "Ice Cream"
    ],
    "priceForTwo": 200,
    "rating": 4.2,
    "ratingCount": 3700,
    "deliveryTimeMins": 53,
    "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=60",
    "location": "BEML Layout, Bengaluru",
    "categoryId": "desserts",
    "offers": [
      "Flat menu at ITEMS AT ₹54"
    ],
    "tags": [
      "Bakery",
      "Fast Delivery"
    ],
    "description": "CakeZone Patisserie — Bakery, Desserts, Sweets, Ice Cream. Popular on Swiggy in BEML Layout.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "BEML Layout, Bengaluru"
    },
    "menu": [
      {
        "id": "m660",
        "name": "Belgian Waffle",
        "description": "Crispy waffle, choco drizzle",
        "price": 220,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m661",
        "name": "Sundae Classic",
        "description": "Vanilla, hot fudge, nuts",
        "price": 180,
        "category": "Ice Cream",
        "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m662",
        "name": "Red Velvet Slice",
        "description": "Cream-cheese frosted",
        "price": 240,
        "category": "Bakery",
        "image": "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m663",
        "name": "Cold Coffee",
        "description": "Blended coffee frappe",
        "price": 160,
        "category": "Beverages",
        "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m664",
        "name": "Choco Lava Cake",
        "description": "Molten centre, powdered sugar",
        "price": 210,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r68",
    "name": "The Biryani Life",
    "cuisine": [
      "Biryani",
      "Mughlai",
      "Lucknowi",
      "Hyderabadi",
      "Kebabs",
      "Desserts",
      "Beverages"
    ],
    "priceForTwo": 500,
    "rating": 3.7,
    "ratingCount": 782,
    "deliveryTimeMins": 57,
    "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=800&q=60",
    "location": "Bendre Nagar, Bengaluru",
    "categoryId": "north-indian",
    "offers": [
      "Flat menu at ₹99"
    ],
    "tags": [
      "Biryani",
      "Fast Delivery"
    ],
    "description": "The Biryani Life — Biryani, Mughlai, Lucknowi, Hyderabadi, Kebabs, Desserts, Beverages. Popular on Swiggy in Bendre Nagar.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "Bendre Nagar, Bengaluru"
    },
    "menu": [
      {
        "id": "m670",
        "name": "Paneer Butter Masala",
        "description": "Rich creamy tomato gravy",
        "price": 320,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m671",
        "name": "Butter Chicken",
        "description": "Tandoori chicken, makhani gravy",
        "price": 380,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=60",
        "isVeg": false,
        "bestseller": true
      },
      {
        "id": "m672",
        "name": "Dal Tadka",
        "description": "Yellow dal, ghee tempering",
        "price": 240,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m673",
        "name": "Butter Naan",
        "description": "Tandoor naan brushed with butter",
        "price": 60,
        "category": "Breads",
        "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m674",
        "name": "Gulab Jamun (2 pcs)",
        "description": "Warm syrup-soaked dumplings",
        "price": 99,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r69",
    "name": "The Good Bowl",
    "cuisine": [
      "Biryani",
      "North Indian",
      "Pastas",
      "Punjabi",
      "Desserts",
      "Beverages"
    ],
    "priceForTwo": 400,
    "rating": 4,
    "ratingCount": 1000,
    "deliveryTimeMins": 46,
    "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=60",
    "location": "Bendre Nagar, Bengaluru",
    "categoryId": "north-indian",
    "offers": [
      "Flat menu at ITEMS AT ₹129"
    ],
    "tags": [
      "Biryani",
      "Fast Delivery"
    ],
    "description": "The Good Bowl — Biryani, North Indian, Pastas, Punjabi, Desserts, Beverages. Popular on Swiggy in Bendre Nagar.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "Bendre Nagar, Bengaluru"
    },
    "menu": [
      {
        "id": "m680",
        "name": "Paneer Butter Masala",
        "description": "Rich creamy tomato gravy",
        "price": 320,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m681",
        "name": "Butter Chicken",
        "description": "Tandoori chicken, makhani gravy",
        "price": 380,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=60",
        "isVeg": false,
        "bestseller": true
      },
      {
        "id": "m682",
        "name": "Dal Tadka",
        "description": "Yellow dal, ghee tempering",
        "price": 240,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m683",
        "name": "Butter Naan",
        "description": "Tandoor naan brushed with butter",
        "price": 60,
        "category": "Breads",
        "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r70",
    "name": "SMOOR",
    "cuisine": [
      "Desserts",
      "Bakery"
    ],
    "priceForTwo": 350,
    "rating": 4.7,
    "ratingCount": 2000,
    "deliveryTimeMins": 54,
    "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=60",
    "location": "2nd Stage, Bengaluru",
    "categoryId": "desserts",
    "offers": [
      "Flat ₹100 off"
    ],
    "tags": [
      "Top Rated",
      "Fast Delivery"
    ],
    "description": "SMOOR — Desserts, Bakery. Popular on Swiggy in 2nd Stage.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "2nd Stage, Bengaluru"
    },
    "menu": [
      {
        "id": "m690",
        "name": "Belgian Waffle",
        "description": "Crispy waffle, choco drizzle",
        "price": 220,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m691",
        "name": "Sundae Classic",
        "description": "Vanilla, hot fudge, nuts",
        "price": 180,
        "category": "Ice Cream",
        "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m692",
        "name": "Red Velvet Slice",
        "description": "Cream-cheese frosted",
        "price": 240,
        "category": "Bakery",
        "image": "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m693",
        "name": "Cold Coffee",
        "description": "Blended coffee frappe",
        "price": 160,
        "category": "Beverages",
        "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m694",
        "name": "Choco Lava Cake",
        "description": "Molten centre, powdered sugar",
        "price": 210,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r71",
    "name": "Kapoor's Cafe",
    "cuisine": [
      "Punjabi"
    ],
    "priceForTwo": 600,
    "rating": 4.3,
    "ratingCount": 8200,
    "deliveryTimeMins": 50,
    "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=800&q=60",
    "location": "Rajarajeshwari Nagar, Bengaluru",
    "categoryId": "north-indian",
    "offers": [],
    "tags": [
      "Punjabi",
      "Fast Delivery"
    ],
    "description": "Kapoor's Cafe — Punjabi. Popular on Swiggy in Rajarajeshwari Nagar.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "Rajarajeshwari Nagar, Bengaluru"
    },
    "menu": [
      {
        "id": "m700",
        "name": "Paneer Butter Masala",
        "description": "Rich creamy tomato gravy",
        "price": 320,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m701",
        "name": "Butter Chicken",
        "description": "Tandoori chicken, makhani gravy",
        "price": 380,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=60",
        "isVeg": false,
        "bestseller": true
      },
      {
        "id": "m702",
        "name": "Dal Tadka",
        "description": "Yellow dal, ghee tempering",
        "price": 240,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m703",
        "name": "Butter Naan",
        "description": "Tandoor naan brushed with butter",
        "price": 60,
        "category": "Breads",
        "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m704",
        "name": "Gulab Jamun (2 pcs)",
        "description": "Warm syrup-soaked dumplings",
        "price": 99,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r72",
    "name": "Veg Meals By LunchBox",
    "cuisine": [
      "Thalis",
      "North Indian",
      "Biryani",
      "South Indian",
      "Desserts",
      "Beverages"
    ],
    "priceForTwo": 200,
    "rating": 4.1,
    "ratingCount": 273,
    "deliveryTimeMins": 54,
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&q=60",
    "location": "Bendre Nagar, Bengaluru",
    "categoryId": "south-indian",
    "offers": [
      "Flat menu at ITEMS AT ₹79"
    ],
    "tags": [
      "Thalis",
      "Fast Delivery"
    ],
    "description": "Veg Meals By LunchBox — Thalis, North Indian, Biryani, South Indian, Desserts, Beverages. Popular on Swiggy in Bendre Nagar.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "Bendre Nagar, Bengaluru"
    },
    "menu": [
      {
        "id": "m710",
        "name": "Masala Dosa",
        "description": "Crisp golden dosa, potato masala",
        "price": 120,
        "category": "Dosa",
        "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m711",
        "name": "Idli Sambar (2 pcs)",
        "description": "Steamed rice cakes, sambar & chutney",
        "price": 80,
        "category": "Breakfast",
        "image": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m712",
        "name": "Filter Coffee",
        "description": "Frothy south Indian filter coffee",
        "price": 60,
        "category": "Beverages",
        "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m713",
        "name": "Rava Idli",
        "description": "Semolina idli, podi & ghee",
        "price": 110,
        "category": "Breakfast",
        "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m714",
        "name": "Medu Vada",
        "description": "Crispy lentil donut, sambar",
        "price": 90,
        "category": "Breakfast",
        "image": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r73",
    "name": "Gwalia",
    "cuisine": [
      "Sweets"
    ],
    "priceForTwo": 320,
    "rating": 4.1,
    "ratingCount": 388,
    "deliveryTimeMins": 45,
    "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=60",
    "location": "Rajarajeshwari Nagar, Bengaluru",
    "categoryId": "desserts",
    "offers": [
      "Flat ₹100 off"
    ],
    "tags": [
      "Sweets",
      "Fast Delivery"
    ],
    "description": "Gwalia — Sweets. Popular on Swiggy in Rajarajeshwari Nagar.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "Rajarajeshwari Nagar, Bengaluru"
    },
    "menu": [
      {
        "id": "m720",
        "name": "Belgian Waffle",
        "description": "Crispy waffle, choco drizzle",
        "price": 220,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m721",
        "name": "Sundae Classic",
        "description": "Vanilla, hot fudge, nuts",
        "price": 180,
        "category": "Ice Cream",
        "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m722",
        "name": "Red Velvet Slice",
        "description": "Cream-cheese frosted",
        "price": 240,
        "category": "Bakery",
        "image": "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m723",
        "name": "Cold Coffee",
        "description": "Blended coffee frappe",
        "price": 160,
        "category": "Beverages",
        "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r74",
    "name": "The Bawarchi And Co Restaurant",
    "cuisine": [
      "South Indian",
      "Tandoor",
      "Fast Food"
    ],
    "priceForTwo": 600,
    "rating": 4.1,
    "ratingCount": 148,
    "deliveryTimeMins": 57,
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&q=60",
    "location": "Kumaraswamy Layout & Uttarahalli, Bengaluru",
    "categoryId": "south-indian",
    "offers": [
      "Flat ₹550 off"
    ],
    "tags": [
      "South Indian",
      "Fast Delivery"
    ],
    "description": "The Bawarchi And Co Restaurant — South Indian, Tandoor, Fast Food. Popular on Swiggy in Kumaraswamy Layout & Uttarahalli.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "Kumaraswamy Layout & Uttarahalli, Bengaluru"
    },
    "menu": [
      {
        "id": "m730",
        "name": "Masala Dosa",
        "description": "Crisp golden dosa, potato masala",
        "price": 120,
        "category": "Dosa",
        "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m731",
        "name": "Idli Sambar (2 pcs)",
        "description": "Steamed rice cakes, sambar & chutney",
        "price": 80,
        "category": "Breakfast",
        "image": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m732",
        "name": "Filter Coffee",
        "description": "Frothy south Indian filter coffee",
        "price": 60,
        "category": "Beverages",
        "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m733",
        "name": "Rava Idli",
        "description": "Semolina idli, podi & ghee",
        "price": 110,
        "category": "Breakfast",
        "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m734",
        "name": "Medu Vada",
        "description": "Crispy lentil donut, sambar",
        "price": 90,
        "category": "Breakfast",
        "image": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r75",
    "name": "Polar Bear",
    "cuisine": [
      "Ice Cream",
      "Desserts"
    ],
    "priceForTwo": 300,
    "rating": 4.7,
    "ratingCount": 884,
    "deliveryTimeMins": 29,
    "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=60",
    "location": "Agara, Bengaluru",
    "categoryId": "desserts",
    "offers": [
      "undefined"
    ],
    "tags": [
      "Top Rated",
      "Fast Delivery"
    ],
    "description": "Polar Bear — Ice Cream, Desserts. Popular on Swiggy in Agara.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "Agara, Bengaluru"
    },
    "menu": [
      {
        "id": "m740",
        "name": "Belgian Waffle",
        "description": "Crispy waffle, choco drizzle",
        "price": 220,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m741",
        "name": "Sundae Classic",
        "description": "Vanilla, hot fudge, nuts",
        "price": 180,
        "category": "Ice Cream",
        "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m742",
        "name": "Red Velvet Slice",
        "description": "Cream-cheese frosted",
        "price": 240,
        "category": "Bakery",
        "image": "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m743",
        "name": "Cold Coffee",
        "description": "Blended coffee frappe",
        "price": 160,
        "category": "Beverages",
        "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m744",
        "name": "Choco Lava Cake",
        "description": "Molten centre, powdered sugar",
        "price": 210,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r76",
    "name": "Mercely's Ice Cream",
    "cuisine": [
      "Ice Cream"
    ],
    "priceForTwo": 299,
    "rating": 4.6,
    "ratingCount": 101,
    "deliveryTimeMins": 48,
    "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=60",
    "location": "BTM Layout, Bengaluru",
    "categoryId": "desserts",
    "offers": [
      "Flat ₹550 off"
    ],
    "tags": [
      "Top Rated",
      "Fast Delivery"
    ],
    "description": "Mercely's Ice Cream — Ice Cream. Popular on Swiggy in BTM Layout.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "BTM Layout, Bengaluru"
    },
    "menu": [
      {
        "id": "m750",
        "name": "Belgian Waffle",
        "description": "Crispy waffle, choco drizzle",
        "price": 220,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m751",
        "name": "Sundae Classic",
        "description": "Vanilla, hot fudge, nuts",
        "price": 180,
        "category": "Ice Cream",
        "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m752",
        "name": "Red Velvet Slice",
        "description": "Cream-cheese frosted",
        "price": 240,
        "category": "Bakery",
        "image": "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m753",
        "name": "Cold Coffee",
        "description": "Blended coffee frappe",
        "price": 160,
        "category": "Beverages",
        "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m754",
        "name": "Choco Lava Cake",
        "description": "Molten centre, powdered sugar",
        "price": 210,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r77",
    "name": "Third Wave Coffee",
    "cuisine": [
      "Beverages",
      "Bakery",
      "Continental"
    ],
    "priceForTwo": 400,
    "rating": 4.7,
    "ratingCount": 773,
    "deliveryTimeMins": 33,
    "image": "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=800&q=60",
    "location": "Kanakapura Road, Bengaluru",
    "categoryId": "desserts",
    "offers": [
      "50% off up to ₹100"
    ],
    "tags": [
      "Top Rated",
      "Fast Delivery"
    ],
    "description": "Third Wave Coffee — Beverages, Bakery, Continental. Popular on Swiggy in Kanakapura Road.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "Kanakapura Road, Bengaluru"
    },
    "menu": [
      {
        "id": "m760",
        "name": "Belgian Waffle",
        "description": "Crispy waffle, choco drizzle",
        "price": 220,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m761",
        "name": "Sundae Classic",
        "description": "Vanilla, hot fudge, nuts",
        "price": 180,
        "category": "Ice Cream",
        "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m762",
        "name": "Red Velvet Slice",
        "description": "Cream-cheese frosted",
        "price": 240,
        "category": "Bakery",
        "image": "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m763",
        "name": "Cold Coffee",
        "description": "Blended coffee frappe",
        "price": 160,
        "category": "Beverages",
        "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r78",
    "name": "Ambur Star Briyani Since 1890",
    "cuisine": [
      "Biryani",
      "Chettinad",
      "Andhra",
      "Beverages",
      "Seafood"
    ],
    "priceForTwo": 500,
    "rating": 4.2,
    "ratingCount": 6000,
    "deliveryTimeMins": 48,
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&q=60",
    "location": "Rajarajeshwari Nagar, Bengaluru",
    "categoryId": "south-indian",
    "offers": [
      "Flat menu at ITEMS AT ₹39"
    ],
    "tags": [
      "Biryani",
      "Fast Delivery"
    ],
    "description": "Ambur Star Briyani Since 1890 — Biryani, Chettinad, Andhra, Beverages, Seafood. Popular on Swiggy in Rajarajeshwari Nagar.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "Rajarajeshwari Nagar, Bengaluru"
    },
    "menu": [
      {
        "id": "m770",
        "name": "Masala Dosa",
        "description": "Crisp golden dosa, potato masala",
        "price": 120,
        "category": "Dosa",
        "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m771",
        "name": "Idli Sambar (2 pcs)",
        "description": "Steamed rice cakes, sambar & chutney",
        "price": 80,
        "category": "Breakfast",
        "image": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m772",
        "name": "Filter Coffee",
        "description": "Frothy south Indian filter coffee",
        "price": 60,
        "category": "Beverages",
        "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m773",
        "name": "Rava Idli",
        "description": "Semolina idli, podi & ghee",
        "price": 110,
        "category": "Breakfast",
        "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m774",
        "name": "Medu Vada",
        "description": "Crispy lentil donut, sambar",
        "price": 90,
        "category": "Breakfast",
        "image": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r79",
    "name": "Cakezyy",
    "cuisine": [
      "Bakery"
    ],
    "priceForTwo": 250,
    "rating": 3.8,
    "ratingCount": 52,
    "deliveryTimeMins": 63,
    "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=60",
    "location": "Kumaraswamy Layout & Uttarahalli, Bengaluru",
    "categoryId": "desserts",
    "offers": [
      "70% off up to ₹140"
    ],
    "tags": [
      "Bakery",
      "Fast Delivery"
    ],
    "description": "Cakezyy — Bakery. Popular on Swiggy in Kumaraswamy Layout & Uttarahalli.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "Kumaraswamy Layout & Uttarahalli, Bengaluru"
    },
    "menu": [
      {
        "id": "m780",
        "name": "Belgian Waffle",
        "description": "Crispy waffle, choco drizzle",
        "price": 220,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m781",
        "name": "Sundae Classic",
        "description": "Vanilla, hot fudge, nuts",
        "price": 180,
        "category": "Ice Cream",
        "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m782",
        "name": "Red Velvet Slice",
        "description": "Cream-cheese frosted",
        "price": 240,
        "category": "Bakery",
        "image": "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m783",
        "name": "Cold Coffee",
        "description": "Blended coffee frappe",
        "price": 160,
        "category": "Beverages",
        "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m784",
        "name": "Choco Lava Cake",
        "description": "Molten centre, powdered sugar",
        "price": 210,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r80",
    "name": "Sorbetto",
    "cuisine": [
      "Desserts",
      "Ice Cream",
      "Beverages",
      "Sweets",
      "Cakes"
    ],
    "priceForTwo": 250,
    "rating": 4.5,
    "ratingCount": 111,
    "deliveryTimeMins": 43,
    "image": "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=800&q=60",
    "location": "JP Nagar, Bengaluru",
    "categoryId": "desserts",
    "offers": [
      "70% off up to ₹140"
    ],
    "tags": [
      "Top Rated",
      "Fast Delivery"
    ],
    "description": "Sorbetto — Desserts, Ice Cream, Beverages, Sweets, Cakes. Popular on Swiggy in JP Nagar.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "JP Nagar, Bengaluru"
    },
    "menu": [
      {
        "id": "m790",
        "name": "Belgian Waffle",
        "description": "Crispy waffle, choco drizzle",
        "price": 220,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m791",
        "name": "Sundae Classic",
        "description": "Vanilla, hot fudge, nuts",
        "price": 180,
        "category": "Ice Cream",
        "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m792",
        "name": "Red Velvet Slice",
        "description": "Cream-cheese frosted",
        "price": 240,
        "category": "Bakery",
        "image": "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m793",
        "name": "Cold Coffee",
        "description": "Blended coffee frappe",
        "price": 160,
        "category": "Beverages",
        "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m794",
        "name": "Choco Lava Cake",
        "description": "Molten centre, powdered sugar",
        "price": 210,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r81",
    "name": "Desi Indian Pizza",
    "cuisine": [
      "Pizzas"
    ],
    "priceForTwo": 200,
    "rating": 4,
    "ratingCount": 642,
    "deliveryTimeMins": 63,
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=60",
    "location": "Kumaraswamy Layout, Bengaluru",
    "categoryId": "pizza",
    "offers": [
      "Flat menu at ITEMS AT ₹69"
    ],
    "tags": [
      "Pizzas",
      "Fast Delivery"
    ],
    "description": "Desi Indian Pizza — Pizzas. Popular on Swiggy in Kumaraswamy Layout.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "Kumaraswamy Layout, Bengaluru"
    },
    "menu": [
      {
        "id": "m800",
        "name": "Margherita Pizza",
        "description": "Classic tomato, basil, mozzarella",
        "price": 299,
        "category": "Pizza",
        "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m801",
        "name": "Farmhouse Pizza",
        "description": "Onion, capsicum, mushroom, olives",
        "price": 399,
        "category": "Pizza",
        "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m802",
        "name": "Chicken Tikka Pizza",
        "description": "Smoky tikka chunks, onion, mint drizzle",
        "price": 449,
        "category": "Pizza",
        "image": "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=60",
        "isVeg": false
      },
      {
        "id": "m803",
        "name": "Garlic Breadsticks",
        "description": "Butter-garlic sticks, marinara dip",
        "price": 179,
        "category": "Sides",
        "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r82",
    "name": "Gowhey Healthy Dessert Company",
    "cuisine": [
      "Beverages",
      "Desserts"
    ],
    "priceForTwo": 200,
    "rating": 3.8,
    "ratingCount": 67,
    "deliveryTimeMins": 42,
    "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=60",
    "location": "Harinagar, Bengaluru",
    "categoryId": "desserts",
    "offers": [
      "Flat menu at ITEMS AT ₹89"
    ],
    "tags": [
      "Beverages",
      "Fast Delivery"
    ],
    "description": "Gowhey Healthy Dessert Company — Beverages, Desserts. Popular on Swiggy in Harinagar.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "Harinagar, Bengaluru"
    },
    "menu": [
      {
        "id": "m810",
        "name": "Belgian Waffle",
        "description": "Crispy waffle, choco drizzle",
        "price": 220,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m811",
        "name": "Sundae Classic",
        "description": "Vanilla, hot fudge, nuts",
        "price": 180,
        "category": "Ice Cream",
        "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m812",
        "name": "Red Velvet Slice",
        "description": "Cream-cheese frosted",
        "price": 240,
        "category": "Bakery",
        "image": "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m813",
        "name": "Cold Coffee",
        "description": "Blended coffee frappe",
        "price": 160,
        "category": "Beverages",
        "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m814",
        "name": "Choco Lava Cake",
        "description": "Molten centre, powdered sugar",
        "price": 210,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r83",
    "name": "Beyond Healthy",
    "cuisine": [
      "Ice Cream",
      "Juices"
    ],
    "priceForTwo": 200,
    "rating": 4.1,
    "ratingCount": 40,
    "deliveryTimeMins": 44,
    "image": "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=800&q=60",
    "location": "Kanakapura Road, Bengaluru",
    "categoryId": "desserts",
    "offers": [
      "Flat menu at ITEMS AT ₹89"
    ],
    "tags": [
      "Ice Cream",
      "Fast Delivery"
    ],
    "description": "Beyond Healthy — Ice Cream, Juices. Popular on Swiggy in Kanakapura Road.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "Kanakapura Road, Bengaluru"
    },
    "menu": [
      {
        "id": "m820",
        "name": "Belgian Waffle",
        "description": "Crispy waffle, choco drizzle",
        "price": 220,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m821",
        "name": "Sundae Classic",
        "description": "Vanilla, hot fudge, nuts",
        "price": 180,
        "category": "Ice Cream",
        "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m822",
        "name": "Red Velvet Slice",
        "description": "Cream-cheese frosted",
        "price": 240,
        "category": "Bakery",
        "image": "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m823",
        "name": "Cold Coffee",
        "description": "Blended coffee frappe",
        "price": 160,
        "category": "Beverages",
        "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m824",
        "name": "Choco Lava Cake",
        "description": "Molten centre, powdered sugar",
        "price": 210,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r84",
    "name": "Bhatti Chicken",
    "cuisine": [
      "North Indian",
      "Snacks",
      "Fast Food",
      "Tandoor"
    ],
    "priceForTwo": 250,
    "rating": 4.8,
    "ratingCount": 254,
    "deliveryTimeMins": 25,
    "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=60",
    "location": "Doddakammanahalli, Bengaluru",
    "categoryId": "north-indian",
    "offers": [
      "Flat menu at ITEMS AT ₹139"
    ],
    "tags": [
      "Top Rated",
      "Fast Delivery"
    ],
    "description": "Bhatti Chicken — North Indian, Snacks, Fast Food, Tandoor. Popular on Swiggy in Doddakammanahalli.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "Doddakammanahalli, Bengaluru"
    },
    "menu": [
      {
        "id": "m830",
        "name": "Paneer Butter Masala",
        "description": "Rich creamy tomato gravy",
        "price": 320,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m831",
        "name": "Butter Chicken",
        "description": "Tandoori chicken, makhani gravy",
        "price": 380,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=60",
        "isVeg": false,
        "bestseller": true
      },
      {
        "id": "m832",
        "name": "Dal Tadka",
        "description": "Yellow dal, ghee tempering",
        "price": 240,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m833",
        "name": "Butter Naan",
        "description": "Tandoor naan brushed with butter",
        "price": 60,
        "category": "Breads",
        "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m834",
        "name": "Gulab Jamun (2 pcs)",
        "description": "Warm syrup-soaked dumplings",
        "price": 99,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r85",
    "name": "GLOBO Ice Creams Of The World",
    "cuisine": [
      "Ice Cream",
      "Desserts",
      "Bakery"
    ],
    "priceForTwo": 150,
    "rating": 4.3,
    "ratingCount": 163,
    "deliveryTimeMins": 15,
    "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=60",
    "location": "Doddakammanahalli, Bengaluru",
    "categoryId": "desserts",
    "offers": [
      "Flat menu at ₹49"
    ],
    "tags": [
      "Ice Cream",
      "Fast Delivery"
    ],
    "description": "GLOBO Ice Creams Of The World — Ice Cream, Desserts, Bakery. Popular on Swiggy in Doddakammanahalli.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "Doddakammanahalli, Bengaluru"
    },
    "menu": [
      {
        "id": "m840",
        "name": "Belgian Waffle",
        "description": "Crispy waffle, choco drizzle",
        "price": 220,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m841",
        "name": "Sundae Classic",
        "description": "Vanilla, hot fudge, nuts",
        "price": 180,
        "category": "Ice Cream",
        "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m842",
        "name": "Red Velvet Slice",
        "description": "Cream-cheese frosted",
        "price": 240,
        "category": "Bakery",
        "image": "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m843",
        "name": "Cold Coffee",
        "description": "Blended coffee frappe",
        "price": 160,
        "category": "Beverages",
        "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r86",
    "name": "UBQ-Meals,Thalis & Bowls",
    "cuisine": [
      "North Indian",
      "Kebabs",
      "Barbecue",
      "Biryani",
      "Street Food",
      "Snacks"
    ],
    "priceForTwo": 300,
    "rating": 3.8,
    "ratingCount": 1300,
    "deliveryTimeMins": 55,
    "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=800&q=60",
    "location": "Doddakallasandra, Bengaluru",
    "categoryId": "north-indian",
    "offers": [
      "Flat menu at ITEMS AT ₹129"
    ],
    "tags": [
      "North Indian",
      "Fast Delivery"
    ],
    "description": "UBQ-Meals,Thalis & Bowls — North Indian, Kebabs, Barbecue, Biryani, Street Food, Snacks. Popular on Swiggy in Doddakallasandra.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "Doddakallasandra, Bengaluru"
    },
    "menu": [
      {
        "id": "m850",
        "name": "Paneer Butter Masala",
        "description": "Rich creamy tomato gravy",
        "price": 320,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m851",
        "name": "Butter Chicken",
        "description": "Tandoori chicken, makhani gravy",
        "price": 380,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=60",
        "isVeg": false,
        "bestseller": true
      },
      {
        "id": "m852",
        "name": "Dal Tadka",
        "description": "Yellow dal, ghee tempering",
        "price": 240,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m853",
        "name": "Butter Naan",
        "description": "Tandoor naan brushed with butter",
        "price": 60,
        "category": "Breads",
        "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m854",
        "name": "Gulab Jamun (2 pcs)",
        "description": "Warm syrup-soaked dumplings",
        "price": 99,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r87",
    "name": "Itminaan Matka Biryani",
    "cuisine": [
      "Biryani",
      "North Indian",
      "Mughlai"
    ],
    "priceForTwo": 250,
    "rating": 4.4,
    "ratingCount": 376,
    "deliveryTimeMins": 25,
    "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=60",
    "location": "Doddakammanahalli, Bengaluru",
    "categoryId": "north-indian",
    "offers": [
      "Flat menu at ITEMS AT ₹159"
    ],
    "tags": [
      "Biryani",
      "Fast Delivery"
    ],
    "description": "Itminaan Matka Biryani — Biryani, North Indian, Mughlai. Popular on Swiggy in Doddakammanahalli.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "Doddakammanahalli, Bengaluru"
    },
    "menu": [
      {
        "id": "m860",
        "name": "Paneer Butter Masala",
        "description": "Rich creamy tomato gravy",
        "price": 320,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m861",
        "name": "Butter Chicken",
        "description": "Tandoori chicken, makhani gravy",
        "price": 380,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=60",
        "isVeg": false,
        "bestseller": true
      },
      {
        "id": "m862",
        "name": "Dal Tadka",
        "description": "Yellow dal, ghee tempering",
        "price": 240,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m863",
        "name": "Butter Naan",
        "description": "Tandoor naan brushed with butter",
        "price": 60,
        "category": "Breads",
        "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m864",
        "name": "Gulab Jamun (2 pcs)",
        "description": "Warm syrup-soaked dumplings",
        "price": 99,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r88",
    "name": "MOJO Pizza",
    "cuisine": [
      "Pizzas",
      "Italian",
      "Fast Food",
      "Desserts"
    ],
    "priceForTwo": 250,
    "rating": 4.6,
    "ratingCount": 1500,
    "deliveryTimeMins": 25,
    "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=60",
    "location": "Gottigere, Bengaluru",
    "categoryId": "pizza",
    "offers": [
      "Flat menu at ₹99"
    ],
    "tags": [
      "Top Rated",
      "Fast Delivery"
    ],
    "description": "MOJO Pizza — Pizzas, Italian, Fast Food, Desserts. Popular on Swiggy in Gottigere.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "Gottigere, Bengaluru"
    },
    "menu": [
      {
        "id": "m870",
        "name": "Margherita Pizza",
        "description": "Classic tomato, basil, mozzarella",
        "price": 299,
        "category": "Pizza",
        "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m871",
        "name": "Farmhouse Pizza",
        "description": "Onion, capsicum, mushroom, olives",
        "price": 399,
        "category": "Pizza",
        "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m872",
        "name": "Chicken Tikka Pizza",
        "description": "Smoky tikka chunks, onion, mint drizzle",
        "price": 449,
        "category": "Pizza",
        "image": "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=60",
        "isVeg": false
      },
      {
        "id": "m873",
        "name": "Garlic Breadsticks",
        "description": "Butter-garlic sticks, marinara dip",
        "price": 179,
        "category": "Sides",
        "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m874",
        "name": "Chocolate Volcano",
        "description": "Molten chocolate cake with ice cream",
        "price": 199,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r89",
    "name": "Barbeque Nation",
    "cuisine": [
      "North Indian",
      "Barbecue",
      "Kebabs",
      "Biryani",
      "Street Food",
      "Snacks"
    ],
    "priceForTwo": 600,
    "rating": 3.8,
    "ratingCount": 1700,
    "deliveryTimeMins": 57,
    "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=800&q=60",
    "location": "Uttarahalli, Bengaluru",
    "categoryId": "north-indian",
    "offers": [
      "Flat menu at ITEMS AT ₹149"
    ],
    "tags": [
      "North Indian",
      "Fast Delivery"
    ],
    "description": "Barbeque Nation — North Indian, Barbecue, Kebabs, Biryani, Street Food, Snacks. Popular on Swiggy in Uttarahalli.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "Uttarahalli, Bengaluru"
    },
    "menu": [
      {
        "id": "m880",
        "name": "Paneer Butter Masala",
        "description": "Rich creamy tomato gravy",
        "price": 320,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m881",
        "name": "Butter Chicken",
        "description": "Tandoori chicken, makhani gravy",
        "price": 380,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=60",
        "isVeg": false,
        "bestseller": true
      },
      {
        "id": "m882",
        "name": "Dal Tadka",
        "description": "Yellow dal, ghee tempering",
        "price": 240,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m883",
        "name": "Butter Naan",
        "description": "Tandoor naan brushed with butter",
        "price": 60,
        "category": "Breads",
        "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r90",
    "name": "NH1 Bowls",
    "cuisine": [
      "North Indian",
      "Punjabi",
      "Home Food"
    ],
    "priceForTwo": 250,
    "rating": 4.7,
    "ratingCount": 1400,
    "deliveryTimeMins": 25,
    "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=60",
    "location": "Doddakammanahalli, Bengaluru",
    "categoryId": "north-indian",
    "offers": [
      "Flat menu at ₹119"
    ],
    "tags": [
      "Top Rated",
      "Fast Delivery"
    ],
    "description": "NH1 Bowls — North Indian, Punjabi, Home Food. Popular on Swiggy in Doddakammanahalli.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "Doddakammanahalli, Bengaluru"
    },
    "menu": [
      {
        "id": "m890",
        "name": "Paneer Butter Masala",
        "description": "Rich creamy tomato gravy",
        "price": 320,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m891",
        "name": "Butter Chicken",
        "description": "Tandoori chicken, makhani gravy",
        "price": 380,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=60",
        "isVeg": false,
        "bestseller": true
      },
      {
        "id": "m892",
        "name": "Dal Tadka",
        "description": "Yellow dal, ghee tempering",
        "price": 240,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m893",
        "name": "Butter Naan",
        "description": "Tandoor naan brushed with butter",
        "price": 60,
        "category": "Breads",
        "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m894",
        "name": "Gulab Jamun (2 pcs)",
        "description": "Warm syrup-soaked dumplings",
        "price": 99,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r91",
    "name": "LeanCrust Pizza- ThinCrust Experts",
    "cuisine": [
      "Pizzas",
      "Italian",
      "Desserts"
    ],
    "priceForTwo": 300,
    "rating": 4.6,
    "ratingCount": 1000,
    "deliveryTimeMins": 25,
    "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=60",
    "location": "Doddakammanahalli, Bengaluru",
    "categoryId": "pizza",
    "offers": [
      "Flat menu at ITEMS AT ₹149"
    ],
    "tags": [
      "Top Rated",
      "Fast Delivery"
    ],
    "description": "LeanCrust Pizza- ThinCrust Experts — Pizzas, Italian, Desserts. Popular on Swiggy in Doddakammanahalli.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "Doddakammanahalli, Bengaluru"
    },
    "menu": [
      {
        "id": "m900",
        "name": "Margherita Pizza",
        "description": "Classic tomato, basil, mozzarella",
        "price": 299,
        "category": "Pizza",
        "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m901",
        "name": "Farmhouse Pizza",
        "description": "Onion, capsicum, mushroom, olives",
        "price": 399,
        "category": "Pizza",
        "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m902",
        "name": "Chicken Tikka Pizza",
        "description": "Smoky tikka chunks, onion, mint drizzle",
        "price": 449,
        "category": "Pizza",
        "image": "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=60",
        "isVeg": false
      },
      {
        "id": "m903",
        "name": "Garlic Breadsticks",
        "description": "Butter-garlic sticks, marinara dip",
        "price": 179,
        "category": "Sides",
        "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m904",
        "name": "Chocolate Volcano",
        "description": "Molten chocolate cake with ice cream",
        "price": 199,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r92",
    "name": "ZAZA Mughal Biryani",
    "cuisine": [
      "Biryani",
      "North Indian",
      "Awadhi"
    ],
    "priceForTwo": 250,
    "rating": 4.6,
    "ratingCount": 1300,
    "deliveryTimeMins": 25,
    "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=800&q=60",
    "location": "Central Excise Layout, Bengaluru",
    "categoryId": "north-indian",
    "offers": [
      "Flat menu at ITEMS AT ₹149"
    ],
    "tags": [
      "Top Rated",
      "Fast Delivery"
    ],
    "description": "ZAZA Mughal Biryani — Biryani, North Indian, Awadhi. Popular on Swiggy in Central Excise Layout.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "Central Excise Layout, Bengaluru"
    },
    "menu": [
      {
        "id": "m910",
        "name": "Paneer Butter Masala",
        "description": "Rich creamy tomato gravy",
        "price": 320,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m911",
        "name": "Butter Chicken",
        "description": "Tandoori chicken, makhani gravy",
        "price": 380,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=60",
        "isVeg": false,
        "bestseller": true
      },
      {
        "id": "m912",
        "name": "Dal Tadka",
        "description": "Yellow dal, ghee tempering",
        "price": 240,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m913",
        "name": "Butter Naan",
        "description": "Tandoor naan brushed with butter",
        "price": 60,
        "category": "Breads",
        "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m914",
        "name": "Gulab Jamun (2 pcs)",
        "description": "Warm syrup-soaked dumplings",
        "price": 99,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r93",
    "name": "WeFit",
    "cuisine": [
      "Healthy Food",
      "Salads",
      "Keto",
      "Snacks"
    ],
    "priceForTwo": 250,
    "rating": 4.8,
    "ratingCount": 1100,
    "deliveryTimeMins": 25,
    "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=60",
    "location": "Gottigere, Bengaluru",
    "categoryId": "north-indian",
    "offers": [
      "Flat menu at ₹119"
    ],
    "tags": [
      "Top Rated",
      "Fast Delivery"
    ],
    "description": "WeFit — Healthy Food, Salads, Keto, Snacks. Popular on Swiggy in Gottigere.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "Gottigere, Bengaluru"
    },
    "menu": [
      {
        "id": "m920",
        "name": "Paneer Butter Masala",
        "description": "Rich creamy tomato gravy",
        "price": 320,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m921",
        "name": "Butter Chicken",
        "description": "Tandoori chicken, makhani gravy",
        "price": 380,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=60",
        "isVeg": false,
        "bestseller": true
      },
      {
        "id": "m922",
        "name": "Dal Tadka",
        "description": "Yellow dal, ghee tempering",
        "price": 240,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m923",
        "name": "Butter Naan",
        "description": "Tandoor naan brushed with butter",
        "price": 60,
        "category": "Breads",
        "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r94",
    "name": "The Pizza Project by Oven Story",
    "cuisine": [
      "Pizzas",
      "Italian",
      "Desserts",
      "Beverages"
    ],
    "priceForTwo": 400,
    "rating": 4,
    "ratingCount": 146,
    "deliveryTimeMins": 57,
    "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=60",
    "location": "Gubbalala Village, Bengaluru",
    "categoryId": "pizza",
    "offers": [
      "Flat menu at ITEMS AT ₹179"
    ],
    "tags": [
      "Pizzas",
      "Fast Delivery"
    ],
    "description": "The Pizza Project by Oven Story — Pizzas, Italian, Desserts, Beverages. Popular on Swiggy in Gubbalala Village.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "Gubbalala Village, Bengaluru"
    },
    "menu": [
      {
        "id": "m930",
        "name": "Margherita Pizza",
        "description": "Classic tomato, basil, mozzarella",
        "price": 299,
        "category": "Pizza",
        "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m931",
        "name": "Farmhouse Pizza",
        "description": "Onion, capsicum, mushroom, olives",
        "price": 399,
        "category": "Pizza",
        "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m932",
        "name": "Chicken Tikka Pizza",
        "description": "Smoky tikka chunks, onion, mint drizzle",
        "price": 449,
        "category": "Pizza",
        "image": "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=60",
        "isVeg": false
      },
      {
        "id": "m933",
        "name": "Garlic Breadsticks",
        "description": "Butter-garlic sticks, marinara dip",
        "price": 179,
        "category": "Sides",
        "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m934",
        "name": "Chocolate Volcano",
        "description": "Molten chocolate cake with ice cream",
        "price": 199,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r95",
    "name": "Go Zero Ice Creams & Desserts",
    "cuisine": [
      "Ice Cream",
      "Desserts",
      "Healthy Food"
    ],
    "priceForTwo": 150,
    "rating": 4.4,
    "ratingCount": 284,
    "deliveryTimeMins": 48,
    "image": "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=800&q=60",
    "location": "Doddakallasandra Village, Bengaluru",
    "categoryId": "desserts",
    "offers": [
      "Flat menu at ITEMS AT ₹45"
    ],
    "tags": [
      "Ice Cream",
      "Fast Delivery"
    ],
    "description": "Go Zero Ice Creams & Desserts — Ice Cream, Desserts, Healthy Food. Popular on Swiggy in Doddakallasandra Village.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "Doddakallasandra Village, Bengaluru"
    },
    "menu": [
      {
        "id": "m940",
        "name": "Belgian Waffle",
        "description": "Crispy waffle, choco drizzle",
        "price": 220,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m941",
        "name": "Sundae Classic",
        "description": "Vanilla, hot fudge, nuts",
        "price": 180,
        "category": "Ice Cream",
        "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m942",
        "name": "Red Velvet Slice",
        "description": "Cream-cheese frosted",
        "price": 240,
        "category": "Bakery",
        "image": "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m943",
        "name": "Cold Coffee",
        "description": "Blended coffee frappe",
        "price": 160,
        "category": "Beverages",
        "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m944",
        "name": "Choco Lava Cake",
        "description": "Molten centre, powdered sugar",
        "price": 210,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r96",
    "name": "BOOM",
    "cuisine": [
      "Snacks",
      "Fast Food",
      "sandwich"
    ],
    "priceForTwo": 250,
    "rating": 4.6,
    "ratingCount": 242,
    "deliveryTimeMins": 25,
    "image": "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=800&q=60",
    "location": "Doddakammanahalli, Bengaluru",
    "categoryId": "street-food",
    "offers": [
      "Flat menu at ₹99"
    ],
    "tags": [
      "Top Rated",
      "Fast Delivery"
    ],
    "description": "BOOM — Snacks, Fast Food, sandwich. Popular on Swiggy in Doddakammanahalli.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "Doddakammanahalli, Bengaluru"
    },
    "menu": [
      {
        "id": "m950",
        "name": "Pani Puri (8 pcs)",
        "description": "Crisp puris, spiced water",
        "price": 60,
        "category": "Chaat",
        "image": "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m951",
        "name": "Vada Pav",
        "description": "Fried potato patty, pav, chutney",
        "price": 40,
        "category": "Snacks",
        "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m952",
        "name": "Pav Bhaji",
        "description": "Buttered pav, loaded bhaji",
        "price": 120,
        "category": "Chaat",
        "image": "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m953",
        "name": "Masala Chai",
        "description": "Spiced milk tea",
        "price": 30,
        "category": "Beverages",
        "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r97",
    "name": "Makhani Darbar: Curries, Breads & Beyond",
    "cuisine": [
      "Kebabs",
      "Mughlai",
      "Beverages",
      "Desserts"
    ],
    "priceForTwo": 500,
    "rating": 3.5,
    "ratingCount": 58,
    "deliveryTimeMins": 53,
    "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=60",
    "location": "Kanakpura RK, Bengaluru",
    "categoryId": "north-indian",
    "offers": [
      "Flat menu at ITEMS AT ₹89"
    ],
    "tags": [
      "Kebabs",
      "Fast Delivery"
    ],
    "description": "Makhani Darbar: Curries, Breads & Beyond — Kebabs, Mughlai, Beverages, Desserts. Popular on Swiggy in Kanakpura RK.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "Kanakpura RK, Bengaluru"
    },
    "menu": [
      {
        "id": "m960",
        "name": "Paneer Butter Masala",
        "description": "Rich creamy tomato gravy",
        "price": 320,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m961",
        "name": "Butter Chicken",
        "description": "Tandoori chicken, makhani gravy",
        "price": 380,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=60",
        "isVeg": false,
        "bestseller": true
      },
      {
        "id": "m962",
        "name": "Dal Tadka",
        "description": "Yellow dal, ghee tempering",
        "price": 240,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m963",
        "name": "Butter Naan",
        "description": "Tandoor naan brushed with butter",
        "price": 60,
        "category": "Breads",
        "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r98",
    "name": "Faasos Signature Wraps & Rolls",
    "cuisine": [
      "Wraps",
      "rolls",
      "Fast Food",
      "Burger",
      "shawarma",
      "Rice Bowls"
    ],
    "priceForTwo": 350,
    "rating": 3.7,
    "ratingCount": 109,
    "deliveryTimeMins": 53,
    "image": "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=60",
    "location": "Shop No: 12, First Floor, Gubbalala Village, Bengaluru",
    "categoryId": "burger",
    "offers": [
      "Flat menu at ITEMS AT ₹129"
    ],
    "tags": [
      "Wraps",
      "Fast Delivery"
    ],
    "description": "Faasos Signature Wraps & Rolls — Wraps, rolls, Fast Food, Burger, shawarma, Rice Bowls. Popular on Swiggy in Shop No: 12, First Floor, Gubbalala Village.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "Shop No: 12, First Floor, Gubbalala Village, Bengaluru"
    },
    "menu": [
      {
        "id": "m970",
        "name": "Classic Cheeseburger",
        "description": "Beef patty, cheddar, house sauce",
        "price": 249,
        "category": "Burgers",
        "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=60",
        "isVeg": false,
        "bestseller": true
      },
      {
        "id": "m971",
        "name": "Crispy Veg Burger",
        "description": "Corn & pea patty, crispy onions",
        "price": 149,
        "category": "Burgers",
        "image": "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m972",
        "name": "Grilled Chicken Burger",
        "description": "Chargrilled chicken, garlic mayo",
        "price": 279,
        "category": "Burgers",
        "image": "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=60",
        "isVeg": false
      },
      {
        "id": "m973",
        "name": "Peri Peri Fries",
        "description": "Cajun-seasoned fries",
        "price": 129,
        "category": "Sides",
        "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m974",
        "name": "Thick Chocolate Shake",
        "description": "Premium chocolate shake",
        "price": 199,
        "category": "Beverages",
        "image": "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r99",
    "name": "Dil Daily",
    "cuisine": [
      "North Indian",
      "Punjabi",
      "Home Food",
      "Thalis",
      "Biryani",
      "Indian",
      "Desserts",
      "Snacks",
      "Sweets",
      "Beverages"
    ],
    "priceForTwo": 300,
    "rating": 3.7,
    "ratingCount": 274,
    "deliveryTimeMins": 55,
    "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=60",
    "location": "Raghuvanahalli, Bengaluru",
    "categoryId": "north-indian",
    "offers": [
      "60% OFF UPTO ₹120"
    ],
    "tags": [
      "North Indian",
      "Fast Delivery"
    ],
    "description": "Dil Daily — North Indian, Punjabi, Home Food, Thalis, Biryani, Indian, Desserts, Snacks, Sweets, Beverages. Popular on Swiggy in Raghuvanahalli.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "Raghuvanahalli, Bengaluru"
    },
    "menu": [
      {
        "id": "m980",
        "name": "Paneer Butter Masala",
        "description": "Rich creamy tomato gravy",
        "price": 320,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m981",
        "name": "Butter Chicken",
        "description": "Tandoori chicken, makhani gravy",
        "price": 380,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=60",
        "isVeg": false,
        "bestseller": true
      },
      {
        "id": "m982",
        "name": "Dal Tadka",
        "description": "Yellow dal, ghee tempering",
        "price": 240,
        "category": "Mains",
        "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m983",
        "name": "Butter Naan",
        "description": "Tandoor naan brushed with butter",
        "price": 60,
        "category": "Breads",
        "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m984",
        "name": "Gulab Jamun (2 pcs)",
        "description": "Warm syrup-soaked dumplings",
        "price": 99,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=60",
        "isVeg": true
      }
    ]
  },
  {
    "id": "r100",
    "name": "Hola Pasta",
    "cuisine": [
      "Pastas",
      "Italian",
      "Desserts",
      "Beverages"
    ],
    "priceForTwo": 250,
    "rating": 4.6,
    "ratingCount": 248,
    "deliveryTimeMins": 25,
    "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=60",
    "location": "Doddakammanahalli, Bengaluru",
    "categoryId": "pizza",
    "offers": [
      "Flat menu at ITEMS AT ₹149"
    ],
    "tags": [
      "Top Rated",
      "Fast Delivery"
    ],
    "description": "Hola Pasta — Pastas, Italian, Desserts, Beverages. Popular on Swiggy in Doddakammanahalli.",
    "timings": {
      "open": "10:30 AM",
      "close": "11:00 PM"
    },
    "contact": {
      "phone": "+91 80 4000 0000",
      "address": "Doddakammanahalli, Bengaluru"
    },
    "menu": [
      {
        "id": "m990",
        "name": "Margherita Pizza",
        "description": "Classic tomato, basil, mozzarella",
        "price": 299,
        "category": "Pizza",
        "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=60",
        "isVeg": true,
        "bestseller": true
      },
      {
        "id": "m991",
        "name": "Farmhouse Pizza",
        "description": "Onion, capsicum, mushroom, olives",
        "price": 399,
        "category": "Pizza",
        "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m992",
        "name": "Chicken Tikka Pizza",
        "description": "Smoky tikka chunks, onion, mint drizzle",
        "price": 449,
        "category": "Pizza",
        "image": "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=60",
        "isVeg": false
      },
      {
        "id": "m993",
        "name": "Garlic Breadsticks",
        "description": "Butter-garlic sticks, marinara dip",
        "price": 179,
        "category": "Sides",
        "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=60",
        "isVeg": true
      },
      {
        "id": "m994",
        "name": "Chocolate Volcano",
        "description": "Molten chocolate cake with ice cream",
        "price": 199,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=60",
        "isVeg": true
      }
    ]
  }
];

export const popularRestaurants = ["r1","r2","r3","r4","r5","r6","r7","r8"];
export const trendingRestaurants = ["r9","r10","r11","r12","r13","r14","r61","r62","r63","r64","r65","r66"];

export const collections: Collection[] = [
  {
    "id": "c1",
    "title": "Trending This Week",
    "description": "The 12 most ordered dishes in Bengaluru right now",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1200&q=60",
    "count": 12
  },
  {
    "id": "c2",
    "title": "Best Biryanis in Town",
    "description": "Handi-sealed, slow-cooked, worth every rupee",
    "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=1200&q=60",
    "count": 18
  },
  {
    "id": "c3",
    "title": "Top Rated South Indian",
    "description": "Iconic dosa & idli joints loved by locals",
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=1200&q=60",
    "count": 14
  },
  {
    "id": "c4",
    "title": "Late Night Cravings",
    "description": "Open till 1 AM — for the night owls",
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1200&q=60",
    "count": 9
  },
  {
    "id": "c5",
    "title": "Cafe Hopping",
    "description": "Specialty coffee & all-day breakfast spots",
    "image": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1200&q=60",
    "count": 15
  },
  {
    "id": "c6",
    "title": "Seafood Coastal Specials",
    "description": "Mangalorean & Kerala coastal favourites",
    "image": "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=1200&q=60",
    "count": 8
  }
];

export const homeFeed = {
  categories,
  popular: popularRestaurants.map((id) => restaurants.find((r) => r.id === id)!),
  trending: trendingRestaurants.map((id) => restaurants.find((r) => r.id === id)!),
  collections,
};
