"use client";

import Image from 'next/image';
import Navbar from '@/components/Navbar';

export default function Why() {
  return (
    <div className="min-h-screen bg-[#ebfc72]">
      <main className="flex flex-col">
        <Navbar />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
          <div className="w-full max-w-7xl pl-2 pr-2 md:pl-[8%]">
            {/* Hero Section */}
            <div className="pt-8 mb-20">
              <h1 className="text-4xl md:text-8xl font-avantgarde-bold mb-8 md:mb-16 text-[#212e21]">
                Why?
              </h1>

              <p className="text-xl md:text-2xl font-avantgarde-bk text-[#212e21] max-w-3xl">
                We've helped hundreds of enterprises navigate sophisticated technology decisions with particular expertise in sectors like social media, gaming, and broadcasting.
              </p>
            </div>

            {/* Core Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-avantgarde-bold text-[#212e21]">
                  Knowledgeable
                </h2>
                <p className="text-lg font-avantgarde-bk text-[#212e21]">
                  Our multi-disciplined team delivers deep insights and strong industry relationships in the dynamic and rapidly evolving IT marketplace.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-avantgarde-bold text-[#212e21]">
                  Objective
                </h2>
                <p className="text-lg font-avantgarde-bk text-[#212e21]">
                  While IT providers may use similar technologies, the customer experience varies dramatically. Our vendor-neutral analysis ensures we recommend partners who consistently deliver.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-avantgarde-bold text-[#212e21]">
                  Convenient
                </h2>
                <p className="text-lg font-avantgarde-bk text-[#212e21]">
                  We eliminate the time-consuming process of researching technologies and qualifying vendors. As your advocate, we orchestrate the entire journey.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-avantgarde-bold text-[#212e21]">
                  Cost-Free
                </h2>
                <p className="text-lg font-avantgarde-bk text-[#212e21]">
                  Best of all? Our comprehensive advisory and procurement service is provided at no cost to you.
                </p>
              </div>
            </div>

            {/* Featured Image Section */}
            <div className="mb-20">
              <Image
                src="/sokorrodc.png"
                alt="Technology Solutions"
                width={2000}
                height={1000}
                className="rounded-sm shadow-[0_15px_30px_rgba(0,0,0,0.3)] w-full h-[60vh] object-cover object-center"
                priority
              />
            </div>

            {/* Detailed Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16 mb-20">
              <div className="space-y-6">
                <h3 className="text-xl md:text-2xl font-avantgarde-bold text-[#212e21]">
                  Deep Industry Expertise
                </h3>
                <p className="text-lg font-avantgarde-bk text-[#212e21]">
                  We stay abreast of emerging technologies, services and vendors within our partner ecosystem to ensure clients can always access the most performant solutions available.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl md:text-2xl font-avantgarde-bold text-[#212e21]">
                  Vendor-Neutral Analysis
                </h3>
                <p className="text-lg font-avantgarde-bk text-[#212e21]">
                  From commercial terms to provisioning timeframes and quality of support, multiple factors impact your success. Our analysis provides clear insights into capabilities and limitations.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl md:text-2xl font-avantgarde-bold text-[#212e21]">
                  End-to-End Support
                </h3>
                <p className="text-lg font-avantgarde-bk text-[#212e21]">
                  As your advocate, we orchestrate the entire journey from evaluation and procurement to ongoing support, ensuring a seamless experience.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl md:text-2xl font-avantgarde-bold text-[#212e21]">
                  Strategic Partnership
                </h3>
                <p className="text-lg font-avantgarde-bk text-[#212e21]">
                  We integrate seamlessly with your team, acting as trusted advisors fully aligned with your strategic objectives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}