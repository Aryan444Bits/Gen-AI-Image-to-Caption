import { Routes, Route } from "react-router-dom";
import Home from "./routespages/Home";
import About from "./routespages/About";
import Contact from "./routespages/Contact";
import PageNotfound from "./routespages/PageNotfound";

function Mainroutes() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
  );
}
export default Mainroutes;        
