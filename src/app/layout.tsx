import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./components/navbar"
import Navbar from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: ":)",
  description: "Site super!!!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col">
          <Navbar />
          <div className="pt-3 pl-3">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
