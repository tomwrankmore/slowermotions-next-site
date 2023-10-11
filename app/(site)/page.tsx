import { getInterviews } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const interviews = await getInterviews();

  return (
    <div>
      <p className="text-category-mix hidden">Mixes</p>
      <p className="text-category-interview hidden">Interviews</p>
      <ul className="w-full md:w-fit">
        {interviews.map((interview) => {
          return (
            <li key={interview._id} className="flex text-sm mb-2 items-center">
              <p className={`text-category-${interview.projectCategory.categoryTitle.toLowerCase()}`}>{interview.projectCategory.categoryTitle} &nbsp;</p>
              <Link href={`/interviews/${interview.slug}`} className="hover:underline text-gray-400">
                {interview?.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export const revalidate = 60;