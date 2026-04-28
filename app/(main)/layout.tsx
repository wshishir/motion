import { Spinner } from "@/components/ui/spinner";
import { useConvexAuth } from "convex/react";
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

  return <div>{children}</div>;
};

export default MainLayout;
