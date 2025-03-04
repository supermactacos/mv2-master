'use client';

import Image from 'next/image';
import { Inter } from 'next/font/google';
import { useState } from 'react';
import Link from 'next/link';
import TypingAnimation from '@/components/ui/typing-animation';
import GradualSpacing from '@/components/ui/gradual-spacing';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className="bg-[#ebfc72]">
      <main>
        <Navbar />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
          <div className="w-full max-w-7xl pl-2 pr-2 md:pl-[8%]">
            <div className="pt-6 md:pt-20">
              <h1 className="mb-2 md:mb-4 max-w-4xl">
                <span className="hidden md:block">
                    <GradualSpacing
                      className="text-4xl md:text-9xl font-avantgarde-bold text-[#212e21] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] text-left pt-1 leading-tight"
                      style={{ transform: 'translateZ(0)' }}
                      containerClassName="justify-start"
                      text="Sokorro"
                    />
                </span>
                <span className={`md:hidden text-4xl font-avantgarde-bold text-[#212e21] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]`}>
                  Sokorro
                </span>
              </h1>

              <h2 className="text-3xl md:text-7xl font-avantgarde-bold leading-tight mb-6 md:mb-16 w-full text-[#212e21]">
  Your Data Center Advisory and Infrastructure Partner.
              </h2>

              <div className="w-[80%] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-start">
                  <div className="w-full aspect-[16/11] mb-6 md:mb-0">
                    <Image
                      src="/castle.jpg"
                      alt="Lighthouse on rocky coast"
                      width={2000}
                      height={1500}
                      className="rounded-sm shadow-[0_15px_30px_rgba(0,0,0,0.3)] w-full h-full object-cover object-center"
                      priority
                    />
                  </div>
                  <div className="space-y-4 md:space-y-6">
                    <p className="text-lg md:text-xl font-avantgarde-bk text-[#212e21]">
                      Combining decades of experience with a global network of supplier partners, we help buyers navigate the complexities of the technology landscape and precisely match their unique needs with the optimal solution. Sokorro operates as an extension of your organization, managing vendor diligence and procurement processes and negotiating the most favorable contract. Our proven methodology transforms challenging infrastructure decisions into clear, actionable outcomes by applying industry-tested frameworks that reduce risk and accelerate implementation.
                    </p>
                  </div>
                </div>

                <div className="pb-8 p-10 m text-center">
                  <h2 className="text-4xl md:text-5xl font-bold text-[#212e21] mb-4 md:pt-12">
                    Strategic Partnership, Proven Results
                  </h2>
                  <p className="text-lg md:text-xl font-avantgarde-bk text-[#212e21] max-w-2xl mx-auto">
                    We integrate seamlessly with your team, delivering actionable insights and measurable outcomes that drive your business forward.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}