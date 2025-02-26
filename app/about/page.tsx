"use client";

import Image from 'next/image';
import Navbar from '@/components/Navbar';

export default function About() {
  return (
    <div className="min-h-screen bg-[#ebfc72]">
      <main className="flex flex-col">
        <Navbar />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
          <div className="w-full max-w-7xl pl-2 pr-2 md:pl-[8%]">
            <div className="pt-10 md:pt-20">
              <h1 className="text-4xl md:text-8xl font-avantgarde-bold mb-8 md:mb-16 text-[#212e21]">
                About Us
              </h1>

              {/* Team Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-start mb-8">
                <div className="w-full aspect-[16/11] mb-6 md:mb-0">
                  <Image
                    src="/sokor.jpg"
                    alt="Sokorro Team"
                    width={2000}
                    height={1500}
                    className="rounded-sm shadow-[0_15px_30px_rgba(0,0,0,0.3)] w-full h-full object-cover object-center"
                    priority
                  />
                </div>
                <div className="space-y-6">
                  <p className="text-lg md:text-xl font-avantgarde-bk text-[#212e21]">
                  Founded by industry veterans, we bring decades of specialized expertise in enterprise data center infrastructure, cloud computing, and network solutions.
                  </p>
                  <p className="text-lg md:text-xl font-avantgarde-bk text-[#212e21]">
                  Our mission is to transform complex IT infrastructure decisions into strategic business advantages, empowering organizations to make confident, informed choices.
                  </p>
                </div>
              </div>

              {/* Values Section */}
              <div className="py-6 md:py-10">
                <h2 className="text-3xl md:text-5xl font-avantgarde-bold mb-12 text-[#212e21]">
                  Our Values
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-avantgarde-bold text-[#212e21]">Expertise</h3>
                    <p className="text-lg font-avantgarde-bk text-[#212e21]">
                    We leverage decades of enterprise IT expertise to deliver optimal outcomes for every client engagement.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-avantgarde-bold text-[#212e21]">Transparency</h3>
                    <p className="text-lg font-avantgarde-bk text-[#212e21]">
                    We ensure clear communication and unbiased guidance at every step, maintaining complete vendor neutrality.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-avantgarde-bold text-[#212e21]">Partnership</h3>
                    <p className="text-lg font-avantgarde-bk text-[#212e21]">
                    We integrate seamlessly with your team, acting as trusted advisors fully aligned with your strategic objectives.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}