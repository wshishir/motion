"use client";
import React from "react";

const Navigation = () => {
  return (
    <>
      <aside className=" group/sidebar h-full flex bg-secondary overflow-y-auto relative w-60 z-99999 flex-col">
        <div>
          <p>Action Items</p>
        </div>
        <div className="mt-4">Documents</div>
        <div className="opacity-0 group-hover/sidebar:opacity-100" />
      </aside>
    </>
  );
};

export default Navigation;
