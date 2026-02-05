"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  Banknote, 
  Smartphone, 
  Building2, 
  GraduationCap,
  Zap,
  QrCode,
  Shield,
  Layers,
  CreditCard,
  ArrowRight,
  Globe,
  TrendingUp,
  LayoutGrid,
  Cpu,
  Server,
  Wifi
} from "lucide-react";

const products = [
  {
    id: "unicash",
    name: "Uni-Cash",
    tagline: "Unified Payment Ecosystem",
    description: "Atlas's Pay @Bank solution - Uni-Cash provides a reliable and secure communication channel between enterprises and their banks for sending payment requests and getting status information. Uni-Cash also communicates with customers for timely and efficient payments.",
    icon: Banknote,
    modules: [
      { name: "Uni-Cash Bank", desc: "Financial institution integration", icon: Building2 },
      { name: "Uni-Cash School", desc: "School fee collection & management", icon: GraduationCap },
      { name: "Uni-Cash Utility", desc: "Utility bill payments & tracking", icon: Zap },
      { name: "Uni-Cash College", desc: "Higher education fee management", icon: Layers },
    ],
    stats: [
      { value: "500K+", label: "Bills/Month" },
      { value: "99.999%", label: "Uptime" },
      { value: "10+", label: "Banks Live" },
    ]
  },
  {
    id: "vib",
    name: "VIB",
    tagline: "Virtual Integrated Banking",
    description: "The next generation of digital banking. VIB offers a modular, microservices-based architecture that empowers banks to deliver personalized, omnichannel experiences to millions of customers securely.",
    icon: Smartphone,
    modules: [
      { name: "Omnichannel Hub", desc: "Unified web & mobile experience", icon: Globe },
      { name: "USSD Gateway", desc: "Inclusive offline banking", icon: Wifi },
      { name: "Admin Console", desc: "Centralized system control", icon: Server },
      { name: "Open API", desc: "Third-party ecosystem ready", icon: Cpu },
    ],
    stats: [
      { value: "1M+", label: "Active Users" },
      { value: "< 50ms", label: "Latency" },
      { value: "PCI-DSS", label: "Certified" },
    ]
  },
  {
    id: "merchant",
    name: "Merchant Pay",
    tagline: "Digital Commerce Solution",
    description: "Empowering businesses to accept payments anywhere, anytime. Our merchant solution combines QR technology, real-time analytics, and multi-branch management into a single, intuitive platform.",
    icon: QrCode,
    modules: [
      { name: "Smart POS", desc: "Mobile-first acceptance", icon: CreditCard },
      { name: "Dynamic QR", desc: "EMVCo compliant generation", icon: QrCode },
      { name: "Live Analytics", desc: "Real-time sales tracking", icon: TrendingUp },
      { name: "Branch Manager", desc: "Multi-location control", icon: LayoutGrid },
    ],
    stats: [
      { value: "2s", label: "Avg. Time" },
      { value: "Zero", label: "Hardware Cost" },
      { value: "T+0", label: "Settlement" },
    ]
  },
];

const partnerBanks = ["Dashen Bank", "Wegagen Bank", "Abay Bank", "Enat Bank", "Siinqee Bank", "Hijra Bank", "OIB"];

