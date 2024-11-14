"use client";
// logo
// success stories
// services

// start hiring/book a demo

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/FBccZ0IWtW0
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { Button } from "./ui/button"
import { Card } from "./ui/card"

import Link from "next/link"

import { useState } from "react";


export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // Close menu after clicking
  };

  return (
    <div className="pb-8 header-container">
      <Card className="bg-black text-white">

        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <header className="flex h-20 w-full items-center px-4 md:px-6 justify-between">
            <Link href="/" className="inline-block">
              <Icon className="h-6 w-6" />
              <span className="sr-only">Marbut</span>
            </Link>

            <button
              className="block md:hidden p-2"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-4 mx-auto">
              <Button
                variant="ghost"
                onClick={() => scrollToSection("about")}
                className="text-white hover:text-gray-300 hover:bg-gray-800"
              >
                About Us
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("success_stories")}
                className="text-white hover:text-gray-300 hover:bg-gray-800"
              >
                Success Stories
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("services")}
                className="text-white hover:text-gray-300 hover:bg-gray-800"
              >
                Services
              </Button>
            </div>


            <div className="hidden md:flex gap-2 ml-auto">
              <Button
                className="justify-self-end px-4 py-2 text-sm bg-primary text-primary-foreground hover:bg-primary/90 rounded transition-colors"
                onClick={() => scrollToSection("contact")}
              >
                Start Hiring
              </Button>
            </div>
          </header>

          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="flex flex-col items-center gap-2 pb-4 md:hidden bg-black text-white rounded-lg">
              <Button
                variant="ghost"
                onClick={() => scrollToSection("about")}
                className="text-white hover:text-gray-300 hover:bg-gray-800"
              >
                About Us
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("success_stories")}
                className="text-white hover:text-gray-300 hover:bg-gray-800"
              >
                Success Stories
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("services")}
                className="text-white hover:text-gray-300 hover:bg-gray-800 mb-10"
              >
                Services
              </Button>
              <Button
                className="px-4 py-2 text-sm bg-primary text-primary-foreground hover:bg-primary/90 rounded transition-colors"
                onClick={() => scrollToSection("contact")}
              >
                Start Hiring
              </Button>
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}

function Icon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="24"
        viewBox="0 0 100 24"
    >
        <text
        x="0"
        y="20"
        fontFamily="Arial, sans-serif"
        fontSize="20"
        fill="currentColor"
        >
            Marbut
        </text>
    </svg>
  )
}