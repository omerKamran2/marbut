"use client";

import Image from "next/image";
import { FC } from "react";
// Adjust the import path for your shadcn Card component:
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedCircle from "./animated-circle";
import { useTheme } from "@/app/ThemeProvider";

const HeroSection: FC = () => {
  const { isDarkMode } = useTheme();
  // Data for the top circles
  const circleItems = [
    {
      src: "/assets/images/green_wheel.png",
      text: "Hand picked, high caliber Pakistani professionals",
    },
    {
      src: "/assets/images/gradient_wheel_2.png",
      text: "Process that prioritises expertise and cultural fit",
    },
    {
      src: "/assets/images/yellow_wheel.png",
      text: "Top 1% talent at competitive rates",
    },
    // Add or remove more items if needed
  ];

  return (
    <section className="mx-auto max-w-4xl px-4 md:px-6">
      {/* Top Row: Three Circle Cards */}
      <div className="grid grid-cols-1 gap-[16px] md:grid-cols-3 pb-[70px] md:pb-[160px]">
        {circleItems.map((item, i) => (
          <Card
            key={i}
            // 80% wide on mobile, auto-width (full grid cell) at md+
            className="w-[240px] mx-auto md:w-auto flex flex-col items-center p-4"
          >
            <CardHeader className="flex flex-col items-center">
              <div className="mb-2">
                <Image src={item.src} alt={item.text} width={60} height={60} />
              </div>
              <CardTitle className="text-center text-sm font-medium leading-tight text-[16px]">{item.text}</CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>

      {/* Large Circle Image & Text */}
      <div className="flex flex-col items-center text-center">
        <div className="pb-[62px]">
          <AnimatedCircle></AnimatedCircle>
        </div>
        {/* Heading */}
        <h2 className={`hidden md:block text-[48px] font-medium pb-[32px] leading-tight ${isDarkMode ? "text-white" : "text-[#1E1E1E]"}`}>
          We craft teams with <br /> intention, precision, &amp; impact
        </h2>

        {/* Mobile Title */}
        <h2 className={`block md:hidden text-[48px] font-medium pb-[32px] leading-tight ${isDarkMode ? "text-white" : "text-[#1E1E1E]"}`}>
          {/* A different mobile text */}
          We craft teams with intension, precision, & impact
        </h2>
        {/* Subheading / Paragraph */}
        <p className={`hidden md:block max-w-3xl text-[24px] md:text-lg font-medium ${isDarkMode ? "text-[#D1D1D6]" : "text-[#757575]"}`}>
          Our talent solutions ensure every hire is a strategic asset <br /> raising your team’s talent density, not just a seat filled.
        </p>
        <p className={`block md:hidden max-w-3xl text-[20px] md:text-[24px] md:text-lg font-medium ${isDarkMode ? "text-[#D1D1D6]" : "text-[#757575]"}`}>
          Our talent solutions ensure every hire is a strategic asset raising your team’s talent density, not just a seat filled.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
