"use client";

import Image from 'next/image';
import Navbar from '@/components/Navbar';
import { Button } from "@/components/ui/button";
import { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Success!",
          description: "Your message has been sent successfully.",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="flex-1">
      <main>
        <Navbar />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="w-full max-w-7xl pl-2 pr-2 md:pl-[8%]">
            <div className="pt-8 pb-4">
              <h1 className="text-4xl md:text-8xl font-avantgarde-bold mb-4 md:mb-8 text-[#212e21]">
                Get In Touch
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-start mb-4">
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
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-lg font-avantgarde-bold text-[#212e21] mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
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
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 rounded-sm bg-white text-[#212e21] border border-[#212e21]/20"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-lg font-avantgarde-bold text-[#212e21] mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full p-3 rounded-sm bg-white text-[#212e21] border border-[#212e21]/20"
                      ></textarea>
                    </div>
                    
                    <Button 
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
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