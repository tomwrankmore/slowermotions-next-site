import { getInterviews } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const interviews = await getInterviews();

  return (
    <div>
      <ul className="w-full md:w-fit">
        {interviews.map((interview) => {
          return (
            <li key={interview._id} className="">
              <Link href={`/interviews/${interview.slug}`} className="mb-2 text-sm block md:whitespace-nowrap hover:underline">
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