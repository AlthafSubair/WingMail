// Home Page

"use client"

import Image from 'next/image';


export default function Home() {
  return (
    <main className="bg-gray-950 min-h-screen">

{/* div for Image and welcome Message */}
     
      <div className='flex flex-wrap'>
    {/* Image birds&moon */}
        <div className='flex items-center justify-center inset-0 md:w-2/4 w-full'>
        <Image
        src="/images/k.png"
        alt="Vercel Logo"
        className="flex flex-wrap p-2 mt-20"
        width={600}
        height={400}
        priority
      />    
    </div>
    {/* Image birds&moon */}

    {/* Welcome */}
    <div className='flex justify-center items-center py-2 md:w-2/4 w-full'>
      <h1 className='px-4 text-white text-lg text-center md:text-xl lg:text-2xl'>Welcome to WingMail! Let our brids carray your messages far and wide. </h1>
    </div>
 {/* Welcome */}

    </div>
    {/* div for Image and welcome Message */}

{/* slogan and navigation to login */}
    <div className='flex md:flex-col flex-col-reverse'>

{/* Slogan */}
    <div className='flex justify-center items-center md:py-4 py-2'>
      <h1 className='px-2 text-white text-lg md:text-xl lg:text-2xl text-center'>Our Birds are exicted to Deliver Your Message.Your Pegions and Ravens are Ready to take Flight!</h1>
    </div>
    {/* Slogan */}

    {/* Login */}
    <div className='flex justify-center items-center md:py-4 py-2'>
    <button className='text-white text-lg font-semibold px-3 py-2 bg-green-600 rounded-md hover:bg-white hover:text-green-600'>Login</button>
    </div>
 {/* Login */}

    </div>
    {/* slogan and navigation to login */}

{/* Slogan and Feather Image */}
    <div className='flex md:flex-col flex-col-reverse'>

      {/* Slogan */}
    <div className='flex justify-center items-center'>
      <h1 className='px-2 py-2 text-white text-lg text-center'>Message with ease as light as Feathers</h1>
    </div>
     {/* Slogan */}
    
{/* Feather Image */}
    <div className='flex justify-center items-center'>
    <Image
        src="/images/featherblue.png"
        alt="Vercel Logo"
        className="flex flex-wrap p-2"
        width={300}
        height={400}
        priority
      />  
    </div>
    {/* Feather Image */}

    </div>
    {/* Slogan and Feather Image */}
   
    </main>
  );
}
