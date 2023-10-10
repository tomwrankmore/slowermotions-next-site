import { Interview } from "@/types/Interview";
import { Page } from "../types/Page";
import { SiteSettings } from "../types/SiteSettings";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config"

export async function getSiteSettings(): Promise<SiteSettings[]> {

  return createClient(clientConfig).fetch(
    groq`*[_type == "siteSettings"]{
      _id,
      _createdAt,
      title,
      description,
      "navLogo": navLogo.asset->url,
      keywords
    }`
  );
}

export async function getInterviews(): Promise<Interview[]> {

  return createClient(clientConfig).fetch(
    groq`*[_type == "interview"]|order(orderRank){
      projectCategory->,
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      // "image": image.asset->url,
      // url,
      publishedAt,
      body
    }`
  );
}

export async function getInterview(slug: string): Promise<Interview> {

  return createClient(clientConfig).fetch(
    // interview where slug.current is the same as the slug we pass in to getInterview
    groq`*[_type == "interview" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      projectCategory[]->{categoryTitle},
      "slug": slug.current,
      // "image": image.asset->url,
      mixUrl,
      publishedAt,
      body
    }`,
    // the line below is how we pass in slug as a value from the function argument
    { slug }
  );
}

// List of page links for Navigation

export async function getPages(): Promise<Page[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
    }`,
  )
}

export async function getPage(slug: string): Promise<Page> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      content
    }`,
    {slug}
  )
}