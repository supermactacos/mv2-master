"use client";

import { useParams } from 'next/navigation';
import Link from 'next/link';

const blogPosts = {
  'future-data-center-infrastructure-2024': {
    title: 'The Future of Data Center Infrastructure: 2024 Trends',
    date: 'March 15, 2024',
    content: `
      <h2>The Evolution of Data Center Infrastructure</h2>
      <p>As we progress through 2024, the data center landscape continues to evolve rapidly. Edge computing, sustainability initiatives, and AI integration are reshaping how we think about and implement data center infrastructure.</p>
      
      <h2>Key Trends</h2>
      <ul>
        <li>Edge Computing Expansion</li>
        <li>Sustainable Data Center Design</li>
        <li>AI-Driven Operations</li>
        <li>Hybrid Infrastructure Solutions</li>
      </ul>
    `
  },
  'optimizing-it-infrastructure-costs': {
    title: 'Optimizing IT Infrastructure Costs: A Comprehensive Guide',
    date: 'March 10, 2024',
    content: `
      <h2>Strategic Cost Optimization</h2>
      <p>Cost optimization in IT infrastructure requires a balanced approach between performance, reliability, and budget constraints. This guide explores proven strategies for achieving this balance.</p>
      
      <h2>Key Strategies</h2>
      <ul>
        <li>Resource Utilization Analysis</li>
        <li>Automated Scaling Solutions</li>
        <li>Vendor Management</li>
        <li>Modernization Planning</li>
      </ul>
    `
  },
  'cloud-vs-on-premise-comparison': {
    title: 'Cloud vs. On-Premise: Making the Right Choice for Your Business',
    date: 'March 5, 2024',
    content: `
      <h2>Understanding Your Options</h2>
      <p>The choice between cloud and on-premise infrastructure depends on various factors including business requirements, budget, and scalability needs.</p>
      
      <h2>Comparison Factors</h2>
      <ul>
        <li>Cost Analysis</li>
        <li>Performance Requirements</li>
        <li>Security Considerations</li>
        <li>Scalability Needs</li>
      </ul>
    `
  }
};

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen bg-[#ebfc72] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-avantgarde-bold text-[#212e21] mb-4">
            Blog post not found
          </h1>
          <Link 
            href="/blog"
            className="text-[#212e21] hover:opacity-75 transition-opacity"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#ebfc72]">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link 
          href="/blog"
          className="text-[#212e21] hover:opacity-75 transition-opacity mb-8 inline-block"
        >
          ← Back to Blog
        </Link>
        
        <article className="bg-white p-8 rounded-sm shadow-lg">
          <h1 className="text-3xl md:text-4xl font-avantgarde-bold mb-4 text-[#212e21]">
            {post.title}
          </h1>
          <p className="text-gray-500 mb-8">{post.date}</p>
          <div 
            className="prose prose-lg max-w-none font-avantgarde-bk text-[#212e21]"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>
    </div>
  );
}