"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { 
  Banknote, 
  Smartphone, 
  Building2, 
  GraduationCap,
  Hotel,
  Zap,
  QrCode,
  BarChart3,
  Shield,
  Layers,
  CreditCard,
  ArrowRight,
  Check,
  Globe,
  TrendingUp,
  ChevronRight,
  LayoutGrid
} from "lucide-react";

const products = [
  {
    id: "unicash",
    name: "Uni-Cash",
    tagline: "Unified Payment Ecosystem",
    description: "A seamless bridge between enterprises and financial institutions. Uni-Cash simplifies complex payment flows, enabling real-time transaction processing, automated reconciliation, and multi-channel integration.",
    icon: Banknote,
    gradient: "from-emerald-500/20 to-teal-500/20",
    accent: "text-emerald-600",
    border: "border-emerald-200",
    modules: [
      { name: "Financial Institutions", desc: "Secure core banking integration", icon: Building2 },
      { name: "Education Sector", desc: "Fee collection & student data", icon: GraduationCap },
      { name: "Utility Providers", desc: "Automated billing & tracking", icon: Zap },
      { name: "Hospitality", desc: "Integrated guest payments", icon: Hotel },
    ],
    stats: [
      { value: "500K+", label: "Monthly Transactions" },
      { value: "99.99%", label: "System Uptime" },
      { value: "10+", label: "Partner Banks" },
    ],
    banks: ["Dashen Bank", "Wegagen Bank", "Abay Bank", "Enat Bank", "Siinqee Bank", "Hijra Bank", "OIB"]
  },
  {
    id: "vib",
    name: "VIB",
    tagline: "Virtual Integrated Banking",
    description: "The next generation of digital banking. VIB offers a modular, microservices-based architecture that empowers banks to deliver personalized, omnichannel experiences to millions of customers securely.",
    icon: Smartphone,
    gradient: "from-blue-500/20 to-indigo-500/20",
    accent: "text-blue-600",
    border: "border-blue-200",
    modules: [
      { name: "Omnichannel Hub", desc: "Unified web & mobile experience", icon: Globe },
      { name: "USSD Gateway", desc: "Inclusive offline banking", icon: Smartphone },
      { name: "Admin Console", desc: "Centralized system control", icon: Layers },
      { name: "Open API", desc: "Third-party ecosystem ready", icon: Shield },
    ],
    stats: [
      { value: "1M+", label: "Active Users" },
      { value: "50ms", label: "Latency" },
      { value: "ISO", label: "Certified Security" },
    ],
    banks: []
  },
  {
    id: "merchant",
    name: "Merchant Pay",
    tagline: "Digital Commerce Solution",
    description: "Empowering businesses to accept payments anywhere, anytime. Our merchant solution combines QR technology, real-time analytics, and multi-branch management into a single, intuitive platform.",
    icon: QrCode,
    gradient: "from-amber-500/20 to-orange-500/20",
    accent: "text-amber-600",
    border: "border-amber-200",
    modules: [
      { name: "Smart POS", desc: "Mobile-first payment acceptance", icon: CreditCard },
      { name: "Dynamic QR", desc: "Instant code generation", icon: QrCode },
      { name: "Live Analytics", desc: "Real-time sales tracking", icon: TrendingUp },
      { name: "Branch Manager", desc: "Multi-location control", icon: Building2 },
    ],
    stats: [
      { value: "<2s", label: "Transaction Time" },
      { value: "Zero", label: "Hardware Cost" },
      { value: "24/7", label: "Settlement" },
    ],
    banks: []
  },
];

const transactionGrowth = [
  { year: "2020", value: 28 },
  { year: "2021", value: 87 },
  { year: "2022", value: 154 },
  { year: "2023", value: 240 },
  { year: "2024", value: 350 },
  { year: "2025", value: 500 },
];

const partnerBanks = ["Dashen Bank", "Wegagen Bank", "Abay Bank", "Enat Bank", "Siinqee Bank", "Hijra Bank", "OIB"];

