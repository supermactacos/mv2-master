import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#ebfc72] py-12 mt-auto border-t border-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
        <div className="w-full max-w-7xl pl-2 pr-2 md:pl-[8%]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Brand and Description */}
            <div className="md:col-span-6">
              <div className="h-[32px] flex items-center">
                <h3 className="text-2xl font-avantgarde-bold text-[#212e21] mb-2">
                  Sokorro
                </h3>
              </div>
              <p className="text-[#212e21] font-avantgarde-bk mt-4 mb-4">
                Your Data Center Advisory and Infrastructure Partner. We help enterprises navigate complex technology decisions.
              </p>
              <p className="text-sm text-[#212e21]/70 font-avantgarde-bk pt-4">
                © 2025 Sokorro
              </p>
            </div>

            {/* About us Links */}
            <div className="md:col-span-3">
              <h3 className="text-lg font-avantgarde-bold text-[#212e21] mb-4">About us</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-[#212e21] hover:opacity-75 transition-opacity font-avantgarde-bk">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-[#212e21] hover:opacity-75 transition-opacity font-avantgarde-bk">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies" className="text-[#212e21] hover:opacity-75 transition-opacity font-avantgarde-bk">
                    Case Studies
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources Links */}
            <div className="md:col-span-3">
              <h3 className="text-lg font-avantgarde-bold text-[#212e21] mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/blog" className="text-[#212e21] hover:opacity-75 transition-opacity font-avantgarde-bk">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/solutions" className="text-[#212e21] hover:opacity-75 transition-opacity font-avantgarde-bk">
                    Solutions
                  </Link>
                </li>
                <li>
                  <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#212e21] hover:opacity-75 transition-opacity font-avantgarde-bk">
                    Follow us on LinkedIn
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 