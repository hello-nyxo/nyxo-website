import { describe, it, expect } from "vitest";
import {
  generatePageMetadata,
  generateArticleJsonLd,
  generateOrganizationJsonLd,
  generateWebSiteJsonLd,
} from "@/lib/seo";

describe("generatePageMetadata", () => {
  it("generates correct metadata with required fields", () => {
    const metadata = generatePageMetadata({
      title: "Test Page",
      description: "A test description",
      path: "/test",
      locale: "en",
    });

    expect(metadata.title).toBe("Test Page");
    expect(metadata.description).toBe("A test description");
    expect(metadata.openGraph?.title).toContain("Test Page");
    expect(metadata.twitter?.card).toBe("summary_large_image");
  });

  it("includes alternate language links", () => {
    const metadata = generatePageMetadata({
      title: "Test",
      description: "Test",
      path: "/test",
      locale: "en",
    });

    expect(metadata.alternates?.languages).toBeDefined();
    expect(metadata.alternates?.languages?.["en"]).toContain("/test");
    expect(metadata.alternates?.languages?.["fi"]).toContain("/fi/test");
  });

  it("sets noIndex when requested", () => {
    const metadata = generatePageMetadata({
      title: "Hidden",
      description: "Hidden page",
      path: "/hidden",
      locale: "en",
      noIndex: true,
    });

    expect(metadata.robots).toEqual({ index: false, follow: false });
  });
});

describe("generateArticleJsonLd", () => {
  it("generates valid article JSON-LD", () => {
    const jsonLd = generateArticleJsonLd({
      title: "Test Article",
      description: "Test description",
      url: "https://nyxo.app/blog/test",
    });

    expect(jsonLd["@context"]).toBe("https://schema.org");
    expect(jsonLd["@type"]).toBe("Article");
    expect(jsonLd.headline).toBe("Test Article");
  });
});

describe("generateOrganizationJsonLd", () => {
  it("generates valid organization JSON-LD", () => {
    const jsonLd = generateOrganizationJsonLd();
    expect(jsonLd["@type"]).toBe("Organization");
    expect(jsonLd.name).toBe("Nyxo");
  });
});

describe("generateWebSiteJsonLd", () => {
  it("generates valid website JSON-LD", () => {
    const jsonLd = generateWebSiteJsonLd();
    expect(jsonLd["@type"]).toBe("WebSite");
    expect(jsonLd.url).toBe("https://nyxo.app");
  });
});
