"use client";

import React from "react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
import { PortableText } from "@portabletext/react";

const myPortableTextComponents = {
  types: {
    youtube: ({ value }) => {
      const { url } = value;
      return (
        <div className="relative pt-[56.25%]">
          <ReactPlayer
            className="absolute top-0 left-0 mb-12"
            url={url}
            width="100%"
            height="100%"
          />
        </div>
      );
    },
  },
  marks: {
    link: ({children, value}) => {
      return (
        <a href={value.href} rel='noreferrer noopener' target="_blank">
          {children}
        </a>
      )
    },
  },
};

function Body({ blocks }) {
  return <PortableText value={blocks} components={myPortableTextComponents} />;
}

export default Body;
