'use client';

import Image from 'next/image';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import GradualSpacing from '@/components/ui/gradual-spacing';

export default function Home() {
  const [showBorders, setShowBorders] = useState(false);

  // Set this to `false` if you want to hide the button in the code
  const showToggleButton = false;

  return (
    <div className="bg-[#ebfc72]">
      <main>
        <Navbar />

        {/* Show Toggle Button if `showToggleButton` is TRUE */}
        {showToggleButton && (
          <div className="flex justify-center py-4">
            <button
              onClick={() => setShowBorders(!showBorders)}
              className="px-4 py-2 bg-black text-white font-bold rounded-md hover:bg-gray-800 transition"
            >
              Toggle Borders
            </button>
          </div>
        )}

        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center ${showBorders ? 'border border-red-500' : ''}`}>
          <div className={`w-full max-w-7xl pl-2 pr-2 md:pl-[8%] ${showBorders ? 'border border-blue-500' : ''}`}>
            <div className={`pt-6 md:pt-20 ${showBorders ? 'border border-green-500' : ''}`}>
              <h1 className={`mb-2 md:mb-4 max-w-4xl ${showBorders ? 'border border-purple-500' : ''}`}>
                <span className="hidden md:block">
                  <GradualSpacing
                    className="text-4xl md:text-9xl font-avantgarde-bold text-[#212e21] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] text-left pt-1 leading-tight"
                    style={{ transform: 'translateZ(0)' }}
                    containerClassName="justify-start"
                    text="Sokorro"
                  />
                </span>
                <span className="md:hidden text-4xl font-avantgarde-bold text-[#212e21] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                  Sokorro
                </span>
              </h1>

              <h2 className="text-3xl md:text-7xl font-avantgarde-bold leading-tight mb-6 md:mb-16 w-full text-[#212e21]">
                Your Data Center Advisory and Infrastructure Partner.
              </h2>

              <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-start ${showBorders ? 'border border-yellow-500' : ''}`}>
                {/* Image Section */}
                <div className={`w-full aspect-[16/12.1] mb-6 md:mb-0 ${showBorders ? 'border border-cyan-500' : ''}`}>
                  <Image
                    src="/castle.jpg"
                    alt="Your Data Center Advisory and Infrastructure Partner"
                    width={2000}
                    height={1500}
                    className="rounded-sm shadow-[0_15px_30px_rgba(0,0,0,0.3)] w-full h-full object-cover object-center"
                    priority
                  />
                </div>

                {/* Text Section */}
                <div className={`space-y-4 md:space-y-6 ${showBorders ? 'border border-pink-500' : ''}`}>
                  <p className="text-lg md:text-xl font-avantgarde-bk text-[#212e21]">
                    Combining decades of experience with a global network of supplier partners, we help buyers navigate the complexities of the technology landscape and precisely match their unique needs with the optimal solution. 
                  </p> 
                  <p className="text-lg md:text-xl font-avantgarde-bk text-[#212e21]">
                    Sokorro operates as an extension of your organization, managing vendor diligence and procurement processes and negotiating the most favorable contract. Our proven methodology transforms challenging infrastructure decisions into clear, actionable outcomes by applying industry-tested frameworks that reduce risk and accelerate implementation.
                  </p>
                </div>
              </div>
            </div>

            <div className={`pb-8 p-10 text-center ${showBorders ? 'border border-orange-500' : ''}`}>
              <h2 className="text-4xl md:text-5xl font-bold text-[#212e21] mb-4 md:pt-12">
                Strategic Partnership, Proven Results
              </h2>
              <p className="text-lg md:text-xl font-avantgarde-bk text-[#212e21] max-w-2xl mx-auto pb-4">&nbsp;</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}