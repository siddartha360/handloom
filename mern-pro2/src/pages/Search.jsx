// Page: Search Results
// What it does: Shows products based on URL query (?q=, ?cat=, ?brand=, ?sort=)
// Where it navigates: Uses internal links to product details and updates URL when filters change
// Extra: Mimics Amazon filters (category, brand) and sorting; results update via URL params
import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ProductGrid from "../components/ProductGrid";
import ProductCard from "../components/ProductCard";
import { products as allProducts, categories, uniqueBrands } from "../data/products";

// This page mimics Amazon's search results with filters and sorting.
// It reads the query string (?q=phone&cat=electronics&brand=Apple&sort=price_asc) and filters the 20-item dataset.
export default function Search() {
  const location = useLocation(); // gives access to the URL including ?query
  const navigate = useNavigate(); // we use this to update filters in the URL

  // helper to read query params from the URL
  const params = new URLSearchParams(location.search);
  const q = params.get("q") || ""; // search keyword
  const cat = params.get("cat") || "all"; // category filter
  const brand = params.get("brand") || ""; // brand filter
  const sort = params.get("sort") || "relevance"; // sorting option
  const deal = params.get("deal") === "1"; // show only deals if true
  const tag = params.get("tag") || ""; // tag like wedding/office/party

  // local UI state for brand dropdown (so user can change and apply)
  const [brandFilter, setBrandFilter] = useState(brand);

  // Returns filtered and sorted products based on URL params
  const results = useMemo(() => {
    let list = [...allProducts];

    // keyword search in name and description (case-insensitive)
    if (q.trim()) {
      const needle = q.toLowerCase();
      list = list.filter(
        (p) => p.name.toLowerCase().includes(needle) || p.description.toLowerCase().includes(needle)
      );
    }

    // category filter
    if (cat !== "all") {
      list = list.filter((p) => p.category === cat);
    }

    // brand filter
    if (brand) {
      list = list.filter((p) => p.brand === brand);
    }

    // tag filter (wedding, office, party)
    if (tag) {
      list = list.filter((p) => (p.tag || "").toLowerCase() === tag.toLowerCase());
    }

    // deals filter
    if (deal) {
      list = list.filter((p) => !!p.deal);
    }

    // sorting logic
    if (sort === "price_asc") list.sort((a, b) => a.price - b.price);
    if (sort === "price_desc") list.sort((a, b) => b.price - a.price);
    if (sort === "rating_desc") list.sort((a, b) => b.rating - a.rating);

    // Clicking Fashion should show latest fashion: we'll interpret as sort by rating desc
    if (q.toLowerCase() === "fashion") {
      list.sort((a, b) => b.rating - a.rating);
    }
    // relevance = default (no change)

    return list;
  }, [q, cat, brand, sort]);

  // Update URL with new query parameters
  const updateParam = (key, value) => {
    const newParams = new URLSearchParams(location.search);
    if (value) newParams.set(key, value); else newParams.delete(key);
    navigate(`/search?${newParams.toString()}`);
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: "1rem" }}>
      {/* Left filter sidebar */}
      <aside style={{ background: "#fff", padding: "1rem", borderRadius: 8 }}>
        <h3 style={{ marginBottom: "0.75rem" }}>Filters</h3>

        {/* Category filter */}
        <label style={{ display: "block", fontWeight: 600, marginTop: "0.5rem" }}>Category</label>
        <select
          value={cat}
          onChange={(e) => updateParam("cat", e.target.value)}
          style={{ width: "100%", padding: "0.5rem", marginTop: 4 }}
        >
          {categories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>

        {/* Brand filter */}
        <label style={{ display: "block", fontWeight: 600, marginTop: "1rem" }}>Brand</label>
        <select
          value={brandFilter}
          onChange={(e) => setBrandFilter(e.target.value)}
          style={{ width: "100%", padding: "0.5rem", marginTop: 4 }}
        >
          <option value="">All brands</option>
          {uniqueBrands.map((b) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>
        <button
          style={{ marginTop: 8, padding: "8px 12px", width: "100%" }}
          onClick={() => updateParam("brand", brandFilter)}
        >Apply Brand</button>

        {/* Sort */}
        <label style={{ display: "block", fontWeight: 600, marginTop: "1rem" }}>Sort by</label>
        <select
          value={sort}
          onChange={(e) => updateParam("sort", e.target.value)}
          style={{ width: "100%", padding: "0.5rem", marginTop: 4 }}
        >
          <option value="relevance">Relevance</option>
          <option value="price_asc">Price: Low to High</option>
          <option value="price_desc">Price: High to Low</option>
          <option value="rating_desc">Avg. Customer Review</option>
        </select>
      </aside>

      {/* Right results panel */}
      <section>
        <h2 style={{ marginBottom: "0.75rem" }}>
          Results for: "{q || "All products"}" {cat !== "all" ? `in ${cat}` : ""}
        </h2>
        <ProductGrid>
          {results.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </ProductGrid>
        {results.length === 0 && (
          <p style={{ marginTop: "1rem" }}>No products found. Try another search.</p>
        )}
      </section>
    </div>
  );
}


