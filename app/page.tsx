"use client";

import Link from "next/link";
import {
  HiOutlineShieldCheck,
  HiOutlineUserGroup,
  HiOutlineLockClosed,
  HiOutlineScale,
  HiStar,
} from "react-icons/hi2";
import { SiShieldsdotio } from "react-icons/si";
import { FiArrowUpRight } from "react-icons/fi";

/* ================= HERO IMAGES ================= */
const heroBg = "/images/bg3.jpeg";
const hero = "/images/air.png";

/* ================= IMAGE STRIP ================= */
const stripImages = [
  { img: "/images/verified.jpeg", label: "Verified Manufacturing" },
  { img: "/images/logistics.jpeg", label: "Secure Global Logistics" },
  { img: "/images/trust.jpeg", label: "Trusted B2B Partnerships" },
];

/* ================= CATEGORY IMAGES ================= */
const categories = [
  { name: "Home & Kitchen", img: "/images/kitchen.jpeg" },
  { name: "Industrials & Tools", img: "/images/tools.jpeg" },
  { name: "Automobile & Spare Parts", img: "/images/parts.jpeg" },
  { name: "Toys, Games & Sports", img: "/images/toys.jpeg" },
  { name: "Building & Smart Systems", img: "/images/automation.jpeg" },
  { name: "Electronics & Gadgets", img: "/images/tech.jpeg" },
];

/* ================= BEST SELLERS ================= */
const bestSellers = [
  { name: "12V Solar Power Inverter", img: "/images/solar.jpeg", price: "₦45.00", moq: "MOQ: 50 Units" },
  { name: "Stainless Steel Cookware Set", img: "/images/cookware.jpeg", price: "₦28.00", moq: "MOQ: 100 Sets" },
  { name: "Car LED Headlights", img: "/images/headlight.jpeg", price: "₦6.50", moq: "MOQ: 200 Units" },
  { name: "Android Smart Tablet 10\"", img: "/images/tablet.jpeg", price: "₦65.00", moq: "MOQ: 30 Units" },
];

/* ================= NEW ARRIVALS ================= */
const newArrivals = [
  { name: "Smart WiFi Switch Module", img: "/images/smart-switch.jpeg", price: "₦4.20", moq: "MOQ: 500 Units" },
  { name: "Portable Diesel Generator", img: "/images/generator.jpeg", price: "₦210.00", moq: "MOQ: 10 Units" },
  { name: "Kids Electric Ride-On Car", img: "/images/toys.jpeg", price: "₦95.00", moq: "MOQ: 20 Units" },
  { name: "Hydraulic Floor Jack", img: "/images/jack.jpeg", price: "₦22.00", moq: "MOQ: 80 Units" },
];

/* ================= TRENDING ================= */
const trending = [
  { name: "CCTV Security Camera Kit", img: "/images/cctv.jpeg", price: "₦75.00", moq: "MOQ: 25 Sets" },
  { name: "Bluetooth Earbuds", img: "/images/earbuds.jpeg", price: "₦3.80", moq: "MOQ: 1000 Units" },
  { name: "Industrial Water Pump", img: "/images/pump.jpeg", price: "₦120.00", moq: "MOQ: 15 Units" },
  { name: "Non-Stick Frying Pan", img: "/images/pots.jpeg", price: "₦3.20", moq: "MOQ: 300 Units" },
];

const GlobalEscrowMarketplace = () => {
  const renderProducts = (title: string, data: any[]) => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <Link href="/products">
          <span className="text-sm text-[#065F46] cursor-pointer">
            View all →
          </span>
        </Link>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((item, i) => (
          <div key={i} className="bg-white border rounded-xl overflow-hidden hover:shadow-lg transition">
            <img src={item.img} alt={item.name} className="h-44 w-full object-cover" />
            <div className="p-4 space-y-2">
              <h4 className="text-sm font-semibold line-clamp-2">{item.name}</h4>

              <div className="flex items-center gap-1 text-yellow-500 text-xs">
                <HiStar /><HiStar /><HiStar /><HiStar /><HiStar />
                <span className="text-gray-400 ml-1">(4.8)</span>
              </div>

              <p className="text-lg font-bold">{item.price}</p>
              <p className="text-xs text-gray-400">{item.moq}</p>

              <button className="w-full mt-3 bg-[#0F172A] text-white py-2 rounded-lg text-sm hover:bg-black">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#111827] font-sans">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[70vh] flex items-center px-6 bg-white overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-white/85" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          
          {/* LEFT CONTENT */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400 font-bold">
              <SiShieldsdotio className="text-[#065F46]" />
              EquiTrade Global
            </div>

            <h1 className="text-4xl lg:text-6xl font-semibold">
              Secure China–Africa Trade
            </h1>

            <p className="text-lg text-slate-500 max-w-lg">
              Direct sourcing from verified Chinese factories with escrow protection.
            </p>

            <div className="flex gap-4">
              <button className="bg-[#0F172A] text-white px-8 py-4 rounded-xl flex items-center">
                Explore Marketplace <FiArrowUpRight className="ml-2" />
              </button>
              <button className="border px-8 py-4 rounded-xl bg-white">
                Become a Vendor
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="hidden lg:flex justify-center relative">
            
            {/* LOCK SECURITY BADGE */}
            <div className="absolute -top-6 bg-white rounded-full p-3 shadow-lg border border-gray-200">
              <HiOutlineLockClosed className="w-8 h-8 text-[#065F46]" />
            </div>

            {/* REDUCED IMAGE SIZE */}
            <img
              src={hero}
              alt="Secure Trade"
              className="w-[320px] lg:w-[380px] rounded-2xl shadow-xl border"
            />
          </div>

        </div>
      </section>

      {/* ================= IMAGE STRIP ================= */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          {stripImages.map((item, i) => (
            <div key={i} className="relative h-64 rounded-xl overflow-hidden">
              <img src={item.img} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40" />
              <p className="absolute bottom-4 left-4 text-white font-semibold">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CATEGORY ================= */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <h2 className="text-3xl font-semibold text-center">Shop by Category</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <div key={i} className="relative h-56 rounded-xl overflow-hidden group">
                <img src={cat.img} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition" />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 p-6 text-white flex justify-between items-end h-full">
                  <h3 className="font-semibold">{cat.name}</h3>
                  <FiArrowUpRight />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 space-y-20">
          {renderProducts("Best Sellers", bestSellers)}
          {renderProducts("New Arrivals", newArrivals)}
          {renderProducts("Trending Now", trending)}
        </div>
      </section>

    

    </div>
  );
};

export default GlobalEscrowMarketplace;
