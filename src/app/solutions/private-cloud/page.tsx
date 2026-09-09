"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Cloud, 
  Server, 
  ShieldCheck, 
  Cpu, 
  Layers, 
  Database, 
  Lock, 
  CheckCircle2, 
  ArrowRight, 
  Download, 
  Phone,
  HardDrive,
  Activity,
  Zap,
  Globe2,
  Terminal,
  FileCheck2,
  Building2
} from "lucide-react";
import { getPartnerLogo } from "@/components/PartnerLogos";

export default function PrivateCloudPage() {
  const architectures = [
    {
      layer: "04. Cloud Management & Self-Service",
      tech: "OpenStack Horizon / Custom Portal / API Gateway",
      desc: "Role-based access control (RBAC), multi-tenant quota management, automated billing, and RESTful automation APIs for DevOps teams.",
      icon: Terminal,
      color: "bg-blue-50 text-blue-600 border-blue-200"
    },
    {
      layer: "03. Orchestration & Virtualization",
      tech: "OpenStack Nova, Neutron (SDN), Glance & Keystone",
      desc: "Kernel-based Virtual Machine (KVM) hypervisors, software-defined networking with micro-segmentation, and zero-trust identity authentication.",
      icon: Cpu,
      color: "bg-indigo-50 text-indigo-600 border-indigo-200"
    },
    {
      layer: "02. Distributed Enterprise Storage",
      tech: "Ceph Storage Cluster, Cinder (Block) & Swift (Object)",
      desc: "Software-defined distributed storage fabric providing triple-replication, self-healing, snapshot management, and NVMe-tier performance.",
      icon: HardDrive,
      color: "bg-emerald-50 text-emerald-600 border-emerald-200"
    },
    {
      layer: "01. Hyper-Converged Physical Tier",
      tech: "Lenovo ThinkSystem / Nutanix HCI / Oracle Certified Nodes",
      desc: "Redundant physical compute, dual 25GbE top-of-rack switches, hardware security modules (HSM), and hot-swappable enterprise SAN fabrics.",
      icon: Server,
      color: "bg-amber-50 text-amber-600 border-amber-200"
    }
  ];

  const technicalPillars = [
    {
      icon: ShieldCheck,
      title: "100% Ethiopian Data Sovereignty",
      desc: "Guarantees that sensitive banking records, government data, and citizen identities remain strictly within Ethiopia's physical borders in accordance with National Bank of Ethiopia (NBE) and INSA regulatory directives."
    },
    {
      icon: Activity,
      title: "99.999% High Availability SLAs",
      desc: "Engineered with dual-datacenter disaster recovery active-active failover, N+2 component redundancy, automated live VM migration, and sub-minute RTO targets."
    },
    {
      icon: Lock,
      title: "Zero-Trust Military-Grade Security",
      desc: "Hardware Root of Trust, AES-256 encryption at rest and in transit, dynamic micro-segmentation, PCI-DSS compliance readiness, and continuous threat telemetry."
    },
    {
      icon: Zap,
      title: "Ultra-Low Latency Performance",
      desc: "Local on-soil peering delivers < 5ms network latency for core banking transactions, high-frequency payment switches, and real-time ledger synchronization."
    },
    {
      icon: Database,
      title: "Oracle & Mission-Critical Workload Tuning",
      desc: "Certified bare-metal and virtualized configurations tuned specifically for Oracle Enterprise Database, FlexCube, Temenos T24, and Finacle core systems."
    },
    {
      icon: Globe2,
      title: "Cost Predictability & Zero Egress Fees",
      desc: "Eliminates variable FX expenses and unpredictable public cloud data egress costs with transparent local capital and operational expense models."
    }
  ];

  const openDemoModal = (product: string) => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-demo-modal", { detail: { intent: "demo", product } }));
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 overflow-hidden bg-radial from-primary-950 via-primary-900 to-primary-950 text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none" />
        <div className="absolute top-1/4 -right-40 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-secondary-300 text-xs font-bold uppercase tracking-wider mb-6">
              <Cloud size={14} className="text-secondary-400" />
              <span>Enterprise Private Cloud Architecture</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white mb-6 leading-[1.1]">
              Sovereign, High-Performance <br />
              <span className="text-secondary-400">Private Cloud for Ethiopia</span>
            </h1>

            <p className="text-lg text-blue-100 leading-relaxed font-light mb-8 max-w-2xl">
              Atlas Computer Technology PLC is the trusted national implementation partner for OpenStack and Nutanix private cloud architectures. Delivering certified on-premise cloud environments for leading commercial banks and critical government institutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => openDemoModal("private-cloud")}
                className="px-8 py-4 bg-secondary-400 hover:bg-secondary-300 text-primary-950 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2 text-sm cursor-pointer"
              >
                <span>Request Architecture Review</span>
                <ArrowRight size={16} />
              </button>

              <Link
                href="/resources/downloads"
                className="px-7 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all flex items-center gap-2 text-sm"
              >
                <Download size={16} />
                <span>Download Technical Whitepaper</span>
              </Link>
            </div>
          </div>

          {/* Quick Technical Specs Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-10 border-t border-white/10 text-white">
            <div>
              <div className="text-3xl font-bold text-secondary-300 font-display">OpenStack</div>
              <div className="text-xs text-blue-200 mt-1 uppercase tracking-wider">Enterprise Reference Stack</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary-300 font-display">99.999%</div>
              <div className="text-xs text-blue-200 mt-1 uppercase tracking-wider">High Availability Architecture</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary-300 font-display">&lt; 5 ms</div>
              <div className="text-xs text-blue-200 mt-1 uppercase tracking-wider">Local On-Soil Latency</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary-300 font-display">PCI-DSS</div>
              <div className="text-xs text-blue-200 mt-1 uppercase tracking-wider">NBE & INSA Compliant</div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep-Dive Architecture Stack */}
      <section className="py-24 bg-neutral-50 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary-600 font-bold text-xs uppercase tracking-wider block mb-3">
              Full-Stack Engineering
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 font-display">
              OpenStack & Nutanix Architecture Stack
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base mt-3 leading-relaxed">
              We design every layer of your private cloud—from physical redundant computing and SAN/Ceph storage to virtualized networks and automated self-service portals.
            </p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {architectures.map((arch, i) => (
              <motion.div
                key={arch.layer}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-neutral-200 hover:border-primary-300 shadow-xs hover:shadow-md transition-all flex flex-col md:flex-row gap-6 items-start md:items-center justify-between"
              >
                <div className="flex gap-4 items-start">
                  <div className={`p-3.5 rounded-xl border ${arch.color} shrink-0`}>
                    <arch.icon size={24} />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-primary-600 uppercase tracking-wider block mb-1">
                      {arch.layer}
                    </span>
                    <h3 className="text-lg font-bold text-neutral-900 mb-1 font-display">
                      {arch.tech}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-xl">
                      {arch.desc}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 pl-14 md:pl-0">
                  <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-neutral-100 text-neutral-700">
                    Hardened Tier
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 Key Architectural Pillars */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary-600 font-bold text-xs uppercase tracking-wider block mb-3">
              Institutional Benefits
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 font-display">
              Why Financial & Government Leaders Choose ACT Private Cloud
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technicalPillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="p-8 rounded-3xl bg-neutral-50 border border-neutral-200/80 hover:border-primary-300 hover:bg-white hover:shadow-xl transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-primary-100 text-primary-700 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                    <pillar.icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-3 font-display">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-neutral-200/60 flex items-center gap-2 text-xs font-semibold text-primary-600">
                  <CheckCircle2 size={14} />
                  <span>Enterprise Ready</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Alliance Validation Bar */}
      <section className="py-16 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-500">
              Validated on World-Class Hardware & Hypervisor Ecosystems
            </h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center justify-center">
            {["Oracle", "IBM", "Lenovo", "Nutanix", "RedHat", "SUSE"].map((partner) => (
              <div key={partner} className="h-16 rounded-2xl bg-white border border-neutral-200 flex items-center justify-center p-3 shadow-xs">
                {getPartnerLogo(partner, "h-7 w-auto max-w-[100px] object-contain")}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Technical CTA Banner */}
      <section className="py-20 bg-primary-900 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-secondary-300 text-xs font-bold mb-4">
            <FileCheck2 size={14} />
            <span>Proven In Ethiopian Banking</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display mb-4">
            Design Your Institution&apos;s Private Cloud Roadmap
          </h2>
          <p className="text-blue-100 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-8">
            Consult with our certified OpenStack and Nutanix cloud architects to benchmark your workloads, plan capacity, and ensure zero-downtime migration.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={() => openDemoModal("private-cloud")}
              className="px-8 py-4 bg-secondary-400 hover:bg-secondary-300 text-primary-950 font-bold rounded-xl shadow-lg transition-all text-sm cursor-pointer"
            >
              Book Private Cloud Consultation
            </button>
            <a
              href="tel:+251115329139"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all text-sm flex items-center gap-2"
            >
              <Phone size={15} />
              <span>Call +25111-5-32-91-39</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
