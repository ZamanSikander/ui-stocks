import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import all pages
 import Home from "../pages/Home";
// import Components from "../pages/Components";
// import Category from "../pages/Category";
// import About from "../pages/About";
// import Contact from "../pages/Contact";
// import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/components" element={<Components />} />
        <Route path="/category/:categoryName" element={<Category />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />  */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
