"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Newspaper,
  Calendar,
  Clock,
  ArrowRight,
  Search,
  Tag,
  Building2,
  Sparkles,
  Layers,
  ChevronRight
} from "lucide-react";

interface Article {
  id: string;
  title: string;
  category: "company" | "product" | "technical" | "events";
  categoryLabel: string;
  date: string;
  readTime: string;
  excerpt: string;
  featured?: boolean;
  author: {
    name: string;
    role: string;
  };
  tags: string[];
}

export default function NewsPage() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const articles: Article[] = [
    {
      id: "ethswitch-national-migration-success",
      featured: true,
      category: "company",
      categoryLabel: "Company Milestone",
      date: "January 18, 2026",
      readTime: "5 min read",
      title: "EthSwitch S.C. Successfully Executes Live Data Center Migration with Atlas Computer Technology",
      excerpt: "In a landmark achievement for Ethiopia's national financial payment backbone, ACT engineered a multi-phase migration of the central national switching system with zero unplanned downtime and 3 days of uninterrupted live disaster recovery operation.",
      author: {
        name: "Enterprise Solutions Directorate",
        role: "Atlas Computer Technology"
      },
      tags: ["EthSwitch", "Data Center", "Disaster Recovery", "FinTech"]
    },
    {
      id: "unicash-500k-monthly-milestone",
      category: "product",
      categoryLabel: "Product Update",
      date: "February 24, 2026",
      readTime: "4 min read",
      title: "Uni-Cash Payment Gateway Surpasses 500,000 Monthly Transactions Across 20+ Commercial Banks",
      excerpt: "Demonstrating exponential adoption across Ethiopia's higher education, municipal utility, and commercial biller sectors, Uni-Cash records another historic throughput milestone with zero settlement float.",
      author: {
        name: "Uni-Cash Product Team",
        role: "Financial Applications"
      },
      tags: ["Uni-Cash", "Core Banking", "Pay@Bank", "Digital Payments"]
    },
    {
      id: "sovereign-private-cloud-banking-guide",
      category: "technical",
      categoryLabel: "Technical Article",
      date: "February 10, 2026",
      readTime: "8 min read",
      title: "Architecting Sovereign Private Clouds: OpenStack & Nutanix HCI for Ethiopian Financial Institutions",
      excerpt: "How banks and government agencies are overcoming foreign currency constraints and regulatory mandates by deploying self-healing hyperconverged on-premises clouds with automated multi-site disaster recovery.",
      author: {
        name: "Systems Engineering Practice",
        role: "Infrastructure Services"
      },
      tags: ["Private Cloud", "Nutanix", "OpenStack", "Data Sovereignty"]
    },
    {
      id: "merchant-pay-launch",
      category: "product",
      categoryLabel: "Product Update",
      date: "March 2, 2026",
      readTime: "4 min read",
      title: "Atlas Unveils Merchant Pay: Interoperable National QR & Smart POS Acquiring for Commercial Banks",
      excerpt: "The new platform unifies EMVCo dynamic QR code generation, Android Smart POS terminals, and multi-branch cashier consoles with instant settlement into commercial bank accounts.",
      author: {
        name: "Merchant Acquiring Division",
        role: "Product Engineering"
      },
      tags: ["Merchant Pay", "EMVCo QR", "Smart POS", "Retail Acquiring"]
    },
    {
      id: "oracle-rac-high-availability-best-practices",
      category: "technical",
      categoryLabel: "Technical Article",
      date: "January 5, 2026",
      readTime: "6 min read",
      title: "Mission-Critical Core Banking: Tuning Oracle RAC Clusters for High Peak-Hour Throughput",
      excerpt: "A deep dive into low-latency interconnects, ASM storage striping, and buffer cache optimization learned from supporting premier financial institutions across Ethiopia.",
      author: {
        name: "Merid Tilahun",
        role: "Technical Managing Director"
      },
      tags: ["Oracle RAC", "Core Banking", "Database Performance"]
    },
    {
      id: "cybersecurity-resilience-roundtable-2026",
      category: "events",
      categoryLabel: "Industry Insights",
      date: "December 14, 2025",
      readTime: "3 min read",
      title: "Key Takeaways from the Ethiopian Banking Infrastructure & Resilience Roundtable",
      excerpt: "CIOs and IT directors from 15 commercial banks convened to discuss active-active disaster recovery, hardware supply chain predictability, and local vendor SLA dependability.",
      author: {
        name: "Birhan Legi",
        role: "Operations Managing Director"
      },
      tags: ["Executive Roundtable", "Banking IT", "SLA Governance"]
    }
  ];

  const filteredArticles = articles.filter((art) => {
    const matchesTab = activeTab === "all" || art.category === activeTab;
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTab && matchesSearch;
  });

  const featured = articles.find((a) => a.featured);

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(62,125,162,0.3),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dde325]/20 border border-[#dde325]/40 text-[#dde325] text-xs font-semibold uppercase tracking-wider mb-6">
              <Newspaper className="w-4 h-4" />
              News, Updates & Technical Insights
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Insights from Ethiopia's <span className="text-[#dde325]">Leading Tech Engine</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
              Explore the latest company news, major deployment milestones, architectural whitepapers, and product announcements from Atlas Computer Technology.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Headline */}
      {featured && (
        <section className="py-14 bg-slate-950 text-white border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-[#3e7da2]/30 rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-[#dde325] text-slate-950 text-xs font-black uppercase tracking-wider">
                  Featured Headline
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {featured.date}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {featured.readTime}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4 leading-tight">
                {featured.title}
              </h2>

              <p className="text-base text-slate-300 leading-relaxed mb-6 max-w-3xl">
                {featured.excerpt}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-800">
                <div className="text-xs text-slate-400">
                  Published by <span className="font-bold text-white">{featured.author.name}</span> • {featured.author.role}
                </div>
                <Link
                  href="/case-studies"
                  className="px-6 py-3 rounded-xl bg-[#3e7da2] text-white font-bold hover:bg-[#326685] transition-all duration-200 flex items-center gap-2 text-xs"
                >
                  Read Full Migration Story
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

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
                placeholder="Search articles, announcements, topics..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#3e7da2] text-slate-800"
              />
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: "all", label: "All Insights" },
                { id: "company", label: "Company News" },
                { id: "product", label: "Product Releases" },
                { id: "technical", label: "Technical Articles" },
                { id: "events", label: "Industry Insights" }
              ].map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => setActiveTab(btn.id)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer ${
                    activeTab === btn.id
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

      {/* Articles Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredArticles
                .filter((a) => !a.featured)
                .map((art) => (
                  <motion.article
                    key={art.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-2xl border border-slate-200 p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#3e7da2] bg-[#3e7da2]/10 px-2.5 py-1 rounded-md">
                          {art.categoryLabel}
                        </span>
                        <div className="text-xs text-slate-400 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {art.readTime}
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug">
                        {art.title}
                      </h3>

                      <p className="text-xs text-slate-600 leading-relaxed mb-6">
                        {art.excerpt}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {art.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                      <div>
                        <div className="font-bold text-slate-800">{art.author.name}</div>
                        <div className="text-[11px] text-slate-400">{art.date}</div>
                      </div>
                      <span className="text-[#3e7da2] font-semibold flex items-center gap-1">
                        Read Story <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </motion.article>
                ))}
            </AnimatePresence>
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-16 text-slate-500 text-sm">
              No articles or insights matched your query.
            </div>
          )}
        </div>
      </section>

      {/* Newsletter / Contact Subscription */}
      <section className="py-20 bg-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Stay Ahead of National Enterprise Technology
          </h2>
          <p className="text-sm text-slate-300 mb-8 leading-relaxed">
            Subscribe to receive quarterly technical digests, upcoming webinar invites, and regulatory compliance updates directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter corporate email..."
              className="flex-1 px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#dde325]"
            />
            <button
              onClick={() => alert("Thank you for subscribing to ACT Tech Updates.")}
              className="px-6 py-3 rounded-xl bg-[#dde325] text-slate-950 font-bold hover:bg-[#c8ce20] transition-colors cursor-pointer text-sm"
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
