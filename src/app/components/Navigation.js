"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";

const Navigation = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const cart = useSelector((state) => state.cart);
  const [cartOpen, setCartOpen] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-md px-6 py-4">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold text-purple-700">
          <Link href="/">
            Edu<span className="text-black">Learn</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {[
            "home",
            "about",
            "services",
            "courses",
            "testimonials",
            "blog",
            "contact",
          ].map((item) => (
            <li
              key={item}
              className={`pb-1 ${
                activeLink === item ? "border-b-2 border-purple-700" : ""
              }`}
            >
              <Link
                href={`/${item === "home" ? "" : item}`}
                onClick={() => handleLinkClick(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        {/* Cart and Auth Buttons */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="relative">
            <button
              onClick={() => setCartOpen(!cartOpen)}
              className="flex items-center text-purple-700 hover:text-purple-900"
            >
              <ShoppingCart size={24} />
              {cart.totalQuantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cart.totalQuantity}
                </span>
              )}
            </button>

            {cartOpen && cart.items.length > 0 && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg p-4 z-50">
                <h3 className="font-semibold border-b pb-2">Your Cart</h3>
                <ul className="py-2">
                  {cart.items.map((item) => (
                    <li key={item.id} className="flex justify-between py-1">
                      <Link
                        href={`/cart`}
                        className="text-purple-600 hover:underline"
                      >
                        {item.title}
                      </Link>
                      <span>
                        ${item.price} × {item.quantity}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/cart`}
                  className="block text-center bg-purple-600 text-white py-2 rounded mt-2"
                >
                  View Cart
                </Link>
              </div>
            )}
          </div>

          <Link href="/signup">
            <button className="text-purple-600 font-semibold">Sign Up</button>
          </Link>
          <Link href="/login">
            <button className="bg-purple-600 text-white px-4 py-2 rounded">
              Login
            </button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-purple-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4">
          {[
            "home",
            "about",
            "services",
            "courses",
            "testimonials",
            "blog",
            "contact",
          ].map((item) => (
            <Link
              key={item}
              href={`/${item === "home" ? "" : item}`}
              onClick={() => handleLinkClick(item)}
              className={`block px-2 py-1 text-gray-700 ${
                activeLink === item ? "font-semibold text-purple-700" : ""
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}

          <div className="flex items-center space-x-4 pt-2">
            {/* <Link
              href={`/course/${course.id}/courseDetails`}
              className="flex items-center text-purple-700"
            > */}
              <Link href='/cart' className="flex items-center text-purple-700">
              <ShoppingCart size={20} />
              {cart.totalQuantity > 0 && (
                <span className="ml-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cart.totalQuantity}
                </span>
              )}
            </Link>
          </div>

          <div className="flex flex-col space-y-2 pt-2">
            <Link href="/signup">
              <button className="text-purple-600 font-semibold w-full text-left">
                Sign Up
              </button>
            </Link>
            <Link href="/login">
              <button className="bg-purple-600 text-white px-4 py-2 rounded w-full text-left">
                Login
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
