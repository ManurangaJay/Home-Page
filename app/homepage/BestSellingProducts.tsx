import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { useCategory } from "../../context/CategoryContext";
import { Product } from "../components/types";

const BestSellingProducts = () => {
  const { selectedCategoryId } = useCategory();
  const [bestSellingProducts, setBestSellingProducts] = useState<Product[]>([]);
  const [bestSellingPage, setBestSellingPage] = useState(0);

  // Reset products and page when category changes
  useEffect(() => {
    setBestSellingProducts([]); // Clear the existing products
    setBestSellingPage(0); // Reset page to 0 to fetch the first batch of products
  }, [selectedCategoryId]);

  useEffect(() => {
    const fetchBestSellingProducts = async () => {
      try {
        const categoryParam =
          selectedCategoryId !== null ? `&category=${selectedCategoryId}` : "";
        const response = await axios.get<Product[]>(
          `http://localhost:3001/products?section=best-selling&page=${bestSellingPage}&limit=4${categoryParam}`
        );
        // If it's the first page (page 0), replace existing products with new ones
        if (bestSellingPage === 0) {
          setBestSellingProducts(response.data);
        } else {
          // If it's a subsequent page, append the new products to the existing list
          setBestSellingProducts((prevProducts) => [
            ...prevProducts,
            ...response.data,
          ]);
        }
      } catch (error) {
        console.error("Error fetching best-selling products:", error);
      }
    };

    fetchBestSellingProducts();
  }, [bestSellingPage, selectedCategoryId]);

  const handleViewMore = () => setBestSellingPage((prev) => prev + 1);

  return (
    <div>
      <h2 className="text-4xl font-semibold text-gray-800 mt-16 mb-6">
        {selectedCategoryId
          ? "Best Sellers in Selected Category"
          : "Best Selling Products:"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {bestSellingProducts.map((product) => (
          <ProductCard key={`${product.id}-${bestSellingPage}`} {...product} />
        ))}
      </div>
      {bestSellingProducts.length > 0 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleViewMore}
            className="py-3 px-10 bg-green-900 text-white rounded-full text-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
          >
            View More
          </button>
        </div>
      )}
    </div>
  );
};

export default BestSellingProducts;
