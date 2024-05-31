'use client';
import Image from "next/image";
import Link from "next/link";
import { motion, } from "framer-motion";
import React from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  return (
    <div className="bg-pink-900 mx-4 my-2 md:mx-8 md:my-4 rounded-2xl h-20 flex items-center justify-between p-4 md:p-6 shadow-2xl flex-wrap">
      <div className="flex items-center">
        {/* <Image src='/abhishek.png' alt="Logo" width={40} height={40} /> */}
        <span className="ml-4 text-white text-lg font-semibold">
          Brand Name
        </span>
      </div>
      <nav className="hidden md:flex space-x-6 font-medium text-lg ">
        <Link href="#" className="text-white hover:text-black text-lg">
          Home
        </Link>
        <Link href="#" className="text-white hover:text-black text-lg">
          About
        </Link>
        <Link href="#" className="text-white hover:text-black text-lg">
          Projects
        </Link>
        <Link href="#" className="text-white hover:text-black text-lg">
          Blogs
        </Link>
        <Link href="#" className="text-white hover:text-black text-lg">
          Contact
        </Link>
      </nav>
      <div className="md:hidden">
        {/* Mobile menu button (optional) */}

        <button>
          <svg
            className="w-6 h-6 text-white hover:text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
