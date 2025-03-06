import React, { useState, useEffect } from "react";

interface Category {
  id: number;
  name: string;
}

interface AddProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (newProduct: {
    name: string;
    price: number;
    discountedPrice?: number;
    description: string;
    image: string;
    categoryId: number | null; // Category can be null if not selected
  }) => void;
}

const AddProductModal: React.FC<AddProductModalProps> = ({
  isOpen,
  onClose,
  onSave,
}) => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: 0,
    discountedPrice: 0,
    description: "",
    image: "",
    categoryId: null as number | null, // Initially no category
  });

  const [categories, setCategories] = useState<Category[]>([]); // State for categories
  const [loading, setLoading] = useState<boolean>(false); // Loading state for categories

  // Fetch categories from the backend when the modal opens
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
    setNewProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategoryId =
      e.target.value === "none" ? null : Number(e.target.value);
    setNewProduct((prev) => ({
      ...prev,
      categoryId: selectedCategoryId,
    }));
  };

  const handleSave = () => {
    onSave(newProduct);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      style={{ backdropFilter: "blur(5px)" }}
    >
      <div className="bg-white p-8 rounded-xl w-[500px] shadow-lg">
        <h2 className="text-2xl font-semibold mb-6">Add New Product</h2>

        {/* Product Name */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={newProduct.name}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg shadow-sm"
          />
        </div>

        {/* Price */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Price</label>
          <input
            type="number"
            name="price"
            value={newProduct.price}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg shadow-sm"
          />
        </div>

        {/* Discounted Price */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Discounted Price</label>
          <input
            type="number"
            name="discountedPrice"
            value={newProduct.discountedPrice || ""}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg shadow-sm"
          />
        </div>

        {/* Description */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Description</label>
          <input
            type="text"
            name="description"
            value={newProduct.description}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg shadow-sm"
          />
        </div>

        {/* Image URL */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Image URL</label>
          <input
            type="text"
            name="image"
            value={newProduct.image}
            onChange={handleChange}
            placeholder="Enter the image URL"
            className="w-full border p-3 rounded-lg shadow-sm"
          />
          {newProduct.image && (
            <div className="mt-4">
              <img
                src={newProduct.image}
                alt="Product Preview"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          )}
        </div>

        {/* Category Dropdown */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Category</label>
          <select
            value={newProduct.categoryId ?? "none"}
            onChange={handleCategoryChange}
            className="w-full border p-3 rounded-lg shadow-sm"
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

export default AddProductModal;
