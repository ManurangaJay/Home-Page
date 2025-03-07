import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { useCategory } from "../../context/CategoryContext";

interface Product {
  name: string;
  price: number;
  image: string;
  description: string;
  rating: number;
  id: number;
}

const FeaturedProducts = () => {
  const { selectedCategoryId } = useCategory();
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [featuredPage, setFeaturedPage] = useState(0);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const categoryParam = selectedCategoryId
          ? `&category=${selectedCategoryId}`
          : "";
        const response = await axios.get<Product[]>(
          `http://localhost:3001/products?section=featured&page=${featuredPage}&limit=4${categoryParam}`
        );
        // Append the new products to the existing ones
        setFeaturedProducts((prevProducts) => [
          ...prevProducts,
          ...response.data,
        ]);
      } catch (error) {
        console.error("Error fetching featured products:", error);
      }
    };

    fetchFeaturedProducts();
  }, [featuredPage, selectedCategoryId]);

  const handleViewMore = () => setFeaturedPage((prev) => prev + 1);

  return (
    <div>
      <h1 className="text-4xl font-semibold text-gray-800 mb-6">
        {selectedCategoryId
          ? `Today's Featured Items(Under the Selected Category)`
          : "Today's Featured Items:"}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {featuredProducts.map((product) => (
          <ProductCard key={`${product.id}-${featuredPage}`} {...product} />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button
          onClick={handleViewMore}
          className="py-3 px-10 bg-green-900 text-white rounded-full text-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default FeaturedProducts;
