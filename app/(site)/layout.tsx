import { getPages } from "@/sanity/sanity-utils";
import "../globals.css";
import type { Metadata } from "next";
import { Jost, Figtree } from "next/font/google";
import localFont from 'next/font/local'
import Header from "./components/Header";
import Footer from "./components/Footer";

const jost = Jost({ subsets: ["latin"] });
const figtree = Figtree({ subsets: ["latin"] });

const neueMontrealFont = localFont({
  src: [
    {
      path: '../fonts/NeueMontreal-Regular.otf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../fonts/NeueMontreal-Bold.otf',
      weight: '700',
      style: 'normal'
    }
  ],
  display: 'swap'
})

export const metadata: Metadata = {
  title: "Slower motions",
  description: "A collection of interviews with influential music people.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${neueMontrealFont.className} p-4 sm:p-10 flex flex-col min-h-screen max-w-screen-lg mx-auto`}>
        <Header />
        <main className="py-20 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
