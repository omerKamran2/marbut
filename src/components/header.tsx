"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { useTheme } from "@/app/ThemeProvider";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { isDarkMode, toggleDarkMode } = useTheme();

  // Sections to observe
  const sectionIds = ["about", "roadmap", "services", "contact"];

  useEffect(() => {
    const observerOptions = { threshold: 0.3 };
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          if (id) setActiveSection(id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, observerOptions);
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <motion.div className="fixed top-0 left-0 w-full z-50" initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
      {/* Header container */}
      <Card className={`p-4 ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
        <div className="flex justify-center mx-auto px-4 md:px-6 lg:px-8">
          <header className="flex h-20 w-full items-center justify-between max-w-[1680px]">
            <Link href="/" className="inline-flex items-center">
              <img
                src={`${isDarkMode ? "/assets/images/dark-logo.png" : "/assets/images/light-logo.png"}`}
                alt="Marbūt Logo"
                className="h-[35px] w-[163px] mr-2"
              />
            </Link>

            {/* 🌙 Dark Mode Toggle Button */}
            <Button variant="ghost" onClick={toggleDarkMode} className="h-[32px] rounded-[8px] text-[16px]">
              {isDarkMode ? "Light Mode" : "Dark Mode"}
            </Button>

            {/* Mobile Menu Button */}
            <button className="block md:hidden p-2" onClick={toggleMenu} aria-label="Toggle menu">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-4">
              <Button
                variant="ghost"
                onClick={() => scrollToSection("services")}
                className={`h-[32px] rounded-[8px] text-[16px] ${
                  activeSection === "services" ? "bg-gray-200 text-black" : isDarkMode ? "text-gray-300 hover:text-gray-100" : "text-gray-700 hover:text-black"
                }`}
              >
                Services
              </Button>

              <Button
                variant="ghost"
                onClick={() => scrollToSection("roadmap")}
                className={`h-[32px] rounded-[8px] text-[16px] ${
                  activeSection === "roadmap" ? "bg-gray-200 text-black" : isDarkMode ? "text-gray-300 hover:text-gray-100" : "text-gray-700 hover:text-black"
                }`}
              >
                Process
              </Button>

              <Button
                className={`px-4 py-2 text-[16px] bg-primary hover:bg-primary/90 rounded transition-colors w-[178px] h-[32px] ${
                  isDarkMode ? "text-black" : "text-white"
                }`}
                onClick={() => scrollToSection("contact")}
              >
                Start Hiring
              </Button>
            </div>
          </header>
        </div>
      </Card>

      {/* Mobile Menu (Full-Width Dropdown) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            className={`fixed top-0 left-0 w-full p-4 ${isDarkMode ? "bg-black text-white" : "bg-white text-black"} z-40`}
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex flex-col items-center gap-2 pb-4">
              <button className="self-end mr-4" onClick={toggleMenu}>
                ✕
              </button>

              <Button
                variant="ghost"
                onClick={() => scrollToSection("services")}
                className={`hover:text-gray-300 hover:bg-gray-800 ${activeSection === "services" ? "underline" : ""}`}
              >
                Services
              </Button>

              <Button
                variant="ghost"
                onClick={() => scrollToSection("roadmap")}
                className={`hover:text-gray-300 hover:bg-gray-800 ${activeSection === "roadmap" ? "underline" : ""}`}
              >
                Process
              </Button>

              <Button
                className={`px-4 py-2 text-sm bg-primary hover:bg-primary/90 rounded transition-colors ${isDarkMode ? "text-black" : "text-white"}`}
                onClick={() => scrollToSection("contact")}
              >
                Start Hiring
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
