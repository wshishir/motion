"use client";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

const Documentspage = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Button className="p-5 items-center justify-center cursor-pointer bg-[#1f1f1f]">
        <PlusCircle className="h-4 w-4" />
        Create a note
      </Button>
    </div>
  );
};

export default Documentspage;
