import React from 'react'
import { Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full py-8 md:py-12 bg-indigo-700 text-gray-200 mt-2.5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {/* site description section */}
          <div className="text-center sm:text-left mb-6 sm:mb-0">
            <h1 className="text-2xl font-bold text-white mb-3">UI.Stocks</h1>
            <p className="text-gray-300 text-sm md:text-base">Access React JS and Tailwind CSS components. No need to install any external libraries.</p>
          </div>
          
          {/* Social Media */}
          <div className="flex flex-col items-center mb-6 sm:mb-0">
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                <Github size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Components", "Categories", "About", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-50 my-8"></div>

        {/* Copyright */}
        <div className="text-center text-gray-50 text-sm">
          © {new Date().getFullYear()} UIStocks. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer