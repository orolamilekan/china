"use client";

import React, { useState } from "react";
import {
  HiOutlineCube,
  HiOutlineShoppingCart,
  HiOutlineCurrencyDollar,
  HiOutlineTrash,
  HiOutlineChatBubbleLeftRight,
  HiOutlinePlus,
} from "react-icons/hi2";

/* ---------------- TYPES ---------------- */

interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  sold: number;
}

interface Order {
  id: number;
  product: string;
  quantity: number;
  total: number;
  status: "Pending" | "Shipped" | "Delivered";
}

interface Message {
  id: number;
  client: string;
  text: string;
}

/* ---------------- DASHBOARD ---------------- */

export default function VendorDashboard() {
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: "Solar Inverter 5KW", price: 520, stock: 25, sold: 12 },
    { id: 2, name: "Industrial Water Pump", price: 150, stock: 40, sold: 18 },
  ]);

  const [orders, setOrders] = useState<Order[]>([
    { id: 101, product: "Solar Inverter 5KW", quantity: 2, total: 1040, status: "Pending" },
    { id: 102, product: "Industrial Water Pump", quantity: 3, total: 450, status: "Shipped" },
  ]);

  const [messages] = useState<Message[]>([
    { id: 1, client: "John Traders Ltd", text: "Can you confirm delivery time?" },
    { id: 2, client: "Global Imports", text: "Is bulk discount available?" },
  ]);

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    stock: "",
  });

  /* ---------------- FUNCTIONS ---------------- */

  const addProduct = () => {
    if (!newProduct.name || !newProduct.price || !newProduct.stock) return;

    const product: Product = {
      id: Date.now(),
      name: newProduct.name,
      price: Number(newProduct.price),
      stock: Number(newProduct.stock),
      sold: 0,
    };

    setProducts([...products, product]);
    setNewProduct({ name: "", price: "", stock: "" });
  };

  const deleteProduct = (id: number) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const updateOrderStatus = (id: number, status: Order["status"]) => {
    setOrders(
      orders.map((o) =>
        o.id === id ? { ...o, status } : o
      )
    );
  };

  /* ---------------- CALCULATIONS ---------------- */

  const totalProducts = products.length;
  const totalSold = products.reduce((acc, p) => acc + p.sold, 0);
  const totalRevenue = products.reduce(
    (acc, p) => acc + p.sold * p.price,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-8">Vendor Dashboard</h1>

      {/* ---------------- STATS ---------------- */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <StatCard
          icon={<HiOutlineCube />}
          title="Total Products"
          value={totalProducts}
        />
        <StatCard
          icon={<HiOutlineShoppingCart />}
          title="Total Sold"
          value={totalSold}
        />
        <StatCard
          icon={<HiOutlineCurrencyDollar />}
          title="Revenue"
          value={`$${totalRevenue}`}
        />
      </div>

      {/* ---------------- ADD PRODUCT ---------------- */}
      <div className="bg-white p-6 rounded-xl shadow mb-10">
        <h2 className="font-semibold mb-4 flex items-center gap-2">
          <HiOutlinePlus /> Upload New Product
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Product Name"
            value={newProduct.name}
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
            className="border p-2 rounded-md"
          />
          <input
            type="number"
            placeholder="Price"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
            className="border p-2 rounded-md"
          />
          <input
            type="number"
            placeholder="Stock"
            value={newProduct.stock}
            onChange={(e) =>
              setNewProduct({ ...newProduct, stock: e.target.value })
            }
            className="border p-2 rounded-md"
          />
        </div>

        <button
          onClick={addProduct}
          className="mt-4 bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800"
        >
          Add Product
        </button>
      </div>

      {/* ---------------- PRODUCTS LIST ---------------- */}
      <div className="bg-white p-6 rounded-xl shadow mb-10">
        <h2 className="font-semibold mb-4">Your Products</h2>

        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b">
              <th>Name</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Sold</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id} className="border-b">
                <td>{p.name}</td>
                <td>${p.price}</td>
                <td>{p.stock}</td>
                <td>{p.sold}</td>
                <td>
                  <button
                    onClick={() => deleteProduct(p.id)}
                    className="text-red-500 flex items-center gap-1"
                  >
                    <HiOutlineTrash /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ---------------- ORDERS ---------------- */}
      <div className="bg-white p-6 rounded-xl shadow mb-10">
        <h2 className="font-semibold mb-4">Orders</h2>

        <table className="w-full text-sm">
          <thead>
            <tr className="border-b">
              <th>Order ID</th>
              <th>Product</th>
              <th>Qty</th>
              <th>Total</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.id} className="border-b">
                <td>{o.id}</td>
                <td>{o.product}</td>
                <td>{o.quantity}</td>
                <td>${o.total}</td>
                <td>
                  <select
                    value={o.status}
                    onChange={(e) =>
                      updateOrderStatus(
                        o.id,
                        e.target.value as Order["status"]
                      )
                    }
                    className="border p-1 rounded-md"
                  >
                    <option>Pending</option>
                    <option>Shipped</option>
                    <option>Delivered</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ---------------- MESSAGES ---------------- */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="font-semibold mb-4 flex items-center gap-2">
          <HiOutlineChatBubbleLeftRight /> Client Messages
        </h2>

        {messages.map((m) => (
          <div key={m.id} className="border-b py-3">
            <p className="font-semibold">{m.client}</p>
            <p className="text-gray-600 text-sm">{m.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- STAT CARD ---------------- */

function StatCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: any;
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow flex items-center gap-4">
      <div className="text-2xl text-black">{icon}</div>
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <p className="text-xl font-bold">{value}</p>
      </div>
    </div>
  );
}