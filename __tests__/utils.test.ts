import { describe, it, expect } from "vitest";
import { periodColor, formatDate } from "@/lib/utils";

describe("periodColor", () => {
  it("returns warm colors for MORNING", () => {
    expect(periodColor("MORNING")).toBe("bg-accent-warm/15 text-accent-warm");
  });

  it("returns noon colors for AFTERNOON", () => {
    expect(periodColor("AFTERNOON")).toBe("bg-accent-noon/15 text-accent-noon");
  });

  it("returns dusk colors for EVENING and unknown", () => {
    expect(periodColor("EVENING")).toBe("bg-accent-dusk/15 text-accent-dusk");
    expect(periodColor("unknown")).toBe("bg-accent-dusk/15 text-accent-dusk");
    expect(periodColor(undefined)).toBe("bg-accent-dusk/15 text-accent-dusk");
  });
});

describe("formatDate", () => {
  it("formats date with default locale (en)", () => {
    const result = formatDate("2024-01-15", "en");
    expect(result).toContain("Jan");
    expect(result).toContain("15");
    expect(result).toContain("2024");
  });

  it("formats date with Finnish locale", () => {
    const result = formatDate("2024-01-15", "fi");
    expect(result).toContain("2024");
    expect(result).toContain("15");
  });

  it("uses custom date format options", () => {
    const result = formatDate("2024-06-15", "en", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    expect(result).toContain("June");
    expect(result).toContain("15");
    expect(result).toContain("2024");
  });

  it("falls back gracefully for unknown locale", () => {
    const result = formatDate("2024-01-15", "xx");
    expect(result).toBeTruthy();
  });
});
