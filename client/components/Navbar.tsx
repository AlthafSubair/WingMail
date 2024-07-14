// NavBar for Home Page

"use client"

import React from 'react';
import Image from 'next/image';




const Navbar = () => {

  return (
    <nav className='flex flex-col w-full h-14 bg-[#0a0c1c] dark:text-white'>

      <div className='flex my-auto p-2'>

        <Image
          src="/logo/logo_dg.png"
          alt="Vercel Logo"
          className="flex"
          width={140}
          height={24}
          priority
        />

      </div>

    </nav>
  );
};

export default Navbar;
