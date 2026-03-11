"use client";

import dynamic from "next/dynamic";
import { type SearchableItem } from "@/components/CommandPalette";

const CommandPalette = dynamic(() => import("@/components/CommandPalette"), {
  ssr: false,
});

interface LazyCommandPaletteProps {
  items: SearchableItem[];
}

export default function LazyCommandPalette({ items }: LazyCommandPaletteProps) {
  return <CommandPalette items={items} />;
}
