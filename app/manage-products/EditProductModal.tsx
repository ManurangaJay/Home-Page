import React, { useState } from "react";

interface EditProductModalProps {
  isOpen: boolean;
  product: {
    name: string;
    price: number;
    discountedPrice?: number;
    description: string;
  };
  onClose: () => void;
  onSave: (updatedProduct: {
    name: string;
    price: number;
    discountedPrice?: number;
    description: string;
  }) => void;
}

const EditProductModal: React.FC<EditProductModalProps> = ({
  isOpen,
  product,
  onClose,
  onSave,
}) => {
  const [editedProduct, setEditedProduct] = useState(product);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave(editedProduct);
    onClose();
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
