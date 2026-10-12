export default function Footer() {
  return (
    <footer className="bg-ieee-black text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:items-start">
          {/* IEEE Info */}
          <div className="flex flex-col items-start text-left">
            <h3 className="mb-4 text-lg font-semibold">IEEE Student Branch</h3>
            <p className="max-w-sm text-sm text-gray-300">
              Institute of Electrical and Electronics Engineers - Advancing technology for humanity.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-start md:items-end md:text-right">
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/events" className="text-gray-300 transition-colors hover:text-white">
                  Events
                </a>
              </li>
              <li>
                <a href="/membership" className="text-gray-300 transition-colors hover:text-white">
                  Membership
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 transition-colors hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 transition-colors hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-start md:items-end md:text-right">
            <h3 className="mb-4 text-lg font-semibold">Find us on</h3>
            <div className="space-y-2 text-sm text-gray-300">
              
              
              <div className="mt-4 flex justify-start gap-4 md:justify-end">
                <a
                  
                  href="https://www.instagram.com/ieeesbucek/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2text-gray-300 transition-colors hover:text-white"
                  aria-label="Instagram"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5Zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5Zm5.25-3.25a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25Z"/>
                  </svg>
                </a>
                <a
                  href="https://in.linkedin.com/company/ieee-sb-ucek"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 transition-colors hover:text-white"
                  aria-label="LinkedIn"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      
        {/* Bottom section */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>&copy; {new Date().getFullYear()} IEEE Student Branch. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}