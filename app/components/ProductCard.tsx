import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import AddToCart from "./AddToCart";

interface ProductCardProps {
  image: StaticImageData;
  name: string;
  price: number;
  description: string;
  rating: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  name,
  price,
  description,
  rating,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddToCart = () => {
    alert(`${name} added to cart!`);
  };

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
    alert(
      isFavorite
        ? `${name} removed from favorites!`
        : `${name} added to favorites!`
    );
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={index < rating ? "text-green-800" : "text-gray-300"}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="bg-gray-200 p-4 rounded-2xl w-80 shadow-lg relative">
      <button
        onClick={handleFavoriteClick}
        className="absolute top-5 right-7 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-md"
      >
        <CiHeart
          className={`text-xl transition-colors ${
            isFavorite ? "text-red-600" : "text-black "
          }`}
        />
      </button>

      <div className="w-full h-50 bg-gray-300 rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={name}
          className="object-cover object-center w-full h-full"
          width={320}
          height={192}
        />
      </div>
      <div className="flex justify-between mt-4">
        <h3 className="text-lg font-bold text-gray-800">{name}</h3>
        <span className="text-lg font-semibold text-green-800">
          LKR {price}
        </span>
      </div>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
      <div className="mt-2">{renderStars(rating)}</div>
      <div className="mt-4">
        <AddToCart onClick={handleAddToCart} />
      </div>
    </div>
  );
};

export default ProductCard;
