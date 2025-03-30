"use client";

import Link from "next/link";
import { useTheme } from "@/app/ThemeProvider";

export default function Footer() {
  const { isDarkMode } = useTheme();

  return (
    <footer className={`border-t mx-auto px-4 md:px-6 lg:px-8 max-w-[1680px] ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      {/* Main Container */}
      <div className="px-4 py-8">
        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Column 1: Marbut + Icons */}
          <div className="space-y-4">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center">
              <img
                src={`${isDarkMode ? "/assets/images/dark-logo.png" : "/assets/images/light-logo.png"}`}
                alt="Marbūt Logo"
                className="h-[35px] w-[163px] mr-2"
              />
            </Link>

            {/* Social Icons */}
            <div className="flex gap-4">
              {socialLinks.map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`${isDarkMode ? "text-gray-300" : "text-gray-700"} hover:text-primary`}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Useful Links */}
          <div className="space-y-4">
            <h3 className={`text-[16px] font-normal ${isDarkMode ? "text-gray-300" : "text-[#1E1E1E]"}`}>Useful Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="#" className={`hover:underline text-[14px] ${isDarkMode ? "text-gray-400" : "text-[#757575]"}`}>
                FAQs
              </Link>
            </nav>
          </div>

          {/* Column 3: Contact Us */}
          <div className="space-y-4">
            <h3 className={`text-[16px] font-normal ${isDarkMode ? "text-gray-300" : "text-[#1E1E1E]"}`}>Contact Us</h3>
            <a href="mailto:contact@marbut.info" className={`text-[14px] ${isDarkMode ? "text-gray-400" : "text-[#757575]"}`}>
              contact@marbut.info
            </a>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-4 flex flex-col justify-between gap-4 border-t pt-4 md:flex-row">
          <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-[#757575]"}`}>&copy; 2024 Marbut. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

/** Social Media Icons */
/** Social Media Icons */
const socialLinks = [
  {
    href: "https://www.instagram.com",
    label: "Instagram",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.919-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    href: "https://www.facebook.com",
    label: "Facebook",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    href: "https://twitter.com",
    label: "Twitter",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20" fill="currentColor">
        <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.299 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985 0-.486 0-.972.325-1.458 14.182 7.891 30.355 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.182-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.794-2.599-15.913-2.599-24.03 0-57.828 46.782-104.934 104.934-104.934 30.355 0 57.502 12.67 76.67 33.137 24.03-4.772 46.456-13.319 66.599-25.34-7.891 24.366-24.366 44.833-46.132 57.827 21.334-2.273 41.467-8.122 60.234-16.243-14.182 20.791-31.861 39.308-52.628 54.253z" />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com",
    label: "LinkedIn",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20" height="20" fill="currentColor">
        <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340C24 108 0 83.32 0 53.86A53.86 53.86 0 0 1 53.84 0a53.85 53.85 0 0 1 53.72 53.86c0 29.36-24 54.14-53.72 54.14zM447.9 448h-92.68V306.4c0-33.7-.7-77.1-46.93-77.1-46.94 0-54.1 36.7-54.1 74.6V448H161.5V148.9h89.08v40.8h1.28c12.4-23.4 42.58-48 87.58-48 93.62 0 110.72 61.7 110.72 142.3V448z" />
      </svg>
    ),
  },
  {
    href: "https://www.tiktok.com",
    label: "TikTok",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M19.589 6.686a4.793 4.793 0 01-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 01-5.201 1.743 2.895 2.895 0 013.183-4.51v-3.5a6.329 6.329 0 00-5.394 10.692 6.33 6.33 0 0010.857-4.424V8.687a8.182 8.182 0 004.773 1.526V6.79a4.831 4.831 0 01-3.774-1.096z" />
      </svg>
    ),
  },
];
