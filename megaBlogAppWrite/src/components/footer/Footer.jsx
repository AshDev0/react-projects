import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-white dark:bg-dark border-t border-gray-200 dark:border-dark-4 py-12 mt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between gap-10">

          {/* Logo + Description */}
          <div className="w-full sm:w-1/2 lg:w-3/12">
            <Link to="/" className="inline-block mb-4">
              <img
                src="https://cdn.tailgrids.com/assets/images/logo/logo.svg"
                alt="logo"
                className="h-10 dark:hidden"
              />
              <img
                src="https://cdn.tailgrids.com/assets/images/logo/logo-white.svg"
                alt="logo"
                className="h-10 hidden dark:block"
              />
            </Link>

            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              A clean and simple blog built for sharing stories, tutorials, and ideas.
            </p>

            <p className="mt-4 text-sm font-medium text-dark dark:text-white flex items-center">
              <span className="mr-2">📞</span> +012 (345) 678 99
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full sm:w-1/2 lg:w-2/12">
            <h4 className="font-semibold text-dark dark:text-white mb-4">Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary">Home</Link></li>
              <li><Link to="/blogs" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary">Blogs</Link></li>
              <li><Link to="/about" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary">About</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="w-full sm:w-1/2 lg:w-3/12">
            <h4 className="font-semibold text-dark dark:text-white mb-4">Follow Us</h4>

            <div className="flex gap-3">
              <Link className="h-8 w-8 rounded-full flex items-center justify-center border border-gray-300 dark:border-gray-600 hover:bg-primary hover:text-white transition">
                F
              </Link>
              <Link className="h-8 w-8 rounded-full flex items-center justify-center border border-gray-300 dark:border-gray-600 hover:bg-primary hover:text-white transition">
                T
              </Link>
              <Link className="h-8 w-8 rounded-full flex items-center justify-center border border-gray-300 dark:border-gray-600 hover:bg-primary hover:text-white transition">
                Y
              </Link>
              <Link className="h-8 w-8 rounded-full flex items-center justify-center border border-gray-300 dark:border-gray-600 hover:bg-primary hover:text-white transition">
                I
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="text-center mt-10 pt-6 border-t border-gray-200 dark:border-dark-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Your Blog Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;