"use client";

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
  Banknote,
  Repeat,
  ChevronRight,
  Download,
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
    { year: "2019", bills: "2.5K/mo" },
    { year: "2020", bills: "28K/mo" },
    { year: "2021", bills: "87K/mo" },
    { year: "2022", bills: "154K/mo" },
    { year: "2023", bills: "240K/mo" },
    { year: "2024", bills: "350K/mo" },
    { year: "2025/26", bills: "500K+/mo" },
  ];

  const partnerBanks = [
    "Dashen Bank", "Wegagen Bank", "Awash Bank", "Siinqee Bank", "Abay Bank", 
    "Oromia International Bank", "Enat Bank", "Hijra Bank", "ZamZam Bank", "Berhan Bank", 
    "Nib Bank", "Bunna Bank", "Rammis Bank", "EthSwitch"
  ];

  const metrics = [
    { value: "500,000+", label: "Bills Processed Monthly" },
    { value: "20+", label: "Commercial Banks Live" },
    { value: "99.999%", label: "Platform Uptime SLA" },
    { value: "T+0", label: "Real-Time Settlement" },
  ];

  const openDemoModal = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-demo-modal", { detail: { intent: "demo", product: "unicash" } }));
    }
  };

  return (
    <div className="bg-white font-sans min-h-screen text-neutral-900 selection:bg-[#3e7da2] selection:text-white">
      {/* Light Enterprise Hero */}
      <section className="relative pt-24 pb-20 bg-neutral-50 border-b border-neutral-200 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-500 mb-6">
            <Link href="/" className="hover:text-neutral-900 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-neutral-400" />
            <Link href="/products" className="hover:text-neutral-900 transition-colors">Products</Link>
            <ChevronRight className="w-3 h-3 text-neutral-400" />
            <span className="text-[#3e7da2] font-semibold">Uni-Cash Platform</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white border border-neutral-200 shadow-xs text-neutral-700 text-xs font-mono mb-6">
                <CreditCard className="w-3.5 h-3.5 text-[#3e7da2]" />
                <span>Atlas Pay@Bank Ecosystem</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 mb-6 leading-tight">
                Uni-Cash: Unified Payment & Invoicing Platform
              </h1>

              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-8 max-w-2xl">
                A mission-critical bridge connecting commercial banks, universities, utilities, and corporate billers with instant real-time settlement and automated reconciliation.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={openDemoModal}
                  className="px-6 py-3.5 bg-neutral-900 hover:bg-neutral-800 text-white font-bold rounded shadow-sm transition-colors flex items-center gap-2 text-sm cursor-pointer"
                >
                  <span>Request Uni-Cash Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <Link
                  href="/contact"
                  className="px-6 py-3.5 bg-white hover:bg-neutral-100 text-neutral-800 font-semibold rounded border border-neutral-300 transition-colors flex items-center gap-2 text-sm"
                >
                  <Download className="w-4 h-4 text-[#3e7da2]" />
                  <span>Download Product Overview</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white border border-neutral-200 p-6 rounded shadow-sm">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-100">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#3e7da2]" />
                    <span className="text-xs font-mono uppercase text-neutral-500">Volume Scale</span>
                  </div>
                  <span className="text-xs font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded font-semibold">500K+ Monthly</span>
                </div>

                <div className="space-y-3">
                  {[
                    "FlexCube, Finacle & Temenos Direct Adapters",
                    "Pay Tuition, Water & Utilities from Any Bank",
                    "Instant T+0 Ledger Credit & Real-Time E-Receipts",
                    "Multi-Tenant School, College & Municipal Accounting",
                    "Automated CSV, PDF & General Ledger Exports"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-neutral-50 border border-neutral-200/80 rounded">
                      <CheckCircle2 className="w-4 h-4 text-[#3e7da2] shrink-0 mt-0.5" />
                      <span className="text-xs font-medium text-neutral-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Bar */}
      <section className="border-b border-neutral-200 bg-white py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, idx) => (
              <div key={idx} className="border-l-2 border-[#3e7da2] pl-4">
                <div className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">{metric.value}</div>
                <div className="text-xs font-mono text-neutral-500 mt-1">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volume Growth Chart */}
      <section className="py-20 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="text-[#3e7da2] font-mono text-xs uppercase tracking-wider block mb-2 font-bold">
                Proven Volume Growth
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight mb-4">
                Over 500,000 Bills Processed Every Month
              </h2>
              <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                From 2,500 monthly transactions in 2019 to over half a million bills every month today, Uni-Cash is relied upon by financial institutions nationwide for high-concurrency bill presentations.
              </p>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>200x Growth in Processed Bill Volume</span>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white border border-neutral-200 p-6 sm:p-8 rounded shadow-xs">
              <div className="flex items-end justify-between gap-2 sm:gap-4 h-48 pt-6">
                {growthTimeline.map((item, idx) => {
                  const heights = ["12%", "22%", "38%", "52%", "72%", "86%", "100%"];
                  return (
                    <div key={item.year} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
                      <span className="text-[10px] font-mono font-bold text-neutral-500">
                        {item.bills}
                      </span>
                      <div 
                        className="w-full bg-[#3e7da2] rounded-t transition-all group-hover:bg-neutral-900"
                        style={{ height: heights[idx] }}
                      />
                      <span className="text-xs font-mono font-semibold text-neutral-700">
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

      {/* Product Modules */}
      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-[#3e7da2] font-mono text-xs uppercase tracking-wider block mb-2 font-bold">
              Specialized Modules
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
              Tailored Invoicing & Collection Modules
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-3">
              Purpose-built modules customized for education, municipal utilities, commercial enterprises, and multi-bank settlement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((mod) => (
              <div key={mod.id} className="p-8 bg-neutral-50 border border-neutral-200 rounded flex flex-col justify-between hover:border-neutral-300 transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded bg-white border border-neutral-200 text-[#3e7da2] flex items-center justify-center shadow-xs">
                      <mod.icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-neutral-200/70 text-neutral-700">
                      {mod.badge}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-neutral-900 mb-2">
                    {mod.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {mod.desc}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={openDemoModal}
                  className="mt-6 pt-4 border-t border-neutral-200 flex items-center gap-1.5 text-xs font-mono font-bold text-[#3e7da2] hover:text-neutral-900 cursor-pointer"
                >
                  <span>Request Module Demo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back-Office Suite */}
      <section className="py-20 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-[#3e7da2] font-mono text-xs uppercase tracking-wider block mb-2 font-bold">
              Integrated ERP Suite
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
              Integrated Back-Office Capabilities
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {utilitySubModules.map((sub) => (
              <div key={sub.name} className="p-6 bg-white border border-neutral-200 rounded shadow-xs">
                <div className="w-7 h-7 rounded bg-neutral-50 text-[#3e7da2] border border-neutral-200 flex items-center justify-center mb-3">
                  <Check className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-neutral-900 mb-1">
                  {sub.name}
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {sub.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connected Banks */}
      <section className="py-16 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 block mb-6">
            Connected To 20+ Financial Institutions in Ethiopia
          </span>
          <div className="flex flex-wrap justify-center gap-2.5 max-w-4xl mx-auto">
            {partnerBanks.map((bank) => (
              <span key={bank} className="px-3.5 py-1.5 rounded bg-neutral-50 border border-neutral-200 text-neutral-700 text-xs font-mono font-medium">
                {bank}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-white border border-neutral-200 p-8 sm:p-12 rounded flex flex-col md:flex-row items-center justify-between gap-8 shadow-xs">
            <div className="max-w-2xl">
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-2">
                Transform Invoicing & Collections with Uni-Cash
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Eliminate manual payment queues, prevent reconciliation leaks, and empower your customers to pay directly from their preferred bank.
              </p>
            </div>
            <div className="flex gap-4 shrink-0">
              <button
                type="button"
                onClick={openDemoModal}
                className="px-6 py-3 bg-neutral-900 hover:bg-neutral-800 text-white font-bold rounded text-xs uppercase font-mono tracking-wider transition-colors cursor-pointer"
              >
                Book Live Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
