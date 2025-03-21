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
    categoryId: number | null;
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
    categoryId: null as number | null,
  });

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
    const { name, value, type } = e.target;
    setNewProduct((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
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

        <div className="mb-6">
          <label htmlFor="name" className="block text-gray-700 mb-2">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={newProduct.name}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg shadow-sm"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="price" className="block text-gray-700 mb-2">
            Price
          </label>
          <input
            id="price"
            type="number"
            name="price"
            value={newProduct.price}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg shadow-sm"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="discountedPrice" className="block text-gray-700 mb-2">
            Discounted Price
          </label>
          <input
            id="discountedPrice"
            type="number"
            name="discountedPrice"
            value={newProduct.discountedPrice || ""}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg shadow-sm"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="description" className="block text-gray-700 mb-2">
            Description
          </label>
          <input
            id="description"
            type="text"
            name="description"
            value={newProduct.description}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg shadow-sm"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="image" className="block text-gray-700 mb-2">
            Image URL
          </label>
          <input
            id="image"
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

        <div className="mb-6">
          <label htmlFor="category" className="block text-gray-700 mb-2">
            Category
          </label>
          <select
            id="category"
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