export default function Products() {
  const [activeTab, setActiveTab] = useState(products[0].id);
  const activeProduct = products.find(p => p.id === activeTab) || products[0];

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      const product = products.find(p => p.id === hash);
      if (product) {
        setActiveTab(product.id);
        const element = document.getElementById("products");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    // Handle initial load
    handleHashChange();

    // Handle subsequent navigation
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <section id="products" className="py-32 bg-white relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary-50/50 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-secondary-50/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-xs font-medium mb-6">
              <Cpu size={14} />
              <span>Enterprise Grade</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-neutral-900 tracking-tight mb-6 font-display">
              Engineered for <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-600 to-secondary-500">Scale</span>
            </h2>
            <p className="text-xl text-neutral-500 max-w-2xl mx-auto font-light leading-relaxed">
              Our product suite drives digital transformation across financial, educational, and commercial sectors with 99.999% reliability.
            </p>
          </motion.div>
        </div>

        {/* Product Navigation */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-neutral-100 p-1.5 rounded-full border border-neutral-200">
            {products.map((product) => (
              <button
                key={product.id}
                onClick={() => setActiveTab(product.id)}
                className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === product.id
                    ? "text-primary-950"
                    : "text-neutral-500 hover:text-neutral-900"
                }`}
              >
                {activeTab === product.id && (
                  <motion.div
                    layoutId="active-product-tab"
                    className="absolute inset-0 bg-white rounded-full shadow-sm border border-neutral-200/50"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <product.icon size={16} className={activeTab === product.id ? "text-secondary-500" : ""} />
                  {product.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Product Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProduct.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-12 gap-8 lg:gap-12"
          >
            {/* Left: Product Hero Card */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-4xl border border-neutral-200 p-8 md:p-12 h-full relative overflow-hidden group hover:border-primary-200 transition-colors duration-500 shadow-xl shadow-neutral-100/50">
                {/* Glow Effect */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-50 rounded-full blur-[80px] group-hover:bg-primary-100/50 transition-all duration-500" />
                
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className="flex items-center gap-4 mb-8">
                      <div className="p-3 rounded-xl bg-primary-50 text-primary-600 border border-primary-100">
                        <activeProduct.icon size={32} strokeWidth={1.5} />
                      </div>
                      <div className="h-px flex-1 bg-linear-to-r from-neutral-200 to-transparent" />
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 tracking-tight font-display">
                      {activeProduct.tagline}
                    </h3>
                    <p className="text-lg text-neutral-600 leading-relaxed mb-10 font-light max-w-2xl">
                      {activeProduct.description}
                    </p>

                    {/* Module Grid */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      {activeProduct.modules.map((mod, i) => (
                        <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-neutral-50 border border-neutral-100 hover:border-primary-200 hover:bg-white hover:shadow-md transition-all duration-300">
                          <mod.icon size={20} className="mt-1 text-primary-500 shrink-0" />
                          <div>
                            <h4 className="font-semibold text-neutral-900 text-sm">{mod.name}</h4>
                            <p className="text-xs text-neutral-500 mt-1 leading-relaxed">{mod.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-12 pt-8 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-6">
                    <div className="flex gap-8">
                      {activeProduct.stats.map((stat, i) => (
                        <div key={i}>
                          <div className="text-2xl font-bold text-neutral-900 tracking-tight font-display">{stat.value}</div>
                          <div className="text-xs text-neutral-500 font-medium uppercase tracking-wider mt-1">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                    <button className="flex items-center gap-2 text-sm font-bold text-primary-600 hover:text-primary-700 transition-colors">
                      View Technical Specs <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Technical/Visual Card */}
            <div className="lg:col-span-4 space-y-6">
              {/* Code/Terminal Snippet - Kept dark for contrast/realism */}
              <div className="bg-[#0d1117] rounded-4xl border border-neutral-800 p-6 font-mono text-xs overflow-hidden relative shadow-lg">
                <div className="flex items-center gap-2 mb-4 border-b border-neutral-800 pb-4">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <div className="ml-auto text-neutral-500">api.act.et</div>
                </div>
                <div className="space-y-2 text-neutral-300">
                  <div className="flex">
                    <span className="text-purple-400 mr-2">POST</span>
                    <span>/v1/payments/initiate</span>
                  </div>
                  <div className="text-neutral-500">{`{`}</div>
                  <div className="pl-4">
                    <span className="text-blue-400">"amount"</span>: <span className="text-yellow-400">1500.00</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-blue-400">"currency"</span>: <span className="text-green-400">"ETB"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-blue-400">"provider"</span>: <span className="text-green-400">"{activeProduct.id.toUpperCase()}"</span>
                  </div>
                  <div className="text-neutral-500">{`}`}</div>
                  <div className="mt-4 text-emerald-500 flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    200 OK (45ms)
                  </div>
                </div>
              </div>

              {/* Security Badge */}
              <div className="bg-linear-to-br from-primary-50 to-white rounded-4xl border border-primary-100 p-8 text-center relative overflow-hidden shadow-lg shadow-primary-100/50">
                <Shield className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h4 className="text-neutral-900 font-bold mb-2">Bank-Grade Security</h4>
                <p className="text-neutral-500 text-xs leading-relaxed">
                  End-to-end encryption with HSM integration and full ISO 27001 compliance.
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Partner Banks Ticker */}
        <div className="mt-24 pt-12 border-t border-neutral-200">
          <p className="text-center text-xs font-bold text-neutral-400 uppercase tracking-[0.2em] mb-10">
            Trusted by Leading Financial Institutions
          </p>
          
          <div className="relative flex overflow-x-hidden group mask-linear-fade">
            <div className="flex animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
              {[...partnerBanks, ...partnerBanks].map((bank, index) => (
                <div key={`first-${bank}-${index}`} className="mx-8">
                  <span className="text-xl font-bold text-neutral-300 hover:text-primary-600 transition-colors duration-300 cursor-default font-display">
                    {bank}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex animate-marquee2 whitespace-nowrap group-hover:[animation-play-state:paused] absolute top-0 left-0">
              {[...partnerBanks, ...partnerBanks].map((bank, index) => (
                <div key={`second-${bank}-${index}`} className="mx-8">
                  <span className="text-xl font-bold text-neutral-300 hover:text-primary-600 transition-colors duration-300 cursor-default font-display">
                    {bank}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
