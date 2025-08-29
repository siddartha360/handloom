// src/pages/Admin/ManageProducts.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ManageProducts() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [q, setQ] = useState("");
  const [category, setCategory] = useState("all");

  // Load products from localStorage once
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(stored);
  }, []);

  // Save helper
  const save = (list) => {
    setProducts(list);
    localStorage.setItem("products", JSON.stringify(list));
  };

  // Delete
  const handleDelete = (idx) => {
    if (!window.confirm("Delete this product?")) return;
    const next = products.filter((_, i) => i !== idx);
    save(next);
  };

  // Toggle stock
  const toggleStock = (idx) => {
    const next = products.map((p, i) =>
      i === idx ? { ...p, inStock: !(p?.inStock ?? true) } : p
    );
    save(next);
  };

  // Categories for filter
  const categories = useMemo(() => {
    const set = new Set(products.map((p) => p?.category).filter(Boolean));
    return ["all", ...Array.from(set)];
  }, [products]);

  // Search + filter
  const filtered = useMemo(() => {
    return products.filter((p) => {
      const name = (p?.name || "").toLowerCase();
      const matchQ = q.trim() === "" || name.includes(q.toLowerCase());
      const matchCat = category === "all" || p?.category === category;
      return matchQ && matchCat;
    });
  }, [products, q, category]);

  // Optional: seed some demo items so the table isn’t empty
  const seedDemo = () => {
    if (!window.confirm("Add 3 demo sarees?")) return;
    const demo = [
      {
        name: "Kanchipuram Silk Saree",
        price: 3499,
        description: "Handloom pure silk",
        image: "https://via.placeholder.com/100?text=Saree",
        category: "Silk",
        inStock: true,
      },
      {
        name: "Banarasi Saree",
        price: 2899,
        description: "Zari work festive wear",
        image: "https://via.placeholder.com/100?text=Saree",
        category: "Banarasi",
        inStock: true,
      },
      {
        name: "Cotton Saree",
        price: 999,
        description: "Lightweight daily wear",
        image: "https://via.placeholder.com/100?text=Saree",
        category: "Cotton",
        inStock: false,
      },
    ];
    save(demo);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Top bar: Back + Title + Add Product */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 rounded-lg border bg-white shadow hover:bg-gray-50 transition"
          >
            ← Back
          </button>
          <Link
            to="/admin/dashboard"
            className="px-4 py-2 rounded-lg border bg-white shadow hover:bg-gray-50 transition"
          >
            Dashboard
          </Link>
        </div>

        <h2 className="text-2xl font-bold text-gray-800">Manage Products</h2>

        <Link
          to="/admin/add-product"
          className="bg-[#7a003b] text-white px-5 py-2 rounded-lg shadow hover:opacity-90 transition"
        >
          + Add Product
        </Link>
      </div>

      {/* Empty state */}
      {products.length === 0 ? (
        <div className="bg-white rounded-xl shadow p-8 text-center">
          <p className="text-gray-700 mb-4">No products added yet.</p>
          <div className="flex gap-3 justify-center">
            <Link
              to="/admin/add-product"
              className="bg-[#7a003b] text-white px-5 py-2 rounded-lg shadow hover:opacity-90 transition"
            >
              Add First Product
            </Link>
            <button
              onClick={seedDemo}
              className="px-5 py-2 rounded-lg border bg-white shadow hover:bg-gray-50 transition"
            >
              Seed Demo Sarees
            </button>
          </div>
        </div>
      ) : (
        <>
          {/* Filters */}
          <div className="bg-white rounded-xl shadow p-4 mb-4 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
            <input
              type="text"
              placeholder="Search by name…"
              className="border rounded-lg px-4 py-2 w-full md:w-1/2 shadow-sm"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
            <div className="flex items-center gap-2">
              <label className="text-sm text-gray-600">Category</label>
              <select
                className="border rounded-lg px-4 py-2 shadow-sm"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c === "all" ? "All" : c}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-xl shadow overflow-x-auto">
            <table className="min-w-full text-left">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3">Image</th>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3">Price</th>
                  <th className="px-4 py-3">Stock</th>
                  <th className="px-4 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((p, idx) => {
                  const inStock = p?.inStock ?? true;
                  return (
                    <tr
                      key={idx}
                      className="border-t hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-4 py-3">
                        <img
                          src={p?.image || "https://via.placeholder.com/80?text=Saree"}
                          alt={p?.name || "Saree"}
                          className="w-16 h-16 object-cover rounded"
                        />
                      </td>
                      <td className="px-4 py-3">
                        <div className="font-semibold text-gray-800">
                          {p?.name || "—"}
                        </div>
                        <div className="text-sm text-gray-500 line-clamp-1">
                          {p?.description || ""}
                        </div>
                      </td>
                      <td className="px-4 py-3">{p?.category || "—"}</td>
                      <td className="px-4 py-3 font-medium text-gray-700">
                        ₹{p?.price ?? 0}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            inStock
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {inStock ? "In Stock" : "Out of Stock"}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => toggleStock(idx)}
                            className="px-3 py-1 rounded-lg border bg-white shadow hover:bg-gray-50 transition"
                          >
                            Toggle
                          </button>
                          <Link
                            to={`/admin/edit-product/${idx}`}
                            className="px-3 py-1 rounded-lg border bg-white shadow hover:bg-gray-50 transition"
                          >
                            Edit
                          </Link>
                          <button
                            onClick={() => handleDelete(idx)}
                            className="px-3 py-1 rounded-lg bg-red-600 text-white shadow hover:bg-red-700 transition"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
                {filtered.length === 0 && (
                  <tr>
                    <td colSpan="6" className="px-4 py-6 text-center text-gray-500">
                      No products match your search/filter.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}
