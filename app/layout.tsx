import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Big Cadi VIP — Premium Transportation in St. Maarten",
  description: "VIP airport transfers, island tours, hotel shuttles, and private charters across St. Maarten (SXM).",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-dark-soft antialiased">
        {children}
      </body>
    </html>
  );
}
