"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/header/Navbar";
import Footer from "@/components/footer/footer";
import { store } from "./store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />

        <div className=" container px-10 mt-5 ">
          <BrowserRouter>
            <Provider store={store}>{children}</Provider>
          </BrowserRouter>
        </div>
      </body>
      <Footer />
    </html>
  );
}
