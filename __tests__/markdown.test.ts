import { describe, it, expect } from "vitest";
import { getAllPostSlugs, getAllPosts, getAllTags } from "@/lib/markdown";

describe("markdown utilities", () => {
  it("getAllPostSlugs returns an array", () => {
    const slugs = getAllPostSlugs();
    expect(Array.isArray(slugs)).toBe(true);
  });

  it("getAllPosts returns sorted posts", () => {
    const posts = getAllPosts();
    expect(Array.isArray(posts)).toBe(true);

    if (posts.length >= 2) {
      const dates = posts.map((p) => new Date(p.date).getTime());
      for (let i = 1; i < dates.length; i++) {
        expect(dates[i - 1]).toBeGreaterThanOrEqual(dates[i]);
      }
    }
  });

  it("getAllPosts returns valid post metadata shape", () => {
    const posts = getAllPosts();
    for (const post of posts) {
      expect(post).toHaveProperty("slug");
      expect(post).toHaveProperty("title");
      expect(post).toHaveProperty("date");
      expect(post).toHaveProperty("tags");
      expect(Array.isArray(post.tags)).toBe(true);
    }
  });

  it("getAllTags returns tags with counts", () => {
    const tags = getAllTags();
    expect(Array.isArray(tags)).toBe(true);
    for (const t of tags) {
      expect(t).toHaveProperty("tag");
      expect(t).toHaveProperty("count");
      expect(t.count).toBeGreaterThan(0);
    }
  });
});
