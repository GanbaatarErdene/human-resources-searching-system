"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { color } from "framer-motion";
import MainLayout from "@/components/layouts/MainLayout";
import Content from "@/components/Content";
import { usePathname } from "next/navigation";
const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App", 
//   description: "Generated by create next app",
// };

export default function RootLayout({ 
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  // console.log(pathname);
  const isLoginPage = pathname === '/login';
  
    return (
    <html lang="en">
      {/* <body className={inter.className}><Providers> */}
      <body className="bg-white"><Providers>
      {isLoginPage ? children : <MainLayout>{children}</MainLayout>}
        </Providers></body>
    </html>
  );
}
