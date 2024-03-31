import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../components/Header";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rohan Raghuwanshi",
  description: "A creative individual who likes building stuff on the web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
      <Header/>
      <section id="content" className="s-content">
      {children}
      </section>
      {/* <Footer/> */}
      </body>
    </html>
  );
}
