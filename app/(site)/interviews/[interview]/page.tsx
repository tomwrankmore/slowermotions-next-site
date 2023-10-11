import { getInterview } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Body from "../../components/Body";
import Link from "next/link";
import Mix from "../../components/Mix";
import classNames from "classnames";

type Props = {
  params: { interview: string };
};

const Interview = async ({ params }: Props) => {
  const slug = params.interview;

  const interview = await getInterview(slug);

  const category = interview.projectCategory.categoryTitle;

  const categoryCircleClassname = classNames(
    "w-6",
    "h-6",
    "rounded-full",
    {
      "bg-category-mix": category === "Mix",
      "bg-category-interview": category === "Interview",
    }
  );

  return (
    <div className="flex items-start justify-between flex-col lg:flex-row">
      <div className="flex-1 w-full">
        <div className="flex items-center justify-start gap-3 mb-2">
          <div className={categoryCircleClassname} />
          <h1 className="text-2xl">{interview.title}</h1>
        </div>

        <div>
          {interview.mixUrl != null ? <Mix interview={interview} /> : null}
        </div>

        <div className="w-full prose prose-slate lg:prose-lg">
          <Body blocks={interview.body} />
        </div>
      </div>
    </div>
  );
};

export default Interview;

export const revalidate = 60;
