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
      <h1 className="text-4xl font-semibold text-gray-800 mb-6 tracking-wide">
        Today's Featured Items:
      </h1>

      <div className="grid grid-cols-3 gap-8 p-20">
        {products.slice(0, showAll ? products.length : 6).map((product) => (
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
