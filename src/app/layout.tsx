import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Suspense } from "react";
import Loader from "./components/Loader";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Manoj Kumar Sharma",
  description: "Most Influential Author",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} font-montserrat antialiased min-h-screen flex flex-col`}
      >
        <Suspense fallback={<Loader />}>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
