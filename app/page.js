"use client"
import Link from "next/link";
import { Advent_Pro } from "next/font/google";
import { useTheme } from "next-themes";
import { useRef } from "react";
import { redirect } from "next/navigation";
import Image from "next/image";
import Banner from "@/public/Assests/pexels-etha-34545-128234.jpg"


const roboto = Advent_Pro({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});

export default function Home() {
  const { theme, settheme } = useTheme()
  const ref = useRef()

  return (
    <>
      <div>
        i am homepage
        <Link href={`/id/${123}/${342}`}>
          <button>click</button>
        </Link>
        <h1 className={`${roboto.className} uppercase ${theme === 'dark' ? "text-blue-300" : "text-black"}`}>hello</h1>
      </div>

      <Link href={'/Search?name=hello&name=hy'}>
        <button>click me</button>
      </Link>

      <button onClick={() => redirect('/Search?name=hello&name=hy' , 'replace')}>Redirect</button>

      <Image src={Banner} width={200} height={100} placeholder="blur" alt="no image"/>
    </>
  );
}