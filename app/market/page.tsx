"use client";

import React, { useState } from 'react';
import { 
  HiOutlineAdjustmentsHorizontal, 
  HiOutlineChatBubbleLeftRight, 
  HiOutlineChevronDown, 
  HiOutlineShieldCheck,
  HiOutlineSquares2X2,
  HiOutlineListBullet,
  HiOutlineMagnifyingGlass
} from 'react-icons/hi2';
import { SiShieldsdotio } from 'react-icons/si';

const Marketplace = () => {
  const [viewType, setViewType] = useState<'grid' | 'list'>('grid');

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#111827] font-sans selection:bg-[#065F46] selection:text-white">
      
      {/* 🧭 TOP BAR / MINI HEADER */}
      <div className="bg-white border-b border-slate-100 sticky top-0 z-30">
        <div className="max-w-[1440px] mx-auto px-8 h-24 flex items-center justify-between">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <h1 className="text-2xl font-semibold tracking-tight">Marketplace</h1>
              <div className="flex items-center bg-slate-50 px-2 py-1 rounded-md border border-slate-100 ml-3">
                <HiOutlineShieldCheck className="text-[#065F46] w-4 h-4 mr-1.5" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Escrow Protected</span>
              </div>
            </div>
            <p className="text-sm text-slate-400">Browse verified products from trusted vendors</p>
          </div>

          <div className="relative w-full max-w-md">
            <HiOutlineMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search machinery, electronics, or materials..."
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-[#065F46] transition-all"
            />
          </div>
        </div>
      </div>

      <main className="max-w-[1440px] mx-auto px-8 py-10 flex gap-12">
        
        {/* 2. FILTER & CATEGORY SIDEBAR */}
        <aside className="w-64 flex-shrink-0 space-y-10 hidden lg:block">
          {/* Trust Mechanism Illustration for Sidebar */}
          <div className="p-4 bg-white border border-slate-100 rounded-2xl">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Security Architecture</p>
            
          </div>

          <section className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400 flex items-center">
              <HiOutlineAdjustmentsHorizontal className="mr-2" /> Filters
            </h3>
            
            <div className="space-y-6 pt-4">
              <div className="space-y-3">
                <label className="text-sm font-semibold flex justify-between items-center group cursor-pointer">
                  Categories <HiOutlineChevronDown className="w-4 h-4 text-slate-300" />
                </label>
                <div className="space-y-2 text-sm text-slate-500">
                  {['Industrial Machinery', 'Solar & Power', 'Construction', 'Raw Materials', 'Electricals'].map((cat) => (
                    <div key={cat} className="flex items-center hover:text-[#065F46] cursor-pointer transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-200 mr-3" /> {cat}
                    </div>
                  ))}
                </div>
              </div>

              <div className="h-px bg-slate-100" />

              <div className="space-y-4">
                <label className="text-sm font-semibold">Price Range (USD)</label>
                <div className="grid grid-cols-2 gap-2">
                  <input type="number" placeholder="Min" className="bg-white border border-slate-200 p-2 rounded-lg text-xs" />
                  <input type="number" placeholder="Max" className="bg-white border border-slate-200 p-2 rounded-lg text-xs" />
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-sm font-medium">Verified Vendors</span>
                <div className="w-10 h-5 bg-[#065F46] rounded-full relative cursor-pointer">
                   <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full shadow-sm" />
                </div>
              </div>

              <button className="w-full py-3 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors">
                Reset All Filters
              </button>
            </div>
          </section>
        </aside>

        {/* 3. PRODUCT GRID AREA */}
        <section className="flex-grow">
          
          {/* Logistics Overview for Global Sourcing */}
          <div className="mb-10 p-8 bg-white border border-slate-100 rounded-[32px] flex items-center gap-8">
            <div className="max-w-xs">
              <h4 className="text-sm font-bold text-slate-900 mb-2">Direct Supply Chain</h4>
              <p className="text-xs text-slate-500 leading-relaxed">All products displayed are sourced directly from manufacturing hubs in China with localized logistics support in Nigeria.</p>
            </div>
            <div className="flex-grow h-24 opacity-60">
              
            </div>
          </div>

          <div className="flex items-center justify-between mb-8">
            <div className="text-xs text-slate-400 font-medium italic">Showing 124 results for All Categories</div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center text-sm space-x-2">
                <span className="text-slate-400">Sort by:</span>
                <button className="font-semibold flex items-center">
                  Newest <HiOutlineChevronDown className="ml-1 w-4 h-4" />
                </button>
              </div>
              <div className="h-4 w-px bg-slate-200" />
              <div className="flex items-center space-x-2">
                <button onClick={() => setViewType('grid')} className={`p-2 rounded-lg transition-colors ${viewType === 'grid' ? 'bg-white shadow-sm text-[#065F46]' : 'text-slate-300'}`}>
                  <HiOutlineSquares2X2 className="w-5 h-5" />
                </button>
                <button onClick={() => setViewType('list')} className={`p-2 rounded-lg transition-colors ${viewType === 'list' ? 'bg-white shadow-sm text-[#065F46]' : 'text-slate-300'}`}>
                  <HiOutlineListBullet className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="group bg-white border border-slate-100 rounded-[24px] p-5 hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300">
                <div className="aspect-square bg-[#F9FAFB] rounded-[18px] mb-6 relative overflow-hidden flex items-center justify-center">
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded-md border border-slate-100 flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#065F46] mr-2" />
                    <span className="text-[10px] font-bold text-slate-600">VERIFIED</span>
                  </div>
                  <div className="w-24 h-24 text-slate-100">
                    <SiShieldsdotio className="w-full h-full" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-1">
                    <h3 className="font-semibold text-slate-900 group-hover:text-[#065F46] transition-colors truncate">
                      Precision Industrial CNC Controller V4.2
                    </h3>
                    <div className="flex justify-between items-center text-xs text-slate-400">
                      <span>Min Order: 10 Units</span>
                      <span>Origin: Shenzhen</span>
                    </div>
                  </div>

                  <div className="text-lg font-bold text-slate-900">
                    $1,240.00 — $1,450.00 <span className="text-xs font-normal text-slate-400">/ Unit</span>
                  </div>

                  <div className="flex items-center space-x-2 pt-2">
                    <button className="flex-grow bg-[#0F172A] text-white py-3 rounded-xl text-xs font-bold tracking-widest uppercase hover:bg-slate-800 transition-colors">
                      View Details
                    </button>
                    <button className="p-3 border border-slate-200 rounded-xl text-slate-400 hover:text-[#065F46] hover:border-[#065F46] transition-all relative group/chat">
                      <HiOutlineChatBubbleLeftRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Escrow Process Flow visualization at the bottom of the grid */}
          <div className="mt-20 p-10 bg-slate-900 rounded-[32px] text-white overflow-hidden relative">
            <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
               <div className="space-y-4">
                  <h2 className="text-2xl font-semibold">Institutional Escrow Protection</h2>
                  <p className="text-slate-400 text-sm leading-relaxed">Our protocol ensures funds are only released to vendors once the Nigerian customs clearance and buyer inspection are completed.</p>
               </div>
               <div className="bg-white/5 p-4 rounded-2xl backdrop-blur-sm">
                  
               </div>
            </div>
          </div>

          <div className="mt-20 flex flex-col items-center space-y-6">
            <button className="px-10 py-4 border border-slate-200 rounded-2xl text-sm font-semibold hover:bg-white hover:border-[#065F46] hover:text-[#065F46] transition-all">
              Load More Products
            </button>
            <div className="text-xs text-slate-400">Showing 6 of 124 products</div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Marketplace;