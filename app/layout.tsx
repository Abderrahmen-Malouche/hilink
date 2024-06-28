import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";



export const metadata: Metadata = {
  title: "HiLink",
  description: "Travel UI/UX App fpr traveling",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <Navbar/>
        {children}
          <main>
          <Footer/>
          </main>
        </body>
    </html>
  );
}
