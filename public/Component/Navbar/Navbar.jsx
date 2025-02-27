"use client"
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
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
            <Link href="/pages/about" className="text-gray-300 hover:text-white">About</Link>
          </li>
          <li>
            <Link href="/pages/contact" className="text-gray-300 hover:text-white">Contact</Link>
          </li>
          <li>
            <Link href="/pages/todo" className="text-gray-300 hover:text-white">todo</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;