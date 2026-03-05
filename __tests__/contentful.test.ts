import { describe, it, expect } from "vitest";
import { normalizeImageUrl, renderRichText } from "@/lib/contentful";

describe("normalizeImageUrl", () => {
  it("prepends https: to protocol-relative URLs", () => {
    expect(normalizeImageUrl("//images.ctfassets.net/test.jpg")).toBe(
      "https://images.ctfassets.net/test.jpg"
    );
  });

  it("returns absolute URLs unchanged", () => {
    expect(normalizeImageUrl("https://example.com/test.jpg")).toBe(
      "https://example.com/test.jpg"
    );
  });

  it("returns undefined for falsy input", () => {
    expect(normalizeImageUrl(undefined)).toBeUndefined();
    expect(normalizeImageUrl("")).toBeUndefined();
  });
});

describe("renderRichText", () => {
  it("returns empty string for null/undefined", () => {
    expect(renderRichText(null)).toBe("");
    expect(renderRichText(undefined)).toBe("");
  });

  it("returns empty string for invalid input", () => {
    expect(renderRichText("not a rich text document")).toBe("");
  });
});
