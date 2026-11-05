import { getCollection } from "astro:content";
import { formatDate, postHref, readingLabel, visiblePosts } from "@/lib/posts";

/**
 * Static search index consumed by the header command palette. It holds post
 * metadata only, never the article body, so it stays small enough to fetch on
 * the first search.
 */
export async function GET() {
  const posts = visiblePosts(await getCollection("articles"));
  const index = posts.map((post) => ({
    href: postHref(post),
    source: post.data.source,
    title: post.data.title,
    subtitle: post.data.subtitle,
    rubric: post.data.rubric,
    genre: post.data.genre,
    authors: post.data.authors,
    tags: post.data.tags,
    date: formatDate(post.data.date),
    reading: readingLabel(post),
  }));

  return new Response(JSON.stringify(index), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=300",
    },
  });
}
