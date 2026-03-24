"use client";

import React, { useState } from "react";
import {
  BsCreditCard,
  BsPaypal,
  BsTruck,
  BsBoxSeam,
  BsGeoAlt,
} from "react-icons/bs";

/* ================= TYPES ================= */
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

/* ================= PAGE ================= */
export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: "Product A", price: 50, quantity: 2 },
    { id: 2, name: "Product B", price: 30, quantity: 1 },
  ]);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = 10;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* ================= BILLING & SHIPPING ================= */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
          <h2 className="text-xl md:text-2xl font-bold mb-6">
            Billing & Shipping
          </h2>

          {/* Full Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="johndoe@example.com"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Address */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Address</label>
            <input
              type="text"
              placeholder="123 Main St, Lagos"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* City & Zip */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="City"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="text"
              placeholder="ZIP / Postal"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Country */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">Country</label>
            <input
              type="text"
              placeholder="Nigeria"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Payment Method */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 p-3 border rounded-lg cursor-pointer hover:border-indigo-500">
                <input type="radio" name="payment" defaultChecked />
                <BsCreditCard size={20} />
                Card
              </label>
              <label className="flex items-center gap-2 p-3 border rounded-lg cursor-pointer hover:border-indigo-500">
                <input type="radio" name="payment" />
                <BsPaypal size={20} />
                PayPal
              </label>
            </div>
          </div>
        </div>

        {/* ================= ORDER SUMMARY ================= */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
          <h2 className="text-xl md:text-2xl font-bold mb-6">Order Summary</h2>

          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b pb-2"
              >
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">
                    Qty: {item.quantity}
                  </p>
                </div>
                <p className="font-medium">${item.price * item.quantity}</p>
              </div>
            ))}
          </div>

          {/* Totals */}
          <div className="mt-6 border-t pt-4 space-y-2">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>${subtotal}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Shipping</span>
              <span>${shipping}</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>${total}</span>
            </div>
          </div>

          {/* Place Order Button */}
          <button className="mt-6 w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-all">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
