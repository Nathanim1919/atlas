"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  Download,
  ArrowRight,
  ChevronRight,
  Search,
  FileText
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
      title: "ACT Corporate Profile 2026: Powering Digital Transformation",
      category: "report",
      format: "PDF Document",
      size: "4.8 MB",
      date: "Q1 2026",
      description: "Official corporate profile outlining Atlas Computer Technology's history, executive leadership, enterprise infrastructure capabilities, 80+ client references, and banking partnerships.",
      downloadSlug: "act-corporate-profile"
    },
    {
      id: "unicash-architecture-whitepaper",
      title: "Architecting High-Throughput Multi-Biller Aggregation in Banking",
      category: "whitepaper",
      format: "PDF Document",
      size: "2.4 MB",
      date: "January 2026",
      description: "Deep technical whitepaper on building ISO 8583 / 20022 compliant bill aggregation networks supporting 500,000+ monthly payments across 20+ commercial banks with zero settlement float.",
      downloadSlug: "unicash-brochure"
    },
    {
      id: "private-cloud-sovereign-guide",
      title: "Enterprise Private Cloud & Data Sovereignty Blueprint for Financial Institutions",
      category: "guide",
      format: "PDF Document",
      size: "3.1 MB",
      date: "February 2026",
      description: "Implementation guide for CIOs and CTOs designing on-premises hyperconverged private clouds using OpenStack and Nutanix compliant with National Bank of Ethiopia (NBE) regulatory standards.",
      downloadSlug: "private-cloud-blueprint"
    },
    {
      id: "ethswitch-dc-migration-study",
      title: "Technical Field Report: Zero-Downtime Payment Switch Data Center Migration",
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
    <div className="bg-white font-sans min-h-screen text-neutral-900 selection:bg-[#3e7da2] selection:text-white">
      {/* Light Enterprise Hero */}
      <section className="relative pt-24 pb-20 bg-neutral-50 border-b border-neutral-200 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-500 mb-6">
            <Link href="/" className="hover:text-neutral-900 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-neutral-400" />
            <span className="text-[#3e7da2] font-semibold">Knowledge & Resources</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white border border-neutral-200 shadow-xs text-neutral-700 text-xs font-mono mb-6">
              <BookOpen className="w-3.5 h-3.5 text-[#3e7da2]" />
              <span>Technical Publications & Specifications</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 mb-6 leading-tight">
              Enterprise Technology Resources & Whitepapers
            </h1>

            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-8">
              Access in-depth technical whitepapers, sovereign cloud blueprints, banking integration specifications, and official company capability documentation.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/resources/downloads"
                className="px-6 py-3.5 bg-neutral-900 hover:bg-neutral-800 text-white font-bold rounded shadow-sm transition-colors flex items-center gap-2 text-sm"
              >
                <Download className="w-4 h-4 text-[#dde325]" />
                <span>Go to Dedicated Download Center</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="py-8 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search whitepapers, reports, blueprints..."
                className="w-full pl-10 pr-4 py-2.5 rounded bg-white border border-neutral-200 text-xs font-mono focus:outline-none focus:border-[#3e7da2] text-neutral-900"
              />
            </div>

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
                  className={`px-3 py-1.5 rounded text-xs font-mono font-semibold transition-colors cursor-pointer ${
                    activeCategory === btn.id
                      ? "bg-neutral-900 text-white"
                      : "bg-white text-neutral-600 hover:text-neutral-900 border border-neutral-200"
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
      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((res) => (
              <div
                key={res.id}
                className="bg-neutral-50 border border-neutral-200 p-6 rounded flex flex-col justify-between hover:border-neutral-300 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 pb-2 border-b border-neutral-200/80">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#3e7da2] bg-white border border-neutral-200 px-2 py-0.5 rounded">
                      {res.category}
                    </span>
                    <span className="text-[11px] font-mono text-neutral-500">{res.date}</span>
                  </div>

                  <h3 className="text-base font-bold text-neutral-900 mb-3 leading-snug">
                    {res.title}
                  </h3>

                  <p className="text-xs text-neutral-600 leading-relaxed mb-6">
                    {res.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-200 flex items-center justify-between text-xs font-mono">
                  <span className="text-neutral-500 text-[11px]">{res.format} {res.size ? `• ${res.size}` : ""}</span>
                  
                  {res.downloadSlug ? (
                    <Link
                      href={`/resources/downloads#${res.downloadSlug}`}
                      className="inline-flex items-center gap-1.5 font-bold text-[#3e7da2] hover:text-neutral-900 transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download</span>
                    </Link>
                  ) : res.href ? (
                    <Link
                      href={res.href}
                      className="inline-flex items-center gap-1.5 font-bold text-[#3e7da2] hover:text-neutral-900 transition-colors"
                    >
                      <span>Read Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  ) : (
                    <span className="text-neutral-400">Available on Request</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-16 text-neutral-500 text-xs font-mono">
              No resources found matching your search.
            </div>
          )}
        </div>
      </section>

      {/* Procurement CTA Section */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-white border border-neutral-200 p-8 sm:p-12 rounded flex flex-col md:flex-row items-center justify-between gap-8 shadow-xs">
            <div className="max-w-2xl">
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-2">
                Need Official Bidding Credentials or Compliance Matrices?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Our bidding unit provides pre-qualification credentials, manufacturer authorization letters (MAF) for Oracle, Nutanix, and Lenovo, and formal technical audits upon request.
              </p>
            </div>
            <div className="flex gap-4 shrink-0">
              <Link
                href="/contact"
                className="px-6 py-3 bg-neutral-900 hover:bg-neutral-800 text-white font-bold rounded text-xs uppercase font-mono tracking-wider transition-colors"
              >
                Contact Procurement Desk
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
