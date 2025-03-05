import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";

interface Product {
  name: string;
  price: number;
  image: string;
  description: string;
  rating: number;
  id: number;
}

const TodaysDeals = () => {
  const [todaysDeals, setTodaysDeals] = useState<Product[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [page, setPage] = useState<number>(0);
  const dealsRef = useRef<HTMLDivElement | null>(null);

  const fetchTodaysDeals = async (newPage: number) => {
    try {
      const response = await axios.get<Product[]>(
        // `http://localhost:8080/api/products/todays-deals?page=${newPage}&size=20`
        `http://localhost:3001/products?section=deals&page=${newPage}&limit=20`
      );
      setTodaysDeals((prev) => [...prev, ...response.data]);
    } catch (error) {
      console.error("Error fetching today's deals:", error);
    }
  };

  useEffect(() => {
    fetchTodaysDeals(page);
  }, [page]);

  const scrollDeals = (direction: "left" | "right") => {
    const itemsToScroll =
      window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 4;
    const newIndex =
      direction === "right"
        ? currentIndex + itemsToScroll
        : Math.max(currentIndex - itemsToScroll, 0);

    if (direction === "right" && newIndex + 4 >= todaysDeals.length) {
      setPage((prev) => prev + 1);
    } else if (direction === "left" && newIndex === 0 && page > 0) {
      setPage((prev) => prev - 1);
    }

    setCurrentIndex(newIndex);

    if (dealsRef.current) {
      const scrollAmount = dealsRef.current.children[0]?.clientWidth || 0;
      dealsRef.current.scrollTo({
        left: scrollAmount * newIndex,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="pb-10">
      <h2 className="text-4xl font-semibold text-gray-800 mt-16 mb-6">
        Today's Deals:
      </h2>
      <div className="hidden md:flex justify-end mb-4 gap-4 pr-16">
        <FaCircleArrowLeft
          size={40}
          className="cursor-pointer bg-white text-gray-400 transition delay-150 
          duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
          onClick={() => scrollDeals("left")}
        />
        <FaCircleArrowRight
          size={40}
          className="cursor-pointer  bg-white text-gray-400 transition delay-150 
          duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
          onClick={() => scrollDeals("right")}
        />
      </div>
      <div
        ref={dealsRef}
        className="flex overflow-x-auto gap-4 px-4 scrollbar-hide "
        style={{ scrollSnapType: "x mandatory" }}
      >
        {todaysDeals.map((product) => (
          <div
            className="pb-5 lg:pl-8"
            key={product.name}
            style={{
              flex: `0 0 ${
                window.innerWidth < 768
                  ? "100%"
                  : window.innerWidth < 1024
                  ? "50%"
                  : "25%"
              }`,
              scrollSnapAlign: "start",
            }}
          >
            <ProductCard {...product} isDeal={true} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodaysDeals;
