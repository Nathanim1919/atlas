"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  Bookmark,
  Check,
  ChevronRight,
  User,
  Building2,
  Sparkles,
  Newspaper,
  Tag
} from "lucide-react";
import { toast } from "sonner";
import { NewsArticleItem } from "@/lib/news-data";

export default function SingleNewsPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const [article, setArticle] = useState<NewsArticleItem | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<NewsArticleItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    async function fetchArticle() {
      try {
        setLoading(true);
        const res = await fetch(`/api/news/${slug}`);
        const data = await res.json();

        if (data.success && data.data) {
          setArticle(data.data);
        } else {
          setArticle(null);
        }

        // Fetch related articles
        const allRes = await fetch("/api/news");
        const allData = await allRes.json();
        if (allData.success && Array.isArray(allData.data)) {
          setRelatedArticles(allData.data.filter((item: NewsArticleItem) => item.slug !== slug).slice(0, 3));
        }
      } catch (err) {
        console.error("Error fetching single article:", err);
      } finally {
        setLoading(false);
      }
    }

    if (slug) {
      fetchArticle();
    }
  }, [slug]);

  const copyShareLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      toast.success("Link copied to clipboard!");
      setTimeout(() => setCopied(false), 2500);
    }
  };

  if (loading) {
    return (
      <div className="bg-white min-h-screen pt-32 pb-20 flex flex-col items-center justify-center text-neutral-500 font-mono text-xs">
        <div className="w-8 h-8 border-2 border-neutral-300 border-t-[#3e7da2] rounded-full animate-spin mb-4" />
        <span>Loading Enterprise Publication...</span>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="bg-white min-h-screen pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Newspaper className="w-12 h-12 text-neutral-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-neutral-900 mb-2">Article Not Found</h1>
          <p className="text-xs text-neutral-600 mb-6">The requested publication may have been moved or archived.</p>
          <Link
            href="/news"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-900 text-white rounded text-xs font-mono font-bold hover:bg-neutral-800"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to News & Insights</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white font-sans min-h-screen text-neutral-900 selection:bg-[#3e7da2] selection:text-white">
      {/* Light Breadcrumb & Header */}
      <section className="pt-24 pb-12 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-500 mb-6">
            <Link href="/" className="hover:text-neutral-900 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-neutral-400" />
            <Link href="/news" className="hover:text-neutral-900 transition-colors">News & Insights</Link>
            <ChevronRight className="w-3 h-3 text-neutral-400" />
            <span className="text-[#3e7da2] font-semibold truncate max-w-[200px] sm:max-w-xs">{article.title}</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#3e7da2] bg-white border border-neutral-200 px-3 py-1 rounded">
              {article.categoryLabel || article.category}
            </span>
            <span className="text-xs font-mono text-neutral-500 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-neutral-400" />
              {article.date}
            </span>
            <span className="text-xs font-mono text-neutral-500 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-neutral-400" />
              {article.readTime}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight mb-6">
            {article.title}
          </h1>

          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-8">
            {article.excerpt}
          </p>

          {/* Author Card & Actions Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-neutral-200/80">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-neutral-200 text-neutral-700 flex items-center justify-center font-bold text-sm overflow-hidden border border-neutral-300">
                {article.author.avatar ? (
                  <img src={article.author.avatar} alt={article.author.name} className="w-full h-full object-cover" />
                ) : (
                  <User className="w-5 h-5 text-neutral-600" />
                )}
              </div>
              <div>
                <div className="text-xs font-bold text-neutral-900">{article.author.name}</div>
                <div className="text-[11px] font-mono text-neutral-500">{article.author.role}</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={copyShareLink}
                className="px-3.5 py-1.5 bg-white hover:bg-neutral-100 text-neutral-700 border border-neutral-300 rounded text-xs font-mono font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5 text-neutral-500" />}
                <span>{copied ? "Copied Link" : "Share Article"}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 bg-white border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-6">
          {/* Article Featured Image */}
          {article.imageUrl && (
            <div className="mb-12 rounded overflow-hidden border border-neutral-200 shadow-xs">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full max-h-[480px] object-cover"
              />
              <div className="bg-neutral-50 px-4 py-2 border-t border-neutral-200 text-[11px] font-mono text-neutral-500 flex justify-between">
                <span>Enterprise Press Milestone — Atlas Computer Technology</span>
                <span>Verified Reference</span>
              </div>
            </div>
          )}

          {/* Article Body */}
          <div className="prose max-w-none text-neutral-800 text-sm sm:text-base leading-relaxed space-y-6">
            {article.content.split("\n\n").map((paragraph, i) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={i} className="text-xl sm:text-2xl font-bold text-neutral-900 mt-8 mb-4 pt-4 border-t border-neutral-100">
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              }
              if (paragraph.startsWith("### ")) {
                return (
                  <h3 key={i} className="text-base sm:text-lg font-bold text-neutral-900 mt-6 mb-3">
                    {paragraph.replace("### ", "")}
                  </h3>
                );
              }
              if (paragraph.startsWith("> ")) {
                return (
                  <blockquote key={i} className="p-4 my-6 bg-neutral-50 border-l-4 border-[#3e7da2] rounded-r text-xs sm:text-sm italic text-neutral-700">
                    {paragraph.replace("> ", "")}
                  </blockquote>
                );
              }
              if (paragraph.startsWith("- ")) {
                const items = paragraph.split("\n").map((line) => line.replace("- ", ""));
                return (
                  <ul key={i} className="space-y-2 my-4 pl-4">
                    {items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#3e7da2] shrink-0 mt-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={i} className="text-neutral-700 leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <div className="mt-12 pt-6 border-t border-neutral-200 flex flex-wrap items-center gap-2">
              <Tag className="w-3.5 h-3.5 text-neutral-400" />
              <span className="text-xs font-mono text-neutral-500 uppercase mr-2">Topic Tags:</span>
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-3 py-1 bg-neutral-100 border border-neutral-200 text-neutral-700 rounded"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Related Articles Section */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-neutral-50 border-b border-neutral-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-[#3e7da2] font-mono text-xs uppercase tracking-wider block mb-1 font-bold">
                  Recommended Publications
                </span>
                <h2 className="text-2xl font-bold text-neutral-900 tracking-tight">Related Technical Articles & News</h2>
              </div>
              <Link
                href="/news"
                className="text-xs font-mono font-bold text-[#3e7da2] hover:text-neutral-900 transition-colors flex items-center gap-1"
              >
                <span>View All Articles</span>
                <ArrowLeft className="w-3.5 h-3.5 rotate-180" />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/news/${rel.slug}`}
                  className="bg-white border border-neutral-200 rounded overflow-hidden shadow-xs hover:border-neutral-300 transition-colors flex flex-col justify-between group"
                >
                  <div>
                    {rel.imageUrl && (
                      <div className="h-40 overflow-hidden border-b border-neutral-100">
                        <img
                          src={rel.imageUrl}
                          alt={rel.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono font-bold uppercase text-[#3e7da2] bg-neutral-50 border border-neutral-200 px-2 py-0.5 rounded">
                          {rel.categoryLabel || rel.category}
                        </span>
                        <span className="text-[10px] font-mono text-neutral-400">{rel.readTime}</span>
                      </div>

                      <h3 className="text-sm font-bold text-neutral-900 mb-2 group-hover:text-[#3e7da2] transition-colors leading-snug line-clamp-2">
                        {rel.title}
                      </h3>

                      <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed mb-4">
                        {rel.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0 text-[11px] font-mono text-neutral-500 border-t border-neutral-100 mt-auto flex items-center justify-between">
                    <span>{rel.date}</span>
                    <span className="text-[#3e7da2] font-bold">Read More →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
