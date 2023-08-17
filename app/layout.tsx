import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import {Inter} from 'next/font/google';

export const metadata: Metadata = {
  title: "Google Shopping",
  description: "Inspired from Google shopping",
};

const inter = Inter({ subsets: ["latin"] })




export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
