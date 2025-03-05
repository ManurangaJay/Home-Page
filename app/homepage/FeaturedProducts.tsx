import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

interface Product {
  name: string;
  price: number;
  image: string;
  description: string;
  rating: number;
  id: number;
}

const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [featuredPage, setFeaturedPage] = useState(0);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const response = await axios.get<Product[]>(
          // `http://localhost:8080/api/products/featured?page=${featuredPage}&size=4`
          `http://localhost:3001/products?section=featured&page=${featuredPage}&limit=4`
        );
        setFeaturedProducts((prev) => [...prev, ...response.data]);
      } catch (error) {
        console.error("Error fetching featured products:", error);
      }
    };

    fetchFeaturedProducts();
  }, [featuredPage]);

  const handleViewMore = () => setFeaturedPage((prev) => prev + 1);

  return (
    <div>
      <div>
        <h1 className="text-4xl font-semibold text-gray-800 mb-6">
          Today's Featured Items:
        </h1>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
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
