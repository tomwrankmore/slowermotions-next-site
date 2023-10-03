import { PortableTextBlock } from "sanity";

export type Project = {
_id: string;
_createdAt: Date;
slug: string;
alt: string;
name: string;
image: string;
url: string;
content: PortableTextBlock[];
}