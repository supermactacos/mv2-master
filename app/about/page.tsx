"use client";

import Image from 'next/image';
import Navbar from '@/components/Navbar';

export default function About() {
  return (
    <div className="flex-1">
      <main>
        <Navbar />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="w-full max-w-7xl pl-2 pr-2 md:pl-[8%]">
            <div className="pt-8 pb-4">
              <h1 className="text-4xl md:text-8xl font-avantgarde-bold mb-4 md:mb-8 text-[#212e21]">
                About Us
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-start mb-8">
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

              <div className="mb-8">
                <h2 className="text-3xl md:text-6xl font-avantgarde-bold mb-4 md:mb-8 text-[#212e21]">
                  Our Values
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                  <div>
                    <h3 className="text-xl font-avantgarde-bold text-[#212e21] mb-2">Expertise</h3>
                    <p className="text-lg text-[#212e21]">
                      We leverage decades of enterprise IT expertise to deliver optimal outcomes for every client engagement.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-avantgarde-bold text-[#212e21] mb-2">Transparency</h3>
                    <p className="text-lg text-[#212e21]">
                      We ensure clear communication and unbiased guidance at every step, maintaining complete vendor neutrality.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-avantgarde-bold text-[#212e21] mb-2">Partnership</h3>
                    <p className="text-lg text-[#212e21]">
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