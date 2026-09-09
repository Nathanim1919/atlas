"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  BookOpen,
  FileText,
  Download,
  ArrowRight,
  Shield,
  Layers,
  Sparkles,
  Server,
  Building2,
  ExternalLink,
  Search,
  Tag
} from "lucide-react";

interface ResourceItem {
  id: string;
  title: string;
  category: "whitepaper" | "guide" | "report" | "datasheet";
  format: "PDF Document" | "Interactive Spec" | "Executive Brief";
  size?: string;
  date: string;
  description: string;
  downloadSlug?: string;
  href?: string;
}

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const resources: ResourceItem[] = [
    {
      id: "act-company-profile-2026",
      title: "ACT Corporate Profile 2026: Powering Ethiopia's Digital Transformation",
      category: "report",
      format: "PDF Document",
      size: "4.8 MB",
      date: "Q1 2026",
      description: "Official comprehensive corporate profile outlining Atlas Computer Technology's history, leadership, enterprise infrastructure capabilities, 80+ client references, and banking partnerships.",
      downloadSlug: "act-corporate-profile"
    },
    {
      id: "unicash-architecture-whitepaper",
      title: "Architecting High-Throughput Multi-Biller Aggregation in National Banking",
      category: "whitepaper",
      format: "PDF Document",
      size: "2.4 MB",
      date: "January 2026",
      description: "Deep technical whitepaper on building ISO 8583 / 20022 compliant bill aggregation networks supporting 500,000+ monthly payments across 20+ commercial banks with zero settlement float.",
      downloadSlug: "unicash-brochure"
    },
    {
      id: "private-cloud-sovereign-guide",
      title: "Enterprise Private Cloud & Data Sovereignty Blueprint for Ethiopian Financial Institutions",
      category: "guide",
      format: "PDF Document",
      size: "3.1 MB",
      date: "February 2026",
      description: "Implementation guide for CIOs and CTOs designing on-premises hyperconverged private clouds using OpenStack and Nutanix compliant with National Bank of Ethiopia (NBE) regulatory standards.",
      downloadSlug: "private-cloud-blueprint"
    },
    {
      id: "ethswitch-dc-migration-study",
      title: "Technical Field Report: Zero-Downtime National Payment Switch Data Center Migration",
      category: "report",
      format: "PDF Document",
      size: "1.9 MB",
      date: "December 2025",
      description: "Detailed operational review of the multi-phase physical, virtual, and optical cutover executed for EthSwitch S.C. with 3-day continuous disaster recovery validation.",
      href: "/case-studies"
    },
    {
      id: "merchant-pay-emvco-specs",
      title: "Omnichannel Merchant Acquiring & EMVCo QR Integration Datasheet",
      category: "datasheet",
      format: "PDF Document",
      size: "1.5 MB",
      date: "March 2026",
      description: "Functional specifications for retail supermarkets, fuel stations, and restaurant POS terminals integrating instant national QR switching with direct core banking ledger credit.",
      downloadSlug: "merchant-pay-specs"
    },
    {
      id: "vib-omnichannel-banking-brief",
      title: "Virtual Integrated Banking (VIB): Unified Retail & Corporate Banking Architecture",
      category: "whitepaper",
      format: "PDF Document",
      size: "2.7 MB",
      date: "November 2025",
      description: "System engineering overview of modern omnichannel banking middleware, biometrics verification, corporate batch salary disbursement, and open banking API security.",
      downloadSlug: "vib-datasheet"
    }
  ];

  const filteredResources = resources.filter((item) => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(62,125,162,0.3),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dde325]/20 border border-[#dde325]/40 text-[#dde325] text-xs font-semibold uppercase tracking-wider mb-6">
              <BookOpen className="w-4 h-4" />
              Knowledge & Insights Center
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Enterprise Technology <span className="text-[#dde325]">Resources & Downloads</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
              Access in-depth technical whitepapers, sovereign cloud blueprints, banking integration guides, and official company capability statements.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/resources/downloads"
                className="px-6 py-3 rounded-xl bg-[#dde325] text-slate-950 font-bold hover:bg-[#c8ce20] transition-all duration-200 flex items-center gap-2 shadow-lg"
              >
                <Download className="w-4 h-4" />
                Go to Dedicated Download Center
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search whitepapers, reports, guides..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#3e7da2] text-slate-800"
              />
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: "all", label: "All Resources" },
                { id: "whitepaper", label: "Whitepapers" },
                { id: "guide", label: "Technical Guides" },
                { id: "report", label: "Corporate Reports" },
                { id: "datasheet", label: "Product Datasheets" }
              ].map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => setActiveCategory(btn.id)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer ${
                    activeCategory === btn.id
                      ? "bg-[#3e7da2] text-white shadow-sm"
                      : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((res, i) => (
              <motion.div
                key={res.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-white rounded-2xl border border-slate-200 p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#3e7da2] bg-[#3e7da2]/10 px-2.5 py-1 rounded-md">
                      {res.category}
                    </span>
                    <span className="text-xs text-slate-400">{res.date}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug">
                    {res.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {res.description}
                  </p>
                </div>

                <div className="pt-5 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">{res.format} {res.size ? `• ${res.size}` : ""}</span>
                  
                  {res.downloadSlug ? (
                    <Link
                      href={`/resources/downloads#${res.downloadSlug}`}
                      className="inline-flex items-center gap-1.5 font-bold text-[#3e7da2] hover:text-slate-900 transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
                      Download
                    </Link>
                  ) : res.href ? (
                    <Link
                      href={res.href}
                      className="inline-flex items-center gap-1.5 font-bold text-[#3e7da2] hover:text-slate-900 transition-colors"
                    >
                      Read Case Study
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  ) : (
                    <span className="text-slate-400">Available on Request</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-16 text-slate-500 text-sm">
              No resources found matching your search. Please check back soon or contact our solutions team.
            </div>
          )}
        </div>
      </section>

      {/* Procurement & RFP Banner */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#dde325] mb-2 block">
                Procurement & RFP Support
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                Need Official Bidding Documents or Technical Compliance Matrices?
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Our bidding and solutions unit provides pre-qualification credentials, manufacturer authorization letters (MAF) for Oracle, Nutanix, and Lenovo, and formal financial audits upon request.
              </p>
            </div>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl bg-[#dde325] text-slate-950 font-bold hover:bg-[#c8ce20] transition-all duration-200 shrink-0 shadow-lg"
            >
              Contact Procurement Desk
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
