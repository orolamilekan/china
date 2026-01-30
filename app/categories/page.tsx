"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  HiOutlineChatBubbleLeftRight,
  HiOutlineSquares2X2,
  HiOutlineListBullet,
  HiOutlineMagnifyingGlass,
  HiOutlineBolt,
  HiOutlineWrenchScrewdriver,
  HiOutlineBuildingOffice2,
  HiOutlineCpuChip,
  HiOutlineLightBulb,
  HiOutlineCube,
} from "react-icons/hi2";

/* ---------------- PRODUCTS ---------------- */

const allProducts = [
  {
    id: 1,
    name: "Solar Inverter 5KW Hybrid",
    price: "$480 — $620",
    moq: "Min 5 Units",
    origin: "Guangzhou",
    img: "https://images.unsplash.com/photo-1581093458791-9d09c5a6c6c3",
  },
  {
    id: 2,
    name: "Industrial Water Pump 3HP",
    price: "$120 — $180",
    moq: "Min 10 Units",
    origin: "Zhejiang",
    img: "https://images.unsplash.com/photo-1581090700227-4c4d4a1c1f56",
  },
  {
    id: 3,
    name: "Safety Helmets Bulk",
    price: "$2 — $4",
    moq: "Min 500 Units",
    origin: "Yiwu",
    img: "https://images.unsplash.com/photo-1598300056393-4aac492f4344",
  },
  {
    id: 4,
    name: "CNC Router Machine",
    price: "$2,800 — $3,600",
    moq: "Min 1 Unit",
    origin: "Shenzhen",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
  },
  {
    id: 5,
    name: "LED Flood Lights 200W",
    price: "$18 — $25",
    moq: "Min 50 Units",
    origin: "Ningbo",
    img: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
  },
  {
    id: 6,
    name: "Electrical Copper Cables",
    price: "$0.90 — $1.30",
    moq: "Min 1000m",
    origin: "Dongguan",
    img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789",
  },
  {
    id: 7,
    name: "Diesel Generator 50KVA",
    price: "$3,500 — $4,200",
    moq: "Min 1 Unit",
    origin: "Foshan",
    img: "https://images.unsplash.com/photo-1581093588401-22d4c4b3f1d6",
  },
  {
    id: 8,
    name: "Smart Electrical Meter",
    price: "$22 — $35",
    moq: "Min 100 Units",
    origin: "Shenzhen",
    img: "https://images.unsplash.com/photo-1555617117-08a9d2a1f9a7",
  },
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
  const [visibleCount, setVisibleCount] = useState(6);

  const visibleProducts = allProducts.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#111827] font-sans">

      {/* HEADER */}
      <div className="bg-white border-b sticky top-0 z-30">
        <div className="max-w-[1440px] mx-auto px-8 h-24 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold">Marketplace</h1>
            <Link href="/market" className="text-sm text-slate-400">
              Browse verified products from trusted vendors
            </Link>
          </div>

          <div className="relative w-full max-w-md">
            <HiOutlineMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full bg-slate-50 border rounded-2xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-[#065F46]"
            />
          </div>
        </div>
      </div>

      <main className="max-w-[1440px] mx-auto px-8 py-12">

        {/* CATEGORY DISCOVERY */}
        <section className="mb-16">
          <h2 className="text-xl font-semibold mb-8">Explore Categories</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.name}
                  className="group bg-white border rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition cursor-pointer"
                >
                  <div className="h-16 bg-slate-50 rounded-xl mb-4 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-slate-400 group-hover:text-[#065F46] transition" />
                  </div>
                  <p className="text-sm font-semibold text-slate-700 group-hover:text-[#065F46]">
                    {cat.name}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* SORT / VIEW */}
        <div className="flex justify-between mb-10">
          <div className="text-xs text-slate-400">
            Showing {visibleProducts.length} of {allProducts.length}
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setViewType("grid")}
              className={`p-2 rounded ${viewType === "grid" ? "bg-white shadow text-[#065F46]" : "text-slate-300"}`}
            >
              <HiOutlineSquares2X2 className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewType("list")}
              className={`p-2 rounded ${viewType === "list" ? "bg-white shadow text-[#065F46]" : "text-slate-300"}`}
            >
              <HiOutlineListBullet className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PRODUCT GRID */}
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {visibleProducts.map((p) => (
            <div key={p.id} className="group bg-white border rounded-[24px] overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition">
              <div className="relative h-64 overflow-hidden">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition" />
                <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded text-[10px] font-bold">
                  VERIFIED
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="font-semibold group-hover:text-[#065F46] truncate">{p.name}</h3>

                <div className="flex justify-between text-xs text-slate-400">
                  <span>{p.moq}</span>
                  <span>{p.origin}</span>
                </div>

                <div className="text-lg font-bold">
                  {p.price}
                  <span className="text-xs text-slate-400"> / Unit</span>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 bg-[#0F172A] text-white py-3 rounded-xl text-xs font-bold uppercase hover:bg-slate-800">
                    View Details
                  </button>

                  <button className="p-3 border rounded-xl text-slate-400 hover:text-[#065F46] hover:border-[#065F46]">
                    <HiOutlineChatBubbleLeftRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* LOAD MORE */}
        {visibleCount < allProducts.length && (
          <div className="mt-16 flex flex-col items-center space-y-4">
            <button
              onClick={loadMore}
              className="px-10 py-4 border rounded-2xl text-sm font-semibold hover:bg-white hover:border-[#065F46] hover:text-[#065F46] transition"
            >
              Load More Products
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
