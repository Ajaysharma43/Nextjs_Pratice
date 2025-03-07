"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/public/Component/Navbar/Navbar";
import { Provider } from "react-redux";
import Store from "@/lib/store";
import React from "react";
import { ThemeProvider } from "next-themes";


function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="system">
        <Provider store={Store}>
        <Navbar/>
        {children}
        </Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}

export default RootLayout