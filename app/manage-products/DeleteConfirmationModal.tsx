import React from "react";

interface DeleteConfirmationModalProps {
  isOpen: boolean;
  productName: string;
  onClose: () => void;
  onConfirm: () => void;
}

const DeleteConfirmationModal: React.FC<DeleteConfirmationModalProps> = ({
  isOpen,
  productName,
  onClose,
  onConfirm,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>

      <div className="bg-white p-6 rounded-xl shadow-lg w-96 relative z-10">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Are you sure you want to delete "{productName}"?
        </h2>

        <div className="flex justify-center gap-4">
          <button
            onClick={onClose}
            className="py-2 px-6 bg-gray-300 text-black rounded-md"
            data-testid="modal-cancel-button"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="py-2 px-6 bg-red-600 text-white rounded-md"
            data-testid="modal-delete-button"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
