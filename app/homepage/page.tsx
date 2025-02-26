"use client";
import products from "../productData";
import React, { useState } from "react";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const [showAll, setShowAll] = useState(false);
  const [showAllBestSellers, setShowAllBestSellers] = useState(false);
  const [showAllDeals, setShowAllDeals] = useState(false);

  const handleViewMore = () => {
    setShowAll(true);
  };

  const handleViewMoreBestSellers = () => {
    setShowAllBestSellers(true);
  };

  const handleViewMoreDeals = () => {
    setShowAllDeals(true);
  };

  // Sample best-selling products with more than 200 reviews
  const bestSellingProducts = products.filter(
    (product) => product.reviewsCount > 200
  );

  // Filter today's deals to only include products with a discountedPrice
  const todaysDeals = products.filter((product) => product.discountedPrice);

  return (
    <div>
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 mb-4 md:mb-6 tracking-wide">
        Today's Featured Items:
      </h1>

      {/* Featured Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-1 md:p-10 justify-items-center">
        {products.slice(0, showAll ? products.length : 8).map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>

      {/* View More Button for Featured Products */}
      {!showAll && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleViewMore}
            className="py-3 px-10 text-white bg-darkgreen rounded-full text-lg"
            style={{ backgroundColor: "#006400" }}
          >
            View More
          </button>
        </div>
      )}

      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 mt-16 mb-6 tracking-wide">
        Best Selling Products:
      </h2>

      {/* Best Selling Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-1 md:p-10 justify-items-center">
        {bestSellingProducts
          .slice(0, showAllBestSellers ? bestSellingProducts.length : 4)
          .map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
      </div>

      {/* View More Button for Best Selling Products */}
      {!showAllBestSellers && bestSellingProducts.length > 4 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleViewMoreBestSellers}
            className="py-3 px-10 text-white bg-darkgreen rounded-full text-lg"
            style={{ backgroundColor: "#006400" }}
          >
            View More
          </button>
        </div>
      )}

      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 mt-16 mb-6 tracking-wide">
        Today's Deals:
      </h2>

      {/* Filtered Today's Deals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-1 md:p-10 justify-items-center">
        {todaysDeals
          .slice(0, showAllDeals ? todaysDeals.length : 4)
          .map((product) => (
            <ProductCard key={product.name} {...product} isDeal={true} />
          ))}
      </div>

      {/* View More Button for Today's Deals */}
      {!showAllDeals && todaysDeals.length > 4 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleViewMoreDeals}
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
