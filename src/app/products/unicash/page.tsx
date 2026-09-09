"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  CreditCard, 
  Building2, 
  GraduationCap, 
  Zap, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck, 
  Download, 
  Banknote,
  Users,
  Repeat,
  FileSpreadsheet,
  Droplets,
  Home,
  QrCode,
  Check
} from "lucide-react";

export default function UniCashProductPage() {
  const modules = [
    {
      id: "bank",
      icon: Building2,
      name: "Uni-Cash Bank",
      badge: "Core Integration",
      desc: "Direct, secure bridge connecting commercial bank core platforms (Oracle FlexCube, Finacle, Temenos) to corporate billers with instant ledger settlement."
    },
    {
      id: "school",
      icon: GraduationCap,
      name: "Uni-Cash School & TVET",
      badge: "Education Billing",
      desc: "Specialized fee collection platform enabling parents and students to pay tuition seamlessly through any bank channel with automated receipt reconciliation."
    },
    {
      id: "college",
      icon: Layers,
      name: "Uni-Cash College & University",
      badge: "Higher Education",
      desc: "Advanced multi-semester fee scheduling, dormitory and meal plan accounting, and direct ERP synchronization for major universities and colleges."
    },
    {
      id: "utility",
      icon: Zap,
      name: "Uni-Cash Utility & Municipal",
      badge: "High Volume",
      desc: "Bulk bill generation, automated meter consumption tracking, late fee calculations, and real-time payment settlement for municipal utilities."
    },
    {
      id: "hospitality",
      icon: Banknote,
      name: "Uni-Cash Hospitality",
      badge: "Commercial",
      desc: "Integrated point-of-sale settlement for hotels, restaurants, and event venues with split-bill handling and automated merchant ledgering."
    },
    {
      id: "p2p",
      icon: Repeat,
      name: "Uni-Cash P2P (Pay from Any Bank)",
      badge: "Interoperable",
      desc: "Enables consumers to make installments effortlessly from any financial institution via real-time payment switches without intermediary delays."
    }
  ];

  const utilitySubModules = [
    { name: "Payment Module", desc: "Loads bills, updates real-time settlements, and generates reports in CSV, Excel, and PDF formats." },
    { name: "Finance Module", desc: "Manages accounting, invoicing, general ledger, and accounts payable/receivable." },
    { name: "Water Bill Management", desc: "Tracks water consumption, tiered tariff calculations, meter readings, and automated collection." },
    { name: "Rent Management", desc: "Handles property leases, recurring rent invoicing, late fee penalties, and lease renewals." },
    { name: "Sales Module", desc: "Order tracking, customer pricing management, and revenue analytics." },
    { name: "Inventory Module", desc: "Real-time warehouse stock levels, purchase orders, and inventory valuation." }
  ];

  const growthTimeline = [
    { year: "2019", bills: "2,500/mo" },
    { year: "2020", bills: "28,000/mo" },
    { year: "2021", bills: "87,000/mo" },
    { year: "2022", bills: "154,000/mo" },
    { year: "2023", bills: "240,000/mo" },
    { year: "2024", bills: "350,000/mo" },
    { year: "2025/26", bills: "500,000+/mo" },
  ];

  const partnerBanks = [
    "Dashen Bank", "Wegagen Bank", "Awash Bank", "Siinqee Bank", "Abay Bank", 
    "Oromia International Bank", "Enat Bank", "Hijra Bank", "ZamZam Bank", "Berhan Bank", 
    "Nib Bank", "Bunna Bank", "Rammis Bank", "EthSwitch"
  ];

  const openDemoModal = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-demo-modal", { detail: { intent: "demo", product: "unicash" } }));
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 overflow-hidden bg-primary-950 text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-secondary-300 text-xs font-bold uppercase tracking-wider mb-6">
              <CreditCard size={14} className="text-secondary-400" />
              <span>Atlas Pay@Bank Ecosystem</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white mb-6 leading-[1.1]">
              Uni-Cash: The Unified <br />
              <span className="text-secondary-400">Payment & Invoicing Platform</span>
            </h1>

            <p className="text-lg text-blue-100 leading-relaxed font-light mb-8 max-w-2xl">
              A mission-critical bridge connecting enterprises, universities, and utilities with Ethiopian commercial banks. Streamlining bill presentation, real-time collection, and automated financial reconciliation.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                onClick={openDemoModal}
                className="px-8 py-4 bg-secondary-400 hover:bg-secondary-300 text-primary-950 font-bold rounded-xl shadow-lg transition-all flex items-center gap-2 text-sm cursor-pointer"
              >
                <span>Request a Uni-Cash Demo</span>
                <ArrowRight size={16} />
              </button>

              <Link
                href="/resources/downloads"
                className="px-7 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all flex items-center gap-2 text-sm"
              >
                <Download size={16} />
                <span>Download Uni-Cash Brochure</span>
              </Link>
            </div>
          </div>

          {/* Quick Product Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-10 border-t border-white/10">
            <div>
              <div className="text-3xl font-bold text-secondary-300 font-display">500,000+</div>
              <div className="text-xs text-blue-200 mt-1 uppercase tracking-wider">Processed Bills / Month</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary-300 font-display">20+</div>
              <div className="text-xs text-blue-200 mt-1 uppercase tracking-wider">Commercial Banks Live</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary-300 font-display">99.999%</div>
              <div className="text-xs text-blue-200 mt-1 uppercase tracking-wider">Platform Uptime</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary-300 font-display">T+0</div>
              <div className="text-xs text-blue-200 mt-1 uppercase tracking-wider">Real-Time Reconciliation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Transaction Growth Graph Section */}
      <section className="py-20 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-md">
              <span className="text-xs font-bold text-primary-600 uppercase tracking-wider block mb-2">
                Exponential Adoption
              </span>
              <h2 className="text-3xl font-bold font-display text-neutral-900 mb-4">
                Proven Scale: Over 500K Bills Monthly
              </h2>
              <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                From 2,500 monthly transactions in 2019 to over half a million bills every month today, Uni-Cash is trusted by institutions nationwide for reliable, high-volume collections.
              </p>
              <div className="flex items-center gap-3 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3.5 py-2 rounded-xl border border-emerald-200 w-fit">
                <TrendingUp size={16} />
                <span>200x Growth in Processed Bill Volume</span>
              </div>
            </div>

            {/* Growth Bar Visual */}
            <div className="flex-1 w-full bg-white p-6 sm:p-8 rounded-3xl border border-neutral-200 shadow-sm">
              <div className="flex items-end justify-between gap-2 sm:gap-4 h-48 pt-6">
                {growthTimeline.map((item, idx) => {
                  const heights = ["10%", "20%", "35%", "50%", "70%", "85%", "100%"];
                  return (
                    <div key={item.year} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
                      <span className="text-[10px] font-bold text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity">
                        {item.bills}
                      </span>
                      <div 
                        className="w-full bg-(--steel-blue) rounded-t-lg group-hover:bg-primary-600 transition-all"
                        style={{ height: heights[idx] }}
                      />
                      <span className="text-xs font-semibold text-neutral-700">
                        {item.year}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Modules Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary-600 font-bold text-xs uppercase tracking-wider block mb-3">
              Specialized Modules
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 font-display">
              Tailored Invoicing & Collection Modules
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((mod) => (
              <div key={mod.id} className="p-8 rounded-3xl bg-neutral-50 border border-neutral-200/80 hover:border-primary-300 hover:bg-white hover:shadow-xl transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center">
                      <mod.icon size={24} />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-neutral-200/60 text-neutral-700">
                      {mod.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2 font-display">
                    {mod.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {mod.desc}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={openDemoModal}
                  className="mt-6 pt-4 border-t border-neutral-200/60 flex items-center gap-1.5 text-xs font-bold text-primary-600 hover:text-primary-700 cursor-pointer"
                >
                  <span>Request Module Demo</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fully Integrated Service Modules */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary-600 font-bold text-xs uppercase tracking-wider block mb-3">
              Complete ERP & Billing Suite
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 font-display">
              Integrated Back-Office Capabilities
            </h2>
            <p className="text-neutral-600 text-sm mt-3">
              Uni-Cash extends beyond collection with comprehensive accounting, water consumption, property rent, and inventory management.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {utilitySubModules.map((sub) => (
              <div key={sub.name} className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center mb-3">
                  <Check size={16} />
                </div>
                <h4 className="text-base font-bold text-neutral-900 mb-1 font-display">
                  {sub.name}
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {sub.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connected Partner Banks */}
      <section className="py-20 bg-white border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-6">
            Connected To 20+ Financial Institutions in Ethiopia
          </span>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {partnerBanks.map((bank) => (
              <span key={bank} className="px-4 py-2 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-700 text-xs font-semibold">
                {bank}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer Banner */}
      <section className="py-20 bg-(--steel-blue) text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold font-display mb-4">
            Transform Your Invoicing & Collections with Uni-Cash
          </h2>
          <p className="text-blue-100 text-sm mb-8 leading-relaxed">
            Eliminate manual queues, prevent reconciliation leaks, and empower your customers to pay directly from their preferred bank.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={openDemoModal}
              className="px-8 py-4 bg-secondary-400 hover:bg-secondary-300 text-primary-950 font-bold rounded-xl shadow-lg transition-all text-sm cursor-pointer"
            >
              Book a Uni-Cash Live Demo
            </button>
            <Link
              href="/resources/downloads"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all text-sm"
            >
              Download PDF Brochure
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
