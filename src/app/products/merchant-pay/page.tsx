"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  QrCode,
  Smartphone,
  CreditCard,
  Building2,
  Store,
  Receipt,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  Sliders,
  DollarSign,
  Users,
  Repeat,
  Layers,
  Lock,
  Zap,
  BarChart3,
  Clock
} from "lucide-react";

export default function MerchantPayPage() {
  const triggerDemo = (service: string) => {
    window.dispatchEvent(
      new CustomEvent("open-demo-modal", {
        detail: { service: `Merchant Pay - ${service}` }
      })
    );
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
      label: "Branches & Tills"
    },
    {
      title: "Instant Core Banking Settlement",
      desc: "Funds collected via QR or card are settled straight to the merchant's commercial bank account with zero intermediary float risk.",
      metric: "< 2 sec",
      label: "Settlement Speed"
    },
    {
      title: "Automated Dispute & Void Handling",
      desc: "Built-in double-entry accounting reconciliation engine that automatically detects and resolves pending or reversed transactions across switches.",
      metric: "99.99%",
      label: "Reconciliation Accuracy"
    },
    {
      title: "Developer APIs & ERP Plugins",
      desc: "RESTful webhook APIs and ready-made plugins for POS cash registers, e-commerce storefronts, and SAP/Oracle ERP enterprise backends.",
      metric: "50+ ms",
      label: "Average API Latency"
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

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(62,125,162,0.3),transparent_60%)]" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#dde325]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dde325]/20 border border-[#dde325]/40 text-[#dde325] text-xs font-semibold uppercase tracking-wider mb-6">
                <Store className="w-4 h-4" />
                Next-Gen Merchant Acquiring Platform
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
                Unified Payment Acceptance for <span className="text-[#dde325]">Modern Merchants</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
                Empower retail merchants, restaurant chains, fuel stations, and enterprise billers to accept national QR codes, bank debit cards, and mobile wallets seamlessly with real-time settlement into core banking ledgers.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => triggerDemo("General Request")}
                  className="px-7 py-3.5 rounded-xl bg-[#dde325] text-slate-950 font-bold hover:bg-[#c8ce20] transition-all duration-200 shadow-lg shadow-[#dde325]/20 flex items-center gap-2 cursor-pointer"
                >
                  Schedule Solution Demo
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  href="/contact"
                  className="px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium transition-all duration-200 backdrop-blur-sm"
                >
                  Talk to a Payment Specialist
                </Link>
              </div>

              {/* Badges */}
              <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-3 gap-6">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-[#dde325]">EMVCo</div>
                  <div className="text-xs text-slate-400 mt-1">Interoperable QR Standards</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-white">EthSwitch</div>
                  <div className="text-xs text-slate-400 mt-1">Direct National Rail</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-white">Zero Float</div>
                  <div className="text-xs text-slate-400 mt-1">Instant Bank Ledger Credit</div>
                </div>
              </div>
            </motion.div>

            {/* Interactive Visual Preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="rounded-2xl bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-700/80 p-6 shadow-2xl relative">
                <div className="flex items-center justify-between border-b border-slate-700 pb-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#3e7da2]/20 border border-[#3e7da2]/40 flex items-center justify-center text-[#dde325]">
                      <QrCode className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">Merchant POS Console</div>
                      <div className="text-xs text-emerald-400 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        Core Banking Node Active
                      </div>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono bg-slate-800 text-slate-300 px-2 py-1 rounded border border-slate-700">
                    Terminal #ETH-9021
                  </span>
                </div>

                {/* Simulated Dynamic Payment Screen */}
                <div className="bg-slate-950 rounded-xl p-5 border border-slate-800 text-center mb-6">
                  <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Payment Amount Due</p>
                  <div className="text-3xl font-black text-white mb-4">ETB 1,850.00</div>

                  {/* QR Box */}
                  <div className="w-40 h-40 mx-auto bg-white p-3 rounded-xl shadow-inner flex flex-col items-center justify-center relative">
                    <div className="w-full h-full border-2 border-dashed border-slate-300 rounded flex items-center justify-center">
                      <QrCode className="w-28 h-28 text-slate-900" />
                    </div>
                    <div className="absolute bottom-1 text-[9px] font-bold text-[#3e7da2] bg-white px-1">
                      EthSwitch EMVCo
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 mt-4">
                    Scan with any Ethiopian Mobile Banking or Telebirr app
                  </p>
                </div>

                <div className="space-y-2.5">
                  <div className="flex justify-between items-center text-xs p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/50">
                    <span className="text-slate-400">Store Lane:</span>
                    <span className="text-white font-medium">Bole Medhanialem - Till 04</span>
                  </div>
                  <div className="flex justify-between items-center text-xs p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/50">
                    <span className="text-slate-400">Cashier:</span>
                    <span className="text-white font-medium">Helen K. (#CK-109)</span>
                  </div>
                  <div className="flex justify-between items-center text-xs p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/50">
                    <span className="text-slate-400">Settlement Target:</span>
                    <span className="text-[#dde325] font-semibold">Live Bank Current Account</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Acceptance Channels */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#3e7da2] mb-3">Omnichannel Acquiring</h2>
            <h3 className="text-3xl font-extrabold text-slate-900">
              One Unified Engine, Every Payment Touchpoint
            </h3>
            <p className="mt-4 text-slate-600">
              Whether over the retail counter, at the table, on the road, or online, Merchant Pay gives businesses full coverage without managing disparate terminals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {channels.map((channel, i) => (
              <motion.div
                key={channel.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-[#3e7da2]/40"
              >
                <div className="w-12 h-12 rounded-xl bg-[#3e7da2]/10 text-[#3e7da2] flex items-center justify-center mb-5">
                  <channel.icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-3">{channel.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{channel.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Capabilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#3e7da2] mb-3">Operational Control</h2>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                Designed for Commercial Banks & Multi-Location Chains
              </h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Atlas Computer Technology engineered Merchant Pay to solve the biggest headaches in Ethiopian merchant acquiring: branch bookkeeping chaos, untracked voids, cash float delays, and non-standard QR codes.
              </p>

              <div className="space-y-6">
                {keyFeatures.map((feat) => (
                  <div key={feat.title} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 flex items-center gap-3">
                        {feat.title}
                        <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-[#3e7da2]">
                          {feat.metric} {feat.label}
                        </span>
                      </h4>
                      <p className="text-sm text-slate-600 mt-1 leading-relaxed">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#3e7da2]/20 rounded-full blur-3xl" />
                <h4 className="text-xl font-bold text-white mb-2">Live End-to-End Flow</h4>
                <p className="text-xs text-slate-400 mb-6">How transactions travel through ACT Merchant Pay</p>

                <div className="space-y-4 relative">
                  <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#dde325] text-slate-950 font-black flex items-center justify-center text-sm shrink-0">
                      1
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Payer Scans or Taps</div>
                      <div className="text-xs text-slate-400">Mobile banking QR app or contactless NFC debit card.</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#3e7da2] text-white font-black flex items-center justify-center text-sm shrink-0">
                      2
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">ACT Switching & Validation</div>
                      <div className="text-xs text-slate-400">Authenticates ISO 8583 / 20022 message with EthSwitch rail.</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-emerald-500 text-white font-black flex items-center justify-center text-sm shrink-0">
                      3
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Direct Core Banking Credit</div>
                      <div className="text-xs text-slate-400">Merchant's bank account credited immediately without escrow delay.</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-indigo-500 text-white font-black flex items-center justify-center text-sm shrink-0">
                      4
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Instant Confirmation & Receipt</div>
                      <div className="text-xs text-slate-400">Cashier POS screen updates & e-receipt SMS pushed in under 2s.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Industries */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#3e7da2] mb-3">Industry Solutions</h2>
            <h3 className="text-3xl font-extrabold text-slate-900">Tailored to Real Commercial Operations</h3>
            <p className="mt-4 text-slate-600">
              Each sector has distinct cashier speeds and bookkeeping requirements. Merchant Pay adapts seamlessly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {targetIndustries.map((ind) => (
              <div key={ind.name} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{ind.name}</h4>
                  <p className="text-sm text-slate-600">{ind.useCase}</p>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-[#3e7da2] font-semibold">
                  <span>Customizable POS Profile</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#3e7da2] to-slate-900 text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
            Equip Your Merchant Network with Ethiopia's Most Reliable Acquiring Platform
          </h2>
          <p className="text-lg text-slate-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Atlas Computer Technology partners directly with commercial banks and payment facilitators to deploy white-labeled merchant acquiring suites at scale.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => triggerDemo("Bank Partnership")}
              className="px-8 py-4 rounded-xl bg-[#dde325] text-slate-950 font-bold hover:bg-[#c8ce20] transition-all duration-200 shadow-xl cursor-pointer"
            >
              Request Bank Deployment Pilot
            </button>
            <Link
              href="/resources/downloads"
              className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium transition-all duration-200"
            >
              Download Merchant Pay Specs
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
