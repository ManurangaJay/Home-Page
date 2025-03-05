"use client";
import React from "react";
import products from "../productData";
import ProductCard from "../components/ProductCard";

const Products = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Our Products
      </h2>
      <div className="grid-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-1 md:p-10 justify-items-center">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
