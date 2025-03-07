// AddProductSection.tsx
import React, { useState } from "react";
import AddProductModal from "./AddProductModal";
import axios from "axios";
import { Product } from "../components/types"; // Import shared type

interface AddProductSectionProps {
  onProductAdded: (newProduct: Product) => void;
}

const AddProductSection: React.FC<AddProductSectionProps> = ({
  onProductAdded,
}) => {
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastType, setToastType] = useState<"success" | "error">("success");

  const handleAddProduct = async (newProduct: Product) => {
    try {
      const productToSave = {
        ...newProduct,
        rating: newProduct.rating || 0,
        reviewsCount: newProduct.reviewsCount || 0,
        isDeal: newProduct.isDeal || false,
      };

      const response = await axios.post<Product>(
        `http://localhost:3001/products`,
        productToSave
      );
      onProductAdded(response.data);
      setToastMessage(`Product "${newProduct.name}" added successfully!`);
      setToastType("success");
    } catch (error) {
      console.error("Error adding product:", error.response || error);
      setToastMessage("Failed to add product.");
      setToastType("error");
    }
    setIsAddProductModalOpen(false);
  };

  return (
    <div className="py-5 px-5 flex justify-center items-center mb-8">
      <h2 className="text-3xl font-semibold mr-4">
        Want to add more products?
      </h2>
      <button
        onClick={() => setIsAddProductModalOpen(true)}
        className="py-3 px-10 bg-green-700 text-white rounded-full text-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
      >
        Add a Product
      </button>

      <AddProductModal
        isOpen={isAddProductModalOpen}
        onClose={() => setIsAddProductModalOpen(false)}
        onSave={handleAddProduct}
      />
    </div>
  );
};

export default AddProductSection;
