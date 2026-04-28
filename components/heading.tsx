"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useConvexAuth } from "convex/react";
import Link from "next/link";
import { SignInButton } from "@clerk/nextjs";

const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-medium">
        Your Ideas, Documents, & Plans. Unified. Welcome to{" "}
        <span className="font-semibold">Motion</span>
      </h1>
      <h3 className="font-medium text-xl md:text-2xl">
        Motion is the connected workspace where <br /> better, faster work
        happens.
      </h3>
      {isLoading && <p>Loading..</p>}
      {isAuthenticated && !isLoading && (
        <Button asChild className="group cursor-pointer text-xl p-5">
          <Link href="/document">
            Get Started{" "}
            <ArrowRight className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button className="group cursor-pointer text-xl p-5">
            Get Motion free{" "}
            <ArrowRight className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </Button>
        </SignInButton>
      )}
    </div>
  );
};

export default Heading;
