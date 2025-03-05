import React from "react";

interface DeleteProductButtonProps {
  onClick: () => void;
}

const DeleteProductButton: React.FC<DeleteProductButtonProps> = ({
  onClick,
}) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={`transition delay-150 duration-300 ease-in-out 
        hover:-translate-y-1 hover:scale-105 border-2 border-red-800 text-red-800 
        bg-white rounded-2xl px-4 py-2 hover:bg-red-800 hover:text-white`}
      >
        Delete
      </button>
    </div>
  );
};

export default DeleteProductButton;
