"use client";

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
  Clock,
  ArrowRight,
  ChevronRight,
  Settings,
  Cpu,
  Layers,
  Award
} from "lucide-react";

export default function HowWeWorkPage() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Infrastructure Audit",
      tagline: "Uncompromising Technical Assessment",
      icon: Search,
      description:
        "Every enterprise project begins with on-site stakeholder alignment, deep infrastructure telemetry analysis, IOPS/capacity benchmarking, and regulatory compliance auditing.",
      deliverables: [
        "As-Is Technical Architecture & Gap Analysis Report",
        "Compute, IOPS & Storage Sizing Matrix",
        "Regulatory & National Bank Compliance Audit (NBE / PCI-DSS)",
        "Total Cost of Ownership (TCO) & ROI Roadmap"
      ],
      timeframe: "Week 1 – 2"
    },
    {
      number: "02",
      title: "Architecture & System Design",
      tagline: "Resilient, High-Availability Blueprinting",
      icon: Compass,
      description:
        "Senior solution architects draft modular High-Level (HLD) and Low-Level Designs (LLD) with zero-trust security boundaries, active-active failover, and zero single points of failure.",
      deliverables: [
        "Low-Level Technical Design (LLD) & Cabling Schematics",
        "Disaster Recovery & Data Replication Runbooks (RPO < 5m, RTO < 15m)",
        "Component Specification & Bill of Materials (BOM)",
        "Network Segmentation & Firewall Zone Topology"
      ],
      timeframe: "Week 2 – 4"
    },
    {
      number: "03",
      title: "Agile Development & Configuration",
      tagline: "Infrastructure as Code & Microservices Engineering",
      icon: Code2,
      description:
        "Whether building OpenStack private clouds, payment gateway APIs, or core database clusters, we engineer under version-controlled Infrastructure-as-Code (IaC) paradigms.",
      deliverables: [
        "Automated Ansible & Terraform Infrastructure Pipelines",
        "Core Banking Connectors & ISO 8583 / 20022 Gateway APIs",
        "Synchronous Multi-Datacenter Storage & Compute Pools",
        "Peer-Reviewed Codebase & API Documentation"
      ],
      timeframe: "Week 4 – 8"
    },
    {
      number: "04",
      title: "Verification & Chaos Testing",
      tagline: "Simulating Worst-Case Failure Scenarios",
      icon: CheckCircle2,
      description:
        "Before production deployment, we execute exhaustive stress tests: simulated power loss, fiber cuts, synthetic peak load surges, penetration testing, and User Acceptance Testing (UAT).",
      deliverables: [
        "User Acceptance Testing (UAT) Sign-Off Protocol",
        "Disaster Recovery & Chaos Failover Simulation Sign-Off",
        "Performance Benchmarking & Microsecond Latency Profiling",
        "Third-Party Security Penetration Clearance Certificate"
      ],
      timeframe: "Week 7 – 9"
    },
    {
      number: "05",
      title: "Production Cutover & Deployment",
      tagline: "Zero-Downtime Live Migration",
      icon: Rocket,
      description:
        "Deploying with zero business interruption requires minute-by-minute cutover orchestration. Senior engineers execute live migration during scheduled low-traffic maintenance windows.",
      deliverables: [
        "Minute-by-Minute Cutover Execution Checklist",
        "Automated Rollback & Fallback Contingency Protocols",
        "Post-Cutover Operational Sanity Testing",
        "Executive Handover & System Acceptance Certificate"
      ],
      timeframe: "Week 9 – 10"
    },
    {
      number: "06",
      title: "24/7 SLA & Lifetime Operations",
      tagline: "Proactive NOC Telemetry & Tier 1–4 Escalation",
      icon: Headphones,
      description:
        "Go-live is just the beginning. ACT provides contractually bound Service Level Agreements (SLA), 24/7 telemetry monitoring, preventative maintenance, and 2-hour on-site dispatch.",
      deliverables: [
        "Tier-1 to Tier-4 Certified NOC Escalation Matrix",
        "Guaranteed 15-Minute Emergency P1 Incident SLA",
        "Quarterly Preventive Maintenance & Firmware Audits",
        "On-Site Certified Field Support Roster"
      ],
      timeframe: "Ongoing 24/7/365"
    }
  ];

  const standards = [
    {
      icon: Award,
      title: "Certified Enterprise Engineers",
      desc: "Our engineering team holds direct certifications from Oracle, Red Hat, Nutanix, IBM, Cisco, and SUSE."
    },
    {
      icon: ShieldCheck,
      title: "EthSwitch & NBE Compliance",
      desc: "Every payment connector and banking platform is strictly aligned with National Bank of Ethiopia security guidelines."
    },
    {
      icon: Layers,
      title: "Zero-Downtime Cutover Record",
      desc: "Proven live migration protocols honed across 80+ enterprise implementations, including national clearing rails."
    },
    {
      icon: Cpu,
      title: "Rapid Local Dispatch",
      desc: "Headquarters and field dispatch teams in Addis Ababa guarantee physical on-site response within contract SLAs."
    }
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
            <span className="text-[#3e7da2] font-semibold">How We Work</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white border border-neutral-200 shadow-xs text-neutral-700 text-xs font-mono mb-6">
              <Settings className="w-3.5 h-3.5 text-[#3e7da2]" />
              <span>Engineering Lifecycle & Methodology</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 mb-6 leading-tight">
              Engineered for Zero-Failure Execution & Uptime
            </h1>

            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-8">
              When national financial rails, core banking databases, and enterprise transactions are on the line, guesswork is not an option. Our 6-stage engineering lifecycle delivers predictable, zero-downtime execution every time.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => openDemoModal("discovery-workshop")}
                className="px-6 py-3.5 bg-neutral-900 hover:bg-neutral-800 text-white font-bold rounded shadow-sm transition-colors flex items-center gap-2 text-sm cursor-pointer"
              >
                <span>Schedule Discovery Workshop</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                href="/case-studies"
                className="px-6 py-3.5 bg-white hover:bg-neutral-100 text-neutral-800 font-semibold rounded border border-neutral-300 transition-colors flex items-center gap-2 text-sm"
              >
                <span>View Enterprise Case Studies</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6-Phase Engineering Stepper Timeline */}
      <section className="py-20 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-[#3e7da2] font-mono text-xs uppercase tracking-wider block mb-2 font-bold">
              6-Stage Delivery Framework
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
              Six Phases from Audit to Lifetime SLA
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-3">
              Every stage produces peer-reviewed architectural artifacts, gate clearance documentation, and executive sign-offs before advancing.
            </p>
          </div>

          <div className="space-y-8">
            {steps.map((step) => (
              <div
                key={step.number}
                className="bg-white border border-neutral-200 p-8 rounded shadow-xs hover:border-neutral-300 transition-colors"
              >
                <div className="grid lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Number & Title */}
                  <div className="lg:col-span-4 lg:border-r border-neutral-100 lg:pr-8 pb-6 lg:pb-0 border-b lg:border-b-0">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-mono font-bold text-[#3e7da2] bg-neutral-100 border border-neutral-200 px-2.5 py-1 rounded">
                        [STAGE {step.number}]
                      </span>
                      <div className="w-8 h-8 rounded bg-neutral-50 border border-neutral-200 text-neutral-700 flex items-center justify-center">
                        <step.icon className="w-4 h-4 text-[#3e7da2]" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-neutral-900 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-xs font-mono text-neutral-500 mb-4">
                      {step.tagline}
                    </p>

                    <div className="inline-flex items-center gap-2 text-xs font-mono text-neutral-600 bg-neutral-50 border border-neutral-200 px-3 py-1 rounded">
                      <Clock className="w-3.5 h-3.5 text-neutral-400" />
                      <span>Timeline: {step.timeframe}</span>
                    </div>
                  </div>

                  {/* Right Column: Description & Deliverables */}
                  <div className="lg:col-span-8">
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
                      {step.description}
                    </p>

                    <div>
                      <div className="text-xs font-mono uppercase tracking-wider text-neutral-500 mb-3 flex items-center gap-2">
                        <FileCheck className="w-3.5 h-3.5 text-[#3e7da2]" />
                        <span>Key Deliverables & Gate Criteria</span>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-3">
                        {step.deliverables.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2.5 p-3 rounded bg-neutral-50 border border-neutral-200/80 text-xs text-neutral-700 font-medium"
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Assurance Benchmarks */}
      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-[#3e7da2] font-mono text-xs uppercase tracking-wider block mb-2 font-bold">
              Engineering Guarantees
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
              Why Enterprise Clients Trust Our Process
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-3">
              Standardized engineering practices honed across 80+ mission-critical infrastructure deployments in East Africa.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {standards.map((std) => (
              <div
                key={std.title}
                className="p-6 bg-neutral-50 border border-neutral-200 rounded flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded bg-white border border-neutral-200 text-[#3e7da2] flex items-center justify-center mb-4 shadow-xs">
                    <std.icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-neutral-900 mb-2">
                    {std.title}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {std.desc}
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
                Have an Upcoming Infrastructure or Software Project?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Connect with our senior solution architects to run an initial discovery workshop, review technical specifications, and establish project timelines.
              </p>
            </div>
            <div className="flex gap-4 shrink-0">
              <button
                type="button"
                onClick={() => openDemoModal("discovery-workshop")}
                className="px-6 py-3 bg-neutral-900 hover:bg-neutral-800 text-white font-bold rounded text-xs uppercase font-mono tracking-wider transition-colors cursor-pointer"
              >
                Book Discovery Workshop
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
