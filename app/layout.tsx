import "./globals.css";
import Link from "next/link";
import type { Metadata } from "next";
import {
  HiOutlineMagnifyingGlass,
  HiOutlineUser,
  HiOutlineGlobeAlt,
  HiOutlineShieldCheck,
} from "react-icons/hi2";

export const metadata: Metadata = {
  title: "Afro-Sino Trade",
  description: "Escrow-backed marketplace connecting China and Africa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#F7F8F7] text-gray-900">
        {/* HEADER */}
        <header className="w-full bg-white/90 backdrop-blur border-b border-slate-200 sticky top-0 z-40">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex h-20 items-center justify-between">

              {/* LOGO */}
              <Link
                href="/"
                className="flex items-center gap-2 text-lg font-semibold tracking-wide text-slate-900"
              >
                <HiOutlineGlobeAlt className="w-6 h-6 text-[#6B8F7A]" />
                AFRO-SINO TRADE
              </Link>

              {/* NAVIGATION */}
              <nav className="hidden md:flex items-center gap-10 text-sm text-slate-600">
                <Link
                  href="/categories"
                  className="flex items-center gap-2 hover:text-slate-900 transition"
                >
                  <HiOutlineGlobeAlt className="w-4 h-4" />
                  Categories
                </Link>

                <Link
                  href="/escrow"
                  className="flex items-center gap-2 hover:text-slate-900 transition"
                >
                  <HiOutlineShieldCheck className="w-4 h-4" />
                  How Escrow Works
                </Link>

                <Link
                  href="/vendors"
                  className="hover:text-slate-900 transition"
                >
                  For Vendors
                </Link>
              </nav>

              {/* ACTIONS */}
              <div className="flex items-center gap-5">

                {/* SEARCH */}
                <Link
                  href="/search"
                  className="p-2 rounded-xl border border-slate-200 text-slate-500 hover:text-[#6B8F7A] hover:border-[#6B8F7A] transition"
                >
                  <HiOutlineMagnifyingGlass className="w-5 h-5" />
                </Link>

                {/* LOGIN */}
                <Link
                  href="/login"
                  className="hidden sm:flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition"
                >
                  <HiOutlineUser className="w-4 h-4" />
                  Login
                </Link>

                {/* CTA */}
                <Link
                  href="/start-buying"
                  className="rounded-xl bg-[#6B8F7A] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#5F806E] transition shadow-sm"
                >
                  Start Buying
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main>{children}</main>
      </body>
    </html>
  );
}
