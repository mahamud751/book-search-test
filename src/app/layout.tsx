import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Book Search Website",
  description: "Search for books using Open Library API",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen">
        <main className="max-w-4xl mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
