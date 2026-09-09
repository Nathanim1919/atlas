"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Search,
  Compass,
  Code2,
  CheckCircle2,
  Rocket,
  Headphones,
  ShieldCheck,
  FileCheck,
  Users,
  Clock,
  ArrowRight,
  Sparkles,
  GitBranch,
  Layers,
  Settings
} from "lucide-react";

export default function HowWeWorkPage() {
  const steps = [
    {
      number: "01",
      title: "Discover & Assess",
      tagline: "Uncompromising Deep Dive & Technical Audit",
      icon: Search,
      color: "from-blue-500/20 to-cyan-500/20",
      accent: "text-blue-600",
      description:
        "Every mission-critical project begins with on-site stakeholder alignment, deep infrastructure telemetry analysis, capacity planning, and regulatory compliance benchmarking.",
      deliverables: [
        "Comprehensive As-Is Architecture & Gap Analysis Report",
        "Capacity, IOPS & Bandwidth Sizing Matrix",
        "Regulatory & National Bank Compliance Checklist (NBE / PCI-DSS)",
        "Feasibility & Total Cost of Ownership (TCO) Projections"
      ],
      timeframe: "Week 1 - 2"
    },
    {
      number: "02",
      title: "Design & Architect",
      tagline: "Resilient, Cloud-Agnostic Blueprinting",
      icon: Compass,
      color: "from-indigo-500/20 to-blue-500/20",
      accent: "text-indigo-600",
      description:
        "Our certified enterprise architects draft modular High-Level (HLD) and Low-Level Designs (LLD) with built-in zero-trust security, active-active failover, and zero single points of failure.",
      deliverables: [
        "Low-Level Technical Design (LLD) & Cabling Schematics",
        "Disaster Recovery & Data Replication Runbooks (RPO < 5m, RTO < 15m)",
        "Component Specification & Bill of Materials (BOM)",
        "Security Demarcation & Network Zone Topology"
      ],
      timeframe: "Week 2 - 4"
    },
    {
      number: "03",
      title: "Develop & Configure",
      tagline: "Precision Engineering & Modern DevSecOps",
      icon: Code2,
      color: "from-teal-500/20 to-emerald-500/20",
      accent: "text-teal-600",
      description:
        "Whether deploying hyperconverged private cloud fabrics, microservices payment APIs, or bare-metal Oracle clusters, we build under strict version-controlled infrastructure-as-code paradigms.",
      deliverables: [
        "Automated Deployment Scripts & CI/CD Pipelines",
        "Core Banking Connectors & ISO 8583 / 20022 Gateway APIs",
        "High-Availability Clustering & Synchronous Storage Pools",
        "Audited Clean Codebase & Complete API Documentation"
      ],
      timeframe: "Week 4 - 8"
    },
    {
      number: "04",
      title: "Test & Validate",
      tagline: "Simulating Worst-Case Scenarios",
      icon: CheckCircle2,
      color: "from-amber-500/20 to-yellow-500/20",
      accent: "text-amber-600",
      description:
        "Before any workload goes live, we run exhaustive stress tests: simulated power loss, fiber cuts, synthetic peak load surges, penetration testing, and User Acceptance Testing (UAT).",
      deliverables: [
        "User Acceptance Testing (UAT) Sign-Off Protocol",
        "Chaos & Disaster Recovery Failover Simulation Sign-Off",
        "Performance Benchmarking & Latency Profiling",
        "Third-Party Security Vulnerability & Pen-Test Clearance"
      ],
      timeframe: "Week 7 - 9"
    },
    {
      number: "05",
      title: "Deploy & Cutover",
      tagline: "Zero-Downtime Live Production Transition",
      icon: Rocket,
      color: "from-rose-500/20 to-orange-500/20",
      accent: "text-rose-600",
      description:
        "Deploying with zero business interruption requires minute-by-minute cutover orchestration. Our senior engineers supervise live migration during pre-agreed maintenance windows.",
      deliverables: [
        "Minute-by-Minute Cutover Execution Checklist",
        "Automated Rollback & Fallback Contingency Protocols",
        "Live Post-Cutover Operational Sanity Testing",
        "System Handover & Executive Sign-Off Certificate"
      ],
      timeframe: "Week 9 - 10"
    },
    {
      number: "06",
      title: "Support & SLA",
      tagline: "24/7 Proactive NOC & Tier-1 Escalation",
      icon: Headphones,
      color: "from-emerald-500/20 to-teal-500/20",
      accent: "text-emerald-600",
      description:
        "Go-live is just the beginning. ACT provides contracted Service Level Agreements (SLA), 24/7 telemetry monitoring, preventative maintenance, and 2-hour on-site dispatch across Ethiopia.",
      deliverables: [
        "Dedicated Tier-1 to Tier-4 Escalation Matrix",
        "Guaranteed 15-Minute Emergency P1 Response SLA",
        "Quarterly Preventive Maintenance & Firmware Audits",
        "On-Site Hands-and-Feet Certified Field Support"
      ],
      timeframe: "Ongoing 24/7/365"
    }
  ];

  const standards = [
    {
      title: "Certified Enterprise Engineers",
      desc: "Our engineering team holds direct certifications from Oracle, Red Hat, Nutanix, IBM, Cisco, and SUSE."
    },
    {
      title: "EthSwitch & NBE Compliance",
      desc: "Every banking connector and payment platform is aligned with National Bank of Ethiopia security and clearing guidelines."
    },
    {
      title: "Zero-Downtime Methodologies",
      desc: "Proven live cutover protocols honed across 80+ enterprise implementations, including the EthSwitch data center migration."
    },
    {
      title: "Local Presence & Fast Dispatch",
      desc: "Direct Addis Ababa headquarters and branch dispatch teams ensure physical on-site presence within minutes, not days."
    }
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(62,125,162,0.3),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dde325]/20 border border-[#dde325]/40 text-[#dde325] text-xs font-semibold uppercase tracking-wider mb-6">
              <Settings className="w-4 h-4" />
              Delivery Methodology
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
              How We Work: Engineered for <span className="text-[#dde325]">Zero-Failure Execution</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
              When national financial rails, commercial bank core databases, and multi-million dollar transactions are on the line, improvisation is not an option. Our 6-stage lifecycle guarantees predictable outcomes every single time.
            </p>
          </div>
        </div>
      </section>

      {/* 6-Stage Timeline Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#3e7da2] mb-3">
              End-to-End Enterprise Lifecycle
            </h2>
            <h3 className="text-3xl font-extrabold text-slate-900">
              Six Phases from Discovery to Lifetime SLA
            </h3>
            <p className="mt-4 text-slate-600">
              Each stage produces verifiable artifacts, peer-reviewed architecture documents, and formal client sign-offs before moving forward.
            </p>
          </div>

          <div className="space-y-12">
            {steps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Phase & Title Column */}
                  <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-slate-100 pb-6 lg:pb-0 lg:pr-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-4xl sm:text-5xl font-black text-slate-200 font-mono">
                        {step.number}
                      </span>
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center ${step.accent}`}>
                        <step.icon className="w-6 h-6" />
                      </div>
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900 mb-2">{step.title}</h4>
                    <p className={`text-xs font-bold uppercase tracking-wider ${step.accent} mb-4`}>
                      {step.tagline}
                    </p>
                    <div className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full bg-slate-100 text-slate-700">
                      <Clock className="w-3.5 h-3.5" />
                      Timeline: {step.timeframe}
                    </div>
                  </div>

                  {/* Description & Deliverables Column */}
                  <div className="lg:col-span-8">
                    <p className="text-base text-slate-700 leading-relaxed mb-6">
                      {step.description}
                    </p>

                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
                        <FileCheck className="w-4 h-4 text-[#3e7da2]" />
                        Key Stage Deliverables & Gate Criteria
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {step.deliverables.map((del) => (
                          <div
                            key={del}
                            className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 font-medium"
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{del}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Assurance Principles */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#3e7da2] mb-3">
              Why Tier-1 Banks Trust Our Delivery
            </h2>
            <h3 className="text-3xl font-extrabold text-slate-900">
              The ACT Engineering Benchmark
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {standards.map((std) => (
              <div
                key={std.title}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#3e7da2]/10 text-[#3e7da2] flex items-center justify-center mb-4">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-2">{std.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{std.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
            Have an Upcoming Infrastructure or Software Project?
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Let our senior solution architects run an initial discovery workshop to review your requirements, timelines, and technical constraints.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => {
                window.dispatchEvent(
                  new CustomEvent("open-demo-modal", {
                    detail: { service: "Discovery Workshop Request" }
                  })
                );
              }}
              className="px-8 py-4 rounded-xl bg-[#dde325] text-slate-950 font-bold hover:bg-[#c8ce20] transition-all duration-200 shadow-xl cursor-pointer"
            >
              Book a Technical Discovery Workshop
            </button>
            <Link
              href="/case-studies"
              className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium transition-all duration-200"
            >
              Review Completed Client Projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
