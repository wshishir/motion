import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative w-[400px] h-[400px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]">
          <Image src="/hero-1.svg" alt="hero" fill className="object-contain" />
        </div>
        <div className="relative w-[400px] h-[400px]  hidden md:block">
          <Image src="/hero.svg" alt="hero" className="object-contain" fill />
        </div>
      </div>
    </div> 
  );
};

export default Hero;
