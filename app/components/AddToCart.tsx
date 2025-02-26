"use client";
import React from "react";

interface AddToCartProps {
  onClick: () => void;
  className?: string; // Add className as an optional prop
}

const AddToCart: React.FC<AddToCartProps> = ({ onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`border-2 border-green-800 text-green-800 bg-white rounded-2xl px-4 py-2 hover:bg-green-800 hover:text-white transition-colors ${className}`}
    >
      Add to Cart
    </button>
  );
};

export default AddToCart;
