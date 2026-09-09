"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Server, 
  Database, 
  ShieldCheck, 
  Cpu, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  Phone,
  HardDrive,
  Award,
  Users,
  Settings,
  Activity,
  FileCheck
} from "lucide-react";
import { getPartnerLogo } from "@/components/PartnerLogos";

export default function SystemEngineeringPage() {
  const servicePillars = [
    {
      icon: Database,
      title: "Enterprise Core Database & Middleware",
      desc: "Comprehensive installation, configuration, and performance tuning for Oracle Enterprise Database, WebLogic Application Servers, and Real Application Clusters (RAC)."
    },
    {
      icon: Server,
      title: "Data Center Infrastructure & Compute",
      desc: "Turnkey hardware provisioning, rack integration, structured networking, and high-performance server deployments engineered with IBM, Lenovo, and Oracle."
    },
    {
      icon: HardDrive,
      title: "Storage Solutions & Disaster Recovery",
      desc: "High-availability SAN/NAS enterprise storage architectures, automated snapshot replication, and mission-critical Disaster Recovery (DR) data center failover systems."
    },
    {
      icon: Activity,
      title: "Year-on-Year SLA Maintenance",
      desc: "Continuous proactive monitoring, preventative maintenance, critical patch deployment, and guaranteed 15-minute emergency response SLAs for commercial banks."
    },
    {
      icon: Settings,
      title: "Virtualization & Hyper-Converged Infrastructure",
      desc: "Enterprise hyper-convergence with Oracle Linux Virtualization Manager (OLVM), Nutanix, and Red Hat Enterprise Virtualization for banking workloads."
    },
    {
      icon: FileCheck,
      title: "Infrastructure Audit, Commissioning & Verification",
      desc: "Independent technical verification, capacity audit, stress testing, and regulatory compliance benchmarking for third-party or legacy ICT implementations."
    }
  ];

  const openDemoModal = (product: string) => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-demo-modal", { detail: { intent: "expert", product } }));
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 overflow-hidden bg-primary-950 text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-secondary-300 text-xs font-bold uppercase tracking-wider mb-6">
              <Server size={14} className="text-secondary-400" />
              <span>Infrastructure & Mission-Critical Systems</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white mb-6 leading-[1.1]">
              System Engineering & <br />
              <span className="text-secondary-400">Core ICT Infrastructure</span>
            </h1>

            <p className="text-lg text-blue-100 leading-relaxed font-light mb-8 max-w-2xl">
              Powering Ethiopia&apos;s most demanding banking and enterprise operations with certified hardware, Oracle databases, hyper-converged virtualization, and year-on-year SLA contracts.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => openDemoModal("system-engineering")}
                className="px-8 py-4 bg-secondary-400 hover:bg-secondary-300 text-primary-950 font-bold rounded-xl shadow-lg transition-all flex items-center gap-2 text-sm cursor-pointer"
              >
                <span>Talk to an Infrastructure Architect</span>
                <ArrowRight size={16} />
              </button>

              <Link
                href="/case-studies"
                className="px-7 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all flex items-center gap-2 text-sm"
              >
                <span>View EthSwitch Migration Story</span>
              </Link>
            </div>
          </div>

          {/* Key Numbers */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-10 border-t border-white/10">
            <div>
              <div className="text-3xl font-bold text-secondary-300 font-display">35+</div>
              <div className="text-xs text-blue-200 mt-1 uppercase tracking-wider">Certified Engineers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary-300 font-display">80+</div>
              <div className="text-xs text-blue-200 mt-1 uppercase tracking-wider">Enterprise Implementations</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary-300 font-display">10+</div>
              <div className="text-xs text-blue-200 mt-1 uppercase tracking-wider">Active Bank SLAs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary-300 font-display">2011</div>
              <div className="text-xs text-blue-200 mt-1 uppercase tracking-wider">15+ Years Track Record</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary-600 font-bold text-xs uppercase tracking-wider block mb-3">
              Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 font-display">
              End-to-End System Engineering Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicePillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white rounded-3xl p-8 border border-neutral-200 hover:border-primary-300 hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center mb-6">
                    <pillar.icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-3 font-display">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center gap-2 text-xs font-semibold text-primary-600">
                  <CheckCircle2 size={14} />
                  <span>SLA Covered</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Validation */}
      <section className="py-16 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-wider text-neutral-400 text-center mb-8">
            Hardware & Systems Supplied Hand-in-Hand with Global Alliances
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
            {["Oracle", "IBM", "Lenovo", "Nutanix", "RedHat", "SUSE"].map((p) => (
              <div key={p} className="h-16 rounded-2xl bg-neutral-50 border border-neutral-200 flex items-center justify-center p-3 shadow-xs">
                {getPartnerLogo(p, "h-7 w-auto max-w-[100px] object-contain")}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-(--steel-blue) text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold font-display mb-4">
            Protect Your Critical Operations with ACT SLAs
          </h2>
          <p className="text-blue-100 text-sm mb-8 leading-relaxed">
            From emergency recovery drills to continuous 24/7 telemetry and hardware maintenance, ensure uninterrupted operations for your enterprise.
          </p>
          <button
            type="button"
            onClick={() => openDemoModal("system-engineering")}
            className="px-8 py-4 bg-secondary-400 hover:bg-secondary-300 text-primary-950 font-bold rounded-xl shadow-lg transition-all text-sm cursor-pointer"
          >
            Inquire About Infrastructure SLA
          </button>
        </div>
      </section>
    </div>
  );
}
