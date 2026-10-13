import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nyxo.app"),
  title: {
    default: "Nyxo – Free Science-Backed Sleep Coaching",
    template: "%s – Nyxo",
  },
  description:
    "A free, science-backed sleep coaching program: lessons, daily habits and quizzes written with sleep researchers from the University of Helsinki.",
  applicationName: "Nyxo",
  icons: {
    icon: "/images/icon.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
