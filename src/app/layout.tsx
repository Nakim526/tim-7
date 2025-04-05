"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import { usePathname } from "next/navigation";
// import { SessionProvider } from "next-auth/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const disableLayout = ["/dashboard", "/auth/login", "/auth/register"];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentPath = usePathname();
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main>
          {/* <SessionProvider> */}
          {disableLayout.includes(currentPath) ? (
            <section className="p-0!">{children}</section>
          ) : (
            <div>
              <Navbar />
              <section className="relative z-2">{children}</section>
              <Footer />
            </div>
          )}
          {/* </SessionProvider> */}
        </main>
      </body>
    </html>
  );
}
