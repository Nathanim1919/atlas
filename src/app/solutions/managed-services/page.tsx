"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ShieldCheck, 
  Clock, 
  Activity, 
  Server, 
  Database, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  Headphones, 
  FileText,
  LifeBuoy
} from "lucide-react";

export default function ManagedServicesPage() {
  const slaTiers = [
    {
      name: "P1 - Critical Outage",
      response: "< 15 Minutes",
      resolution: "< 4 Hours",
      coverage: "24/7/365",
      desc: "Core banking switch down, complete database corruption, or mission-critical transaction outage.",
      badge: "bg-red-100 text-red-700 border-red-200"
    },
    {
      name: "P2 - High Priority",
      response: "< 30 Minutes",
      resolution: "< 8 Hours",
      coverage: "24/7/365",
      desc: "Severe degradation in secondary systems, payment module slowdown, or redundancy loss.",
      badge: "bg-amber-100 text-amber-700 border-amber-200"
    },
    {
      name: "P3 - Medium Priority",
      response: "< 2 Hours",
      resolution: "< 24 Hours",
      coverage: "Business Hours + Extended",
      desc: "Isolated component issues with established workarounds, non-critical database tuning.",
      badge: "bg-blue-100 text-blue-700 border-blue-200"
    },
    {
      name: "P4 - Inquiries & Upgrades",
      response: "< 4 Hours",
      resolution: "Scheduled Release",
      coverage: "Business Hours",
      desc: "Routine patches, minor configuration requests, capacity reporting, and advisory sessions.",
      badge: "bg-neutral-100 text-neutral-700 border-neutral-200"
    }
  ];

  const managedScopes = [
    { title: "Network & Security", desc: "Firewall management, micro-segmentation, VPN gateways, and intrusion prevention." },
    { title: "Enterprise Storage", desc: "SAN/NAS health monitoring, capacity thresholds, snapshot scheduling, and replication." },
    { title: "Enterprise Database", desc: "Oracle Database, SQL, PostgreSQL performance tuning, index rebuilding, and backup checks." },
    { title: "Application Servers", desc: "WebLogic, Tomcat, and microservices JVM heap optimization and log analysis." },
    { title: "Operating Systems", desc: "Red Hat Enterprise Linux, Oracle Linux, and SUSE security patch management." },
    { title: "Preventative Maintenance", desc: "Quarterly hardware health drills, firmware updates, and power redundancy validation." }
  ];

  const openDemoModal = (product: string) => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-demo-modal", { detail: { intent: "proposal", product } }));
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <section className="relative pt-28 pb-20 overflow-hidden bg-primary-950 text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-secondary-300 text-xs font-bold uppercase tracking-wider mb-6">
              <ShieldCheck size={14} className="text-secondary-400" />
              <span>24/7 Enterprise IT Operations</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white mb-6 leading-[1.1]">
              Managed Services & <br />
              <span className="text-secondary-400">Guaranteed SLAs</span>
            </h1>

            <p className="text-lg text-blue-100 leading-relaxed font-light mb-8 max-w-2xl">
              Focus on your core financial business while ACT&apos;s certified Network Operations Center (NOC) and system engineers maintain your infrastructure with transparent SLAs and 24/7 monitoring.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => openDemoModal("managed-services")}
                className="px-8 py-4 bg-secondary-400 hover:bg-secondary-300 text-primary-950 font-bold rounded-xl shadow-lg transition-all flex items-center gap-2 text-sm cursor-pointer"
              >
                <span>Request Custom SLA Proposal</span>
                <ArrowRight size={16} />
              </button>

              <Link
                href="/support"
                className="px-7 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all flex items-center gap-2 text-sm"
              >
                <LifeBuoy size={16} />
                <span>Open Support Ticket</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SLA Tiers Section */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary-600 font-bold text-xs uppercase tracking-wider block mb-3">
              Commitment Standards
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 font-display">
              Defined Service Level Commitments
            </h2>
            <p className="text-neutral-600 text-sm mt-3">
              Clear response and resolution windows backed by formal institutional contract agreements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {slaTiers.map((tier) => (
              <div key={tier.name} className="bg-white rounded-3xl p-6 border border-neutral-200 shadow-xs flex flex-col justify-between">
                <div>
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border mb-4 inline-block ${tier.badge}`}>
                    {tier.name}
                  </span>
                  <div className="space-y-2 mb-4">
                    <div>
                      <span className="text-xs text-neutral-500 block">Response Time:</span>
                      <span className="text-lg font-bold text-neutral-900">{tier.response}</span>
                    </div>
                    <div>
                      <span className="text-xs text-neutral-500 block">Resolution Target:</span>
                      <span className="text-sm font-semibold text-neutral-700">{tier.resolution}</span>
                    </div>
                    <div>
                      <span className="text-xs text-neutral-500 block">Coverage:</span>
                      <span className="text-xs font-medium text-neutral-600">{tier.coverage}</span>
                    </div>
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed border-t border-neutral-100 pt-3">
                    {tier.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Managed Scope Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary-600 font-bold text-xs uppercase tracking-wider block mb-3">
              Coverage Scope
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 font-display">
              What We Manage & Maintain
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {managedScopes.map((scope) => (
              <div key={scope.title} className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200">
                <CheckCircle2 size={20} className="text-primary-600 mb-3" />
                <h4 className="text-base font-bold text-neutral-900 mb-1 font-display">
                  {scope.title}
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {scope.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
