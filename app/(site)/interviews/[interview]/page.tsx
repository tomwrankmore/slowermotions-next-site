import React from "react";
import { getInterview } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Body from "../../components/Body";
import Link from "next/link";

type Props = {
  params: { interview: string };
};

const Interview = async ({ params }: Props) => {
  const slug = params.interview;

  const interview = await getInterview(slug);

  console.log('interview:', interview)

  return (
    <div className="flex items-start justify-between flex-col lg:flex-row">
      <div>
        <header>
          <h1 className="text-2xl">{interview.name}</h1>
        </header>

        <div className="w-full prose prose-slate lg:prose-lg">
          <Body blocks={interview.body} />
        </div>
      </div>
    </div>
  );
};

export default Interview;

export const revalidate = 60;
