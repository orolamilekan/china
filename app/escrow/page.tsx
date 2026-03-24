"use client";

import Link from "next/link";
import {
  HiOutlineShieldCheck,
  HiOutlineLockClosed,
  HiOutlineBanknotes,
  HiOutlineCheckCircle,
  HiOutlineTruck,
  HiOutlineChatBubbleLeftRight,
} from "react-icons/hi2";

export default function EscrowPage() {
  return (
    <div className="min-h-screen bg-[#F7F8F7] text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <div className="flex justify-center mb-6">
            <HiOutlineShieldCheck className="text-[#6B8F7A]" size={60} />
          </div>
          <h1 className="text-4xl font-bold mb-4">
            Escrow Protection on Afro-Sino Trade
          </h1>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Every transaction is secured. Funds are only released to vendors 
            after you confirm product quality and delivery. 
            Trade confidently between China and Africa.
          </p>
        </div>
      </section>

      {/* ================= HOW ESCROW WORKS ================= */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold text-center mb-14">
          How Our Escrow System Works
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {/* Step 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
            <HiOutlineBanknotes className="mx-auto text-[#6B8F7A] mb-4" size={36} />
            <h3 className="font-semibold mb-2">1. Buyer Pays Securely</h3>
            <p className="text-sm text-gray-600">
              Your payment is held safely in escrow. The vendor does not receive
              funds immediately.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
            <HiOutlineTruck className="mx-auto text-[#6B8F7A] mb-4" size={36} />
            <h3 className="font-semibold mb-2">2. Vendor Ships Goods</h3>
            <p className="text-sm text-gray-600">
              The supplier processes your order and ships it according to agreed
              specifications.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
            <HiOutlineCheckCircle className="mx-auto text-[#6B8F7A] mb-4" size={36} />
            <h3 className="font-semibold mb-2">3. Buyer Confirms</h3>
            <p className="text-sm text-gray-600">
              After inspecting the goods, you confirm satisfaction within your
              dashboard.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
            <HiOutlineLockClosed className="mx-auto text-[#6B8F7A] mb-4" size={36} />
            <h3 className="font-semibold mb-2">4. Funds Released</h3>
            <p className="text-sm text-gray-600">
              Payment is securely transferred to the vendor only after approval.
            </p>
          </div>

        </div>
      </section>

      {/* ================= WHY ESCROW MATTERS ================= */}
      <section className="bg-white py-20 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          {/* Buyers */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              Protection for Buyers
            </h3>
            <ul className="space-y-4 text-gray-600">
              <li>✔ Funds held securely until delivery confirmation</li>
              <li>✔ Protection against non-delivery</li>
              <li>✔ Dispute resolution support</li>
              <li>✔ Verified vendor screening</li>
              <li>✔ Transparent transaction records</li>
            </ul>
          </div>

          {/* Vendors */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              Security for Vendors
            </h3>
            <ul className="space-y-4 text-gray-600">
              <li>✔ Guaranteed payment once conditions are met</li>
              <li>✔ Reduced fraud risk</li>
              <li>✔ Structured transaction workflow</li>
              <li>✔ Increased buyer trust</li>
              <li>✔ Faster international trade confidence</li>
            </ul>
          </div>

        </div>
      </section>

      {/* ================= DISPUTE RESOLUTION ================= */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Dispute Resolution Process
        </h2>

        <div className="bg-white rounded-2xl shadow-sm p-10 max-w-4xl mx-auto">
          <p className="text-gray-600 mb-6">
            If a buyer and vendor disagree on product quality, shipping, or
            delivery conditions, Afro-Sino Trade provides structured mediation.
          </p>

          <ul className="space-y-4 text-gray-600">
            <li>• Buyer submits dispute with supporting evidence</li>
            <li>• Vendor responds within agreed timeframe</li>
            <li>• Platform reviews documentation</li>
            <li>• Funds are refunded or released based on findings</li>
          </ul>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="bg-[#6B8F7A] py-16 text-white text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Trade with Confidence Today
        </h2>
        <p className="mb-8 text-white/90">
          Our escrow system ensures every transaction is secure and transparent.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          <Link
            href="/marketplace"
            className="bg-white text-[#6B8F7A] px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
          >
            Start Buying
          </Link>

          <Link
            href="/vendors"
            className="border border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-[#6B8F7A] transition"
          >
            Become a Vendor
          </Link>
        </div>
      </section>

      {/* ================= FLOATING CHAT BUTTON ================= */}
      <Link
        href="/chat"
        className="fixed bottom-6 right-6 bg-[#6B8F7A] hover:bg-[#5F806E] text-white p-4 rounded-full shadow-lg transition flex items-center justify-center"
      >
        <HiOutlineChatBubbleLeftRight size={24} />
      </Link>

    </div>
  );
}
