"use client";

import {
  HiOutlineShieldCheck,
  HiOutlineUserGroup,
  HiOutlineLockClosed,
  HiOutlineScale,
} from "react-icons/hi2";
import { SiShieldsdotio } from "react-icons/si";
import { FiArrowUpRight } from "react-icons/fi";

/* ================= CATEGORY IMAGES ================= */
const categoryImages: Record<string, string> = {
  Electronics:
    "https://images.unsplash.com/photo-1518770660439-4636190af475",
  Fashion:
    "https://images.unsplash.com/photo-1521334884684-d80222895322",
  "Home & Kitchen":
    "https://images.unsplash.com/photo-1556911220-e15b29be8c8f",
  "Industrials & Tools":
    "https://images.unsplash.com/photo-1581090700227-1e37b190418e",
  "Automobile & Spare Parts":
    "https://images.unsplash.com/photo-1487754180451-c456f719a1fc",
  "Beauty & Personal Care":
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
  "Toys, Games & Sports":
    "https://images.unsplash.com/photo-1517649763962-0c623066013b",
  "Agriculture & Machinery":
    "https://images.unsplash.com/photo-1581091215367-59ab6c0e3c1f",
  "Packaging & Printing":
    "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8",
  "Building & Smart Systems":
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
  Others:
    "https://images.unsplash.com/photo-1601598851547-4302969d0614",
};

const GlobalEscrowMarketplace = () => {
  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#111827] font-sans">

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[78vh] flex items-center pt-14 pb-24 px-6 lg:px-8 overflow-hidden bg-white">
        <img
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7"
          alt="Global manufacturing and trade"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/80 to-white/40" />

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="flex items-center space-x-3 text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400">
              <SiShieldsdotio className="text-[#065F46]" />
              <span>EquiTrade Global</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-semibold leading-[1.05] tracking-tight text-slate-900">
              Buy Direct from China. <br />
              <span className="text-[#065F46]">Pay Safely.</span>
            </h1>

            <p className="text-lg lg:text-xl text-slate-500 max-w-xl">
              Secure escrow infrastructure connecting verified Chinese suppliers
              with African enterprise buyers.
            </p>

            <div className="flex items-center space-x-5 pt-2">
              <button className="bg-[#0F172A] text-white px-10 py-5 rounded-2xl font-medium hover:bg-slate-800 transition-all flex items-center group">
                Browse Marketplace
                <FiArrowUpRight className="ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
              <button className="border border-slate-200 px-10 py-5 rounded-2xl font-medium hover:bg-slate-50 bg-white/80">
                Vendor Portal
              </button>
            </div>
          </div>

          {/* Escrow Visual */}
          <div className="relative hidden lg:flex aspect-square rounded-[48px] bg-white/70 backdrop-blur border border-slate-100 items-center justify-center shadow-xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,95,70,0.08),transparent)]" />
            <div className="w-80 h-80 rounded-full border border-slate-200 flex items-center justify-center bg-white relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white p-3 rounded-xl shadow border border-slate-100">
                <HiOutlineLockClosed className="w-6 h-6 text-[#065F46]" />
              </div>
              <div className="w-56 h-56 rounded-full border border-slate-200 flex items-center justify-center shadow">
                <HiOutlineShieldCheck className="w-24 h-24 text-slate-900" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TRUST STRIP ================= */}
      <section className="bg-[#F9FAFB] border-y border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-4 gap-12">
          {[
            ["Escrow-Protected", "Funds held securely", HiOutlineShieldCheck] as const,
            ["Verified Vendors", "Factory-level vetting", HiOutlineUserGroup] as const,
            ["Secure Communication", "No off-platform risk", HiOutlineLockClosed] as const,
            ["Dispute Resolution", "Structured mediation", HiOutlineScale] as const,
          ].map(([title, desc, Icon], i) => (
            <div key={i}>
              <Icon className="w-7 h-7 text-[#065F46] mb-4" />
              <h4 className="text-sm font-bold mb-1">{title as string}</h4>
              <p className="text-xs text-slate-500">{desc as string}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CATEGORIES ================= */}
      <section className="py-32 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold">Product Categories</h2>
            <p className="text-slate-400 mt-3">
              Source confidently across verified manufacturing sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.keys(categoryImages).map((cat) => (
              <div
                key={cat}
                className="group relative h-72 rounded-[32px] overflow-hidden border border-slate-200 cursor-pointer"
              >
                <img
                  src={categoryImages[cat]}
                  alt={cat}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/55 transition" />
                <div className="relative z-10 p-10 h-full flex flex-col justify-between text-white">
                  <FiArrowUpRight className="text-xl" />
                  <div>
                    <h3 className="text-xl font-semibold">{cat}</h3>
                    <p className="text-xs mt-2 uppercase tracking-widest opacity-80">
                      Browse Products
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-white border-t border-slate-100 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-4 gap-16 mb-20">
          <div>
            <h3 className="font-bold tracking-widest uppercase text-sm">
              EquiTrade Global
            </h3>
            <p className="text-xs text-slate-400 mt-4 leading-relaxed">
              Secure cross-border trade infrastructure connecting China and
              Africa through escrow-protected commerce.
            </p>
          </div>

          <div className="text-xs space-y-3">
            <p className="font-bold uppercase tracking-widest text-slate-900">
              Platform
            </p>
            <a href="#" className="block hover:text-[#065F46]">Marketplace</a>
            <a href="#" className="block hover:text-[#065F46]">Vendor Portal</a>
            <a href="#" className="block hover:text-[#065F46]">Escrow System</a>
          </div>

          <div className="text-xs space-y-3">
            <p className="font-bold uppercase tracking-widest text-slate-900">
              Support
            </p>
            <a href="#" className="block hover:text-[#065F46]">Help Desk</a>
            <a href="#" className="block hover:text-[#065F46]">Dispute Policy</a>
            <a href="#" className="block hover:text-[#065F46]">Contact</a>
          </div>

          <div className="text-xs space-y-3">
            <p className="font-bold uppercase tracking-widest text-slate-900">
              Legal
            </p>
            <a href="#" className="block hover:text-[#065F46]">Terms</a>
            <a href="#" className="block hover:text-[#065F46]">Compliance</a>
            <a href="#" className="block hover:text-[#065F46]">Privacy</a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-8 pt-10 border-t border-slate-100 flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          <span>© 2026 EquiTrade Global</span>
          <span>China 🇨🇳 — Africa 🌍</span>
        </div>
      </footer>
    </div>
  );
};

export default GlobalEscrowMarketplace;
