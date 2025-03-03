import React from 'react'
import { Layout, FormInput, Square, Table, Bell, Loader, Footprints } from "lucide-react";
import Navbar from '../Site-components/Navbar'
import ui_kit_1 from '../assets/ui_kit_1.png'

const categories = [
  { icon: <Layout size={30} />, title: "Navigation & Headers", description: "Stylish navbars, sidebars, and breadcrumbs for seamless navigation." },
  { icon: <FormInput size={30} />, title: "Forms & Inputs", description: "Reusable inputs, buttons, and toggles for efficient form design." },
  { icon: <Square size={30} />, title: "Cards & Containers", description: "Elegant cards, modals, and sections to organize content effectively." },
  { icon: <Table size={30} />, title: "Tables & Lists", description: "Responsive tables, data grids, and list views for structured data." },
  { icon: <Bell size={30} />, title: "Alerts & Notifications", description: "Modern alerts, toasts, and notifications to keep users informed." },
  { icon: <Loader size={30} />, title: "Loaders & Animations", description: "Smooth spinners, skeleton loaders, and animations for UI feedback." },
  { icon: <Footprints size={30} />, title: "Footers & CTA", description: "Custom footers, call-to-action sections, and banners for engagement." },
];
const Home = () => {
  return (
    <div>
      <Navbar />

      {/* hero component */}

      <main className="flex flex-col md:flex-row items-center justify-center mt-[4rem] md:mt-0 p-4 md:p-8 md:h-lvh container mx-auto">
        <section className="text-center md:text-left md:w-1/2 space-y-4">
          <h1 className="text-xl sm:text-2xl lg:text-3xl text-indigo-600 font-semibold font-headings">
            Pre-Built UI Components for Faster Development
          </h1>
          <p className="text-base text-gray-800 md:text-lg font-ui">
            Save time with beautifully designed, ready-to-use UI elements. Copy the code and build your projects effortlessly.
          </p>
          <button type="button" className="mt-4 px-6 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 cursor-pointer">
            Browse Components
          </button>
        </section>
        <section className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
          <img src={ui_kit_1} alt="UI Kit" className="w-full max-w-xs md:max-w-md rounded-lg shadow-lg" />
        </section>
      </main>

      {/* category section */}

      <main className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-xl sm:text-2xl lg:text-3xl text-indigo-600 font-semibold font-headings text-center">Explore Our Component Categories</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto font-body">
          Discover a wide range of prebuilt components crafted with modern design and full customization support.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="cursor-pointer p-6 rounded-2xl hover:bg-gray-50 shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center text-center"
            >
              <div className="p-4 bg-indigo-100 text-indigo-600 rounded-full mb-4">{category.icon}</div>
              <h3 className="text-base md:text-lg font-semibold text-gray-800">{category.title}</h3>
              <p className="text-gray-600 mt-2 font-ui hidden md:block md:text-xs lg:text-sm">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
      </main>
    </div>
  )
}

export default Home