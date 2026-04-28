"use client";
import { Spinner } from "@/components/ui/spinner";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  if (isLoading) {
    return (
      <div className="h-full flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (!isAuthenticated) {
    return redirect("/");
  }

  return (
    <div className="h-full flex dark:bg-[#1f1f1f]">
      <main className="flex-1 overflow-y-auto h-full">{children}</main>
    </div>
  );
};

export default MainLayout;
