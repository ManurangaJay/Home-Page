"use client";
import { useState, useEffect, useRef } from "react";
import { FaUser } from "react-icons/fa";
import { RiHeart3Line } from "react-icons/ri";
import { PiHandbagSimpleBold } from "react-icons/pi";
import { LuSearch } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import CategoryDropdown from "./CategoryDropdown";

const Header = () => {
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const userRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userRef.current && !userRef.current.contains(event.target as Node)) {
        setIsUserDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white p-2 flex items-center justify-center space-x-10">
      <CategoryDropdown />

      <div className="flex items-center border rounded-full py-3 w-1/3 px-5">
        <input
          type="text"
          placeholder="Search products..."
          className="flex-grow outline-none"
        />
        <LuSearch className="text-gray-800 text-xl " />
      </div>

      <div className="relative" ref={userRef}>
        <button
          className="flex items-center cursor-pointer text-sm"
          onClick={() => setIsUserDropdownOpen((prev) => !prev)}
        >
          <FaUser className="text-gray-700 cursor-pointer text-xl mr-2" />
          <div className="flex flex-col items-start">
            <span className="text-xs text-gray-600">Welcome</span>
            <span className="flex items-center font-bold">
              Register/Sign in
              <IoIosArrowDown className="ml-2 text-gray-700 text-sm" />
            </span>
          </div>
        </button>
        <div
          className={`absolute top-full left-0 bg-white border rounded-md w-48 ${
            isUserDropdownOpen ? "block" : "hidden"
          } z-10`}
        >
          <button
            onClick={() => console.log("Go to Register")}
            className="block w-full text-left p-2 text-sm text-gray-700 hover:bg-gray-200"
          >
            Register
          </button>
          <button
            onClick={() => console.log("Go to Sign in")}
            className="block w-full text-left p-2 text-sm text-gray-700 hover:bg-gray-200"
          >
            Sign in
          </button>
        </div>
      </div>

      <PiHandbagSimpleBold className="text-2xl cursor-pointer" />
      <RiHeart3Line className="text-2xl cursor-pointer" />

      <Link href="/manage-products">
        <button className="text-sm font-bold text-gray-700 hover:bg-gray-200 py-2 px-4 rounded-md bg-gray-100">
          Manage Products
        </button>
      </Link>
    </header>
  );
};

export default Header;
