import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { INITIAL_ARTICLES, getStoredArticles, addStoredArticle, NewsArticleItem } from "@/lib/news-data";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");
    const query = searchParams.get("query");

    // Try fetching from Prisma DB
    let articles: any[] = [];
    try {
      articles = await prisma.newsArticle.findMany({
        where: {
          status: "PUBLISHED",
          ...(category && category !== "all" ? { category } : {}),
        },
        orderBy: { createdAt: "desc" },
      });
    } catch (e) {
      console.warn("Prisma NewsArticle query failed or model not migrated yet, using stored dataset fallback.");
    }

    if (!articles || articles.length === 0) {
      // Fallback to in-memory/seed store
      const stored = getStoredArticles();
      articles = stored.map((item) => ({
        id: item.id,
        slug: item.slug,
        title: item.title,
        category: item.category,
        categoryLabel: item.categoryLabel,
        date: item.date,
        readTime: item.readTime,
        imageUrl: item.imageUrl,
        excerpt: item.excerpt,
        content: item.content,
        featured: item.featured ?? false,
        authorName: item.author.name,
        authorRole: item.author.role,
        tags: JSON.stringify(item.tags),
        status: item.status || "PUBLISHED",
      }));
    }

    // Filter by search query if provided
    if (query) {
      const q = query.toLowerCase();
      articles = articles.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q) ||
          a.tags.toLowerCase().includes(q)
      );
    }

    const formatted = articles.map((a) => ({
      id: a.id,
      slug: a.slug,
      title: a.title,
      category: a.category,
      categoryLabel: a.categoryLabel,
      date: a.date,
      readTime: a.readTime,
      imageUrl: a.imageUrl,
      excerpt: a.excerpt,
      content: a.content,
      featured: Boolean(a.featured),
      author: {
        name: a.authorName,
        role: a.authorRole,
      },
      tags: typeof a.tags === "string" ? JSON.parse(a.tags || "[]") : a.tags,
      status: a.status,
    }));

    return NextResponse.json({ success: true, data: formatted });
  } catch (err: any) {
    console.error("GET /api/news error:", err);
    return NextResponse.json(
      { success: false, error: err.message || "Failed to fetch news articles" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      title,
      slug,
      category,
      categoryLabel,
      date,
      readTime,
      imageUrl,
      excerpt,
      content,
      featured,
      authorName,
      authorRole,
      tags,
    } = body;

    if (!title || !excerpt || !content) {
      return NextResponse.json(
        { success: false, error: "Title, excerpt, and content are required." },
        { status: 400 }
      );
    }

    const generatedSlug =
      slug ||
      title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

    const newArticleItem: NewsArticleItem = {
      id: generatedSlug,
      slug: generatedSlug,
      title,
      category: category || "company",
      categoryLabel: categoryLabel || "Company News",
      date: date || new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
      readTime: readTime || "4 min read",
      imageUrl: imageUrl || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
      excerpt,
      content,
      featured: Boolean(featured),
      author: {
        name: authorName || "Atlas Computer Technology",
        role: authorRole || "Enterprise Solutions",
      },
      tags: Array.isArray(tags) ? tags : typeof tags === "string" ? tags.split(",").map((t: string) => t.trim()) : [],
      status: "PUBLISHED",
    };

    // Save to memory store first for immediate response
    addStoredArticle(newArticleItem);

    // Try saving to Prisma DB
    try {
      await prisma.newsArticle.create({
        data: {
          slug: newArticleItem.slug,
          title: newArticleItem.title,
          category: newArticleItem.category,
          categoryLabel: newArticleItem.categoryLabel,
          date: newArticleItem.date,
          readTime: newArticleItem.readTime,
          imageUrl: newArticleItem.imageUrl,
          excerpt: newArticleItem.excerpt,
          content: newArticleItem.content,
          featured: newArticleItem.featured,
          authorName: newArticleItem.author.name,
          authorRole: newArticleItem.author.role,
          tags: JSON.stringify(newArticleItem.tags),
          status: "PUBLISHED",
        },
      });
    } catch (e) {
      console.warn("Prisma NewsArticle creation failed, saved to in-memory store.");
    }

    return NextResponse.json({ success: true, data: newArticleItem }, { status: 201 });
  } catch (err: any) {
    console.error("POST /api/news error:", err);
    return NextResponse.json(
      { success: false, error: err.message || "Failed to create news article" },
      { status: 500 }
    );
  }
}
