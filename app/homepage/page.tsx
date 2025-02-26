"use client";
import products from "../productData";
import React, { useState } from "react";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const [visibleItems, setVisibleItems] = useState<{
    featured: number;
    bestSellers: number;
    deals: number;
  }>({
    featured: 4,
    bestSellers: 4,
    deals: 4,
  });

  const handleViewMore = (section: "featured" | "bestSellers" | "deals") => {
    setVisibleItems((prevState) => ({
      ...prevState,
      [section]: prevState[section] + 4,
    }));
  };

  const shouldShowViewMore = (
    section: "featured" | "bestSellers" | "deals",
    totalItems: number
  ) => {
    return visibleItems[section] < totalItems;
  };

  // Best-selling products will be the products having more than 200 reviews
  const bestSellingProducts = products.filter(
    (product) => product.reviewsCount > 200
  );

  const todaysDeals = products.filter((product) => product.discountedPrice);

  return (
    <div>
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 mb-4 md:mb-6 tracking-wide">
        Today's Featured Items:
      </h1>

      <div className="grid-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-1 md:p-10 justify-items-center">
        {products.slice(0, visibleItems.featured).map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>

      {shouldShowViewMore("featured", products.length) && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => handleViewMore("featured")}
            className="py-3 px-10 text-white bg-darkgreen rounded-full text-lg transition 
            delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            style={{ backgroundColor: "#006400" }}
          >
            View More
          </button>
        </div>
      )}

      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 mt-16 mb-6 tracking-wide">
        Best Selling Products:
      </h2>

      <div className="grid-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-1 md:p-10 justify-items-center">
        {bestSellingProducts
          .slice(0, visibleItems.bestSellers)
          .map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
      </div>

      {shouldShowViewMore("bestSellers", bestSellingProducts.length) && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => handleViewMore("bestSellers")}
            className="py-3 px-10 text-white bg-darkgreen rounded-full text-lg transition delay-150 
            duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            style={{ backgroundColor: "#006400" }}
          >
            View More
          </button>
        </div>
      )}

      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 mt-16 mb-6 tracking-wide">
        Today's Deals:
      </h2>

      <div className="grid-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-1 md:p-10 justify-items-center">
        {todaysDeals.slice(0, visibleItems.deals).map((product) => (
          <ProductCard key={product.name} {...product} isDeal={true} />
        ))}
      </div>

      {shouldShowViewMore("deals", todaysDeals.length) && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => handleViewMore("deals")}
            className="py-3 px-10 text-white bg-darkgreen rounded-full text-lg transition delay-150 
            duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            style={{ backgroundColor: "#006400" }}
          >
            View More
          </button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
