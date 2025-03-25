import React from 'react'
import Link from 'next/link'


const Description = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4 text-white">
   <h1 className="text-5xl md:text-6xl font-bold mb-4">Taskly</h1>
      <p className="text-xl md:text-2xl mb-2">
        An advanced, easy to use to-do list program to transform your days
      </p>
      <p className="text-lg italic">-for completely free.</p>
      <Link href="getstarted">
      <button className="px-6 py-3 text-lg font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 flex items-center">
        Try Now <span className="ml-2">→</span>
      </button>
      </Link>
    </div>
  );
};

export default Description;