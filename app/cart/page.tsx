"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiTrash2, FiMinus, FiPlus } from "react-icons/fi";

type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Wireless Headphones",
      price: 120,
      image: "/images/headphone.jpeg",
      quantity: 1,
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 80,
      image: "/images/apple-watch.jpeg",
      quantity: 2,
    },
  ]);

  const increaseQty = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-10">
      <h1 className="text-2xl md:text-3xl font-bold mb-8">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-500 mb-4">Your cart is empty.</p>
          <Link
            href="/"
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center sm:items-start bg-white p-4 rounded-xl shadow-sm gap-4"
              >
                {/* Product Image */}
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>

                <div className="flex-1 text-center sm:text-left">
                  <h2 className="font-semibold text-lg">{item.name}</h2>
                  <p className="text-gray-500">${item.price}</p>

                  <div className="flex justify-center sm:justify-start items-center gap-3 mt-3">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="p-2 border rounded-lg hover:bg-gray-100"
                    >
                      <FiMinus size={16} />
                    </button>
                    <span className="font-medium">{item.quantity}</span>
                    <button
                      onClick={() => increaseQty(item.id)}
                      className="p-2 border rounded-lg hover:bg-gray-100"
                    >
                      <FiPlus size={16} />
                    </button>
                  </div>
                </div>

                <div className="flex flex-col items-center sm:items-end gap-3">
                  <p className="font-semibold text-lg">
                    ${item.price * item.quantity}
                  </p>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-700 flex items-center gap-1 text-sm"
                  >
                    <FiTrash2 /> Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm h-fit">
            <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

            <div className="flex justify-between mb-3">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between mb-3">
              <span>Shipping</span>
              <span>Free</span>
            </div>

            <hr className="my-4" />

            <div className="flex justify-between font-bold text-lg mb-6">
              <span>Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <Link
              href="/checkout"
              className="block text-center bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Proceed to Checkout
            </Link>

            <Link
              href="/products"
              className="block text-center mt-4 text-sm text-gray-500 hover:underline"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
