import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from "@/components/ui/button";

// Define the navigation items with their paths (removed "Contact")
const navItems = [
  { name: "About", path: "/about" },
  { name: "Why", path: "/why" },
  { name: "Solutions", path: "/solutions" }
];

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-[#ebfc72] z-50 md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-4 text-[#212e21]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="text-[#212e21] hover:opacity-75 transition-opacity"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/contact" passHref>
              <Button variant="default" size="lg">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      )}
      <nav className={`w-full px-8 py-6 flex justify-between items-center ${className}`}>
        <Link href="/" className="text-[#212e21]">
          <Image
            src="/sk-logo.png"
            alt="Sokorro Logo"
            width={80}
            height={80}
            className="w-[60px] md:w-[100px]"
          />
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="text-[#212e21] hover:opacity-75 transition-opacity"
            >
              {item.name}
            </Link>
          ))}
          <Link href="/contact" passHref>
            <Button variant="default" size="lg">
              Get In Touch
            </Button>
          </Link>
        </div>
        <button 
          className="md:hidden text-[#212e21]"
          onClick={() => setMobileMenuOpen(true)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </>
  );
}