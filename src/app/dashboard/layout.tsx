import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./globals.css";
import MainProviders from "@/providers/MainProvider";
import LayoutAdmin from "../../shared/layouts/admin/LayoutAdmin";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LayoutAdmin>{children}</LayoutAdmin>
      </body>
    </html>
  );
}