export default function Products() {
  const [activeTab, setActiveTab] = useState(products[0].id);
  const activeProduct = products.find(p => p.id === activeTab) || products[0];

  return (
    <section id="products" className="py-32 bg-neutral-50 relative overflow-hidden">
      {/* Subtle Apple-style Mesh Gradient Background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-emerald-100/50 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header - Minimalist & Centered */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight mb-6">
              Engineered for <span className="text-emerald-600">Scale</span>
            </h2>
            <p className="text-xl text-neutral-500 max-w-2xl mx-auto font-light leading-relaxed">
              Our product suite drives digital transformation across financial, educational, and commercial sectors.
            </p>
          </motion.div>
        </div>

        {/* Product Navigation - Segmented Control Style */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-white p-1.5 rounded-2xl shadow-sm border border-neutral-200/60 backdrop-blur-xl">
            {products.map((product) => (
              <button
                key={product.id}
                onClick={() => setActiveTab(product.id)}
                className={`relative px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeTab === product.id
                    ? "text-neutral-900 shadow-sm"
                    : "text-neutral-500 hover:text-neutral-700"
                }`}
              >
                {activeTab === product.id && (
                  <motion.div
                    layoutId="active-product-tab"
                    className="absolute inset-0 bg-neutral-100 rounded-xl"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <product.icon size={16} />
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
          >
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
              {/* Left: Product Hero Card */}
              <div className="lg:col-span-7">
                <div className="bg-white rounded-4xl p-10 border border-neutral-200 shadow-xl shadow-neutral-100/50 h-full flex flex-col justify-between relative overflow-hidden group">
                  {/* Glass Effect Overlay */}
                  <div className={`absolute inset-0 bg-linear-to-br ${activeProduct.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`p-3 rounded-2xl bg-neutral-50 ${activeProduct.accent}`}>
                        <activeProduct.icon size={32} strokeWidth={1.5} />
                      </div>
                      <span className="text-sm font-semibold tracking-wider text-neutral-400 uppercase">Enterprise Solution</span>
                    </div>
                    
                    <h3 className="text-4xl font-bold text-neutral-900 mb-3 tracking-tight">
                      {activeProduct.tagline}
                    </h3>
                    <p className="text-lg text-neutral-600 leading-relaxed mb-10 font-light">
                      {activeProduct.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {activeProduct.modules.map((mod, i) => (
                        <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-neutral-50/50 border border-neutral-100 hover:bg-white hover:shadow-md hover:border-neutral-200 transition-all duration-300">
                          <mod.icon size={20} className={`mt-0.5 ${activeProduct.accent}`} />
                          <div>
                            <h4 className="font-semibold text-neutral-900 text-sm">{mod.name}</h4>
                            <p className="text-xs text-neutral-500 mt-0.5">{mod.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="relative z-10 mt-10 pt-8 border-t border-neutral-100 flex items-center justify-between">
                    <div className="flex gap-8">
                      {activeProduct.stats.map((stat, i) => (
                        <div key={i}>
                          <div className="text-2xl font-bold text-neutral-900 tracking-tight">{stat.value}</div>
                          <div className="text-xs text-neutral-500 font-medium uppercase tracking-wide">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Feature/Data Cards */}
              <div className="lg:col-span-5 space-y-8">
                {/* Feature Highlight */}
                <div className="bg-neutral-900 rounded-4xl p-10 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-[80px]" />
                  
                  <div className="relative z-10">
                    <LayoutGrid className="text-emerald-400 mb-6" size={32} />
                    <h4 className="text-2xl font-bold mb-4">Modular Architecture</h4>
                    <p className="text-neutral-400 leading-relaxed mb-8">
                      Built on microservices for unlimited scalability. Add new modules as your business grows without disrupting core operations.
                    </p>
                    <button className="flex items-center gap-2 text-sm font-semibold text-white hover:text-emerald-400 transition-colors">
                      View Architecture <ArrowRight size={16} />
                    </button>
                  </div>
                </div>

                {/* Dynamic Content based on Product */}
                {activeProduct.id === "unicash" ? (
                  <div className="bg-white rounded-4xl p-8 border border-neutral-200 shadow-lg shadow-neutral-100/50">
                    <div className="flex items-center justify-between mb-6">
                      <h4 className="font-bold text-neutral-900">Growth Trajectory</h4>
                      <TrendingUp size={20} className="text-emerald-600" />
                    </div>
                    <div className="flex items-end justify-between gap-2 h-32">
                      {transactionGrowth.map((d, i) => (
                        <div key={i} className="flex-1 flex flex-col justify-end gap-2 group">
                          <div 
                            className="w-full bg-neutral-100 rounded-t-lg group-hover:bg-emerald-500 transition-colors duration-500 relative"
                            style={{ height: `${(d.value / 500) * 100}%` }}
                          >
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold text-neutral-900 opacity-0 group-hover:opacity-100 transition-opacity">
                              {d.value}k
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-neutral-400 font-medium">
                      <span>2020</span>
                      <span>2025</span>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white rounded-4xl p-8 border border-neutral-200 shadow-lg shadow-neutral-100/50 flex flex-col justify-center h-[240px]">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-neutral-50 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Shield className="text-emerald-600" size={32} />
                      </div>
                      <h4 className="font-bold text-neutral-900 mb-2">Bank-Grade Security</h4>
                      <p className="text-sm text-neutral-500 max-w-xs mx-auto">
                        End-to-end encryption and compliance with international financial security standards.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Partner Banks Strip (Global) */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-16 pt-12 border-t border-neutral-200 overflow-hidden"
            >
              <p className="text-center text-sm font-medium text-neutral-400 uppercase tracking-widest mb-8">Trusted by Leading Financial Institutions</p>
              
              <div className="relative flex overflow-x-hidden group">
                <div className="flex animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
                  {[...partnerBanks, ...partnerBanks, ...partnerBanks].map((bank, index) => (
                    <div key={`${bank}-${index}`} className="mx-8 flex items-center">
                      <span className="text-xl font-bold text-neutral-400 hover:text-neutral-800 transition-colors duration-300 cursor-default">
                        {bank}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap group-hover:[animation-play-state:paused]">
                  {[...partnerBanks, ...partnerBanks, ...partnerBanks].map((bank, index) => (
                    <div key={`${bank}-${index}-duplicate`} className="mx-8 flex items-center">
                      <span className="text-xl font-bold text-neutral-400 hover:text-neutral-800 transition-colors duration-300 cursor-default">
                        {bank}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
