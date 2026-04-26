import React from "react";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Image from "next/image";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-1">
      <Image src="/logo.svg" height="40" width="40" alt="logo" />
      <p className={cn("font-semibold text-2xl",font.className)}>otion</p>
    </div>
  );
};

export default Logo;
