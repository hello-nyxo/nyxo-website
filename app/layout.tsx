import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nyxo.app"),
  title: {
    default: "Nyxo – Personalized Sleep Coaching",
    template: "%s – Nyxo",
  },
  description:
    "Nyxo is the best aid for improving your sleep quality. We combine leading sleep research techniques with your sleep tracker's data to provide you with personalized and actionable coaching.",
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
