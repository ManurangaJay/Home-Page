"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ManageProductCard from "./ManageProductCard";
import EditProductModal from "./EditProductModal";
import AddProductSection from "./AddProductSection";
import Toast from "./Toast";
import { Product } from "../components/types";

const ManageProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);

  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastType, setToastType] = useState<"success" | "error">("success");

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

  const handleDelete = (productId: number) => {
    setProducts((prev) => prev.filter((product) => product.id !== productId));
    setToastMessage("Product deleted successfully!");
    setToastType("success");
  };

  const handleAddProduct = (newProduct: Product) => {
    setProducts((prev) => [...prev, newProduct]);
    setToastMessage(`Product "${newProduct.name}" added successfully!`);
    setToastType("success");
  };

  const handleUpdateProduct = (updatedProduct: Product) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
    setToastMessage(`Product "${updatedProduct.name}" updated successfully!`);
    setToastType("success");
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentProduct(null);
  };

  return (
    <div>
      <AddProductSection onProductAdded={handleAddProduct} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-5 pb-10">
        {products.map((product) => (
          <ManageProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            discountedPrice={product.discountedPrice}
            description={product.description}
            rating={product.rating}
            reviewsCount={product.reviewsCount}
            isDeal={product.isDeal}
            onEdit={() => {
              setCurrentProduct(product);
              setIsModalOpen(true);
            }}
            onDelete={handleDelete}
          />
        ))}
      </div>

      {currentProduct && (
        <EditProductModal
          isOpen={isModalOpen}
          product={currentProduct}
          onClose={handleCloseModal}
          onSave={handleUpdateProduct}
        />
      )}

      {toastMessage && (
        <Toast
          message={toastMessage}
          type={toastType}
          onClose={() => setToastMessage(null)}
        />
      )}
    </div>
  );
};

export default ManageProducts;
