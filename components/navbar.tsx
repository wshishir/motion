"use client";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import Logo from "./logo";
import { ModeToggle } from "./mode-toggle";
import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import Link from "next/link";

const Navbar = () => {
  const scrolled = useScrollTop();
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <div
      className={cn(
        "z-50 bg-background fixed top-0 flex items-center w-full p-6 dark:bg-[#1f1f1f]",
        scrolled && "border-b shadow-xs",
      )}
    >
      <Logo />
      <div
        className="md:ml-auto md:justify-end justify-between w-full flex
      items-center gap-x-4"
      >
        {isLoading && <p className="text-xs">Loading..</p>}
        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button>Login</Button>
            </SignInButton>
          </>
        )}
        {isAuthenticated && !isLoading && (
          <>
            <Button asChild>
              <Link href="/document">Enter Motion</Link>
            </Button>
            <UserButton afterSwitchSessionUrl="/"/>
          </>
        )}
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
