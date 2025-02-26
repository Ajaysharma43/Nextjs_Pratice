"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/public/Component/Navbar/Navbar";
import { Provider } from "react-redux";
import Store from "@/lib/store";


function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={Store}>
        <Navbar/>
        {children}
        </Provider>
      </body>
    </html>
  );
}

export default RootLayout