import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const ndot57 = localFont({
  src: "./fonts/Ndot57-Regular.otf",
  variable: "--font-ndot57",
  weight: "400",
  style: "normal",
});

export const metadata: Metadata = {
  title: "Openclaw Marketplace | ClawPark",
  description:
    "Buy, sell, and synthesize OpenClaw agents in a living ecosystem of intelligence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ndot57.variable} antialiased`}>{children}</body>
    </html>
  );
}
