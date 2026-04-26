"use client";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import React from "react";
import Logo from "./logo";
import { Button } from "./ui/button";

const Navbar = () => {
  const scrolled = useScrollTop();
  return (
    <div
      className={cn(
        "z-50 bg-background fixed top-0 flex items-center w-full p-6",
        scrolled && "border-b shadow-xs",
      )}
    >
      <Logo />
      <div
        className="md:ml-auto md:justify-end justify-between w-full flex
      items-center gap-x-2"
      >
        <Button className="cursor-pointer active:scale-90">Login</Button>
      </div>
    </div>
  );
};

export default Navbar;
