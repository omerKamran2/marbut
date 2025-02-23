"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // We want to watch these sections
  const sectionIds = ["about", "roadmap", "services", "contact"];

  useEffect(() => {
    const observerOptions = { threshold: 0.3 };

    // Callback for each IntersectionObserver entry
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          if (id) setActiveSection(id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, observerOptions);

    // Observe all sections by ID
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // Close menu after clicking
  };

  return (
    <motion.div
      className="fixed top-0 left-0 w-full z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header container */}
      <Card className="bg-white text-black">
        <div className="flex justify-center mx-auto px-4 md:px-6 lg:px-8">
          <header className="flex h-20 w-full items-center justify-between max-w-[1680px]">
            <Link href="/" className="inline-flex items-center">
              <img
                src="/assets/images/Logo.svg"
                alt="Marbūt Logo"
                className="h-8 w-8 mr-2"
              />
              <span className="text-[40px] font-medium">Marbūt</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="block md:hidden p-2"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-4">
              <Button
                variant="ghost"
                onClick={() => scrollToSection("services")}
                className={
                  activeSection === "services"
                    ? "text-primary bg-gray-200 h-[32px] rounded-[8px] text-[16px]"
                    : "hover:text-gray-700 h-[32px] rounded-[8px] text-[16px]"
                }
              >
                Services
              </Button>

              <Button
                variant="ghost"
                onClick={() => scrollToSection("roadmap")}
                className={
                  activeSection === "roadmap"
                    ? "text-primary bg-gray-200 h-[32px] rounded-[8px] text-[16px]"
                    : "hover:text-gray-700 h-[32px] rounded-[8px] text-[16px]"
                }
              >
                Process
              </Button>

              <Button
                className="px-4 py-2 text-[16px] bg-primary text-white hover:bg-primary/90 rounded transition-colors w-[178px] h-[32px] rounded-[8px]"
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
            className="fixed top-0 left-0 w-full bg-black text-white z-40"
            // Animate from top: -100% down to 0
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex flex-col items-center gap-2 pb-4">
              {/* Close button (optional) */}
              <button
                className="text-white hover:text-gray-300 self-end mr-4"
                onClick={toggleMenu}
              >
                ✕
              </button>

              <Button
                variant="ghost"
                onClick={() => scrollToSection("services")}
                className={`text-white hover:text-gray-300 hover:bg-gray-800 ${
                  activeSection === "services" ? "underline" : ""
                }`}
              >
                Services
              </Button>

              <Button
                variant="ghost"
                onClick={() => scrollToSection("roadmap")}
                className={`text-white hover:text-gray-300 hover:bg-gray-800 ${
                  activeSection === "roadmap" ? "underline" : ""
                }`}
              >
                Process
              </Button>

              <Button
                className="px-4 py-2 text-sm bg-primary text-white hover:bg-primary/90 rounded transition-colors"
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
