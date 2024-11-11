// "use client";
// import React, { useEffect, useState } from 'react';
// import Image from 'next/image';

// const LandingPage: React.FC = () => {

//   return (
// <section className="flex flex-col md:flex-row items-center justify-center p-8 md:p-20 gap-8 md:gap-[20%] bg-[#FFFFF] min-h-screen">
//   <div className="text-center md:text-left">
//     <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
//       Hello,<br /> I am Terry Mitchell.<br />
//     </h1>
//     <p className="text-lg text-black md:max-w-md mb-4">
//       I specialize in creating visually appealing and user-friendly web applications using modern technologies.
//       Let&apos;s work together to bring your ideas to life!
//     </p>
//     <div className="mt-4">
//       <a href="#contact" className="border  bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
//         Get in Touch
//       </a>
//     </div>
//   </div>
//    <div className="mb-8 md:mb-0">
//       <Image
//         src="/images/tee.jpg"
//         alt="Terry"
//         width={400}
//         height={400}
//         className="w-60 h-60 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full"
//       />
//     </div>
// </section>

//   );
// };

// export default LandingPage;







"use client";
import React from 'react';
import Image from 'next/image';

const LandingPage: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center p-8 md:p-20 gap-8 md:gap-[15%] bg-gray-100 min-h-screen text-gray-800">
      <div className="text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hello,<br /> I am Terry Mitchell.<br />
        </h1>
        <p className="text-lg md:max-w-md mb-6 text-gray-700">
          I specialize in creating visually appealing and user-friendly web applications using modern technologies.
          Let&apos;s work together to bring your ideas to life!
        </p>
        <div className="mt-6">
          <a
            href="#contact"
            className="inline-block bg-blue-950 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
          >
            Get in Touch
          </a>
        </div>
      </div>
      <div>
        <Image
          src="/images/tee.jpg"
          alt="Daisy"
          width={400}
          height={400}
          className="w-60 h-60 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full border-2 border-gray-300 shadow-md"
        />
      </div>
    </section>
  );
};

export default LandingPage;
