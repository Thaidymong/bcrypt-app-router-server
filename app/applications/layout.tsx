import DashboardLayout from "@/component/Dashboard/DashboardLayout";
import React from "react";

export default function ApplicationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <DashboardLayout>{children}</DashboardLayout>
    </>
  );
}
