"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/header/Navbar";
import Footer from "@/components/footer/footer";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
const inter = Inter({ subsets: ["latin"] });
import { ReduxProvider } from "./api/ReduxProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />

        <div className=" container px-10 mt-5 ">
          <BrowserRouter>
            <ReduxProvider>{children}</ReduxProvider>
          </BrowserRouter>
        </div>
      </body>
      <Footer />
    </html>
  );
}
