import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Bai_Jamjuree } from "next/font/google";

const BaiJamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "mimosa | Home",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={BaiJamjuree.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
