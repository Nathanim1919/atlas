"use client";

import Link from "next/link";
import { 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  LifeBuoy,
  ChevronRight,
  Headphones,
  Clock,
  Activity,
  Server,
  Database
} from "lucide-react";

export default function ManagedServicesPage() {
  const slaTiers = [
    {
      name: "P1 - Critical Outage",
      response: "< 15 Minutes",
      resolution: "< 4 Hours",
      coverage: "24/7/365",
      desc: "Core banking switch down, complete database corruption, or mission-critical transaction outage.",
      badge: "bg-red-50 text-red-700 border-red-200"
    },
    {
      name: "P2 - High Priority",
      response: "< 30 Minutes",
      resolution: "< 8 Hours",
      coverage: "24/7/365",
      desc: "Severe degradation in secondary systems, payment module slowdown, or redundancy loss.",
      badge: "bg-amber-50 text-amber-800 border-amber-200"
    },
    {
      name: "P3 - Medium Priority",
      response: "< 2 Hours",
      resolution: "< 24 Hours",
      coverage: "Business Hours + Extended",
      desc: "Isolated component issues with established workarounds, non-critical database tuning.",
      badge: "bg-sky-50 text-sky-800 border-sky-200"
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
    { icon: Server, title: "Network & Security Operations", desc: "Next-gen firewall management, micro-segmentation, zero-trust VPN gateways, and intrusion prevention." },
    { icon: Database, title: "Enterprise Storage & SAN", desc: "SAN/NAS health monitoring, capacity forecasting, automated snapshot validation, and multi-datacenter replication." },
    { icon: Activity, title: "Database Administration & Tuning", desc: "Oracle, SQL, PostgreSQL performance optimization, index rebuilding, query tuning, and automated point-in-time recovery." },
    { icon: Clock, title: "Application & Middleware Servers", desc: "WebLogic, WildFly, Tomcat, and microservices JVM heap optimization, memory leak diagnostics, and cluster failover." },
    { icon: ShieldCheck, title: "Operating System Hardening", desc: "Red Hat Enterprise Linux, Oracle Linux, and SUSE kernel updates, CVE patch management, and SELinux enforcement." },
    { icon: LifeBuoy, title: "Preventative Maintenance Drills", desc: "Quarterly hardware failover drills, firmware updates, UPS/generator load tests, and DR readiness verification." }
  ];

  const metrics = [
    { value: "15-Min", label: "P1 Incident Response SLA" },
    { value: "24/7/365", label: "Certified NOC Dispatch" },
    { value: "99.999%", label: "Guaranteed Uptime Contract" },
    { value: "Tier III", label: "Datacenter Operations Standard" },
  ];

  const openDemoModal = (product: string) => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-demo-modal", { detail: { intent: "proposal", product } }));
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
            <span className="text-[#3e7da2] font-semibold">Managed Services & SLAs</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white border border-neutral-200 shadow-xs text-neutral-700 text-xs font-mono mb-6">
                <Headphones className="w-3.5 h-3.5 text-[#3e7da2]" />
                <span>24/7 Enterprise IT Operations</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 mb-6 leading-tight">
                Managed Infrastructure Services & Contractual SLAs
              </h1>

              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-8 max-w-2xl">
                Focus on core financial products while ACT&apos;s 24/7 Network Operations Center (NOC) and certified system engineers manage, monitor, and maintain your mission-critical IT environment.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => openDemoModal("managed-services")}
                  className="px-6 py-3.5 bg-neutral-900 hover:bg-neutral-800 text-white font-bold rounded shadow-sm transition-colors flex items-center gap-2 text-sm cursor-pointer"
                >
                  <span>Request Managed Service SLA Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <Link
                  href="/support"
                  className="px-6 py-3.5 bg-white hover:bg-neutral-100 text-neutral-800 font-semibold rounded border border-neutral-300 transition-colors flex items-center gap-2 text-sm"
                >
                  <LifeBuoy className="w-4 h-4 text-[#3e7da2]" />
                  <span>Access Support Portal</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white border border-neutral-200 p-6 rounded shadow-sm">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-100">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-[#3e7da2]" />
                    <span className="text-xs font-mono uppercase text-neutral-500">NOC Live Telemetry</span>
                  </div>
                  <span className="text-xs font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded font-semibold">All Systems Green</span>
                </div>

                <div className="space-y-3">
                  {[
                    "Core Banking Switch SLA Monitoring",
                    "24/7/365 On-Call Senior Engineer Roster",
                    "Proactive Database Memory & Disk Threshold Alarming",
                    "Zero-Downtime Patch & Security Vulnerability Rollouts",
                    "Quarterly Disaster Recovery Simulation Drills"
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

      {/* SLA Matrix Section */}
      <section className="py-20 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-[#3e7da2] font-mono text-xs uppercase tracking-wider block mb-2 font-bold">
              Contractual Guarantees
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
              Service Level Commitment Matrix
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-3">
              Rigorous, contractually binding response and resolution windows tailored for enterprise uptime requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {slaTiers.map((tier) => (
              <div key={tier.name} className="bg-white border border-neutral-200 p-6 rounded flex flex-col justify-between shadow-xs">
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-neutral-100">
                    <span className="text-xs font-bold text-neutral-900">{tier.name}</span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${tier.badge}`}>
                      {tier.coverage}
                    </span>
                  </div>
                  <div className="space-y-3 mb-6">
                    <div>
                      <span className="text-[11px] font-mono text-neutral-500 uppercase block">Response SLA</span>
                      <span className="text-lg font-bold text-[#3e7da2]">{tier.response}</span>
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-neutral-500 uppercase block">Resolution Window</span>
                      <span className="text-sm font-semibold text-neutral-800">{tier.resolution}</span>
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

      {/* Scope Coverage Grid */}
      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-[#3e7da2] font-mono text-xs uppercase tracking-wider block mb-2 font-bold">
              Operational Scope
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
              Managed Operations & Maintenance Scope
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-3">
              Complete operational coverage across all layers of your datacenter and IT infrastructure.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {managedScopes.map((scope) => (
              <div key={scope.title} className="p-6 bg-neutral-50 border border-neutral-200 rounded flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded bg-white border border-neutral-200 text-[#3e7da2] flex items-center justify-center mb-4 shadow-xs">
                    <scope.icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-neutral-900 mb-2">
                    {scope.title}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {scope.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-white border border-neutral-200 p-8 sm:p-12 rounded flex flex-col md:flex-row items-center justify-between gap-8 shadow-xs">
            <div className="max-w-2xl">
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-2">
                Offload Infrastructure Management to ACT Experts
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Contact our NOC leadership team to define tailored Service Level Agreements (SLAs) for your enterprise network, servers, and core database infrastructure.
              </p>
            </div>
            <div className="flex gap-4 shrink-0">
              <button
                type="button"
                onClick={() => openDemoModal("managed-services")}
                className="px-6 py-3 bg-neutral-900 hover:bg-neutral-800 text-white font-bold rounded text-xs uppercase font-mono tracking-wider transition-colors cursor-pointer"
              >
                Request SLA Proposal
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
