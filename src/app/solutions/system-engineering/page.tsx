"use client";

import Link from "next/link";
import { 
  Server, 
  Cpu, 
  HardDrive, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Network,
  ChevronRight,
  Terminal,
  Activity
} from "lucide-react";

export default function SystemEngineeringPage() {
  const capabilities = [
    {
      icon: Server,
      title: "Datacenter Architecture & Virtualization",
      desc: "Designing and deploying enterprise VMware, KVM, and Proxmox virtualization clusters with high-availability compute pools and live migration."
    },
    {
      icon: HardDrive,
      title: "Storage Systems & SAN Infrastructure",
      desc: "High-throughput Ceph, NetApp, and SAN/NAS storage arrays configured for multi-petabyte capacity, zero-data-loss snapshots, and real-time replication."
    },
    {
      icon: Network,
      title: "Core Enterprise Networking & BGP",
      desc: "Software-Defined Networking (SDN), BGP routing, Cisco/Arista fabric switches, and micro-segmented firewalls engineered for 99.999% uptime."
    },
    {
      icon: ShieldCheck,
      title: "Disaster Recovery & Business Continuity",
      desc: "Multi-region DR site replication, automated RPO/RTO failover orchestration, and continuous backup integrity validation."
    },
    {
      icon: Cpu,
      title: "Hardware Lifecycle & Vendor Management",
      desc: "Tier-1 hardware procurement, rack-and-stack installation, firmware maintenance, and OEM warranty management with HP, Dell, and IBM."
    },
    {
      icon: Terminal,
      title: "Kernel Tuning & Linux Hardening",
      desc: "Deep Linux OS performance tuning, CIS benchmark compliance hardening, and kernel-level parameter optimization for banking workloads."
    }
  ];

  const metrics = [
    { value: "99.999%", label: "System Availability" },
    { value: "15+ Yrs", label: "Datacenter Engineering" },
    { value: "50+ PB", label: "Storage Managed" },
    { value: "Tier III/IV", label: "Architected Standards" },
  ];

  const openDemoModal = (product: string) => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-demo-modal", { detail: { intent: "expert", product } }));
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
            <Link href="/solutions/private-cloud" className="hover:text-neutral-900 transition-colors">Solutions</Link>
            <ChevronRight className="w-3 h-3 text-neutral-400" />
            <span className="text-[#3e7da2] font-semibold">System Engineering</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white border border-neutral-200 shadow-xs text-neutral-700 text-xs font-mono mb-6">
                <Cpu className="w-3.5 h-3.5 text-[#3e7da2]" />
                <span>Enterprise Systems Architecture</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 mb-6 leading-tight">
                Mission-Critical Datacenter & System Engineering
              </h1>

              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-8 max-w-2xl">
                Building resilient server architectures, high-performance SAN storage arrays, and redundant networking fabrics for banks, telecommunications, and national infrastructure.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => openDemoModal("system-engineering")}
                  className="px-6 py-3.5 bg-neutral-900 hover:bg-neutral-800 text-white font-bold rounded shadow-sm transition-colors flex items-center gap-2 text-sm cursor-pointer"
                >
                  <span>Request Engineering Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <Link
                  href="/contact"
                  className="px-6 py-3.5 bg-white hover:bg-neutral-100 text-neutral-800 font-semibold rounded border border-neutral-300 transition-colors flex items-center gap-2 text-sm"
                >
                  <span>Talk with Infrastructure Specialist</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white border border-neutral-200 p-6 rounded shadow-sm">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-100">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-[#3e7da2]" />
                    <span className="text-xs font-mono uppercase text-neutral-500">Hardware Telemetry</span>
                  </div>
                  <span className="text-xs font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded font-semibold">Tier III Standard</span>
                </div>

                <div className="space-y-3">
                  {[
                    "Dual-Power Redundancy & SAN Fabric",
                    "Ceph & NetApp Multi-Petabyte Replication",
                    "Red Hat & Oracle Linux Kernel Parameter Optimization",
                    "Automated DR Failover < 15 Min RTO",
                    "OEM Hardware Warranty & 24/7 Parts SLA"
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

      {/* Core Capabilities */}
      <section className="py-20 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-[#3e7da2] font-mono text-xs uppercase tracking-wider block mb-2 font-bold">
              Engineering Disciplines
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
              Enterprise System Engineering Capabilities
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-3">
              Hardware-level precision, storage optimization, and high-availability systems tailored for demanding workloads.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="bg-white border border-neutral-200 p-8 rounded flex flex-col justify-between hover:border-neutral-300 transition-colors shadow-xs"
              >
                <div>
                  <div className="w-10 h-10 rounded bg-neutral-50 border border-neutral-200 text-[#3e7da2] flex items-center justify-center mb-6 shadow-xs">
                    <cap.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-neutral-900 mb-3">
                    {cap.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {cap.desc}
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
                Need to Audit or Architect Your Infrastructure?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Schedule a consultation with our senior systems architects to evaluate your server capacity, SAN storage throughput, and disaster recovery readiness.
              </p>
            </div>
            <div className="flex gap-4 shrink-0">
              <button
                type="button"
                onClick={() => openDemoModal("system-engineering")}
                className="px-6 py-3 bg-neutral-900 hover:bg-neutral-800 text-white font-bold rounded text-xs uppercase font-mono tracking-wider transition-colors cursor-pointer"
              >
                Schedule Architecture Review
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
