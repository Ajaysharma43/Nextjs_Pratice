"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/public/Component/Navbar/Navbar";
import { Provider } from "react-redux";
import Store from "@/lib/store";
import React, { Suspense } from "react";
import { ThemeProvider } from "next-themes";
import { usePathname } from "next/navigation";
import Loading from "./loading";


function RootLayout({ children }) {
  const pathname = usePathname()
  const isHidden = pathname.startsWith('/dashboard')
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="system">
          <Provider store={Store}>
            {!isHidden && (<Navbar />)}
            {children}
          </Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}

export default RootLayout