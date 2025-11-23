import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ICEEM - Innovation & Excellence in Engineering Management",
  description: "Leading provider of engineering management solutions and consulting services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
