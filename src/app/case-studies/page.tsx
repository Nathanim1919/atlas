"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Building2,
  ShieldCheck,
  Zap,
  ArrowRight,
  Server,
  Database,
  Layers,
  CheckCircle2,
  Quote,
  Clock,
  TrendingUp,
  FileCheck,
  ChevronRight,
  Briefcase
} from "lucide-react";

interface CaseStudy {
  id: string;
  featured?: boolean;
  category: "datacenter" | "banking" | "payments";
  title: string;
  client: string;
  clientRole?: string;
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
        { metric: "0 min", label: "Unplanned Downtime" },
        { metric: "100%", label: "Data Integrity Across All Banks" },
        { metric: "3 Days", label: "Continuous Live DR Operation" },
        { metric: "20+", label: "Financial Institutions Seamlessly Migrated" }
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
        { metric: "45%", label: "Faster Batch Processing" },
        { metric: "99.99%", label: "Database Cluster Uptime" },
        { metric: "24/7", label: "Dedicated On-Call SLAs" }
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
        { metric: "< 5 min", label: "Recovery Point Objective (RPO)" },
        { metric: "< 15 min", label: "Recovery Time Objective (RTO)" },
        { metric: "60%", label: "Rack Space & Power Savings" }
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
        { metric: "400+", label: "Branches Interconnected" },
        { metric: "500K+", label: "New Digital Account Inflow" },
        { metric: "100%", label: "On-Time Commercial Regulatory Compliance" }
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
        { metric: "300%", label: "Monthly Bill Volume Growth" },
        { metric: "0 Hrs", label: "End-of-Day Reconciliation Backlog" },
        { metric: "50+", label: "Corporate Billers Onboarded" }
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
        { metric: "100%", label: "Regulatory Compliance (NBE)" },
        { metric: "Zero", label: "Critical Vulnerabilities in Independent Audit" }
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
        { metric: "4x", label: "Faster Backup Windows" },
        { metric: "Zero", label: "Data Loss Incidents" },
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
        { metric: "100%", label: "Preventive Maintenance Compliance" }
      ]
    }
  ];

  const filteredStudies = activeTab === "all" 
    ? caseStudies 
    : caseStudies.filter((s) => s.category === activeTab);

  const featured = caseStudies.find((s) => s.featured);

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(62,125,162,0.3),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dde325]/20 border border-[#dde325]/40 text-[#dde325] text-xs font-semibold uppercase tracking-wider mb-6">
              <Briefcase className="w-4 h-4" />
              Proven Enterprise Track Record
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Case Studies: Empowering <span className="text-[#dde325]">Ethiopia's Financial Backbone</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
              Explore how Atlas Computer Technology architects, deploys, and manages mission-critical infrastructure, private clouds, and payment platforms for leading national institutions.
            </p>
          </div>
        </div>
      </section>

      {/* Featured National Case Study: EthSwitch */}
      {featured && (
        <section className="py-16 bg-slate-950 text-white border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider">
                National Milestone
              </span>
              <span className="text-xs text-slate-400">Published Reference Architecture</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-7">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4 leading-snug">
                  {featured.title}
                </h2>
                <div className="text-sm font-semibold text-[#dde325] mb-6 flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  Client: {featured.client}
                </div>

                <div className="space-y-6 text-slate-300">
                  <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-800">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-rose-400 mb-2">The Challenge</h3>
                    <p className="text-sm leading-relaxed">{featured.challenge}</p>
                  </div>

                  <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-800">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">The ACT Solution</h3>
                    <p className="text-sm leading-relaxed">{featured.solution}</p>
                  </div>

                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Enterprise Stack Deployed</h3>
                    <div className="flex flex-wrap gap-2">
                      {featured.technologies.map((tech) => (
                        <span key={tech} className="text-xs px-3 py-1.5 rounded-lg bg-slate-800 text-slate-200 border border-slate-700">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats & Testimonial Card */}
              <div className="lg:col-span-5 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  {featured.results.map((res) => (
                    <div key={res.label} className="p-5 rounded-xl bg-slate-900 border border-slate-800 text-center">
                      <div className="text-2xl sm:text-3xl font-black text-[#dde325]">{res.metric}</div>
                      <div className="text-xs text-slate-400 mt-1 font-medium">{res.label}</div>
                    </div>
                  ))}
                </div>

                {featured.testimonial && (
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-[#3e7da2]/20 to-slate-900 border border-[#3e7da2]/40 relative">
                    <Quote className="w-8 h-8 text-[#dde325]/40 mb-3" />
                    <p className="text-sm text-slate-200 italic leading-relaxed mb-4">
                      "{featured.testimonial.quote}"
                    </p>
                    <div className="border-t border-white/10 pt-3">
                      <div className="text-sm font-bold text-white">{featured.testimonial.author}</div>
                      <div className="text-xs text-[#dde325]">{featured.testimonial.position}</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Interactive Tabs & Case Studies Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#3e7da2] mb-2">Verified Engagements</h2>
              <h3 className="text-3xl font-extrabold text-slate-900">Commercial Bank Engagements</h3>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 bg-white p-1.5 rounded-xl border border-slate-200 shadow-sm">
              {[
                { id: "all", label: "All Engagements" },
                { id: "banking", label: "Core Banking & Infrastructure" },
                { id: "datacenter", label: "Data Center & DR" },
                { id: "payments", label: "Payment Modernization" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer ${
                    activeTab === tab.id
                      ? "bg-[#3e7da2] text-white shadow-sm"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AnimatePresence>
              {filteredStudies
                .filter((s) => !s.featured)
                .map((study) => (
                  <motion.div
                    key={study.id}
                    layout
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-2xl border border-slate-200 p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#3e7da2] flex items-center gap-1.5">
                          <Building2 className="w-3.5 h-3.5" />
                          {study.client}
                        </span>
                        <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 capitalize">
                          {study.category}
                        </span>
                      </div>

                      <h4 className="text-xl font-bold text-slate-900 mb-4 leading-snug">
                        {study.title}
                      </h4>

                      <div className="space-y-4 mb-6 text-sm">
                        <div>
                          <span className="font-bold text-rose-700 block text-xs uppercase tracking-wide mb-1">
                            Challenge
                          </span>
                          <p className="text-slate-600 leading-relaxed">{study.challenge}</p>
                        </div>
                        <div>
                          <span className="font-bold text-emerald-700 block text-xs uppercase tracking-wide mb-1">
                            Solution
                          </span>
                          <p className="text-slate-600 leading-relaxed">{study.solution}</p>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="mb-6">
                        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                          Technologies Used
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {study.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="text-[11px] font-medium px-2.5 py-1 rounded bg-slate-100 text-slate-700"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Results & Testimonial Footer */}
                    <div className="pt-6 border-t border-slate-100 space-y-4">
                      <div className="grid grid-cols-3 gap-2">
                        {study.results.map((res) => (
                          <div key={res.label} className="text-center p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                            <div className="text-base font-extrabold text-[#3e7da2]">{res.metric}</div>
                            <div className="text-[10px] text-slate-500 mt-0.5 leading-tight">{res.label}</div>
                          </div>
                        ))}
                      </div>

                      {study.testimonial && (
                        <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-[#3e7da2] text-xs">
                          <p className="text-slate-700 italic mb-2">"{study.testimonial.quote}"</p>
                          <div className="font-bold text-slate-900">{study.testimonial.author}</div>
                          <div className="text-[11px] text-slate-500">{study.testimonial.position}</div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
            Ready to Architect Your Enterprise Success Story?
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            From critical data center migrations to high-volume payment aggregation, our senior certified engineers ensure 99.99% operational continuity.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => {
                window.dispatchEvent(
                  new CustomEvent("open-demo-modal", {
                    detail: { service: "Case Study Inquiry / Architecture Review" }
                  })
                );
              }}
              className="px-8 py-4 rounded-xl bg-[#dde325] text-slate-950 font-bold hover:bg-[#c8ce20] transition-all duration-200 shadow-xl cursor-pointer"
            >
              Request Architecture Consultation
            </button>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium transition-all duration-200"
            >
              Contact Our Enterprise Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
