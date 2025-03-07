"use client"
import React from 'react';
import Link from 'next/link';
import { useTheme } from "next-themes";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const handleClick = () => {
    console.log('Button clicked');
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-center font-bold">MyApp</div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="text-red-300 hover:text-white">Home</Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-300 hover:text-white">About</Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link>
          </li>
          <li>
            <Link href="/todo" className="text-gray-300 hover:text-white">todo</Link>
          </li>
          <li>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-lg bg-gray-300 dark:bg-gray-700 dark:text-white"
        >
            {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;