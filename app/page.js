"use client"
import Link from "next/link";
import { Advent_Pro } from "next/font/google";
import { useTheme } from "next-themes";

const roboto = Advent_Pro({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});

export default function Home() {
  const {theme , settheme} = useTheme()
  return (
    <>
      <div>
        i am homepage
        <Link href={`/pages/id/${123}/${342}`}>
          <button>click</button>
        </Link>
        <h1 className={`${roboto.className} uppercase ${theme === 'dark' ? "text-blue-300" : "text-black"}`}>hello</h1>
      </div>
    </>
  );
}