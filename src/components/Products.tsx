"use client";

import { motion } from "framer-motion";
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
  Users,
  CreditCard,
  ArrowRight,
  CheckCircle2,
  Globe,
  TrendingUp
} from "lucide-react";

const products = [
  {
    id: "unicash",
    name: "Uni-Cash",
    tagline: "Integrated Payment Platform",
    description: "Atlas's Pay @Bank solution providing a reliable and secure communication channel between enterprises and their banks for sending payment requests and getting status information on payments.",
    icon: Banknote,
    color: "from-emerald-500 to-teal-600",
    features: [
      "Real-time payment processing",
      "Multi-bank integration",
      "Automated bill management",
      "Secure communication channel",
      "Customer payment notifications",
      "Comprehensive reporting",
    ],
    modules: [
      { name: "Uni-Cash Bank", desc: "Secure platform for financial institutions to facilitate seamless payments", icon: Building2 },
      { name: "Uni-Cash School", desc: "Streamlined fee collection and student data management for schools", icon: GraduationCap },
      { name: "Uni-Cash College", desc: "Advanced fee management for complex college financial needs", icon: GraduationCap },
      { name: "Uni-Cash TVET", desc: "Specialized platform for TVET institutions' financial records", icon: GraduationCap },
      { name: "Uni-Cash Utility", desc: "Versatile utility bill payments with automated tracking", icon: Zap },
      { name: "Uni-Cash Hospitality", desc: "Billing and payment solution for hotels and restaurants", icon: Hotel },
    ],
    stats: [
      { value: "500K+", label: "Monthly Transactions" },
      { value: "10+", label: "Partner Banks" },
      { value: "99.9%", label: "Uptime" },
    ],
    banks: ["Dashen Bank", "Wegagen Bank", "Abay Bank", "Enat Bank", "Siinqee Bank", "Hijra Bank", "OIB"]
  },
  {
    id: "vib",
    name: "Virtual Integrated Banking (VIB)",
    tagline: "Enterprise Banking Solutions",
    description: "An enterprise-grade solution designed with modern micro-service architecture for scalability, security, and performance, providing channel banking service to millions of customers.",
    icon: Smartphone,
    color: "from-violet-500 to-purple-600",
    features: [
      "Internet Banking Portal",
      "Mobile Banking App",
      "USSD Banking Services",
      "Back-office Systems",
      "Multi-channel Integration",
      "Security & Compliance",
    ],
    modules: [
      { name: "Internet Banking", desc: "Full-featured web portal for comprehensive banking services", icon: Globe },
      { name: "Mobile Banking", desc: "Native mobile apps for iOS and Android platforms", icon: Smartphone },
      { name: "USSD Banking", desc: "Accessible banking services via USSD for all phone types", icon: Smartphone },
      { name: "Back-office Portal", desc: "Admin dashboard for complete system management", icon: Layers },
      { name: "API Gateway", desc: "Secure API integration with third-party services", icon: Shield },
      { name: "Analytics Dashboard", desc: "Real-time insights and reporting for decision making", icon: BarChart3 },
    ],
    stats: [
      { value: "1M+", label: "Banking Customers" },
      { value: "5+", label: "Bank Deployments" },
      { value: "24/7", label: "Availability" },
    ],
    banks: []
  },
  {
    id: "merchant",
    name: "Merchant Application",
    tagline: "Digital Payment Solution",
    description: "A comprehensive digital payment and financial management solution designed to streamline transactions, improve efficiency, and enhance customer experience for merchants.",
    icon: QrCode,
    color: "from-orange-500 to-amber-600",
    features: [
      "Seamless Payment Acceptance",
      "Dynamic QR Code Generation",
      "Real-Time Payment Tracking",
      "Multi-Branch Management",
      "Mobile & Web Access",
      "Scalable Architecture",
    ],
    modules: [
      { name: "Payment Acceptance", desc: "Receive payments directly through mobile banking apps", icon: CreditCard },
      { name: "QR Code Payments", desc: "Generate and share dynamic QR codes for instant payments", icon: QrCode },
      { name: "Real-time Tracking", desc: "Monitor received and declined payments instantly", icon: TrendingUp },
      { name: "Multi-Sales Point", desc: "Register multiple branches under one merchant account", icon: Building2 },
      { name: "Merchant Portal", desc: "Web-based management for payments and reports", icon: Globe },
      { name: "Mobile App", desc: "Dedicated mobile app with all core functionalities", icon: Smartphone },
    ],
    stats: [
      { value: "Fast", label: "Transaction Speed" },
      { value: "Secure", label: "Payments" },
      { value: "Multi-Bank", label: "Support" },
    ],
    banks: []
  },
];

const transactionGrowth = [
  { year: "2019", value: 2500 },
  { year: "2020", value: 28000 },
  { year: "2021", value: 87000 },
  { year: "2022", value: 154000 },
  { year: "2023", value: 240000 },
  { year: "2024", value: 350000 },
  { year: "2025", value: 500000 },
];

