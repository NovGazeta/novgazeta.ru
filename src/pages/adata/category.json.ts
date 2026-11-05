import { getCollection } from "astro:content";
import { getCategoryList, visiblePosts } from "@/lib/posts";

export async function GET() {
  const posts = visiblePosts(await getCollection("posts"));

  return new Response(JSON.stringify(getCategoryList(posts)), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=300",
    },
  });
}
