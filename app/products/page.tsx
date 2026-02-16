"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  HiOutlineChatBubbleLeftRight,
  HiOutlineSquares2X2,
  HiOutlineListBullet,
  HiOutlineBolt,
  HiOutlineWrenchScrewdriver,
  HiOutlineBuildingOffice2,
  HiOutlineCpuChip,
  HiOutlineLightBulb,
  HiOutlineCube,
} from "react-icons/hi2";

/* ---------------- PRODUCTS ---------------- */
const allProducts = [
  { id: 1, name: "Solar Inverter 5KW Hybrid", price: "$480 — $620", moq: "Min 5 Units", origin: "Guangzhou", img: "/images/products/solar-inverter.jpg" },
  { id: 2, name: "Industrial Water Pump 3HP", price: "$120 — $180", moq: "Min 10 Units", origin: "Zhejiang", img: "/images/products/water-pump.jpg" },
  { id: 3, name: "Safety Helmets Bulk", price: "$2 — $4", moq: "Min 500 Units", origin: "Yiwu", img: "/images/products/helmets.jpg" },
  { id: 4, name: "CNC Router Machine", price: "$2,800 — $3,600", moq: "Min 1 Unit", origin: "Shenzhen", img: "/images/products/cnc-router.jpg" },
  { id: 5, name: "LED Flood Lights 200W", price: "$18 — $25", moq: "Min 50 Units", origin: "Ningbo", img: "/images/products/led-flood.jpg" },
  { id: 6, name: "Electrical Copper Cables", price: "$0.90 — $1.30", moq: "Min 1000m", origin: "Dongguan", img: "/images/products/copper-cables.jpg" },
  { id: 7, name: "Diesel Generator 50KVA", price: "$3,500 — $4,200", moq: "Min 1 Unit", origin: "Foshan", img: "/images/products/generator.jpg" },
  { id: 8, name: "Smart Electrical Meter", price: "$22 — $35", moq: "Min 100 Units", origin: "Shenzhen", img: "/images/products/smart-meter.jpg" },
];

/* ---------------- CATEGORIES ---------------- */
const categories = [
  { name: "Industrial", icon: HiOutlineWrenchScrewdriver },
  { name: "Solar & Power", icon: HiOutlineBolt },
  { name: "Construction", icon: HiOutlineBuildingOffice2 },
  { name: "Machinery", icon: HiOutlineCpuChip },
  { name: "Electrical", icon: HiOutlineLightBulb },
  { name: "Raw Materials", icon: HiOutlineCube },
];

export default function Marketplace() {
  const [viewType, setViewType] = useState<"grid" | "list">("grid");
  const [visibleCount, setVisibleCount] = useState(8);

  const [quantities, setQuantities] = useState<Record<number, number>>(
    allProducts.reduce((acc, p) => ({ ...acc, [p.id]: 1 }), {})
  );

  const visibleProducts = allProducts.slice(0, visibleCount);

  const loadMore = () => setVisibleCount((prev) => prev + 4);

  const increment = (id: number) => setQuantities({ ...quantities, [id]: quantities[id] + 1 });
  const decrement = (id: number) =>
    setQuantities({ ...quantities, [id]: Math.max(1, quantities[id] - 1) });

  return (
    <div className="min-h-screen bg-[#F4F6F9] text-[#111827]">
      <main className="max-w-[1500px] mx-auto px-6 py-8">

        {/* CATEGORY SECTION */}
        <section className="mb-8">
          <h2 className="text-sm font-semibold mb-4 uppercase text-slate-500 tracking-wide">
            Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.name}
                  href={`/market/category/${cat.name.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <div className="bg-white border rounded-lg p-4 text-center hover:shadow-md transition cursor-pointer">
                    <Icon className="w-5 h-5 mx-auto text-slate-500 mb-1" />
                    <p className="text-xs font-medium">{cat.name}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* VIEW TOGGLE */}
        <div className="flex justify-end mb-5">
          <div className="flex gap-2">
            <button
              onClick={() => setViewType("grid")}
              className={`p-1.5 rounded-md ${viewType === "grid" ? "bg-white shadow text-[#065F46]" : "text-slate-400"}`}
            >
              <HiOutlineSquares2X2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewType("list")}
              className={`p-1.5 rounded-md ${viewType === "list" ? "bg-white shadow text-[#065F46]" : "text-slate-400"}`}
            >
              <HiOutlineListBullet className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* PRODUCT GRID */}
        <section className={`grid gap-6 ${viewType === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" : "grid-cols-1"}`}>
          {visibleProducts.map((p) => (
            <div
              key={p.id}
              className="bg-white border rounded-xl overflow-hidden hover:shadow-lg transition"
            >
              <Link href="/products_info">
                <div className="relative h-44 bg-slate-100">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-2 left-2 bg-white text-[10px] px-2 py-0.5 rounded-full font-semibold shadow">
                    VERIFIED
                  </span>
                </div>
              </Link>

              <div className="p-4 space-y-2">
                <h3 className="text-sm font-semibold hover:text-[#065F46] truncate">
                  {p.name}
                </h3>

                <div className="flex justify-between text-[10px] text-slate-500">
                  <span>{p.moq}</span>
                  <span>{p.origin}</span>
                </div>

                <div className="text-md font-bold">
                  {p.price}
                  <span className="text-[10px] text-slate-400"> / Unit</span>
                </div>

                {/* ADD TO CART */}
                <div className="flex items-center justify-between pt-2 gap-2">
                  <div className="flex items-center border rounded-md overflow-hidden">
                    <button
                      onClick={() => decrement(p.id)}
                      className="px-2 py-1 bg-gray-100 hover:bg-gray-200"
                    >
                      -
                    </button>
                    <span className="px-3 text-sm">{quantities[p.id]}</span>
                    <button
                      onClick={() => increment(p.id)}
                      className="px-2 py-1 bg-gray-100 hover:bg-gray-200"
                    >
                      +
                    </button>
                  </div>
                  <button className="flex-1 bg-[#0F172A] text-white py-1.5 rounded-md text-sm font-semibold text-center hover:bg-slate-800 transition">
                    Add to Cart
                  </button>
                </div>

                {/* CHAT BUTTON */}
                <div className="flex justify-center mt-2">
                  <div className="p-2 border rounded-md text-slate-500 hover:text-[#065F46] flex justify-center items-center">
                    <HiOutlineChatBubbleLeftRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* LOAD MORE */}
        {visibleCount < allProducts.length && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={loadMore}
              className="px-8 py-2 border rounded-md text-sm font-semibold hover:bg-white hover:border-[#065F46] hover:text-[#065F46] transition"
            >
              Load More Products
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
