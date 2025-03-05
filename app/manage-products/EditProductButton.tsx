import React from "react";

interface EditProductButtonProps {
  onClick: () => void;
}

const EditProductButton: React.FC<EditProductButtonProps> = ({ onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={`transition delay-150 duration-300 ease-in-out 
        hover:-translate-y-1 hover:scale-105 border-2 border-blue-800 text-blue-800 
        bg-white rounded-2xl px-4 py-2 hover:bg-blue-800 hover:text-white`}
      >
        Edit
      </button>
    </div>
  );
};

export default EditProductButton;
