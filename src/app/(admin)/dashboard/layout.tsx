"use client";

// import { usePathname } from "next/navigation";
import React from "react";

export default function Layout({
  children,
  // arsip_edit,
  // arsip_new,
}: {
  children: React.ReactNode;
  arsip_edit: React.ReactNode;
  arsip_new: React.ReactNode;
    }) {
    // const currentPath = usePathname();
    
  return (
    <div className="flex flex-row justify-start flex-grow w-full bg-amber-50">
      {children}
      {/* {(currentPath.includes("arsip")) && arsip_edit}
      {arsip_new} */}
    </div>
  );
}
