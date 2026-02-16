import "./globals.css";
import Link from "next/link";
import type { Metadata } from "next";
import {
  HiOutlineMagnifyingGlass,
  HiOutlineUser,
  HiOutlineGlobeAlt,
  HiOutlineShieldCheck,
  HiOutlineShoppingCart,
  HiOutlineHeart,
} from "react-icons/hi2";

export const metadata: Metadata = {
  title: "Afro-Sino Trade",
  description: "Escrow-backed marketplace connecting China and Africa",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* FLEX STRUCTURE FOR STICKY FOOTER */}
      <body className="flex flex-col min-h-screen bg-[#F7F8F7] text-gray-900">

        {/* ===== TOP ANNOUNCEMENT BAR ===== */}
        <div className="bg-slate-900 text-white text-xs py-2">
          <div className="max-w-7xl mx-auto px-6 flex justify-between">
            <p>Secure Escrow Protection on All Orders</p>
            <div className="flex gap-6">
              <Link href="/track-order" className="hover:underline">Track Order</Link>
              <Link href="/help" className="hover:underline">Help Center</Link>
            </div>
          </div>
        </div>

        {/* ===== HEADER ===== */}
        <header className="w-full bg-white/90 backdrop-blur border-b border-slate-200 sticky top-0 z-40">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex h-20 items-center justify-between gap-6">

              {/* LOGO */}
              <Link
                href="/"
                className="flex items-center gap-2 text-lg font-semibold tracking-wide text-slate-900"
              >
                <HiOutlineGlobeAlt className="w-6 h-6 text-[#6B8F7A]" />
                AFRO-SINO TRADE
              </Link>

              {/* SEARCH BAR */}
              <div className="hidden md:flex flex-1 max-w-2xl relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full border border-slate-200 rounded-full px-5 py-2 pr-12 focus:outline-none focus:ring-2 focus:ring-[#6B8F7A]"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#6B8F7A] text-white p-2 rounded-full">
                  <HiOutlineMagnifyingGlass className="w-4 h-4" />
                </button>
              </div>

              {/* NAVIGATION + ACTIONS */}
              <div className="flex items-center gap-6 text-slate-600">

                <Link
                  href="/products"
                  className="hidden md:flex items-center gap-1 hover:text-slate-900 transition text-sm"
                >
                  <HiOutlineGlobeAlt className="w-4 h-4" />
                  Products
                </Link>

                <Link
                  href="/vendors"
                  className="hidden md:flex items-center gap-1 hover:text-slate-900 transition text-sm"
                >
                  Track Orders
                </Link>

                <Link
                  href="/escrow"
                  className="hidden md:flex items-center gap-1 hover:text-slate-900 transition text-sm"
                >
                  <HiOutlineShieldCheck className="w-4 h-4" />
                  Escrow Info
                </Link>

                <Link href="/wishlist" className="relative hover:text-[#6B8F7A] transition">
                  <HiOutlineHeart className="w-6 h-6" />
                </Link>

                <Link href="/cart" className="relative hover:text-[#6B8F7A] transition">
                  <HiOutlineShoppingCart className="w-6 h-6" />
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full">
                    3
                  </span>
                </Link>

                <Link
                  href="/login"
                  className="hidden sm:flex items-center gap-2 text-sm hover:text-slate-900 transition"
                >
                  <HiOutlineUser className="w-4 h-4" />
                  Login
                </Link>

              </div>
            </div>
          </div>
        </header>

        {/* ===== PAGE CONTENT (SCROLLABLE AREA) ===== */}
        <main className="flex-1">
          {children}
        </main>

        {/* ================= FOOTER ================= */}
        <footer className="bg-[#0F172A] text-gray-300 pt-20 pb-10">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">EquiTrade Global</h3>
              <p className="text-sm leading-relaxed text-gray-400">
                Escrow-backed B2B marketplace connecting verified Chinese manufacturers with African businesses.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Marketplace</h4>
              <ul className="space-y-3 text-sm">
                <li className="hover:text-white cursor-pointer">All Products</li>
                <li className="hover:text-white cursor-pointer">Verified Suppliers</li>
                <li className="hover:text-white cursor-pointer">Categories</li>
                <li className="hover:text-white cursor-pointer">Bulk Deals</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Vendors</h4>
              <ul className="space-y-3 text-sm">
                <li className="hover:text-white cursor-pointer">Become a Vendor</li>
                <li className="hover:text-white cursor-pointer">Vendor Dashboard</li>
                <li className="hover:text-white cursor-pointer">Compliance & KYC</li>
                <li className="hover:text-white cursor-pointer">Escrow System</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Subscribe</h4>
              <p className="text-sm text-gray-400 mb-4">
                Get sourcing updates & verified deals.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-l-lg text-black"
                />
                <button className="bg-[#065F46] px-4 rounded-r-lg text-white">
                  Join
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-16 pt-6 text-center text-xs text-gray-500">
            © 2026 EquiTrade Global — China 🇨🇳 × Africa 🌍. All rights reserved.
          </div>
        </footer>

      </body>
    </html>
  );
}
