import React, { useState } from "react";

interface AddProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (newProduct: {
    name: string;
    price: number;
    discountedPrice?: number;
    description: string;
    image: string;
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
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setNewProduct((prev) => ({
        ...prev,
        image: URL.createObjectURL(file),
      }));
    }
  };

  const handleSave = () => {
    onSave(newProduct);
    onClose(); // Close the modal after saving
  };

  if (!isOpen) return null; // Don't render the modal if it's not open

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

        {/* Product Price */}
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

        {/* Product Description */}
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

        {/* Product Image Upload */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Upload Image</label>
          <input
            type="file"
            onChange={handleImageChange}
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

        {/* Buttons */}
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
