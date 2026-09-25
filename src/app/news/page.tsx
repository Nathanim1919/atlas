"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Newspaper,
  Calendar,
  Clock,
  ArrowRight,
  Search,
  ChevronRight,
  Tag,
  Building2,
  Sparkles,
  BookOpen
} from "lucide-react";
import { NewsArticleItem } from "@/lib/news-data";

export default function NewsPage() {
  const [articles, setArticles] = useState<NewsArticleItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    async function loadNews() {
      try {
        setLoading(true);
        const res = await fetch("/api/news");
        const data = await res.json();
        if (data.success && Array.isArray(data.data)) {
          setArticles(data.data);
        }
      } catch (err) {
        console.error("Error loading news articles:", err);
      } finally {
        setLoading(false);
      }
    }
    loadNews();
  }, []);

  const filteredArticles = articles.filter((art) => {
    const matchesTab = activeTab === "all" || art.category === activeTab;
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (art.tags && art.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())));
    return matchesTab && matchesSearch;
  });

  const featured = articles.find((a) => a.featured) || articles[0];
  const gridArticles = filteredArticles.filter((a) => a.id !== featured?.id);

  return (
    <div className="bg-white font-sans min-h-screen text-neutral-900 selection:bg-[#3e7da2] selection:text-white">
      {/* Light Enterprise Hero */}
      <section className="relative pt-24 pb-20 bg-neutral-50 border-b border-neutral-200 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-500 mb-6">
            <Link href="/" className="hover:text-neutral-900 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-neutral-400" />
            <span className="text-[#3e7da2] font-semibold">News & Insights</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white border border-neutral-200 shadow-xs text-neutral-700 text-xs font-mono mb-6">
              <Newspaper className="w-3.5 h-3.5 text-[#3e7da2]" />
              <span>Company News, Technical Architecture & Releases</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 mb-6 leading-tight">
              Insights from Ethiopia&apos;s Financial Tech Leader
            </h1>

            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-8">
              Explore the latest press announcements, national deployment milestones, technical whitepapers, and product releases from Atlas Computer Technology.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article Spotlight */}
      {featured && !loading && (
        <section className="py-16 bg-white border-b border-neutral-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="bg-neutral-50 border border-neutral-200 rounded overflow-hidden shadow-xs hover:border-neutral-300 transition-colors">
              <div className="grid lg:grid-cols-12 items-center">
                {featured.imageUrl && (
                  <div className="lg:col-span-6 h-64 lg:h-full overflow-hidden border-b lg:border-b-0 lg:border-r border-neutral-200">
                    <img
                      src={featured.imageUrl}
                      alt={featured.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <div className={`p-8 sm:p-12 ${featured.imageUrl ? "lg:col-span-6" : "lg:col-span-12"}`}>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#3e7da2] bg-white border border-neutral-200 px-2.5 py-1 rounded">
                      {featured.categoryLabel || featured.category}
                    </span>
                    <span className="text-xs font-mono text-neutral-500 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                      {featured.date}
                    </span>
                    <span className="text-xs font-mono text-neutral-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-neutral-400" />
                      {featured.readTime}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mb-4 leading-tight">
                    {featured.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
                    {featured.excerpt}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-neutral-200">
                    <div className="text-xs font-mono text-neutral-500">
                      By <span className="font-bold text-neutral-900">{featured.author.name}</span>
                    </div>

                    <Link
                      href={`/news/${featured.slug}`}
                      className="px-5 py-2.5 rounded bg-neutral-900 text-white font-bold text-xs font-mono uppercase tracking-wider hover:bg-neutral-800 transition-colors flex items-center gap-2"
                    >
                      <span>Read Full Story</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#dde325]" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

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
                placeholder="Search articles, topics, releases..."
                className="w-full pl-10 pr-4 py-2.5 rounded bg-white border border-neutral-200 text-xs font-mono focus:outline-none focus:border-[#3e7da2] text-neutral-900"
              />
            </div>

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
                  className={`px-3 py-1.5 rounded text-xs font-mono font-semibold transition-colors cursor-pointer ${
                    activeTab === btn.id
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

      {/* News Articles Grid */}
      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-20 font-mono text-xs text-neutral-500">
              <div className="w-6 h-6 border-2 border-neutral-300 border-t-[#3e7da2] rounded-full animate-spin mx-auto mb-3" />
              Loading Articles...
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gridArticles.map((art) => (
                <Link
                  key={art.id}
                  href={`/news/${art.slug}`}
                  className="bg-neutral-50 border border-neutral-200 rounded overflow-hidden flex flex-col justify-between hover:border-neutral-300 transition-colors group"
                >
                  <div>
                    {art.imageUrl && (
                      <div className="h-44 overflow-hidden border-b border-neutral-200">
                        <img
                          src={art.imageUrl}
                          alt={art.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}

                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#3e7da2] bg-white border border-neutral-200 px-2 py-0.5 rounded">
                          {art.categoryLabel || art.category}
                        </span>
                        <span className="text-[11px] font-mono text-neutral-500">{art.readTime}</span>
                      </div>

                      <h3 className="text-base font-bold text-neutral-900 mb-2 leading-snug group-hover:text-[#3e7da2] transition-colors">
                        {art.title}
                      </h3>

                      <p className="text-xs text-neutral-600 leading-relaxed mb-4 line-clamp-3">
                        {art.excerpt}
                      </p>

                      {art.tags && art.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {art.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] font-mono px-2 py-0.5 rounded bg-white border border-neutral-200/80 text-neutral-600"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="p-6 pt-0 text-[11px] font-mono text-neutral-500 border-t border-neutral-200/80 mt-auto flex items-center justify-between">
                    <span>{art.date}</span>
                    <span className="text-[#3e7da2] font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      <span>Read Story</span> →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {!loading && gridArticles.length === 0 && (
            <div className="text-center py-16 text-neutral-500 text-xs font-mono">
              No news articles found matching your query.
            </div>
          )}
        </div>
      </section>

      {/* Subscription Banner */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-white border border-neutral-200 p-8 sm:p-12 rounded flex flex-col md:flex-row items-center justify-between gap-8 shadow-xs">
            <div className="max-w-2xl">
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-2">
                Subscribe to ACT Technology Insights
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Receive quarterly technical digests, whitepaper updates, and regulatory compliance news directly in your inbox.
              </p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter corporate email..."
                className="px-4 py-2.5 rounded bg-neutral-50 border border-neutral-200 text-xs font-mono text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-[#3e7da2] flex-1 md:w-64"
              />
              <button
                type="button"
                onClick={() => alert("Thank you for subscribing to ACT Tech Updates.")}
                className="px-5 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white font-bold rounded text-xs uppercase font-mono tracking-wider transition-colors shrink-0 cursor-pointer"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
