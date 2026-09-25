"use client";

import Link from "next/link";
import { 
  CreditCard, 
  Store, 
  Smartphone, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  ChevronRight,
  Database,
  Cpu,
  Layers,
  Sparkles,
  TrendingUp,
  Activity
} from "lucide-react";

export default function ProductsCatalogPage() {
  const products = [
    {
      id: "unicash",
      name: "Uni-Cash Platform",
      tagline: "Pay@Bank & Institutional Invoicing Engine",
      category: "Billing & Settlement",
      href: "/products/unicash",
      icon: CreditCard,
      description: "A mission-critical payment bridge connecting commercial banks, universities, utilities, and corporate billers with instant real-time settlement and automated reconciliation.",
      metrics: [
        { value: "500,000+", label: "Monthly Bills Processed" },
        { value: "20+", label: "Commercial Banks Live" }
      ],
      features: [
        "Core Banking Connectors (FlexCube, Finacle, Temenos)",
        "Uni-Cash School, TVET & Higher Education Billing",
        "Utility Water, Meter & Rent Collection Modules",
        "Automated Real-Time T+0 Ledger Reconciliation"
      ]
    },
    {
      id: "merchant-pay",
      name: "Merchant Pay",
      tagline: "Omnichannel Merchant Acquiring & EMVCo QR",
      category: "Merchant Acquiring",
      href: "/products/merchant-pay",
      icon: Store,
      description: "Interoperable merchant acquiring platform enabling retail chains, supermarkets, and restaurants to accept national QR codes, debit cards, and digital wallets.",
      metrics: [
        { value: "EMVCo", label: "National QR Standard" },
        { value: "< 2 sec", label: "Settlement Speed" }
      ],
      features: [
        "Dynamic & Static EthSwitch Interoperable QR",
        "Handheld Android Smart POS & Card Terminal Support",
        "Multi-Store & Cashier Hierarchy Management",
        "Instant Bank Account Direct Ledger Credit"
      ]
    },
    {
      id: "vib",
      name: "Virtual Integrated Banking (VIB)",
      tagline: "Omnichannel Digital Banking Engine",
      category: "Digital Banking",
      href: "/products/vib",
      icon: Smartphone,
      description: "Microservices-based omnichannel digital banking suite providing retail and corporate customers with seamless Web, Mobile (iOS/Android), and offline USSD banking.",
      metrics: [
        { value: "1M+", label: "Active Banking Users" },
        { value: "< 50ms", label: "Core Latency" }
      ],
      features: [
        "Corporate & Retail Internet Banking Portals",
        "Native Biometric iOS & Android Mobile Banking Apps",
        "Inclusive High-Concurrency USSD Gateway",
        "Centralized KYC, Limits & Fraud Audit Console"
      ]
    }
  ];

  const overallMetrics = [
    { value: "500K+", label: "Bills Processed Monthly" },
    { value: "20+", label: "Connected Financial Institutions" },
    { value: "99.999%", label: "Platform Uptime SLA" },
    { value: "EthSwitch", label: "Direct Rail Integration" },
  ];

  const openDemoModal = (product: string) => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-demo-modal", { detail: { intent: "demo", product } }));
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
            <span className="text-[#3e7da2] font-semibold">Products</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white border border-neutral-200 shadow-xs text-neutral-700 text-xs font-mono mb-6">
                <Cpu className="w-3.5 h-3.5 text-[#3e7da2]" />
                <span>Enterprise Financial Software Suite</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 mb-6 leading-tight">
                Enterprise Financial Infrastructure & Payment Products
              </h1>

              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-8 max-w-2xl">
                Field-tested banking engines, interoperable merchant acquiring suites, and Pay@Bank invoicing platforms engineered for Ethiopia&apos;s financial institutions and commercial enterprises.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => openDemoModal("general-product")}
                  className="px-6 py-3.5 bg-neutral-900 hover:bg-neutral-800 text-white font-bold rounded shadow-sm transition-colors flex items-center gap-2 text-sm cursor-pointer"
                >
                  <span>Request Full Product Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <Link
                  href="/contact"
                  className="px-6 py-3.5 bg-white hover:bg-neutral-100 text-neutral-800 font-semibold rounded border border-neutral-300 transition-colors flex items-center gap-2 text-sm"
                >
                  <span>Talk with Product Engineer</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white border border-neutral-200 p-6 rounded shadow-sm">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-100">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-[#3e7da2]" />
                    <span className="text-xs font-mono uppercase text-neutral-500">Platform Status</span>
                  </div>
                  <span className="text-xs font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded font-semibold">20+ Banks Live</span>
                </div>

                <div className="space-y-3">
                  {[
                    "Direct Core Banking Switch Integration (Oracle/Temenos)",
                    "EthSwitch National Interoperable Rail Compliance",
                    "Real-Time T+0 Automated Ledger Settlement",
                    "PCI-DSS Financial Grade Security Standards",
                    "High-Availability Active-Active Microservices Architecture"
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
            {overallMetrics.map((metric, idx) => (
              <div key={idx} className="border-l-2 border-[#3e7da2] pl-4">
                <div className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">{metric.value}</div>
                <div className="text-xs font-mono text-neutral-500 mt-1">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Catalog Grid */}
      <section className="py-20 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-[#3e7da2] font-mono text-xs uppercase tracking-wider block mb-2 font-bold">
              Software Ecosystem
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
              Our Core Financial Product Suite
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-3">
              Modular, scalable software platforms built to power modern digital banking, merchant acquiring, and enterprise invoicing.
            </p>
          </div>

          <div className="space-y-8">
            {products.map((prod) => (
              <div
                key={prod.id}
                className="bg-white border border-neutral-200 p-8 rounded shadow-xs hover:border-neutral-300 transition-colors"
              >
                <div className="grid lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-4 lg:border-r border-neutral-100 lg:pr-8 pb-6 lg:pb-0 border-b lg:border-b-0">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded bg-neutral-50 border border-neutral-200 text-[#3e7da2] flex items-center justify-center shadow-xs">
                        <prod.icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded bg-neutral-100 border border-neutral-200 text-neutral-700">
                        {prod.category}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-neutral-900 mb-1">
                      {prod.name}
                    </h3>
                    <p className="text-xs font-mono text-neutral-500 mb-6">
                      {prod.tagline}
                    </p>

                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {prod.metrics.map((m, idx) => (
                        <div key={idx} className="bg-neutral-50 border border-neutral-200/80 p-3 rounded">
                          <div className="text-base font-bold text-neutral-900">{m.value}</div>
                          <div className="text-[10px] font-mono text-neutral-500 mt-0.5">{m.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <Link
                        href={prod.href}
                        className="px-4 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white font-bold rounded text-xs transition-colors inline-flex items-center gap-1.5"
                      >
                        <span>Explore Product</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <button
                        type="button"
                        onClick={() => openDemoModal(prod.id)}
                        className="px-4 py-2.5 bg-white hover:bg-neutral-50 text-neutral-800 font-semibold rounded border border-neutral-300 text-xs transition-colors cursor-pointer"
                      >
                        Request Demo
                      </button>
                    </div>
                  </div>

                  <div className="lg:col-span-8">
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
                      {prod.description}
                    </p>

                    <div>
                      <div className="text-xs font-mono uppercase tracking-wider text-neutral-500 mb-3 flex items-center gap-2">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#3e7da2]" />
                        <span>Core Functional Capabilities</span>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-3">
                        {prod.features.map((feat, i) => (
                          <div key={i} className="flex items-start gap-2.5 p-3 bg-neutral-50 border border-neutral-200/80 rounded text-xs text-neutral-700 font-medium">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
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
                Need a Custom Payment Integration or Product Pilot?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Our core banking engineers work directly with commercial financial institutions and enterprise billers to deploy customized product modules.
              </p>
            </div>
            <div className="flex gap-4 shrink-0">
              <button
                type="button"
                onClick={() => openDemoModal("custom-integration")}
                className="px-6 py-3 bg-neutral-900 hover:bg-neutral-800 text-white font-bold rounded text-xs uppercase font-mono tracking-wider transition-colors cursor-pointer"
              >
                Schedule Technical Pilot Call
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
