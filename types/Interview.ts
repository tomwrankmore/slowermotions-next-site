import { PortableTextBlock } from "sanity";

export type Interview = {
_id: string;
_createdAt: Date;
slug: string;
alt: string;
mixUrl: URL;
name: string;
title: string;
image: string;
url: string;
body: PortableTextBlock[];
}