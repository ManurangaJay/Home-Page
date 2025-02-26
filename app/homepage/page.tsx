"use client";
import products from "../productData";
import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import "./styles.css"; // Add this at the top of your React component file

const HomePage = () => {
  const [showAll, setShowAll] = useState(false);
  const [showAllBestSellers, setShowAllBestSellers] = useState(false);
  const [showAllDeals, setShowAllDeals] = useState(false);

  const handleViewMore = () => {
    setShowAll(true);
  };

  const handleCollapse = () => {
    setShowAll(false);
  };

  const handleViewMoreBestSellers = () => {
    setShowAllBestSellers(true);
  };

  const handleCollapseBestSellers = () => {
    setShowAllBestSellers(false);
  };

  const handleViewMoreDeals = () => {
    setShowAllDeals(true);
  };

  const handleCollapseDeals = () => {
    setShowAllDeals(false);
  };

  // Best-selling products with more than 200 reviews
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
      <div
        className={`grid-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-1 md:p-10 justify-items-center ${
          showAll ? "expanded" : "collapsed"
        }`}
      >
        {products.slice(0, showAll ? products.length : 8).map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>

      {/* Toggle Button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={showAll ? handleCollapse : handleViewMore}
          className="py-3 px-10 text-white bg-darkgreen rounded-full text-lg"
          style={{ backgroundColor: "#006400" }}
        >
          {showAll ? "Collapse" : "View More"}
        </button>
      </div>

      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 mt-16 mb-6 tracking-wide">
        Best Selling Products:
      </h2>

      {/* Best Selling Products Grid */}
      <div
        className={`grid-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-1 md:p-10 justify-items-center ${
          showAllBestSellers ? "expanded" : "collapsed"
        }`}
      >
        {bestSellingProducts
          .slice(0, showAllBestSellers ? bestSellingProducts.length : 4)
          .map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
      </div>

      {/* Toggle Button for Best Selling Products */}
      <div className="flex justify-center mt-8">
        <button
          onClick={
            showAllBestSellers
              ? handleCollapseBestSellers
              : handleViewMoreBestSellers
          }
          className="py-3 px-10 text-white bg-darkgreen rounded-full text-lg"
          style={{ backgroundColor: "#006400" }}
        >
          {showAllBestSellers ? "Collapse" : "View More"}
        </button>
      </div>

      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 mt-16 mb-6 tracking-wide">
        Today's Deals:
      </h2>

      {/* Filtered Today's Deals Grid */}
      <div
        className={`grid-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-1 md:p-10 justify-items-center ${
          showAllDeals ? "expanded" : "collapsed"
        }`}
      >
        {todaysDeals
          .slice(0, showAllDeals ? todaysDeals.length : 4)
          .map((product) => (
            <ProductCard key={product.name} {...product} isDeal={true} />
          ))}
      </div>

      {/* Toggle Button for Today's Deals */}
      <div className="flex justify-center mt-8">
        <button
          onClick={showAllDeals ? handleCollapseDeals : handleViewMoreDeals}
          className="py-3 px-10 text-white bg-darkgreen rounded-full text-lg"
          style={{
            backgroundColor: "#006400",
          }}
        >
          {showAllDeals ? "Collapse" : "View More"}
        </button>
      </div>
    </div>
  );
};

export default HomePage;
