"use client";

import React from "react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const about = () => {
  return (
    <div className="prose lg:prose-xl">
      <p className="text-sm mb-6">I&apos;ve been at it for a while.</p>
      {/* <ReactPlayer
        className=""
        url="https://soundcloud.com/joy-orbison/tentative-bidding-demo"
      /> */}
    </div>
  );
};

export default about;
