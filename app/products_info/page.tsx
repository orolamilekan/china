"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  BsShieldCheck,
  BsChatLeftDots,
  BsTruck,
  BsBoxSeam,
  BsGeoAlt,
  BsStarFill,
} from "react-icons/bs";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { SiShieldsdotio } from "react-icons/si";

// Local image paths
const images = [
  "/images/flour-mill-1.jpg",
  "/images/flour-mill-2.jpg",
  "/images/flour-mill-3.jpg",
  "/images/flour-mill-4.jpg",
];

const similarProducts = [
  { id: 1, name: "AF-S 100 Industrial Milling Machine", price: "$6,800 – $8,100", img: "/images/similar-1.jpg" },
  { id: 2, name: "AF-S 200 Industrial Milling Machine", price: "$7,200 – $8,500", img: "/images/similar-2.jpg" },
  { id: 3, name: "AF-S 300 Industrial Milling Machine", price: "$7,800 – $9,000", img: "/images/similar-3.jpg" },
];

const ProductDetailPage = () => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-6 text-sm text-gray-400">
        Home / Marketplace / Food Tech / Milling
      </div>

      {/* MAIN PRODUCT SECTION */}
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14">

        {/* LEFT - IMAGE GALLERY */}
        <div>
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border">
            <img
              src={selectedImage}
              alt="Flour Mill"
              className="w-full h-[500px] object-cover"
            />
          </div>

          <div className="flex gap-4 mt-4">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                onClick={() => setSelectedImage(img)}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                  selectedImage === img
                    ? "border-brand-500"
                    : "border-gray-200"
                }`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT - PRODUCT INFO */}
        <div className="space-y-6">

          {/* Verified */}
          <div className="flex items-center gap-2 text-green-600 text-sm font-semibold">
            <MdOutlineVerifiedUser />
            Verified Chinese Manufacturer
          </div>

          <h1 className="text-3xl font-bold text-gray-900">
            AF-S 500 Heavy Duty Automatic Flour Mill System
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2 text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <BsStarFill key={i} size={14} />
            ))}
            <span className="text-gray-500 text-sm ml-2">(24 Reviews)</span>
          </div>

          {/* Price */}
          <div>
            <p className="text-3xl font-bold text-gray-900">
              $8,450 – $9,200
            </p>
            <p className="text-gray-400 text-sm">Per Set</p>
          </div>

          {/* Quick Specs */}
          <div className="grid grid-cols-2 gap-6 py-6 border-y">
            <div>
              <p className="text-xs text-gray-400 uppercase">Minimum Order</p>
              <p className="font-medium flex items-center gap-2">
                <BsBoxSeam /> 1 Unit
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-400 uppercase">Lead Time</p>
              <p className="font-medium flex items-center gap-2">
                <BsTruck /> 20-25 Business Days
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-400 uppercase">Shipping Origin</p>
              <p className="font-medium flex items-center gap-2">
                <BsGeoAlt /> Shenzhen Port
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-400 uppercase">Delivery to NG</p>
              <p className="font-medium flex items-center gap-2">
                <BsTruck /> ~35 Days to Lagos
              </p>
            </div>
          </div>

          {/* Escrow Protection */}
          <div className="bg-green-50 border border-green-200 p-4 rounded-xl flex gap-4">
            <SiShieldsdotio className="text-green-600 text-xl" />
            <div>
              <h4 className="font-semibold text-green-800 text-sm">
                Afro-Sino Escrow Guarantee
              </h4>
              <p className="text-xs text-green-700">
                Funds released only after inspection & clearance at Nigerian port.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex gap-4">
            <Link href="/order" className="flex-1">
              <button className="w-full bg-black text-white py-4 rounded-xl font-semibold hover:opacity-90 transition">
                Place Initial Order
              </button>
            </Link>

            <Link href="/chat" className="flex-1">
              <button className="w-full border border-gray-300 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-gray-100 transition">
                <BsChatLeftDots />
                Chat Vendor
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* PRODUCT TABS */}
      <div className="max-w-7xl mx-auto px-6 mt-20">
        <div className="flex gap-10 border-b text-sm font-semibold">
          {["description", "specifications", "shipping"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 capitalize ${
                activeTab === tab
                  ? "border-b-2 border-black"
                  : "text-gray-400"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="py-10 text-gray-600 leading-relaxed max-w-4xl">
          {activeTab === "description" && (
            <p>
              The AF-S 500 is an industrial-grade automatic flour milling
              system designed for medium to large scale production. Built with
              reinforced stainless steel and high-efficiency motors, it
              guarantees durability, precision grinding, and consistent output.
            </p>
          )}

          {activeTab === "specifications" && (
            <ul className="space-y-3">
              <li>• Output Capacity: 500kg/hour</li>
              <li>• Power Rating: 35kW</li>
              <li>• Voltage: 380V Industrial</li>
              <li>• Material: Stainless Steel</li>
            </ul>
          )}

          {activeTab === "shipping" && (
            <p>
              Shipping via sea freight from Shenzhen Port. Estimated transit
              time to Lagos: 30–35 days. Full inspection and escrow protection
              included.
            </p>
          )}
        </div>
      </div>

      {/* SIMILAR PRODUCTS */}
      <div className="max-w-7xl mx-auto px-6 mt-20 pb-24">
        <h2 className="text-2xl font-bold mb-10">Similar Products</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {similarProducts.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-sm border hover:shadow-md transition"
            >
              <img
                src={item.img}
                className="w-full h-60 object-cover rounded-t-xl"
              />
              <div className="p-5 space-y-3">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-400">{item.price}</p>
                <button className="text-sm font-semibold underline">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ProductDetailPage;
