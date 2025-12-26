import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <div className="bg-neutral-900/20">
      <hr className="border-t border-[#808080]/50 w-full py-6" />
      <h1 className="pb-24 text-xs sm:text-sm text-[#808080] text-center">
        Copyright © 2025{" "}
        <Link
          href="https://github.com/Angad0045"
          className="hover:text-[#155dfc] transition"
        >
          Angad Patil
        </Link>
        . All rights reserved.
      </h1>
    </div>
  );
};
