"use client";

import Link from "next/link";
import { 
  Smartphone, 
  Globe, 
  Wifi, 
  Server, 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight,
  ShieldCheck
} from "lucide-react";

export default function VIBProductPage() {
  const channels = [
    {
      title: "Internet Banking Portal",
      desc: "Comprehensive retail and corporate internet banking portal featuring bulk payroll, trade finance, account statements, and multi-signature approvals.",
      icon: Globe
    },
    {
      title: "Mobile Banking (iOS & Android)",
      desc: "Native biometric mobile applications delivering instant transfers, QR payments, airtime top-ups, micro-loans, and cardless ATM withdrawals.",
      icon: Smartphone
    },
    {
      title: "USSD Banking Gateway",
      desc: "High-concurrency, inclusive offline banking accessible from any feature phone without mobile data—ensuring nationwide financial inclusion.",
      icon: Wifi
    },
    {
      title: "Centralized Back-Office & Administration",
      desc: "Unified administration console for KYC verification, real-time transaction monitoring, limit configuration, audit logs, and fraud alerts.",
      icon: Server
    }
  ];

  const metrics = [
    { value: "1M+", label: "Active Banking Users" },
    { value: "< 50ms", label: "Transaction Latency" },
    { value: "Microservices", label: "Modular Architecture" },
    { value: "PCI-DSS", label: "Certified Core Security" },
  ];

  const openDemoModal = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-demo-modal", { detail: { intent: "demo", product: "vib" } }));
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
            <span className="text-[#3e7da2] font-semibold">Virtual Integrated Banking (VIB)</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white border border-neutral-200 shadow-xs text-neutral-700 text-xs font-mono mb-6">
                <Smartphone className="w-3.5 h-3.5 text-[#3e7da2]" />
                <span>Omnichannel Digital Banking Suite</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 mb-6 leading-tight">
                Virtual Integrated Banking (VIB) Suite
              </h1>

              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-8 max-w-2xl">
                An enterprise-grade, microservices-based omnichannel banking solution engineered to empower banks with unified web, mobile, USSD, and back-office services for millions of customers.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={openDemoModal}
                  className="px-6 py-3.5 bg-neutral-900 hover:bg-neutral-800 text-white font-bold rounded shadow-sm transition-colors flex items-center gap-2 text-sm cursor-pointer"
                >
                  <span>Request VIB Banking Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <Link
                  href="/case-studies"
                  className="px-6 py-3.5 bg-white hover:bg-neutral-100 text-neutral-800 font-semibold rounded border border-neutral-300 transition-colors flex items-center gap-2 text-sm"
                >
                  <span>See Wegagen & Siinqee Deployments</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white border border-neutral-200 p-6 rounded shadow-sm">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-100">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#3e7da2]" />
                    <span className="text-xs font-mono uppercase text-neutral-500">Omnichannel Core</span>
                  </div>
                  <span className="text-xs font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded font-semibold">Active Production</span>
                </div>

                <div className="space-y-3">
                  {[
                    "Unified Retail & Corporate Web Banking Portals",
                    "Native Biometric iOS & Android Apps + USSD Gateway",
                    "Real-Time Anti-Fraud & Transaction Limits Engine",
                    "FlexCube, Finacle & Temenos Switch Adapters",
                    "24/7 Core Availability & Low-Latency API Bridge"
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

      {/* Channels Section */}
      <section className="py-20 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-[#3e7da2] font-mono text-xs uppercase tracking-wider block mb-2 font-bold">
              Omnichannel Channels
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
              Four Unified Banking Channels
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-3">
              Engage customers across web, mobile, feature-phone USSD, and administrative back-office portals under one core engine.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {channels.map((chan) => (
              <div key={chan.title} className="p-8 bg-white border border-neutral-200 rounded flex gap-5 shadow-xs">
                <div className="w-10 h-10 rounded bg-neutral-50 border border-neutral-200 text-[#3e7da2] flex items-center justify-center shrink-0 shadow-xs">
                  <chan.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-neutral-900 mb-2">
                    {chan.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {chan.desc}
                  </p>
                </div>
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
                Empower Your Bank with VIB Omnichannel Suite
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Schedule a demonstration with our digital banking team to see live core integration, USSD routing, and mobile banking capabilities.
              </p>
            </div>
            <div className="flex gap-4 shrink-0">
              <button
                type="button"
                onClick={openDemoModal}
                className="px-6 py-3 bg-neutral-900 hover:bg-neutral-800 text-white font-bold rounded text-xs uppercase font-mono tracking-wider transition-colors cursor-pointer"
              >
                Schedule VIB Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
