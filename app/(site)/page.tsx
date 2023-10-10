import { getInterviews } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const interviews = await getInterviews();

  return (
    <div>
      <ul className="w-full md:w-fit">
        {interviews.map((interview) => {
          console.log('fdfdvf:', interview.projectCategory.categoryTitle)
          return (
            <li key={interview._id} className="flex text-sm mb-2 items-center">
              <p className="font-bold">{interview.projectCategory.categoryTitle} {'//'}{' '}</p>
              <Link href={`/interviews/${interview.slug}`} className="hover:underline">
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