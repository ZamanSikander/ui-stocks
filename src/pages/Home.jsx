import React from 'react'
import { Layout, FormInput, Square, Table, Bell, Loader, Footprints, Copy, Code, PencilRuler } from "lucide-react";
import Navbar from '../Site-components/Navbar'
import Footer from '../Site-components/Footer';
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

const steps = [
  {
    id: 1,
    title: "Browse UI Components",
    description: "Explore a collection of beautifully designed, ready-to-use UI components.",
    icon: <Code size={30} />,
  },
  {
    id: 2,
    title: "Copy the Code",
    description: "Simply copy the clean, optimized code for any component you like.",
    icon: <Copy size={30} />,
  },
  {
    id: 3,
    title: "Paste & Customize",
    description: "Paste it into your project and tweak it to match your design—no extra setup required!",
    icon: <PencilRuler size={30} />,
  },
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

      <main className="py-12 min-h-screen">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-indigo-600 font-semibold font-headings text-center">Explore Our Component Categories</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto font-body">
            Discover a wide range of prebuilt components crafted with modern design and full customization support.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="relative p-6 sm:p-8 w-full bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl shadow-lg text-center text-white transition-transform transform hover:-translate-y-2 cursor-pointer"
              >
                <div className="mb-4 bg-white/20 w-fit mx-auto text-white rounded-full p-4">
                  {category.icon}
                </div>
                <h3 className="text-sm sm:text-base  font-semibold">{category.title}</h3>
                <p className="text-sm hidden sm:block md:text-base text-gray-200 py-2 md:block">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* how it works */}

      <main className="mt-7 min-h-screen  py-12  flex flex-col justify-center items-center gap-4 px-4 sm:px-6 md:px-8">
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-indigo-600 font-semibold font-headings">
            How It Works
          </h2>
          <p className="text-gray-600 mb-6 sm:mb-12 max-w-2xl mx-auto font-body">
            🚀 No installations. No dependencies. Just plug & play!
          </p>
        </div>

        <div className="flex flex-col items-center py-6 sm:py-10 w-full">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl px-4 sm:px-6 md:px-8">
            {steps.map((step) => (
              <div
                className="relative p-6 sm:p-8 w-full max-w-sm bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl shadow-lg text-center text-white transition-transform transform hover:-translate-y-2 cursor-pointer"
              >
                <div className="mb-4 bg-white/20 w-fit text-white rounded-full p-4">
                  {step.icon}
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-semibold">{step.title}</h3>
                <p className="text-sm hidden  sm:text-base sm:block text-gray-200 py-2">{step.description}</p>
              </div>
            ))}
          </div>
          <button className="mt-7 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 cursor-pointer">
            🚀 Start Exploring
          </button>
        </div>
      </main>

      {/* cta section */}
      <div className="flex flex-col container mx-auto bg-gray-50 rounded-lg items-center justify-center text-center p-8 sm:p-12  shadow-lg">
        <h2 className="text-xl sm:text-2xl lg:text-3xl text-indigo-600 font-semibold font-headings">
          Start Building Better UI Today!
        </h2>
        <p className='text-gray-600 my-2 max-w-2xl mx-auto font-body text-balance'>Start adding components without the hassle of installing external libraries!</p>
        <button className="mt-7 px-2 py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 cursor-pointer">
            🚀 Explore Components
          </button>
      </div>


            {/* footer */}
            <Footer></Footer>
    </div>
  )
}

export default Home