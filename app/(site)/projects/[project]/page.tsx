import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Body from "../../components/Body";

type Props = {
  params: { project: string };
};

const Project = async ({ params }: Props) => {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <div className="flex items-start justify-between flex-col lg:flex-row">
      <div>
        <header>
          <h1 className="text-2xl">{project.name}</h1>
        </header>

        {/* Content goes here */}
        <div className="text-lg text-gray-700 mt-5 w-3/4 prose prose-slate lg:prose-lg">
          <Body blocks={project.content} />
          {/* <PortableText value={project.content} /> */}
        </div>

        {/* Image goes here */}
        {/* {project.image && (
          <Image
            src={project.image}
            alt={project.alt}
            width={1920}
            height={1080}
            className="mt-10 border-2 border-gray-700 object-cover rounded-xl"
          />
        )} */}
      </div>
      {project?.url && (
        <div>
          <a
            href={project.url}
            title="View Project"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-black hover:text-slate-100 transition block"
          >
            View project
          </a>
        </div>
      )}
    </div>
  );
};

export default Project;
