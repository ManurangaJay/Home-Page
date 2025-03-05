"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ManageProductCard from "./ManageProductCard";
import EditProductModal from "./EditProductModal";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import AddProductModal from "./AddProductModal";
import Toast from "./Toast";

interface Product {
  name: string;
  price: number;
  discountedPrice?: number;
  image: string;
  description: string;
  rating: number;
  reviewsCount?: number;
  isDeal?: boolean;
}

const ManageProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastType, setToastType] = useState<"success" | "error">("success");
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>(
          `http://localhost:3001/products?page=${page}&limit=50`
        );
        setProducts((prev) => [...prev, ...response.data]);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [page]);

  const handleEdit = (product: Product) => {
    setCurrentProduct(product);
    setIsModalOpen(true);
  };

  const handleDelete = (productName: string) => {
    setProductToDelete(productName);
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (productToDelete) {
      setProducts((prev) =>
        prev.filter((product) => product.name !== productToDelete)
      );
      setToastMessage(`Product "${productToDelete}" deleted successfully!`);
      setToastType("success");
    }
    setIsDeleteModalOpen(false);
    setProductToDelete(null);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentProduct(null);
  };

  const handleAddProduct = (newProduct: Product) => {
    setProducts((prev) => [...prev, newProduct]);
    setToastMessage(`Product "${newProduct.name}" added successfully!`);
    setToastType("success");
  };

  const handleToastClose = () => {
    setToastMessage(null);
  };

  const handleToastShow = (message: string) => {
    setToastMessage(message);
    setToastType("success");
  };

  return (
    <div>
      <div className="py-5 px-5 flex justify-center items-center mb-8">
        <h2 className="text-3xl font-semibold mr-4">
          Want to add more products?
        </h2>
        <button
          onClick={() => setIsAddProductModalOpen(true)}
          className="py-3 px-10 bg-green-700 text-white rounded-full text-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
        >
          Add a Product
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-5 pb-10">
        {products.map((product) => (
          <ManageProductCard
            key={product.name}
            image={product.image}
            name={product.name}
            price={product.price}
            discountedPrice={product.discountedPrice}
            description={product.description}
            rating={product.rating}
            reviewsCount={product.reviewsCount}
            isDeal={product.isDeal}
            onEdit={() => handleEdit(product)}
            onDelete={() => handleDelete(product.name)}
          />
        ))}
      </div>

      {currentProduct && (
        <EditProductModal
          isOpen={isModalOpen}
          product={currentProduct}
          onClose={handleCloseModal}
          onSave={() => handleToastShow("Product updated successfully!")}
        />
      )}

      {isDeleteModalOpen && (
        <DeleteConfirmationModal
          isOpen={isDeleteModalOpen}
          productName={productToDelete!}
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={handleConfirmDelete}
        />
      )}

      <AddProductModal
        isOpen={isAddProductModalOpen}
        onClose={() => setIsAddProductModalOpen(false)}
        onSave={handleAddProduct}
      />

      {toastMessage && (
        <Toast
          message={toastMessage}
          type={toastType}
          onClose={handleToastClose}
        />
      )}
    </div>
  );
};

export default ManageProducts;
