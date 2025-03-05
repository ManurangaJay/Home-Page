import React from "react";
import Image from "next/image";
import EditProductButton from "./EditProductButton";
import DeleteProductButton from "./DeleteProductButton";

interface ManageProductCardProps {
  image: string;
  name: string;
  price: number;
  discountedPrice?: number;
  description: string;
  rating: number;
  reviewsCount?: number;
  isDeal?: boolean;
  onEdit: () => void;
  onDelete: () => void;
}

const ManageProductCard: React.FC<ManageProductCardProps> = ({
  image,
  name,
  price,
  discountedPrice,
  description,
  rating,
  reviewsCount,
  isDeal = false,
  onEdit,
  onDelete,
}) => {
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
        <span className="text-base sm:text-lg font-semibold text-black">
          <span className="text-[9px] align-super">LKR</span> {price}
        </span>
      </div>

      <div className="flex justify-between items-center mt-2">
        <p className="text-sm text-gray-600">{description}</p>
      </div>

      <div className="flex justify-between mt-2">
        {discountedPrice !== undefined && (
          <span className="text-base sm:text-base font-semibold text-red-600">
            {discountedPrice > 0
              ? `Discounted: LKR ${discountedPrice}`
              : "Discounted: No"}
          </span>
        )}
      </div>

      <div className="flex justify-between mt-4">
        <EditProductButton onClick={onEdit} />
        <DeleteProductButton onClick={onDelete} />
      </div>
    </div>
  );
};

export default ManageProductCard;
