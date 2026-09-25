import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getStoredArticles, updateStoredArticle, deleteStoredArticle } from "@/lib/news-data";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    // Try DB first
    let dbArticle: any = null;
    try {
      dbArticle = await prisma.newsArticle.findFirst({
        where: {
          OR: [{ slug }, { id: slug }],
        },
      });
    } catch (e) {
      // Ignore DB error
    }

    if (dbArticle) {
      const formatted = {
        id: dbArticle.id,
        slug: dbArticle.slug,
        title: dbArticle.title,
        category: dbArticle.category,
        categoryLabel: dbArticle.categoryLabel,
        date: dbArticle.date,
        readTime: dbArticle.readTime,
        imageUrl: dbArticle.imageUrl,
        excerpt: dbArticle.excerpt,
        content: dbArticle.content,
        featured: dbArticle.featured,
        author: {
          name: dbArticle.authorName,
          role: dbArticle.authorRole,
        },
        tags: typeof dbArticle.tags === "string" ? JSON.parse(dbArticle.tags || "[]") : dbArticle.tags,
        status: dbArticle.status,
      };
      return NextResponse.json({ success: true, data: formatted });
    }

    // Fallback to memory store
    const stored = getStoredArticles();
    const article = stored.find((a) => a.slug === slug || a.id === slug);

    if (!article) {
      return NextResponse.json(
        { success: false, error: "News article not found." },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: article });
  } catch (err: any) {
    console.error("GET /api/news/[slug] error:", err);
    return NextResponse.json(
      { success: false, error: err.message || "Failed to fetch article" },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const body = await req.json();

    const updatedMemory = updateStoredArticle(slug, body);

    try {
      await prisma.newsArticle.update({
        where: { slug },
        data: {
          ...(body.title && { title: body.title }),
          ...(body.category && { category: body.category }),
          ...(body.categoryLabel && { categoryLabel: body.categoryLabel }),
          ...(body.excerpt && { excerpt: body.excerpt }),
          ...(body.content && { content: body.content }),
          ...(body.imageUrl && { imageUrl: body.imageUrl }),
          ...(body.readTime && { readTime: body.readTime }),
          ...(body.featured !== undefined && { featured: body.featured }),
          ...(body.authorName && { authorName: body.authorName }),
          ...(body.authorRole && { authorRole: body.authorRole }),
          ...(body.tags && { tags: JSON.stringify(body.tags) }),
          ...(body.status && { status: body.status }),
        },
      });
    } catch (e) {
      console.warn("Prisma update failed, updated in-memory store.");
    }

    return NextResponse.json({ success: true, data: updatedMemory });
  } catch (err: any) {
    console.error("PUT /api/news/[slug] error:", err);
    return NextResponse.json(
      { success: false, error: err.message || "Failed to update article" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    deleteStoredArticle(slug);

    try {
      await prisma.newsArticle.delete({
        where: { slug },
      });
    } catch (e) {
      console.warn("Prisma delete failed, removed from in-memory store.");
    }

    return NextResponse.json({ success: true, message: "Article deleted successfully." });
  } catch (err: any) {
    console.error("DELETE /api/news/[slug] error:", err);
    return NextResponse.json(
      { success: false, error: err.message || "Failed to delete article" },
      { status: 500 }
    );
  }
}
