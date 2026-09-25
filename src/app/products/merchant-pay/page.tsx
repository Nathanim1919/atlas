"use client";

import Link from "next/link";
import {
  QrCode,
  Smartphone,
  Store,
  ArrowRight,
  CheckCircle2,
  Sliders,
  ChevronRight,
  ShieldCheck
} from "lucide-react";

export default function MerchantPayPage() {
  const triggerDemo = (service: string) => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("open-demo-modal", {
          detail: { intent: "demo", product: `Merchant Pay - ${service}` }
        })
      );
    }
  };

  const channels = [
    {
      icon: QrCode,
      title: "Interoperable EMVCo QR",
      desc: "Instant dynamic and static QR generation compliant with National EthSwitch and EMVCo standards for all banking apps and digital wallets."
    },
    {
      icon: Smartphone,
      title: "Merchant Mobile App",
      desc: "Lightweight, intuitive Android & iOS mobile POS allowing cashiers to generate invoices, accept payments, and issue digital SMS/e-receipts instantly."
    },
    {
      icon: Store,
      title: "Smart Android POS Terminals",
      desc: "Direct integration with handheld touchscreen POS devices supporting NFC contactless cards, chip & PIN, and camera QR scanning."
    },
    {
      icon: Sliders,
      title: "Merchant Web Portal & Analytics",
      desc: "Comprehensive web console for business owners to track real-time branch revenues, cashier shift reconciliations, and instant bank settlements."
    }
  ];

  const keyFeatures = [
    {
      title: "Multi-Store & Cashier Hierarchy",
      desc: "Organize businesses by enterprise headquarters, regional branch, store lane, and individual cashier with role-based access control and shift sign-offs.",
      metric: "Unlimited",
      label: "Tills"
    },
    {
      title: "Instant Core Banking Settlement",
      desc: "Funds collected via QR or card are settled straight to the merchant's commercial bank account with zero intermediary float risk.",
      metric: "< 2 sec",
      label: "Speed"
    },
    {
      title: "Automated Dispute & Void Handling",
      desc: "Built-in double-entry accounting reconciliation engine that automatically detects and resolves pending or reversed transactions across switches.",
      metric: "99.99%",
      label: "Accuracy"
    },
    {
      title: "Developer APIs & ERP Plugins",
      desc: "RESTful webhook APIs and ready-made plugins for POS cash registers, e-commerce storefronts, and SAP/Oracle ERP enterprise backends.",
      metric: "< 50ms",
      label: "Latency"
    }
  ];

  const targetIndustries = [
    {
      name: "Retail Supermarkets & Groceries",
      useCase: "Fast checkout lanes with dual-display dynamic QR codes and barcode POS integration."
    },
    {
      name: "Fuel Stations & Logistics",
      useCase: "Ruggedized wireless handheld POS terminals for pump attendants with shift audit trails."
    },
    {
      name: "Hotels, Cafes & Restaurants",
      useCase: "Table-side QR payments, split bills, tips management, and automated room folio postings."
    },
    {
      name: "Healthcare, Clinics & Pharmacies",
      useCase: "Split insurance and co-pay collections with prescription tracking and digital compliance."
    }
  ];

  const metrics = [
    { value: "EMVCo", label: "National QR Standard" },
    { value: "EthSwitch", label: "Direct Rail Integration" },
    { value: "< 2 Sec", label: "Direct Bank Settlement" },
    { value: "Zero Float", label: "No Escrow Delays" },
  ];

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
            <span className="text-[#3e7da2] font-semibold">Merchant Pay</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white border border-neutral-200 shadow-xs text-neutral-700 text-xs font-mono mb-6">
                <Store className="w-3.5 h-3.5 text-[#3e7da2]" />
                <span>Next-Gen Merchant Acquiring Platform</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 mb-6 leading-tight">
                Unified Payment Acceptance for Modern Merchants
              </h1>

              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-8 max-w-2xl">
                Empower retail chains, supermarket lanes, fuel stations, and enterprise billers to accept national QR codes, debit cards, and mobile wallets with real-time core banking settlement.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => triggerDemo("General Request")}
                  className="px-6 py-3.5 bg-neutral-900 hover:bg-neutral-800 text-white font-bold rounded shadow-sm transition-colors flex items-center gap-2 text-sm cursor-pointer"
                >
                  <span>Schedule Solution Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <Link
                  href="/contact"
                  className="px-6 py-3.5 bg-white hover:bg-neutral-100 text-neutral-800 font-semibold rounded border border-neutral-300 transition-colors flex items-center gap-2 text-sm"
                >
                  <span>Talk with Acquiring Specialist</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white border border-neutral-200 p-6 rounded shadow-sm">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-100">
                  <div className="flex items-center gap-2">
                    <QrCode className="w-4 h-4 text-[#3e7da2]" />
                    <span className="text-xs font-mono uppercase text-neutral-500">Merchant Terminal #ETH-9021</span>
                  </div>
                  <span className="text-xs font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded font-semibold">Active</span>
                </div>

                <div className="bg-neutral-50 border border-neutral-200/80 p-4 rounded text-center mb-4">
                  <p className="text-[11px] font-mono text-neutral-500 uppercase">Payment Amount Due</p>
                  <div className="text-2xl font-extrabold text-neutral-900 my-1">ETB 1,850.00</div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>EthSwitch Interoperable QR Verified</span>
                  </div>
                </div>

                <div className="space-y-2 text-xs font-mono">
                  <div className="flex justify-between p-2 bg-neutral-50 rounded border border-neutral-200/60">
                    <span className="text-neutral-500">Store Lane:</span>
                    <span className="text-neutral-800 font-semibold">Bole Medhanialem - Till 04</span>
                  </div>
                  <div className="flex justify-between p-2 bg-neutral-50 rounded border border-neutral-200/60">
                    <span className="text-neutral-500">Settlement Target:</span>
                    <span className="text-[#3e7da2] font-semibold">Live Bank Current Account</span>
                  </div>
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

      {/* Touchpoint Channels */}
      <section className="py-20 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-[#3e7da2] font-mono text-xs uppercase tracking-wider block mb-2 font-bold">
              Omnichannel Touchpoints
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
              One Engine, Every Payment Touchpoint
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-3">
              Whether over the retail counter, at the table, on the road, or online, Merchant Pay gives businesses total acquiring coverage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {channels.map((chan) => (
              <div key={chan.title} className="p-6 bg-white border border-neutral-200 rounded flex flex-col justify-between shadow-xs">
                <div>
                  <div className="w-9 h-9 rounded bg-neutral-50 border border-neutral-200 text-[#3e7da2] flex items-center justify-center mb-4 shadow-xs">
                    <chan.icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-neutral-900 mb-2">
                    {chan.title}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {chan.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Features */}
      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-[#3e7da2] font-mono text-xs uppercase tracking-wider block mb-2 font-bold">
              Acquiring Control
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
              Designed for Commercial Banks & Multi-Location Chains
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {keyFeatures.map((feat) => (
              <div key={feat.title} className="p-6 bg-neutral-50 border border-neutral-200 rounded flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-base font-bold text-neutral-900">{feat.title}</h3>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-neutral-200 text-neutral-700">
                      {feat.metric} {feat.label}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Industries */}
      <section className="py-20 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-[#3e7da2] font-mono text-xs uppercase tracking-wider block mb-2 font-bold">
              Industry Verticals
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
              Tailored to Real Commercial Operations
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {targetIndustries.map((ind) => (
              <div key={ind.name} className="p-6 bg-white border border-neutral-200 rounded shadow-xs">
                <h3 className="text-sm font-bold text-neutral-900 mb-2">{ind.name}</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">{ind.useCase}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-neutral-50 border border-neutral-200 p-8 sm:p-12 rounded flex flex-col md:flex-row items-center justify-between gap-8 shadow-xs">
            <div className="max-w-2xl">
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-2">
                Equip Your Merchant Network with Merchant Pay
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Atlas Computer Technology partners directly with commercial banks and payment facilitators to deploy white-labeled merchant acquiring suites at scale.
              </p>
            </div>
            <div className="flex gap-4 shrink-0">
              <button
                type="button"
                onClick={() => triggerDemo("Bank Partnership")}
                className="px-6 py-3 bg-neutral-900 hover:bg-neutral-800 text-white font-bold rounded text-xs uppercase font-mono tracking-wider transition-colors cursor-pointer"
              >
                Request Bank Deployment Pilot
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
