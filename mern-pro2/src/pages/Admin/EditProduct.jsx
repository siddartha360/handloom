import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    // load product from localStorage (later from DB)
    let products = JSON.parse(localStorage.getItem("products")) || [];
    let existing = products[id];
    if (existing) {
      setProduct(existing);
    }
  }, [id]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let products = JSON.parse(localStorage.getItem("products")) || [];
    products[id] = product;
    localStorage.setItem("products", JSON.stringify(products));
    alert("✅ Product updated successfully!");
    navigate("/admin/manage-products"); // redirect back
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          ✏️ Edit Product
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Product Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Saree Name"
              value={product.name}
              onChange={handleChange}
              required
              className="mt-1 w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Price (₹)
            </label>
            <input
              type="number"
              name="price"
              placeholder="Enter price"
              value={product.price}
              onChange={handleChange}
              required
              className="mt-1 w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              placeholder="Enter product description"
              value={product.description}
              onChange={handleChange}
              rows="3"
              className="mt-1 w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Image URL
            </label>
            <input
              type="text"
              name="image"
              placeholder="Enter image link"
              value={product.image}
              onChange={handleChange}
              className="mt-1 w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Preview Image */}
          {product.image && (
            <div className="mt-4 flex justify-center">
              <img
                src={product.image}
                alt="preview"
                className="w-32 h-32 object-cover rounded-lg border"
              />
            </div>
          )}

          <div className="flex justify-between mt-6">
            <button
              type="button"
              onClick={() => navigate("/admin/manage-products")}
              className="px-5 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
            >
              ← Back
            </button>

            <button
              type="submit"
              className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              💾 Update Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProduct;
