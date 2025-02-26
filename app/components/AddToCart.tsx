"use client";
import React from "react";

interface AddToCartProps {
  onClick: () => void;
  className?: string;
}

const AddToCart: React.FC<AddToCartProps> = ({ onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`transition delay-150 duration-300 ease-in-out 
        hover:-translate-y-1 hover:scale-105 border-2 border-green-800 text-green-800 
        bg-white rounded-2xl px-4 py-2 hover:bg-green-800 hover:text-white  ${className}`}
    >
      Add to Cart
    </button>
  );
};

export default AddToCart;
