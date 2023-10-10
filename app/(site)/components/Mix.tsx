"use client";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const Mix = ({ interview }: any) => {
  return (
    <>
      <ReactPlayer
        className=""
        url={interview.mixUrl}
        height="100%"
      />
    </>
  );
};

export default Mix;
