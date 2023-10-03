import { PortableTextBlock } from "sanity";

export type Page = {
  _id: string;
  _createdAt: Date;
  title?: string | null;
  slug: string;
  content: PortableTextBlock[];
}