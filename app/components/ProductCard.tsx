import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { CiHeart } from "react-icons/ci";
import AddToCart from "./AddToCart";

interface ProductCardProps {
  image: StaticImageData;
  name: string;
  price: number;
  discountedPrice?: number;
  description: string;
  rating: number;
  reviewsCount: number;
  isDeal?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  name,
  price,
  discountedPrice,
  description,
  rating,
  reviewsCount,
  isDeal = false,
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
        className={
          index < rating ? "text-green-800 text-xl" : "text-gray-300 text-xl"
        }
      >
        ★
      </span>
    ));
  };

  return (
    <div className="bg-gray-200 p-4 rounded-2xl shadow-lg relative w-full sm:w-80">
      <button
        onClick={handleFavoriteClick}
        className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-md"
      >
        <CiHeart
          className={`text-xl transition-colors ${
            isFavorite ? "text-red-600" : "text-black "
          }`}
        />
      </button>

      <div className="w-full h-64 sm:h-56 bg-gray-300 rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={name}
          className="object-cover object-center w-full h-full"
          width={320}
          height={192}
        />
      </div>

      <div className="flex justify-between mt-4">
        <h3 className="text-base sm:text-lg font-bold text-gray-800">{name}</h3>
        {isDeal && discountedPrice ? (
          <div className="text-right">
            <span className="text-base sm:text-lg text-gray-500 line-through">
              <span className="text-[9px] align-super">LKR</span> {price}
            </span>
          </div>
        ) : (
          <span className="text-base sm:text-lg font-semibold text-black">
            <span className="text-[9px] align-super">LKR</span> {price}
          </span>
        )}
      </div>
      <div className="flex justify-between items-center mt-2">
        <p className="text-sm text-gray-600">{description}</p>
        {isDeal && discountedPrice && (
          <span className="text-base sm:text-lg font-semibold text-red-600">
            <span className="text-[9px] align-super">LKR</span>{" "}
            {discountedPrice}
          </span>
        )}
      </div>

      <div className="flex items-center mt-2">
        <div className="flex">{renderStars(rating)}</div>
        <span className="ml-2 text-sm text-gray-500">({reviewsCount})</span>
      </div>
      <div className="mt-4">
        <AddToCart
          onClick={handleAddToCart}
          className="py-2 sm:py-3 text-sm sm:text-base ml-0"
        />
      </div>
    </div>
  );
};

export default ProductCard;
