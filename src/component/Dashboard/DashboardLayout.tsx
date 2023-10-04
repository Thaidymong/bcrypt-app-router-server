import Image from "next/image";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { AiFillDashboard } from "react-icons/ai";
import { useState } from "react";
import { QUERY_USERS } from "@/graphql";
import Cookies from "js-cookie";
import { usePathname, useRouter } from "next/navigation";
import { useQuery } from "@apollo/client";
import Sidebar from "../Sidebar";
import Header from "../Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex h-screen">
        <Sidebar />
        <main className="flex-1">
          <Header />
          {/* Content */}
          {children}
        </main>
      </div>
    </>
  );
}
