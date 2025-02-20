"use client";

import Image from "next/image";
import { FC } from "react";
// Adjust the import path for your shadcn Card component:
import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AnimatedCircle from "./animated-circle";

const HeroSection: FC = () => {
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
    <section className="mx-auto max-w-4xl px-4 py-8 md:px-6 lg:px-8">
      {/* Top Row: Three Circle Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 pb-[160px]">
        {circleItems.map((item, i) => (
          <Card key={i} className="flex flex-col items-center p-4">
            <CardHeader className="flex flex-col items-center">
              {/* Circle Image */}
              <div className="mb-2">
                <Image
                  src={item.src}
                  alt={item.text}
                  width={60}
                  height={60}
                // or use a fixed size or "fill" layout
                />
              </div>
              {/* Title */}
              <CardTitle className="text-center text-sm font-medium leading-tight text-[16px]">
                {item.text}
              </CardTitle>
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
        <h2 className="text-[48px] font-medium text-[#1E1E1E] md:text-3xl pb-[32px]">
          We craft teams with <br /> intention, precision, &amp; impact
        </h2>
        {/* Subheading / Paragraph */}
        <p className="max-w-3xl text-[24px] text-[#757575] md:text-lg font-medium">
          Our talent solutions ensure every hire is a strategic asset <br />raising your team’s talent density, not just a seat filled.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