export default function Products() {
  const [activeProduct, setActiveProduct] = useState("unicash");

  const activeProductData = products.find(p => p.id === activeProduct);

  return (
    <section id="products" className="py-24 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-4">
            Our Products
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-neutral-900 mb-6">
            Innovative <span className="gradient-text">Software Products</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Enterprise-grade solutions designed for performance, security, and scalability to transform your business operations.
          </p>
        </motion.div>

        {/* Product Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {products.map((product) => (
            <motion.button
              key={product.id}
              onClick={() => setActiveProduct(product.id)}
              className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-medium transition-all ${
                activeProduct === product.id
                  ? `bg-gradient-to-r ${product.color} text-white shadow-xl`
                  : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <product.icon size={24} />
              <span>{product.name}</span>
            </motion.button>
          ))}
        </div>

        {/* Active Product Detail */}
        {activeProductData && (
          <motion.div
            key={activeProductData.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              {/* Product Info */}
              <div>
                <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-gradient-to-r ${activeProductData.color} text-white mb-6`}>
                  <activeProductData.icon size={24} />
                  <span className="font-semibold">{activeProductData.name}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold font-display text-neutral-900 mb-4">
                  {activeProductData.tagline}
                </h3>
                <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                  {activeProductData.description}
                </p>

                {/* Features List */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {activeProductData.features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle2 className="text-primary-500 flex-shrink-0" size={18} />
                      <span className="text-neutral-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex gap-6">
                  {activeProductData.stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold font-display text-primary-600">{stat.value}</div>
                      <div className="text-sm text-neutral-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Visual */}
              <div className="relative">
                <div className={`rounded-3xl bg-gradient-to-br ${activeProductData.color} p-1`}>
                  <div className="bg-white rounded-3xl p-8">
                    <div className="grid grid-cols-2 gap-4">
                      {activeProductData.modules.map((module, index) => (
                        <motion.div
                          key={module.name}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-primary-300 hover:shadow-md transition-all"
                        >
                          <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mb-3">
                            <module.icon className="text-primary-600" size={20} />
                          </div>
                          <h4 className="font-semibold text-neutral-900 text-sm mb-1">{module.name}</h4>
                          <p className="text-neutral-500 text-xs">{module.desc}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 w-20 h-20 bg-secondary-400 rounded-2xl opacity-20"
                />
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent-400 rounded-2xl opacity-20"
                />
              </div>
            </div>

            {/* Partner Banks (for Uni-Cash) */}
            {activeProductData.banks.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="bg-neutral-50 rounded-3xl p-8"
              >
                <h4 className="text-xl font-semibold font-display text-neutral-900 mb-6 text-center">
                  Banks Working with {activeProductData.name}
                </h4>
                <div className="flex flex-wrap justify-center gap-4">
                  {activeProductData.banks.map((bank) => (
                    <div
                      key={bank}
                      className="px-6 py-3 bg-white rounded-xl border border-neutral-200 text-neutral-700 font-medium hover:border-primary-300 hover:shadow-md transition-all"
                    >
                      {bank}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        )}

        {/* Transaction Growth Chart (for Uni-Cash) */}
        {activeProduct === "unicash" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 bg-gradient-to-br from-primary-900 to-primary-800 rounded-3xl p-8 md:p-12 text-white"
          >
            <h4 className="text-2xl font-bold font-display mb-2">Transaction Growth</h4>
            <p className="text-primary-200 mb-8">Processed bills per month over the years</p>
            
            <div className="flex items-end justify-between gap-2 h-64">
              {transactionGrowth.map((data, index) => {
                const maxValue = Math.max(...transactionGrowth.map(d => d.value));
                const heightPercent = (data.value / maxValue) * 100;
                
                return (
                  <motion.div
                    key={data.year}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${heightPercent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="flex-1 flex flex-col items-center gap-2"
                  >
                    <div className="text-xs text-primary-200 font-medium">
                      {data.value >= 1000 ? `${(data.value / 1000).toFixed(0)}K` : data.value}
                    </div>
                    <div 
                      className="w-full bg-gradient-to-t from-accent-500 to-accent-400 rounded-t-lg"
                      style={{ height: '100%' }}
                    />
                    <div className="text-sm font-medium">{data.year}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* P2P Feature */}
        {activeProduct === "unicash" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 grid md:grid-cols-2 gap-8 items-center"
          >
            <div>
              <span className="inline-block px-4 py-2 bg-accent-100 text-accent-600 rounded-full text-sm font-semibold mb-4">
                New Feature
              </span>
              <h4 className="text-3xl font-bold font-display text-neutral-900 mb-4">
                Uni-Cash P2P: Pay From Any Bank
              </h4>
              <p className="text-lg text-neutral-600 mb-6">
                Uni-Cash P2P enables seamless payments from any bank, allowing users to pay instantly. It ensures secure, fast, and convenient transactions without intermediaries.
              </p>
              <ul className="space-y-3">
                {[
                  "Seamless cross-bank payments",
                  "Real-time transaction processing",
                  "Secure and encrypted transfers",
                  "Pay installments from any bank"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="text-accent-500" size={20} />
                    <span className="text-neutral-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-accent-100 to-primary-100 rounded-3xl p-8 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-accent-500 to-primary-500 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                    <Banknote className="text-white" size={48} />
                  </div>
                  <h5 className="text-2xl font-bold font-display text-neutral-900">P2P</h5>
                  <p className="text-neutral-600">Pay From Any Bank</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}


