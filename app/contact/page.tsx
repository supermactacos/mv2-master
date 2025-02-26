"use client";

import Image from 'next/image';
import Navbar from '@/components/Navbar';
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#ebfc72]">
      <main className="flex flex-col">
        <Navbar />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
          <div className="w-full max-w-7xl pl-2 pr-2 md:pl-[8%]">
            <div className="pt-10 md:pt-20">
              <h1 className="text-4xl md:text-8xl font-avantgarde-bold mb-8 md:mb-16 text-[#212e21]">
                Get In Touch
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-start mb-20">
                <div className="space-y-6">
                  <p className="text-lg md:text-xl font-avantgarde-bk text-[#212e21]">
                    Ready to optimize your IT infrastructure? Let's start a conversation about your needs and how we can help.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-avantgarde-bold text-[#212e21] mb-2">Email</h3>
                      <a href="mailto:info@sokorro.com" className="text-lg text-[#212e21] hover:opacity-75 transition-opacity">
                        info@sokorro.com
                      </a>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-avantgarde-bold text-[#212e21] mb-2">Phone</h3>
                      <a href="tel:+1234567890" className="text-lg text-[#212e21] hover:opacity-75 transition-opacity">
                        +1 (234) 567-890
                      </a>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-avantgarde-bold text-[#212e21] mb-2">Location</h3>
                      <p className="text-lg text-[#212e21]">
                        San Francisco Bay Area, CA
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-full">
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-lg font-avantgarde-bold text-[#212e21] mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full p-3 rounded-sm bg-white text-[#212e21] border border-[#212e21]/20"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-lg font-avantgarde-bold text-[#212e21] mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full p-3 rounded-sm bg-white text-[#212e21] border border-[#212e21]/20"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-lg font-avantgarde-bold text-[#212e21] mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={6}
                        className="w-full p-3 rounded-sm bg-white text-[#212e21] border border-[#212e21]/20"
                      ></textarea>
                    </div>
                    
                    <Button 
                      type="submit"
                      size="lg"
                      className="w-full"
                    >
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}