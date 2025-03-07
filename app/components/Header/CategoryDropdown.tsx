"use client";
import { useState, useEffect, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useCategory } from "../../../context/CategoryContext";

interface Category {
  id: number;
  name: string;
}

const CategoryDropdown = () => {
  const { setSelectedCategoryId } = useCategory();
  const [categoryName, setCategoryName] = useState("All Categories");
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const categoryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        categoryRef.current &&
        !categoryRef.current.contains(event.target as Node)
      ) {
        setIsCategoryDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:3001/categories");
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleCategorySelect = (id: number | null, name: string) => {
    setSelectedCategoryId(id);
    setCategoryName(name);
    setIsCategoryDropdownOpen(false);
  };

  return (
    <div className="relative" ref={categoryRef}>
      <button
        className="flex items-center appearance-none bg-white p-1 font-bold"
        onClick={() => setIsCategoryDropdownOpen((prev) => !prev)}
      >
        {categoryName}
        <IoIosArrowDown className="ml-1 text-gray-700 text-sm" />
      </button>
      <div
        className={`absolute top-full left-0 bg-white border rounded-md w-48 ${
          isCategoryDropdownOpen ? "block" : "hidden"
        } z-10`}
      >
        {loading ? (
          <button className="block w-full p-2 text-sm text-gray-700">
            Loading categories...
          </button>
        ) : (
          <>
            <button
              onClick={() => handleCategorySelect(null, "All Categories")}
              className="block w-full text-left p-2 text-sm text-gray-700 hover:bg-gray-200"
            >
              All Categories
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategorySelect(cat.id, cat.name)}
                className="block w-full text-left p-2 text-sm text-gray-700 hover:bg-gray-200"
              >
                {cat.name}
              </button>
            ))}
          </>
        )}
      </div>
    </div>
  );
};
export default CategoryDropdown;
