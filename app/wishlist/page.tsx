"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiTrash2, FiShoppingCart } from "react-icons/fi";

interface WishlistItem {
  id: number;
  name: string;
  price: number;
  image: string;
}

const initialWishlist: WishlistItem[] = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 120,
    image: "/images/headphone.jpeg",
  },
  {
    id: 2,
    name: "Apple Watch SE",
    price: 250,
    image: "/images/apple-watch.jpeg",
  },
  {
    id: 3,
    name: "Premium Leather Backpack",
    price: 180,
    image: "/images/leather-backpack.jpeg",
  },
];

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState<WishlistItem[]>(initialWishlist);
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

  const removeItem = (id: number) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  const increaseQty = (id: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  };

  const decreaseQty = (id: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 1) - 1, 1),
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Your Wishlist
        </h1>

        {wishlist.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-xl font-semibold text-gray-600">
              Your wishlist is empty
            </h2>
            <Link
              href="/"
              className="mt-6 inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {wishlist.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition p-4 flex flex-col"
              >
                {/* UPDATED IMAGE SIZE */}
                <div className="relative w-full h-40 sm:h-44 md:h-40 rounded-xl overflow-hidden bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain p-4"
                  />
                </div>

                <div className="mt-4 flex-1">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {item.name}
                  </h2>
                  <p className="text-gray-600 mt-2">${item.price}</p>
                </div>

                {/* Quantity Selector */}
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center border rounded-lg">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="px-3 py-1 text-lg font-bold hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="px-4">
                      {quantities[item.id] || 1}
                    </span>
                    <button
                      onClick={() => increaseQty(item.id)}
                      className="px-3 py-1 text-lg font-bold hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Buttons */}
                <div className="mt-4 flex gap-3">
                  <button className="flex-1 flex items-center justify-center gap-2 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
                    <FiShoppingCart />
                    Add to Cart
                  </button>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-2 border rounded-lg hover:bg-red-50 text-red-500"
                  >
                    <FiTrash2 />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
