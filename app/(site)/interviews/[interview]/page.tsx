import { getInterview } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Body from "../../components/Body";
import Link from "next/link";
import Mix from "../../components/Mix";

type Props = {
  params: { interview: string };
};

const Interview = async ({ params }: Props) => {
  const slug = params.interview;

  const interview = await getInterview(slug);

  return (
    <div className="flex items-start justify-between flex-col lg:flex-row">
      <div>
        <header>
          <h1 className="text-2xl mb-8">{interview.title}</h1>
        </header>

        <div className="w-full prose prose-slate lg:prose-lg">
          {interview.mixUrl != null ? <Mix interview={interview} /> : null}
          <Body blocks={interview.body} />
        </div>
      </div>
    </div>
  );
};

export default Interview;

export const revalidate = 60;
