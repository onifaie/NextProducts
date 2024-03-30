import SideBarAdmin from "@/components/header/SideBarAdmin";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex gap-4">
      <SideBarAdmin />

      <div className="  container flex  bg-slate-50 ml-56">{children}</div>
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
