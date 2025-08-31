import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/header/Navbar";
import Footer from "@/components/footer/footer";
import ClientWrapper from "@/components/ClientWrapper";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <body className={inter.className}>
        <Navbar />
        <div className="container px-10 mt-5">
          <ClientWrapper>{children}</ClientWrapper>
        </div>
        <Footer />
      </body>
    </html>
  );
}
