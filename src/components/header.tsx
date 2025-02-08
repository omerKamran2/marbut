"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // We want to watch these sections
  const sectionIds = ["about", "success_stories", "services", "contact"];

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

  const dropdownContainerVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: "auto", opacity: 1 },
    exit: { height: 0, opacity: 0 },
  };

  return (
    /** 
     * Make the outer container fixed and full width.
     * Increase the z-index so it stays on top of other content. 
     */
    <motion.div
      className="fixed top-0 left-0 w-full z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-white text-black">
        <div className="mx-auto px-4 md:px-6 lg:px-8">
          <header className="flex h-20 w-full items-center justify-between">
            <Link href="/" className="inline-block">
              <span className="text-[30px]">Marbūt</span>
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
              {/* About Us */}
              <Button
                variant="ghost"
                onClick={() => scrollToSection("about")}
                className={
                  activeSection === "about"
                    ? "text-primary bg-gray-200 h-[32px] rounded-[8px]"
                    : "hover:text-gray-700 h-[32px] rounded-[8px]"
                }
              >
                About Us
              </Button>

              {/* Success Stories */}
              <Button
                variant="ghost"
                onClick={() => scrollToSection("success_stories")}
                className={
                  activeSection === "success_stories"
                    ? "text-primary bg-gray-200 h-[32px] rounded-[8px]"
                    : "hover:text-gray-700 h-[32px] rounded-[8px]"
                }
              >
                Success Stories
              </Button>

              {/* Services */}
              <Button
                variant="ghost"
                onClick={() => scrollToSection("services")}
                className={
                  activeSection === "services"
                    ? "text-primary bg-gray-200 h-[32px] rounded-[8px]" 
                    : "hover:text-gray-700 h-[32px] rounded-[8px]"
                }
              >
                Services
              </Button>

              {/* Start Hiring */}
              <Button
                className="px-4 py-2 text-sm bg-primary text-white hover:bg-primary/90 rounded transition-colors w-[178px] h-[32px] rounded-[8px]"
                onClick={() => scrollToSection("contact")}
              >
                Start Hiring
              </Button>
            </div>
          </header>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className="flex flex-col items-center gap-2 pb-4 md:hidden bg-black text-white rounded-lg overflow-hidden mt-2"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={dropdownContainerVariants}
                transition={{ duration: 0.4 }}
              >
                <Button
                  variant="ghost"
                  onClick={() => scrollToSection("about")}
                  className={`text-white hover:text-gray-300 hover:bg-gray-800 ${
                    activeSection === "about" ? "underline" : ""
                  }`}
                >
                  About Us
                </Button>

                <Button
                  variant="ghost"
                  onClick={() => scrollToSection("success_stories")}
                  className={`text-white hover:text-gray-300 hover:bg-gray-800 ${
                    activeSection === "success_stories" ? "underline" : ""
                  }`}
                >
                  Success Stories
                </Button>

                <Button
                  variant="ghost"
                  onClick={() => scrollToSection("services")}
                  className={`text-white hover:text-gray-300 hover:bg-gray-800 ${
                    activeSection === "services" ? "underline" : ""
                  } mb-4`}
                >
                  Services
                </Button>

                <Button
                  className="px-4 py-2 text-sm bg-primary text-white hover:bg-primary/90 rounded transition-colors"
                  onClick={() => scrollToSection("contact")}
                >
                  Start Hiring
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Card>
    </motion.div>
  );
}
