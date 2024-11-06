"use client";

import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import ModeToggle from "./mode-toggle";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

const Navbar = () => {
  return (
    <div className='w-full bg-slate-50 dark:bg-black py-3'>
      <div className='flex max-w-7xl mx-auto justify-between items-center'>
        <div className='flex items-center gap-4'>
          <Link href='/' className='flex gap-2 items-center'>
            {" "}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='34'
              height='34'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='lucide lucide-loader-pinwheel text-cyan-600'
            >
              <path d='M22 12a1 1 0 0 1-10 0 1 1 0 0 0-10 0' />
              <path d='M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6' />
              <path d='M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6' />
              <circle cx='12' cy='12' r='10' />
            </svg>
            <p
              className={`uppercase text-black dark:text-white ${montserrat.variable} font-montserrat text-xl font-bold tracking-widest`}
            >
              asphere
            </p>
          </Link>
        </div>
        <div className='flex items-center gap-9'>
          <ul className='flex gap-7'>
            <li>
              <Link href='#'>Home</Link>
            </li>
            <li>
              <Link href='#'>About</Link>
            </li>
            <li>
              <Link href='#'>Contact</Link>
            </li>
            <li>
              <Link href='#'>Feedback</Link>
            </li>
          </ul>
          <ModeToggle />
          <Button>
            <Link href='/sign-up'>Sign Up</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
