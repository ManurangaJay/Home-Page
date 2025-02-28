"use client";
import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaCircleArrowLeft } from "react-icons/fa6";

interface Product {
  name: string;
  price: number;
  image: string;
  description: string;
}

const HomePage = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [bestSellingProducts, setBestSellingProducts] = useState<Product[]>([]);
  const [todaysDeals, setTodaysDeals] = useState<Product[]>([]);
  const [visibleItems, setVisibleItems] = useState<{
    featured: number;
    bestSellers: number;
  }>({
    featured: 4,
    bestSellers: 4,
  });

  const handleViewMore = (section: "featured" | "bestSellers") => {
    setVisibleItems((prevState) => ({
      ...prevState,
      [section]: prevState[section] + 4,
    }));
  };

  const shouldShowViewMore = (
    section: "featured" | "bestSellers",
    totalItems: number
  ) => {
    return visibleItems[section] < totalItems;
  };

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const dealsRef = useRef<HTMLDivElement | null>(null);

  const scrollDeals = (direction: "left" | "right") => {
    const itemsToScroll = 2;
    const newIndex =
      direction === "right"
        ? Math.max(currentIndex - itemsToScroll, 0)
        : Math.min(currentIndex + itemsToScroll, todaysDeals.length - 4);
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const featuredResponse = await axios.get<Product[]>(
          "http://localhost:8080/api/products/featured"
        );
        const bestSellersResponse = await axios.get<Product[]>(
          "http://localhost:8080/api/products/bestsellers"
        );
        const dealsResponse = await axios.get<Product[]>(
          "http://localhost:8080/api/products/deals"
        );

        setFeaturedProducts(featuredResponse.data);
        setBestSellingProducts(bestSellersResponse.data);
        setTodaysDeals(dealsResponse.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (dealsRef.current) {
      const scrollAmount = dealsRef.current.children[0]?.clientWidth || 0;
      dealsRef.current.scrollTo({
        left: scrollAmount * currentIndex,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  return (
    <div>
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 mb-4 md:mb-6 tracking-wide">
        Today's Featured Items:
      </h1>
      <div className="grid-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-1 md:p-10 justify-items-center">
        {featuredProducts.slice(0, visibleItems.featured).map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
      {shouldShowViewMore("featured", featuredProducts.length) && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => handleViewMore("featured")}
            className="py-3 px-10 text-white bg-darkgreen rounded-full text-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
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
            className="py-3 px-10 text-white bg-darkgreen rounded-full text-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            style={{ backgroundColor: "#006400" }}
          >
            View More
          </button>
        </div>
      )}

      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 mt-16 mb-6 tracking-wide">
        Today's Deals:
      </h2>

      <div className="flex justify-end mb-4 pr-10 space-x-4">
        <button
          onClick={() => scrollDeals("left")}
          className="p-2 rounded-full transition text-xl"
        >
          <FaCircleArrowLeft
            size={40}
            className="transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 rounded-full bg-slate-500 fill-gray-300"
          />
        </button>

        <button
          onClick={() => scrollDeals("right")}
          className="p-2 rounded-full transition text-xl"
        >
          <FaCircleArrowRight
            size={40}
            className="transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 rounded-full bg-slate-500 fill-gray-300"
          />
        </button>
      </div>
      <div
        ref={dealsRef}
        className="flex overflow-x-auto scrollbar-hide"
        style={{
          scrollBehavior: "smooth",
          width: "100%",
          padding: "0 5vw",
        }}
      >
        {todaysDeals.map((product, index) => (
          <div
            key={product.name}
            style={{
              flex: "0 0 25%",
              maxWidth: "27%",
              marginRight: "2vw",
            }}
          >
            <ProductCard {...product} isDeal={true} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
