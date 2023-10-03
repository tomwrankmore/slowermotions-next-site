import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div>
      <p className="text-sm">
        Home of music producer &amp; composer Tom Wrankmore aka Eliphino.
      </p>
      <p className="text-sm">New site coming soon.</p>
      <p className="text-sm mb-6">info@repetition.world</p>
      <span className="text-7xl">🔁 🌎</span>

      <ul>
        {projects.map((project) => {
          return (
            <li key={project._id} className="">
              <Link href={`/projects/${project.slug}`} className="">
                {project?.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
