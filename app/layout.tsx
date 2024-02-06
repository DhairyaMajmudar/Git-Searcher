import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Github Searcher",
  description:
    "Github Search web app empowered by Github GraphQL API and NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
