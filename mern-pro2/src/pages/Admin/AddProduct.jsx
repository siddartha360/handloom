import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiPlus } from "react-icons/fi";

export default function AddProduct() {
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
    category: "",
    inStock: true,
  });
  const [categories, setCategories] = useState([]);
  const [newCat, setNewCat] = useState("");

  // Load existing categories from localStorage
  useEffect(() => {
    const cats = JSON.parse(localStorage.getItem("categories")) || [];
    setCategories(cats);
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProduct((p) => ({
      ...p,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Add a new category
  const addCategory = () => {
    const trimmed = newCat.trim();
    if (!trimmed) return;

    const next = Array.from(new Set([...categories, trimmed]));
    setCategories(next);
    localStorage.setItem("categories", JSON.stringify(next));

    setNewCat("");
    setProduct((p) => ({ ...p, category: trimmed }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!product.name || !product.price) {
      alert("⚠ Please enter a product name and price.");
      return;
    }

    const products = JSON.parse(localStorage.getItem("products")) || [];
    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));

    alert("✅ Product added successfully!");
    navigate("/admin/manage-products");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-purple-900 flex items-center gap-2">
        <FiPlus className="text-purple-700" /> Add New Saree
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Product Name */}
        <div>
          <label className="block mb-1 font-semibold text-gray-700">Saree Name</label>
          <input
            name="name"
            value={product.name}
            onChange={handleChange}
            placeholder="Enter saree name"
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block mb-1 font-semibold text-gray-700">Price (₹)</label>
          <input
            name="price"
            type="number"
            value={product.price}
            onChange={handleChange}
            placeholder="Enter price"
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 font-semibold text-gray-700">Description</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            placeholder="Enter product description"
            className="w-full border rounded-lg px-3 py-2 h-24 focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="block mb-1 font-semibold text-gray-700">Image URL</label>
          <input
            name="image"
            value={product.image}
            onChange={handleChange}
            placeholder="Paste image URL"
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Category & New Category */}
        <div>
          <label className="block mb-1 font-semibold text-gray-700">Category</label>
          <div className="flex gap-3 items-center">
            <select
              name="category"
              value={product.category}
              onChange={handleChange}
              className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Select category</option>
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>

            <input
              placeholder="New category"
              value={newCat}
              onChange={(e) => setNewCat(e.target.value)}
              className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="button"
              onClick={addCategory}
              className="bg-purple-700 text-white px-3 py-2 rounded-lg hover:bg-purple-800"
            >
              Add
            </button>
          </div>
        </div>

        {/* Stock Checkbox */}
        <label className="flex items-center gap-2 font-medium text-gray-700">
          <input
            type="checkbox"
            name="inStock"
            checked={product.inStock}
            onChange={handleChange}
            className="w-5 h-5 accent-purple-700"
          />
          In Stock
        </label>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            type="submit"
            className="bg-purple-700 text-white px-5 py-2 rounded-lg hover:bg-purple-800 transition"
          >
            Save Product
          </button>
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="border border-gray-300 px-5 py-2 rounded-lg hover:bg-gray-100 transition"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
