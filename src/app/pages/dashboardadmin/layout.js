const DashboardLayout = ({ children }) => {
  return (
    <div className="flex gap-8">
      <aside className="flex-[2]">
        {/* Include shared UI here e.g. a sidebar */}
      </aside>
      <div className=" container  ">{children}</div>
    </div>
  );
};

export default DashboardLayout;

// import { Inter } from "next/font/google";
// import Navbar from "@/components/header/Navbar";
// import Footer from "@/components/footer/footer";

// const inter = Inter({ subsets: ["latin"] });

// export default function Layout({ children }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <div className=" container px-10 mt-5 ">{children}</div>
//       </body>
//     </html>
//   );
// }
