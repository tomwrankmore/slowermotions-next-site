import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div>
      <p className="text-3xl mb-12">Tom / Eliphino is a London based music producer, DJ &amp; composer.</p>
      
      <ul className="w-fit">
        {projects.map((project) => {
          return (
            <li key={project._id} className="[&:not(:last-child)]:border-b">
              <Link href={`/projects/${project.slug}`} className="p-4 block whitespace-nowrap hover:bg-gray-100 transition">
                {project?.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
