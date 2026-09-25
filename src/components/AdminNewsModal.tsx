"use client";

import { useState, useEffect } from "react";
import { X, Sparkles, Image as ImageIcon, FileText, Tag, User, Globe } from "lucide-react";
import { toast } from "sonner";
import { NewsArticleItem } from "@/lib/news-data";

interface AdminNewsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  editArticle?: NewsArticleItem | null;
}

const PRESET_IMAGES = [
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1556742049-0a67daf64f42?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1200&q=80"
];

export default function AdminNewsModal({
  isOpen,
  onClose,
  onSuccess,
  editArticle
}: AdminNewsModalProps) {
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    category: "company",
    categoryLabel: "Company News",
    date: "",
    readTime: "5 min read",
    imageUrl: PRESET_IMAGES[0],
    excerpt: "",
    content: "",
    featured: false,
    authorName: "Atlas Computer Technology",
    authorRole: "Enterprise Solutions",
    tags: "EthSwitch, FinTech, Infrastructure"
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (editArticle) {
      setFormData({
        title: editArticle.title || "",
        slug: editArticle.slug || "",
        category: editArticle.category || "company",
        categoryLabel: editArticle.categoryLabel || "Company News",
        date: editArticle.date || "",
        readTime: editArticle.readTime || "5 min read",
        imageUrl: editArticle.imageUrl || PRESET_IMAGES[0],
        excerpt: editArticle.excerpt || "",
        content: editArticle.content || "",
        featured: editArticle.featured || false,
        authorName: editArticle.author?.name || "Atlas Computer Technology",
        authorRole: editArticle.author?.role || "Enterprise Solutions",
        tags: Array.isArray(editArticle.tags) ? editArticle.tags.join(", ") : editArticle.tags || ""
      });
    } else {
      setFormData({
        title: "",
        slug: "",
        category: "company",
        categoryLabel: "Company News",
        date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
        readTime: "5 min read",
        imageUrl: PRESET_IMAGES[0],
        excerpt: "",
        content: "",
        featured: false,
        authorName: "Atlas Computer Technology",
        authorRole: "Enterprise Solutions",
        tags: "EthSwitch, FinTech, Infrastructure"
      });
    }
  }, [editArticle, isOpen]);

  if (!isOpen) return null;

  const handleTitleChange = (newTitle: string) => {
    const autoSlug = newTitle
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    setFormData((prev) => ({
      ...prev,
      title: newTitle,
      slug: prev.slug === "" || editArticle ? prev.slug || autoSlug : autoSlug
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title.trim() || !formData.excerpt.trim() || !formData.content.trim()) {
      toast.error("Please fill out the title, excerpt, and full content.");
      return;
    }

    try {
      setIsSubmitting(true);

      const endpoint = editArticle ? `/api/news/${editArticle.slug}` : "/api/news";
      const method = editArticle ? "PUT" : "POST";

      const payload = {
        ...formData,
        tags: formData.tags.split(",").map((t) => t.trim()).filter(Boolean)
      };

      const res = await fetch(endpoint, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to save news article.");
      }

      toast.success(editArticle ? "Article Updated Successfully" : "News Article Created & Published!");
      onSuccess();
      onClose();
    } catch (err: any) {
      console.error("News modal submit error:", err);
      toast.error(err.message || "An error occurred while saving article.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-900/60 backdrop-blur-xs font-sans">
      <div className="bg-white border border-neutral-200 rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 bg-neutral-50">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#3e7da2]" />
            <h2 className="text-base font-bold text-neutral-900">
              {editArticle ? "Edit News Article" : "Create New Press Article & Publication"}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-neutral-400 hover:text-neutral-700 p-1 rounded transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-5 text-xs font-mono text-neutral-800 flex-1">
          {/* Title & Slug */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-bold uppercase text-neutral-600 mb-1">
                Article Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => handleTitleChange(e.target.value)}
                placeholder="e.g., EthSwitch S.C. Data Center Migration Success"
                className="w-full px-3 py-2 border border-neutral-300 rounded font-sans text-xs focus:border-[#3e7da2] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase text-neutral-600 mb-1">
                URL Slug
              </label>
              <input
                type="text"
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                placeholder="ethswitch-data-center-migration"
                className="w-full px-3 py-2 border border-neutral-300 rounded font-mono text-xs focus:border-[#3e7da2] focus:outline-none bg-neutral-50"
              />
            </div>
          </div>

          {/* Category & Date / Read Time */}
          <div className="grid sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-[11px] font-bold uppercase text-neutral-600 mb-1">Category</label>
              <select
                value={formData.category}
                onChange={(e) => {
                  const val = e.target.value;
                  const labels: Record<string, string> = {
                    company: "Company News",
                    product: "Product Release",
                    technical: "Technical Article",
                    events: "Industry Insights"
                  };
                  setFormData({ ...formData, category: val, categoryLabel: labels[val] || "News" });
                }}
                className="w-full px-3 py-2 border border-neutral-300 rounded font-sans text-xs focus:border-[#3e7da2] focus:outline-none bg-white"
              >
                <option value="company">Company News</option>
                <option value="product">Product Release</option>
                <option value="technical">Technical Article</option>
                <option value="events">Industry Insights</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase text-neutral-600 mb-1">Publication Date</label>
              <input
                type="text"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                placeholder="March 25, 2026"
                className="w-full px-3 py-2 border border-neutral-300 rounded font-sans text-xs focus:border-[#3e7da2] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase text-neutral-600 mb-1">Estimated Read Time</label>
              <input
                type="text"
                value={formData.readTime}
                onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                placeholder="5 min read"
                className="w-full px-3 py-2 border border-neutral-300 rounded font-sans text-xs focus:border-[#3e7da2] focus:outline-none"
              />
            </div>
          </div>

          {/* Cover Image URL & Presets */}
          <div>
            <label className="block text-[11px] font-bold uppercase text-neutral-600 mb-1">Cover Image URL</label>
            <input
              type="text"
              value={formData.imageUrl}
              onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
              placeholder="https://images.unsplash.com/..."
              className="w-full px-3 py-2 border border-neutral-300 rounded font-mono text-xs focus:border-[#3e7da2] focus:outline-none mb-2"
            />
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              <span className="text-[10px] text-neutral-500 shrink-0">Presets:</span>
              {PRESET_IMAGES.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setFormData({ ...formData, imageUrl: img })}
                  className={`w-8 h-8 rounded border overflow-hidden shrink-0 cursor-pointer ${
                    formData.imageUrl === img ? "border-2 border-[#3e7da2]" : "border-neutral-200"
                  }`}
                >
                  <img src={img} alt="preset" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Excerpt */}
          <div>
            <label className="block text-[11px] font-bold uppercase text-neutral-600 mb-1">
              Short Excerpt / Teaser <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              rows={2}
              value={formData.excerpt}
              onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
              placeholder="Brief summary of the article displayed on news cards..."
              className="w-full px-3 py-2 border border-neutral-300 rounded font-sans text-xs focus:border-[#3e7da2] focus:outline-none"
            />
          </div>

          {/* Full Content */}
          <div>
            <label className="block text-[11px] font-bold uppercase text-neutral-600 mb-1">
              Full Article Body Content (Markdown supported) <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              rows={8}
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              placeholder="## Section Title&#10;&#10;Detailed article paragraph content...&#10;&#10;> Quote block&#10;&#10;- Feature 1&#10;- Feature 2"
              className="w-full px-3 py-2 border border-neutral-300 rounded font-mono text-xs focus:border-[#3e7da2] focus:outline-none"
            />
          </div>

          {/* Author Name, Role & Tags */}
          <div className="grid sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-[11px] font-bold uppercase text-neutral-600 mb-1">Author Name</label>
              <input
                type="text"
                value={formData.authorName}
                onChange={(e) => setFormData({ ...formData, authorName: e.target.value })}
                className="w-full px-3 py-2 border border-neutral-300 rounded font-sans text-xs focus:border-[#3e7da2] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase text-neutral-600 mb-1">Author Role</label>
              <input
                type="text"
                value={formData.authorRole}
                onChange={(e) => setFormData({ ...formData, authorRole: e.target.value })}
                className="w-full px-3 py-2 border border-neutral-300 rounded font-sans text-xs focus:border-[#3e7da2] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase text-neutral-600 mb-1">Topic Tags</label>
              <input
                type="text"
                value={formData.tags}
                onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                placeholder="EthSwitch, Banking, Security"
                className="w-full px-3 py-2 border border-neutral-300 rounded font-sans text-xs focus:border-[#3e7da2] focus:outline-none"
              />
            </div>
          </div>

          {/* Featured Checkbox */}
          <div className="flex items-center gap-2 pt-2">
            <input
              type="checkbox"
              id="featured"
              checked={formData.featured}
              onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
              className="w-4 h-4 rounded text-[#3e7da2] focus:ring-[#3e7da2] border-neutral-300 cursor-pointer"
            />
            <label htmlFor="featured" className="text-xs font-sans font-bold text-neutral-800 cursor-pointer">
              Set as Featured Spotlight Headline on News Page
            </label>
          </div>

          {/* Actions Footer */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-neutral-200">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-neutral-300 rounded text-neutral-700 hover:bg-neutral-50 transition-colors font-sans text-xs font-semibold cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2 bg-neutral-900 hover:bg-neutral-800 text-white rounded font-sans text-xs font-bold transition-colors disabled:opacity-50 cursor-pointer flex items-center gap-1.5"
            >
              {isSubmitting ? "Saving..." : editArticle ? "Update Article" : "Publish Article"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
