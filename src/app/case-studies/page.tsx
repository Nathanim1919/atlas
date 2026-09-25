"use client";

import { useState } from "react";
import Link from "next/link";
import { Building2, ChevronRight, CheckCircle2, ArrowRight } from "lucide-react";

interface CaseStudy {
  id: string;
  featured?: boolean;
  category: "datacenter" | "banking" | "payments";
  title: string;
  client: string;
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
  challenge: string;
  solution: string;
  technologies: string[];
  results: { metric: string; label: string }[];
}

const TABS = [
  { id: "all",        label: "All Engagements" },
  { id: "banking",    label: "Core Banking & Infrastructure" },
  { id: "datacenter", label: "Data Center & DR" },
  { id: "payments",   label: "Payment Modernization" },
];

export default function CaseStudiesPage() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const caseStudies: CaseStudy[] = [
    {
      id: "ethswitch-dc-migration",
      featured: true,
      category: "datacenter",
      title: "Zero-Downtime National Switching System Data Center Migration",
      client: "EthSwitch S.C. (Ethiopia's National Payment Switch)",
      testimonial: {
        quote: "Migrating the national payment backbone without interrupting retail ATM or POS transactions across Ethiopia was an audacious technical feat. ACT executed the multi-stage migration with impeccable precision.",
        author: "Technical Operations Directorate",
        position: "EthSwitch S.C."
      },
      challenge: "Relocating Ethiopia's central national interoperability payment switch, core clearing systems, and instant payment switches to a new Tier-III certified data center facility. The infrastructure connects 20+ commercial banks, microfinance institutions, and telecom operators 24/7. Any disruption would halt national financial settlements.",
      solution: "Engineered an end-to-end multi-phase data center migration program: pre-failover replication to the Disaster Recovery (DR) data center, running 3 consecutive days of flawless live national switching purely from the DR site, precision physical and virtual workload relocation to the new facility, redundant optical fabric cutover, and validated live re-failover with zero transaction loss.",
      technologies: ["IBM & Lenovo High-Availability Servers", "Oracle Database RAC", "Fibre Channel SAN Fabrics", "Red Hat Enterprise Linux", "Network Security Appliances"],
      results: [
        { metric: "0 min",  label: "Unplanned Downtime" },
        { metric: "100%",   label: "Data Integrity Across All Banks" },
        { metric: "3 Days", label: "Continuous Live DR Operation" },
        { metric: "20+",    label: "Financial Institutions Migrated" }
      ]
    },
    {
      id: "dashen-bank",
      category: "banking",
      title: "Core Infrastructure Optimization & 24/7 Mission-Critical SLA",
      client: "Dashen Bank S.C.",
      testimonial: {
        quote: "Atlas Computer Technology has been our reliable technology partner for high-availability enterprise compute and database infrastructure. Their proactive engineering team ensures our peak volume hours run flawlessly.",
        author: "Anteneh Tadesse",
        position: "IT Infrastructure Director, Dashen Bank"
      },
      challenge: "Exponential surges in mobile banking, merchant transactions, and branch volume caused high I/O wait times on core database servers, putting pressure on end-of-day clearing batches.",
      solution: "Architected a comprehensive system engineering overhaul: Oracle RAC database performance tuning, low-latency all-flash SAN storage array migration, high-throughput blade compute provisioning, and continuous 24/7 SLA tier-1 engineering support.",
      technologies: ["Oracle Database RAC", "Enterprise Blade Compute", "All-Flash SAN Storage", "24/7 Proactive NOC Monitoring"],
      results: [
        { metric: "45%",   label: "Faster Batch Processing" },
        { metric: "99.99%",label: "Database Cluster Uptime" },
        { metric: "24/7",  label: "Dedicated On-Call SLAs" }
      ]
    },
    {
      id: "wegagen-bank",
      category: "datacenter",
      title: "Private Cloud HCI & Automated Active-Active Disaster Recovery",
      client: "Wegagen Bank S.C.",
      testimonial: {
        quote: "Transitioning our core banking workloads to an enterprise hyperconverged private cloud gave us predictable scalability and an automated disaster recovery posture we trust without hesitation.",
        author: "Goitom G/Tsadkan",
        position: "Chief Information Officer, Wegagen Bank"
      },
      challenge: "Managing sprawling legacy virtualization clusters across disparate hardware generations with slow backup cycles and manual DR failover workflows.",
      solution: "Standardized bank infrastructure onto an enterprise Nutanix Hyperconverged (HCI) Private Cloud platform, implementing automated synchronous data replication and orchestrated failover between Primary and Secondary Data Centers.",
      technologies: ["Nutanix Enterprise Cloud Platform", "Software-Defined Storage (AOS)", "Prism Central Orchestration", "Enterprise Backup Automation"],
      results: [
        { metric: "< 5 min",  label: "Recovery Point Objective (RPO)" },
        { metric: "< 15 min", label: "Recovery Time Objective (RTO)" },
        { metric: "60%",      label: "Rack Space & Power Savings" }
      ]
    },
    {
      id: "siinqee-bank",
      category: "banking",
      title: "Rapid Commercial Bank Transition & Digital Infrastructure Rollout",
      client: "Siinqee Bank S.C.",
      testimonial: {
        quote: "Converting from a microfinance institution to a full commercial bank within aggressive timelines required dependable partners. ACT delivered the enterprise infrastructure and Uni-Cash biller platform that powered our national growth.",
        author: "Samson Eyob Wondemu",
        position: "Chief Information Officer, Siinqee Bank"
      },
      challenge: "Rapidly upgrading from microfinance systems to full commercial banking standards, interconnecting over 400 branches, and enabling omni-channel customer payment services within tight regulatory deadlines.",
      solution: "Supplied and configured resilient data center server clusters, unified enterprise network fabrics, and rolled out the Uni-Cash core payment gateway connecting university, school, and utility billers directly into the bank's digital channels.",
      technologies: ["Private Cloud HCI", "Red Hat Enterprise Linux", "Uni-Cash Bank Gateway", "Enterprise Core Network"],
      results: [
        { metric: "400+",  label: "Branches Interconnected" },
        { metric: "500K+", label: "New Digital Account Inflow" },
        { metric: "100%",  label: "On-Time Regulatory Compliance" }
      ]
    },
    {
      id: "oromia-bank",
      category: "payments",
      title: "Enterprise Multi-Biller Aggregation with Uni-Cash Pay@Bank",
      client: "Oromia Bank",
      testimonial: {
        quote: "Uni-Cash Pay@Bank transformed how our branch tellers and digital apps collect utility and tuition bills. Reconciliations that used to take days are now automated in real time.",
        author: "Geleta Bekuma",
        position: "VP - Information Technology, Oromia Bank"
      },
      challenge: "Manual over-the-counter payments for educational institutions and corporate clients generated long branch queues, teller reconciliation fatigue, and delayed settlement reporting.",
      solution: "Deployed the Uni-Cash Pay@Bank multi-biller platform across all branch teller terminals and online channels, enabling instant student ID verification, automated ledger crediting, and real-time electronic receipt issuance.",
      technologies: ["Uni-Cash Multi-Biller Gateway", "Core Banking API Connector", "Teller Web Portal", "Automated Reconciliation Engine"],
      results: [
        { metric: "300%",  label: "Monthly Bill Volume Growth" },
        { metric: "0 Hrs", label: "Reconciliation Backlog" },
        { metric: "50+",   label: "Corporate Billers Onboarded" }
      ]
    },
    {
      id: "hijra-bank",
      category: "banking",
      title: "Greenfield Core Banking Data Center Architecture",
      client: "Hijra Bank S.C.",
      testimonial: {
        quote: "Launching Ethiopia's first dedicated interest-free bank demanded bulletproof IT infrastructure right out of the gate. ACT delivered our core data center setup on schedule and with outstanding technical rigor.",
        author: "Hassen Mohammed Ali",
        position: "VP - Information Systems, Hijra Bank"
      },
      challenge: "Building a secure, compliant, high-availability enterprise data center from ground zero to support the launch of an entirely new commercial bank.",
      solution: "Designed and implemented the complete physical and logical infrastructure: Oracle RAC high-availability database cluster, enterprise blade servers, fiber SAN, hardware security modules (HSMs), and perimeter network defense.",
      technologies: ["Oracle Database RAC", "Enterprise Blade Servers", "High-Performance SAN", "Hardware Security Modules (HSMs)"],
      results: [
        { metric: "Day 1", label: "Flawless Commercial Go-Live" },
        { metric: "100%",  label: "Regulatory Compliance (NBE)" },
        { metric: "Zero",  label: "Critical Vulnerabilities Found" }
      ]
    },
    {
      id: "abay-bank",
      category: "datacenter",
      title: "Storage Resilience Upgrade & Automated Off-Site Disaster Recovery",
      client: "Abay Bank S.C.",
      testimonial: {
        quote: "ACT's deep domain knowledge in enterprise storage and disaster recovery provided Abay Bank with the speed and reliability our digital channels require 24 hours a day.",
        author: "Dinku Kassaye",
        position: "Chief Information Officer, Abay Bank"
      },
      challenge: "Legacy storage arrays reached capacity limits, causing sluggish core database reporting queries and lengthy overnight backup windows.",
      solution: "Migrated mission-critical volumes to enterprise all-flash SAN storage fabrics with automated deduplication, real-time snapshot replication to off-site disaster recovery facilities, and 24/7 SLA maintenance.",
      technologies: ["Enterprise All-Flash Storage Arrays", "Fibre Channel SAN Switches", "Continuous Replication Engine"],
      results: [
        { metric: "4x",     label: "Faster Backup Windows" },
        { metric: "Zero",   label: "Data Loss Incidents" },
        { metric: "Sub-ms", label: "Storage I/O Latency" }
      ]
    },
    {
      id: "enat-bank",
      category: "banking",
      title: "Branch Network High Availability & Proactive Engineering SLAs",
      client: "Enat Bank S.C.",
      testimonial: {
        quote: "Their rapid response SLAs and experienced hardware support specialists keep our branch and digital customer touchpoints operating with absolute confidence.",
        author: "Elias Berhanu Benede",
        position: "IT Director, Enat Bank"
      },
      challenge: "Preventing hardware failures and maintaining strict branch availability across expanding urban and regional branch locations.",
      solution: "Executed multi-vendor enterprise hardware SLA contracts with proactive preventive maintenance, automated health telemetries, and guaranteed 2-hour on-site engineering dispatch.",
      technologies: ["Multi-Vendor Hardware SLA Support", "24/7 NOC Monitoring", "Certified Oracle & Linux Engineers"],
      results: [
        { metric: "99.98%", label: "Branch Infrastructure Availability" },
        { metric: "< 2 Hrs", label: "Emergency On-Site Response" },
        { metric: "100%",   label: "Preventive Maintenance Compliance" }
      ]
    }
  ];

  const filteredStudies = activeTab === "all"
    ? caseStudies
    : caseStudies.filter((s) => s.category === activeTab);

  const featured = caseStudies.find((s) => s.featured);
  const grid = filteredStudies.filter((s) => !s.featured);

  const openDemoModal = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("open-demo-modal", {
          detail: { intent: "proposal", product: "Case Study Architecture Review" }
        })
      );
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
            <span className="text-[#3e7da2] font-semibold">Case Studies</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white border border-neutral-200 shadow-xs text-neutral-700 text-xs font-mono mb-6">
              <Building2 className="w-3.5 h-3.5 text-[#3e7da2]" />
              <span>Verified Enterprise Implementations</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 mb-6 leading-tight">
              Case Studies: Empowering National Infrastructure & Banking
            </h1>

            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-8">
              Explore how Atlas Computer Technology architects, deploys, and maintains mission-critical infrastructure, private clouds, and payment platforms for leading national institutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                onClick={openDemoModal}
                className="px-6 py-3.5 bg-neutral-900 hover:bg-neutral-800 text-white font-bold rounded shadow-sm transition-colors flex items-center gap-2 text-sm cursor-pointer"
              >
                <span>Request Architecture Review</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                href="/contact"
                className="px-6 py-3.5 bg-white hover:bg-neutral-100 text-neutral-800 font-semibold rounded border border-neutral-300 transition-colors flex items-center gap-2 text-sm"
              >
                <span>Contact Enterprise Team</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured National Milestone */}
      {featured && (
        <section className="py-20 bg-white border-b border-neutral-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#3e7da2]">
                National Reference Architecture
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 inline-block" />
              <span className="text-xs font-mono text-neutral-500">EthSwitch S.C. Case Reference</span>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-7">
                <p className="text-xs font-mono font-bold text-[#3e7da2] mb-2 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5" />
                  {featured.client}
                </p>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mb-8 leading-tight">
                  {featured.title}
                </h2>

                <div className="space-y-6">
                  <div className="border-l-2 border-neutral-200 pl-5">
                    <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-500 mb-2">
                      The Challenge
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">{featured.challenge}</p>
                  </div>

                  <div className="border-l-2 border-[#3e7da2] pl-5">
                    <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-500 mb-2">
                      The ACT Solution
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">{featured.solution}</p>
                  </div>

                  <div>
                    <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-500 mb-3">
                      Enterprise Technology Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {featured.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono px-3 py-1 rounded border border-neutral-200 text-neutral-700 bg-neutral-50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-6">
                <div className="grid grid-cols-2 gap-3">
                  {featured.results.map((res) => (
                    <div
                      key={res.label}
                      className="p-5 border border-neutral-200 bg-neutral-50 rounded text-center"
                    >
                      <div className="text-2xl font-extrabold text-neutral-900">{res.metric}</div>
                      <div className="text-xs font-mono text-neutral-500 mt-1 leading-tight">{res.label}</div>
                    </div>
                  ))}
                </div>

                {featured.testimonial && (
                  <div className="p-6 border-l-4 border-[#3e7da2] bg-neutral-50 rounded-r">
                    <p className="text-xs sm:text-sm text-neutral-700 italic leading-relaxed mb-4">
                      &ldquo;{featured.testimonial.quote}&rdquo;
                    </p>
                    <div className="text-xs font-bold text-neutral-900">
                      {featured.testimonial.author}
                    </div>
                    <div className="text-[11px] font-mono text-neutral-500 mt-0.5">
                      {featured.testimonial.position}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Grid Engagements */}
      <section className="py-20 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-12">
            <div>
              <span className="text-[#3e7da2] font-mono text-xs uppercase tracking-wider block mb-2 font-bold">
                Verified Client Portfolio
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">Commercial Bank Engagements</h2>
            </div>

            <div className="flex gap-2 border-b border-neutral-200 pb-1">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 py-1.5 text-xs font-mono font-semibold transition-colors cursor-pointer rounded ${
                    activeTab === tab.id
                      ? "bg-neutral-900 text-white"
                      : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200/60"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {grid.map((study) => (
              <div
                key={study.id}
                className="bg-white border border-neutral-200 rounded p-8 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-neutral-100">
                    <p className="text-xs font-mono font-bold text-[#3e7da2] flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5" />
                      {study.client}
                    </p>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded border border-neutral-200 text-neutral-600 capitalize bg-neutral-50">
                      {study.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-neutral-900 mb-4 leading-snug">
                    {study.title}
                  </h3>

                  <div className="space-y-4 mb-6">
                    <div className="border-l-2 border-neutral-200 pl-4">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                        Challenge
                      </span>
                      <p className="text-xs text-neutral-600 leading-relaxed">{study.challenge}</p>
                    </div>
                    <div className="border-l-2 border-[#3e7da2] pl-4">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                        Solution
                      </span>
                      <p className="text-xs text-neutral-600 leading-relaxed">{study.solution}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400 block mb-2">
                      Technologies
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {study.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-mono px-2 py-0.5 rounded border border-neutral-200 text-neutral-600 bg-neutral-50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-100">
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {study.results.map((res) => (
                      <div key={res.label} className="text-center bg-neutral-50 p-2 rounded border border-neutral-200/60">
                        <div className="text-sm font-bold text-neutral-900">{res.metric}</div>
                        <div className="text-[10px] font-mono text-neutral-500 mt-0.5">{res.label}</div>
                      </div>
                    ))}
                  </div>

                  {study.testimonial && (
                    <div className="p-3 bg-neutral-50 border-l-2 border-[#3e7da2] rounded-r text-xs">
                      <p className="text-neutral-700 italic mb-1 text-[11px] leading-relaxed">
                        &ldquo;{study.testimonial.quote}&rdquo;
                      </p>
                      <div className="font-bold text-neutral-900 text-[11px]">{study.testimonial.author}</div>
                      <div className="text-neutral-500 text-[10px] font-mono">{study.testimonial.position}</div>
                    </div>
                  )}
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
                Ready to Architect Your Enterprise Success Story?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                From national data center migrations to high-volume payment aggregation, our senior certified engineers ensure 99.999% operational continuity.
              </p>
            </div>
            <div className="flex gap-4 shrink-0">
              <button
                type="button"
                onClick={openDemoModal}
                className="px-6 py-3 bg-neutral-900 hover:bg-neutral-800 text-white font-bold rounded text-xs uppercase font-mono tracking-wider transition-colors cursor-pointer"
              >
                Schedule Architecture Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
