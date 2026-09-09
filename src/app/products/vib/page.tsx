"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Smartphone, 
  Globe, 
  Wifi, 
  Server, 
  Cpu, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Download, 
  Building2,
  Lock,
  Zap
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

  const openDemoModal = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-demo-modal", { detail: { intent: "demo", product: "vib" } }));
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <section className="relative pt-28 pb-20 overflow-hidden bg-primary-950 text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-secondary-300 text-xs font-bold uppercase tracking-wider mb-6">
              <Smartphone size={14} className="text-secondary-400" />
              <span>Omnichannel Digital Banking Suite</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white mb-6 leading-[1.1]">
              Virtual Integrated Banking <br />
              <span className="text-secondary-400">(VIB) Suite</span>
            </h1>

            <p className="text-lg text-blue-100 leading-relaxed font-light mb-8 max-w-2xl">
              An enterprise-grade, microservices-based omnichannel banking solution engineered to empower banks with unified web, mobile, USSD, and back-office services for millions of customers.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                onClick={openDemoModal}
                className="px-8 py-4 bg-secondary-400 hover:bg-secondary-300 text-primary-950 font-bold rounded-xl shadow-lg transition-all flex items-center gap-2 text-sm cursor-pointer"
              >
                <span>Request VIB Banking Demo</span>
                <ArrowRight size={16} />
              </button>

              <Link
                href="/case-studies"
                className="px-7 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all flex items-center gap-2 text-sm"
              >
                <span>See Wegagen & Siinqee Deployments</span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-10 border-t border-white/10">
            <div>
              <div className="text-3xl font-bold text-secondary-300 font-display">1M+</div>
              <div className="text-xs text-blue-200 mt-1 uppercase tracking-wider">Active Banking Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary-300 font-display">&lt; 50ms</div>
              <div className="text-xs text-blue-200 mt-1 uppercase tracking-wider">Transaction Latency</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary-300 font-display">Microservices</div>
              <div className="text-xs text-blue-200 mt-1 uppercase tracking-wider">Modular Architecture</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary-300 font-display">PCI-DSS</div>
              <div className="text-xs text-blue-200 mt-1 uppercase tracking-wider">Certified Core Security</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary-600 font-bold text-xs uppercase tracking-wider block mb-3">
              Omnichannel Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 font-display">
              Four Unified Banking Channels
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {channels.map((channel) => (
              <div key={channel.title} className="p-8 rounded-3xl bg-white border border-neutral-200 shadow-xs flex gap-5">
                <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center shrink-0">
                  <channel.icon size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2 font-display">
                    {channel.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {channel.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
