"use client";
import React from "react";

interface AddToCartProps {
  onClick: () => void;
}

const AddToCart: React.FC<AddToCartProps> = ({ onClick }) => {
  return (
    <button
      onClick={(onClick) => {
        alert("The product was added to the cart");
      }}
      className="border-2 border-green-800 text-green-800 bg-white rounded-2xl px-4 py-2 hover:bg-green-800 hover:text-white transition-colors"
    >
      Add to Cart
    </button>
  );
};

export default AddToCart;
