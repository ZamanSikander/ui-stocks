import React, { useState } from 'react';
import { ChevronRight, Layout, FormInput, Square, Table, Bell, Loader, Footprints, ArrowLeftFromLine, ArrowRightFromLine } from 'lucide-react';
import Navbar from '../Site-components/Navbar';
import Footer from '../Site-components/Footer';

const Docs = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState('getting-started');

    // Component categories
    const categories = [
        {
            id: 'getting-started',
            name: 'Getting Started',
            icon: <ChevronRight size={20} />
        },
        {
            id: 'navigation',
            name: 'Navigation & Headers',
            icon: <Layout size={20} />,
            components: ['Navbar', 'Sidebar', 'Breadcrumbs', 'Tabs']
        },
        {
            id: 'forms',
            name: 'Forms & Inputs',
            icon: <FormInput size={20} />,
            components: ['Buttons', 'Inputs', 'Checkboxes', 'Radio Buttons', 'Selects']
        },
        {
            id: 'cards',
            name: 'Cards & Containers',
            icon: <Square size={20} />,
            components: ['Cards', 'Modals', 'Sections', 'Panels']
        },
        {
            id: 'tables',
            name: 'Tables & Lists',
            icon: <Table size={20} />,
            components: ['Tables', 'Data Grids', 'Lists']
        },
        {
            id: 'alerts',
            name: 'Alerts & Notifications',
            icon: <Bell size={20} />,
            components: ['Alerts', 'Toasts', 'Notifications']
        },
        {
            id: 'loaders',
            name: 'Loaders & Animations',
            icon: <Loader size={20} />,
            components: ['Spinners', 'Skeleton Loaders', 'Progress Bars']
        },
        {
            id: 'footers',
            name: 'Footers & CTA',
            icon: <Footprints size={20} />,
            components: ['Footers', 'Call-to-Action', 'Banners']
        },
    ];

    // Toggle sidebar
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // Render content based on active category
    const renderContent = () => {
        if (activeCategory === 'getting-started') {
            return <GettingStarted />;
        }

        const category = categories.find(cat => cat.id === activeCategory);
        if (!category) return <div>Category not found</div>;

        return (
            <div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl text-indigo-600 font-semibold font-headings mb-6">
                    {category.name}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.components?.map((component, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <h3 className="text-lg font-semibold mb-2">{component}</h3>
                            <p className="text-gray-600 mb-4">Coming soon...</p>
                            <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors">
                                View Details
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <div className="flex flex-1 container mx-auto mt-8 px-4">
                {/* Mobile Sidebar Toggle */}
                <button
                    className="md:hidden fixed bottom-2 left-4 z-50 p-3 bg-indigo-600 text-white rounded-full shadow-lg"
                    onClick={toggleSidebar}
                >
                    {isSidebarOpen ? <ArrowLeftFromLine size={15}/> : <ArrowRightFromLine  size={15}/>} 
                </button>

                {/* Sidebar */}
                <aside
                    className={`fixed md:relative md:block z-40 bg-gray-50 w-64 h-[calc(100vh-6rem)] overflow-y-auto transition-all duration-300 ease-in-out shadow-md md:shadow-none ${isSidebarOpen ? 'left-0' : '-left-64 md:left-0'
                        }`}
                >
                    <div className="p-4">
                        <h2 className="text-xl font-bold text-indigo-600 mb-6 font-headings">Documentation</h2>
                        <nav>
                            <ul className="space-y-2">
                                {categories.map((category) => (
                                    <li key={category.id}>
                                        <button
                                            onClick={() => {
                                                setActiveCategory(category.id);
                                                if (window.innerWidth < 768) setIsSidebarOpen(false);
                                            }}
                                            className={`w-full flex items-center p-2 rounded-md transition-colors ${activeCategory === category.id
                                                    ? 'bg-indigo-100 text-indigo-600'
                                                    : 'hover:bg-gray-200'
                                                }`}
                                        >
                                            <span className="mr-2">{category.icon}</span>
                                            <span>{category.name}</span>
                                        </button>
                                        {activeCategory === category.id && category.components && (
                                            <ul className="ml-6 mt-2 space-y-1">
                                                {category.components.map((component, index) => (
                                                    <li key={index}>
                                                        <a
                                                            href={`#${component.toLowerCase().replace(/\s+/g, '-')}`}
                                                            className="block p-2 text-sm hover:text-indigo-600 transition-colors"
                                                        >
                                                            {component}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </aside>

                {/* Main Content */}
                <main className={`flex-1 p-4 md:p-6 transition-all duration-300 ${isSidebarOpen ? 'md:ml-0' : 'md:ml-0'
                    }`}>
                    {renderContent()}
                </main>
            </div>

            <Footer />
        </div>
    );
};

// Getting Started Component
const GettingStarted = () => {
    return (
        <div className="max-w-4xl">
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-indigo-600 font-semibold font-headings mb-6">
                Getting Started with UI.Stocks
            </h2>

            <div className="prose prose-indigo max-w-none">
                <p className="text-gray-700 mb-6">
                    Welcome to UI.Stocks, a collection of pre-built, modern UI components and layouts designed with React.js and Tailwind CSS.
                    Our components are designed to be easily integrated into your projects, saving you time and effort.
                </p>

                <h3 className="text-lg font-semibold mt-8 mb-4">Installation</h3>
                <p className="text-gray-700 mb-4">
                    No installation required! Simply browse our components, copy the code, and paste it into your React project.
                </p>

                <div className="bg-gray-100 p-4 rounded-md mb-6">
                    <p className="font-mono text-sm">
                        {/* Just copy the component code and paste it into your project */}
                        &lt;YourComponent /&gt;
                    </p>
                </div>

                <h3 className="text-lg font-semibold mt-8 mb-4">Prerequisites</h3>
                <p className="text-gray-700 mb-4">
                    To use our components, you'll need:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                    <li>A React.js project</li>
                    <li>Tailwind CSS installed and configured</li>
                    <li>Lucide React for icons (optional)</li>
                </ul>

                <h3 className="text-lg font-semibold mt-8 mb-4">How to Use</h3>
                <ol className="list-decimal pl-6 mb-6 space-y-4 text-gray-700">
                    <li>
                        <strong>Browse Components:</strong> Explore our collection of components organized by category.
                    </li>
                    <li>
                        <strong>Copy Code:</strong> Click on a component to view its code and copy it.
                    </li>
                    <li>
                        <strong>Paste & Customize:</strong> Paste the code into your project and customize it to match your design.
                    </li>
                </ol>

                <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 mb-8">
                    <p className="text-indigo-700">
                        <strong>Tip:</strong> All our components are built with Tailwind CSS, making them highly customizable.
                        Simply modify the Tailwind classes to match your design system.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Docs; 