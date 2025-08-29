// This file provides a small catalog of 20 products for our Mini Amazon.
// Each product has the fields we need to render listings and details.

export const products = [
  { _id: "1",  name: "Ikat Silk Saree - Crimson", category: "ikat", tag: "party", deal: true, mrp: 10999, price: 8999, rating: 4.7, image: "/image/5fS4vDza.webp", description: "Handwoven Ikat silk saree with traditional motifs." },
  { _id: "2",  name: "Banarasi Silk Saree - Emerald", category: "silk", tag: "wedding", deal: false, brand: "Varanasi Weaves", price: 11999, rating: 4.8, image: "/image/kir2", description: "Pure silk Banarasi saree with zari work." },
  { _id: "3",  name: "Kanchipuram Silk Saree - Gold", category: "silk", tag: "wedding", deal: true, mrp: 17999, price: 14999, rating: 4.9, image: "/image/kir1", description: "Rich Kanchipuram silk with temple border." },
  { _id: "4",  name: "Handloom Cotton Saree - Indigo", category: "cotton", tag: "office", deal: false, brand: "Handloom House", price: 2999, rating: 4.4, image: "/image/kir3", description: "Breathable cotton saree ideal for daily wear." },
  { _id: "5",  name: "Ikat Cotton Saree - Black & White", category: "ikat", tag: "office", deal: true, mrp: 4299, price: 3499, rating: 4.5, image: "/image/kir4", description: "Classic Ikat patterns in monochrome." },
  { _id: "6",  name: "Tussar Silk Saree - Sand", category: "silk", tag: "office", deal: false, brand: "Wild Silk", price: 8999, rating: 4.3, image: "/image/kir5", description: "Textured Tussar silk with elegant sheen." },
  { _id: "7",  name: "Chanderi Silk Saree - Blush", category: "silk", tag: "party", deal: false, brand: "Chanderi Craft", price: 7999, rating: 4.4, image: "/image/kir1", description: "Lightweight Chanderi saree with zari border." },
  { _id: "8",  name: "Kalamkari Cotton Saree - Floral", category: "cotton", tag: "office", deal: true, mrp: 5299, price: 4499, rating: 4.6, image: "/image/kir2", description: "Hand block printed Kalamkari motifs." },
  { _id: "9",  name: "Paithani Silk Saree - Peacock", category: "silk", tag: "wedding", deal: true, mrp: 19999, price: 16999, rating: 4.7, image: "/image/kir3", description: "Paithani saree with peacock pallu design." },
  { _id: "10", name: "Linen Cotton Saree - Pastel", category: "cotton", tag: "office", deal: false, brand: "Weaver's Lane", price: 3999, rating: 4.2, image: "/image/kir4", description: "Soft linen-cotton blend in pastel shades." },
  { _id: "11", name: "Bandhani Silk Saree - Ruby", category: "silk", tag: "party", deal: false, brand: "Bandhej", price: 10999, rating: 4.5, image: "/image/kir5", description: "Tie-dye Bandhani patterns on silk." },
  { _id: "12", name: "Ikat Silk Saree - Sapphire", category: "ikat", tag: "party", deal: true, mrp: 11999, price: 9999, rating: 4.6, image: "/image/kir4", description: "Striking Ikat silk with vibrant hues." },
  { _id: "13", name: "Kota Doria Cotton Saree - Mint", category: "cotton", tag: "office", deal: false, brand: "Kota Looms", price: 2799, rating: 4.1, image: "/image/kir1", description: "Sheer cotton weave, airy and elegant." },
  { _id: "14", name: "Katan Silk Saree - Royal Blue", category: "silk", tag: "party", deal: false, brand: "Katan Weaves", price: 12999, rating: 4.6, image: "/image/kir2", description: "Smooth Katan silk with rich drape." },
  { _id: "15", name: "Gadwal Silk-Cotton Saree - Marigold", category: "cotton", tag: "office", deal: true, mrp: 6499, price: 5599, rating: 4.3, image: "/image/kir3", description: "Silk-cotton blend with contrast border." },
  { _id: "16", name: "Patola Saree - Classic Red", category: "ikat", tag: "wedding", deal: false, brand: "Patola Craft", price: 18999, rating: 4.8, image: "/image/kir4", description: "Double Ikat Patola design." },
  { _id: "17", name: "Maheshwari Silk Saree - Teal", category: "silk", tag: "office", deal: false, brand: "Maheshwari Weaves", price: 7999, rating: 4.2, image: "/image/kir5", description: "Lightweight silk-cotton with stripes." },
  { _id: "18", name: "Jamdhani Cotton Saree - White", category: "cotton", tag: "office", deal: true, mrp: 5799, price: 4999, rating: 4.4, image: "/image/kir1", description: "Fine cotton with Jamdhani weaving." },
  { _id: "19", name: "Ikat Cotton Saree - Mustard", category: "ikat", tag: "office", deal: false, brand: "Heritage Looms", price: 3299, rating: 4.3, image: "/image/kir2", description: "Bold mustard Ikat pattern." },
  { _id: "20", name: "Silk Saree - Wedding Red", category: "silk", tag: "wedding", deal: true, mrp: 19999, price: 16999, rating: 4.9, image: "/image/kir3", description: "Bridal silk saree with heavy zari work." },
];

// Saree categories
export const categories = ["all", "ikat", "silk", "cotton"];
export const uniqueBrands = Array.from(new Set(products.map(p => p.brand)));
