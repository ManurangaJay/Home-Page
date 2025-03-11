import React, { useState } from "react";
import axios from "axios";
import DeleteConfirmationModal from "./DeleteConfirmationModal";

interface DeleteProductButtonProps {
  productId: number;
  productName: string;
  onDelete: (productId: number) => void;
}

const DeleteProductButton: React.FC<DeleteProductButtonProps> = ({
  productId,
  productName,
  onDelete,
}) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3001/products/${productId}`);
      onDelete(productId);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleConfirmDelete = () => {
    handleDelete();
    setIsDeleteModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsDeleteModalOpen(false);
  };

  return (
    <>
      <div>
        <button
          onClick={() => setIsDeleteModalOpen(true)}
          className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 border-2 border-red-800 text-red-800 bg-white rounded-2xl px-4 py-2 hover:bg-red-800 hover:text-white"
          data-testid="main-delete-button"
        >
          Delete
        </button>
      </div>

      {isDeleteModalOpen && (
        <DeleteConfirmationModal
          isOpen={isDeleteModalOpen}
          productName={productName}
          onClose={handleCloseModal}
          onConfirm={handleConfirmDelete}
          data-testid="modal-delete-button"
        />
      )}
    </>
  );
};

export default DeleteProductButton;
