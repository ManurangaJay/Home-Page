import React from "react";
import { MdArrowRight } from "react-icons/md";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-black py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        <div>
          <h3 className="text-lg font-semibold mb-4 underline">Quick Links</h3>
          <ul className="space-y-2">
            {[
              { name: "Home", path: "/homepage" },
              { name: "Products", path: "/products" },
              { name: "About Us", path: "/about" },
              { name: "Careers", path: "/careers" },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  className="flex items-center space-x-2 text-lg transition group"
                >
                  <MdArrowRight className="text-xl text-gray-600 group-hover:text-gray-400 transition-transform transform group-hover:translate-x-1" />
                  <span className="group-hover:text-gray-400">{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <ul className="space-y-2 mt-10">
            {[
              { name: "FAQS", path: "/faqs" },
              { name: "Privacy policy", path: "/privacy-policy" },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  className="flex items-center space-x-2 text-lg transition group"
                >
                  <MdArrowRight className="text-xl text-gray-600 group-hover:text-gray-400 transition-transform transform group-hover:translate-x-1" />
                  <span className="group-hover:text-gray-400">{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 underline">Contact Us</h3>
          <input
            type="email"
            placeholder="Your email address"
            className="w-full p-3 rounded-sm mb-4 bg-gray-300 shadow-xl"
          />
          <button className="w-30 ul bg-green-800 hover:bg-green-700 text-white py-2 px-8 rounded-3xl transition">
            Send
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
