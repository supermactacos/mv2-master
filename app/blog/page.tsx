"use client";

import { useState } from 'react';
import Link from 'next/link';

interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Data Center Infrastructure: 2024 Trends',
    description: 'Explore emerging trends in data center infrastructure, including edge computing, sustainability initiatives, and AI integration.',
    date: 'March 15, 2024',
    slug: 'future-data-center-infrastructure-2024'
  },
  {
    id: '2',
    title: 'Optimizing IT Infrastructure Costs: A Comprehensive Guide',
    description: 'Learn effective strategies for reducing IT infrastructure costs while maintaining performance and reliability.',
    date: 'March 10, 2024',
    slug: 'optimizing-it-infrastructure-costs'
  },
  {
    id: '3',
    title: 'Cloud vs. On-Premise: Making the Right Choice for Your Business',
    description: 'A detailed comparison of cloud and on-premise solutions to help you make informed infrastructure decisions.',
    date: 'March 5, 2024',
    slug: 'cloud-vs-on-premise-comparison'
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-[#ebfc72]">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-6xl font-avantgarde-bold mb-8 text-[#212e21]">
          Blog
        </h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <div 
              key={post.id}
              className="bg-white p-6 rounded-sm shadow-lg hover:shadow-xl transition-shadow"
            >
              <p className="text-sm text-gray-500 mb-2">{post.date}</p>
              <h2 className="text-xl font-avantgarde-bold text-[#212e21] mb-3">
                {post.title}
              </h2>
              <p className="text-[#212e21] mb-4 font-avantgarde-bk">
                {post.description}
              </p>
              <Link 
                href={`/blog/${post.slug}`}
                className="text-[#212e21] font-avantgarde-bold hover:opacity-75 transition-opacity"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}