import "./globals.css";
import Link from "next/link";
import type { Metadata } from "next";

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
        {/* Header */}
        <header className="w-full bg-white border-b border-gray-200">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex h-20 items-center justify-between">
              {/* Logo */}
              <Link href="/" className="text-lg font-semibold tracking-wide">
                AFRO-SINO TRADE
              </Link>

              {/* Navigation */}
              <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
                <Link href="/categories" className="hover:text-gray-900">
                  Categories
                </Link>
                <Link href="/escrow" className="hover:text-gray-900">
                  How Escrow Works
                </Link>
                <Link href="/vendors" className="hover:text-gray-900">
                  For Vendors
                </Link>
              </nav>

              {/* Actions */}
              <div className="flex items-center gap-4">
                <Link
                  href="/search"
                  className="text-gray-600 hover:text-gray-900"
                >
                  🔍
                </Link>

                <Link
                  href="/login"
                  className="text-sm text-gray-700 hover:text-gray-900"
                >
                  Login
                </Link>

                <Link
                  href="/start-buying"
                  className="rounded-md bg-[#6B8F7A] px-4 py-2 text-sm font-medium text-white hover:bg-[#5F806E] transition"
                >
                  Start Buying
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main>{children}</main>
      </body>
    </html>
  );
}
