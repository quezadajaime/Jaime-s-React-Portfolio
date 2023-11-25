// Imports
import React from "react";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Resume from "./Pages/Resume/Resume";
import Portfolio from "./Pages/Portfolio/Portfolio";

// Function that renders selected page state & exports
export default function PortfolioContainer({ currentPage, setCurrentPage }) {
    if (currentPage === "About") {
        return <About />;
    }
    if (currentPage === "Contact") {
        return <Contact />;
    }
    if (currentPage === "Resume") {
        return <Resume />;
    }
    return <Portfolio />;
}