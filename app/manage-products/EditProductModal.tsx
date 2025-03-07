import React, { useState, useEffect } from "react";
import axios from "axios";
import { Product, Category } from "../components/types"; // Import shared type

interface EditProductModalProps {
  isOpen: boolean;
  product: Product; // Ensure to use the shared Product type here
  onClose: () => void;
  onSave: (updatedProduct: Product) => void; // Use the shared type here as well
}

const EditProductModal: React.FC<EditProductModalProps> = ({
  isOpen,
  product,
  onClose,
  onSave,
}) => {
  const [editedProduct, setEditedProduct] = useState<Product>(product);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      setLoading(true);
      fetch("http://localhost:3001/categories")
        .then((response) => response.json())
        .then((data) => {
          setCategories(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching categories:", error);
          setLoading(false);
        });
    }
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategoryId =
      e.target.value === "none" ? null : Number(e.target.value);
    setEditedProduct((prev) => ({
      ...prev,
      categoryId: selectedCategoryId,
    }));
  };

  const handleSave = async () => {
    try {
      // Send the updated product to the API
      await axios.put(
        `http://localhost:3001/products/${editedProduct.id}`,
        editedProduct
      );

      // Pass the updated product to onSave
      onSave(editedProduct);

      // Close the modal
      onClose();
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      style={{ backdropFilter: "blur(5px)" }}
    >
      <div className="bg-white p-8 rounded-xl w-[500px] shadow-lg">
        <h2 className="text-2xl font-semibold mb-6">Edit Product</h2>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={editedProduct.name}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg shadow-sm"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Price (LKR)</label>
          <input
            type="number"
            name="price"
            value={editedProduct.price}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg shadow-sm"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2">
            Discounted Price (LKR)
          </label>
          <input
            type="number"
            name="discountedPrice"
            value={editedProduct.discountedPrice || ""}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg shadow-sm"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Description</label>
          <input
            type="text"
            name="description"
            value={editedProduct.description}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg shadow-sm"
          />
        </div>

        {/* Category Dropdown */}
        <div className="mb-6 flex items-center justify-between">
          <label className="block text-gray-700 mb-2 mr-4">
            {editedProduct.category?.name || "No Category"}
          </label>
          <select
            value={editedProduct.categoryId ?? "none"}
            onChange={handleCategoryChange}
            className="w-full max-w-[300px] border p-3 rounded-lg shadow-sm"
          >
            <option value="none">No Category</option>
            {loading ? (
              <option value="loading" disabled>
                Loading categories...
              </option>
            ) : (
              categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))
            )}
          </select>
        </div>

        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="py-2 px-6 bg-gray-300 text-black rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="py-2 px-6 bg-green-600 text-white rounded-md"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProductModal;
