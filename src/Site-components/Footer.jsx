import React from 'react'
import { Linkedin, Twitter, Github } from "lucide-react";


const Footer = () => {
  return (
    <footer className="w-full py-6 sm:py-8 md:py-12 bg-gray-50 container mx-auto rounded-lg my-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {/* site description section */}
          <div className="text-center sm:text-left">
            <h1 className="text-xl sm:text-2xl mb-2">UI.Stocks</h1>
            <p className="text-sm sm:text-base">Access React JS and Tailwind CSS components. No need to install any external libraries.</p>
          </div>
          
          {/* Social Media */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold  mb-3 sm:mb-4">Follow Us</h3>
            <div className="flex space-x-6 sm:space-x-4">
              <a href="#" className="hover:text-white transition">
                <Linkedin size={20} className="sm:w-6 sm:h-6" />
              </a>
              <a href="#" className="hover:text-white transition">
                <Twitter size={20} className="sm:w-6 sm:h-6" />
              </a>
              <a href="#" className="hover:text-white transition">
                <Github size={20} className="sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Components", "Categories", "About", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm sm:text-base hover:text-white transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 sm:mt-8 text-center text-xs sm:text-sm">
          © 2025 UIStocks. All rights reserved.
        </div>
      </div>
    </footer>

  )
}

export default Footer