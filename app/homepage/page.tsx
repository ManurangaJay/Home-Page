"use client";
import products from "../productData";
import React, { useState } from "react";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const [showAll, setShowAll] = useState(false);

  const handleViewMore = () => {
    setShowAll(true);
  };

  return (
    <div>
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 mb-4 md:mb-6 tracking-wide">
        Today's Featured Items:
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-1 md:p-10">
        {products.slice(0, showAll ? products.length : 8).map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>

      {!showAll && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleViewMore}
            className="py-3 px-10 text-white bg-darkgreen rounded-full text-lg"
            style={{
              backgroundColor: "#006400",
            }}
          >
            View More
          </button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
