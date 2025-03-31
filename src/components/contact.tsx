"use client";
import { FC } from "react";
import { useTheme } from "@/app/ThemeProvider";
import Calendly from "./calendly";

const Contact: FC = () => {
  const { isDarkMode } = useTheme();
  return (
    <div className="container mx-auto pb-8 card-container">
      <div className="mx-auto my-8 max-w-7xl px-4 text-center md:my-12 lg:my-16">
        <h2 className={`text-[32px] md:text-[48px] font-medium ${isDarkMode ? "text-white" : "text-[#1E1E1E]"}`}>Hire the Perfect Fit</h2>
        <p className={`pt-[32px] text-[20px] md:text-[24px] font-medium ${isDarkMode ? "text-[#D1D1D6]" : "text-[#757575]"}`}>
          Book a free call with our team now!
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center">
        <Calendly />
      </div>
    </div>
  );
};

export default Contact;
