import Link from "next/link";
import React from "react";
import { getSiteSettings } from "@/sanity/sanity-utils";
import Image from "next/image";

export default async function Header() {

  const siteSettings = await getSiteSettings();

  return (
    <header className="flex items-center justify-between flex-col md:flex-row">
      {/* {} */}
      <Link href="/" className="text-3xl font-bold lowercase">
        slower<span className="italic inline-block -translate-x-[1.75px]">m</span>otions
      </Link>

      <div className="flex items-center gap-3">
        {/* {pages.map((page) => {
          return (
            <Link
              key={page._id}
              href={`/${page.slug}`}
              className="hover:underline text-sm lowercase"
            >
              {page.title}
            </Link>
          );
        })} */}
        <Link href="/archive" className="hover:underline text-sm lowercase">
          archive
        </Link>
        {/* <Link href="contact" className="hover:underline text-sm lowercase">
          contact
        </Link> */}
      </div>
    </header>
  );
};