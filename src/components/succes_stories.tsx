//todo: animation
"use client";

import Image from "next/image";

import { motion } from "framer-motion";

const testimonials = [
  {
    id: "1",
    name: "Ryan Gartin",
    designation: "VP @ Trails Offroad ",
    feedback:
      "Such a wonderfully smooth process. Working with the founder was easy, his communication skills were excellent, and he really strived to understand what we were looking for. The candidates were top-notch. I continue to be impressed with the candidate we hired and will definitely utilize Marbūt's services again in the future as we grow our team.",
    image: "/assets/images/person1.jpeg",
  },
  {
    id: "2",
    name: "Alex Plavljanic ",
    designation: "Founder @ TalentHaul",
    feedback:
      "Partnering with Marbut has been an outstanding experience. Their ability to source exceptional talent with remarkable efficiency is truly impressive. Every recommendation has been a perfect fit, demonstrating their deep understanding of my requirements. The professionalism and dedication of Muhammad, the founder, make Marbut a trusted and invaluable partner for my agency. Highly recommended!",
    image: "/assets/images/person2.jpeg",
  },
  {
    id: "3",
    name: "Noman Ahmed Khan",
    designation: "Managing Partner @ Young Friends Partners Ltd.",
    feedback:
      "Marbut has been instrumental in helping my firm find exceptional remote talent from Pakistan. The account executives they sourced have exceeded expectations in both skill and professionalism. Muhammad demonstrates an unwavering commitment to delivering top-tier candidates. I highly recommend Marbut for anyone seeking reliable and efficient recruitment services.",
    image: "/assets/images/person3.jpeg",
  },
];

import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function SuccessStories() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h2 className="text-[32px] md:text-[48px] font-medium text-[#1E1E1E] pb-[32px] leading-tight">Trusted by Founders</h2>
        <p className="mt-2 text-[#757575] text-[20px] md:text-[24px] pb-[89px] md:pb-[160px] font-medium">
          We source talent that not just performs, but transforms
        </p>
      </div>
      <motion.div // For small screens: flex row + horizontal scroll // For md and above: switch to a normal 3-column grid
        className="
                    flex 
                    gap-4 
                    overflow-x-auto 
                    pb-8 
                    card-container 

                    md:grid 
                    md:grid-cols-3 
                    md:gap-8 
                    md:overflow-visible
                "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ type: "spring", stiffness: 50 }}
      >
        {testimonials.map((test) => (
          <Card key={test.id} className="flex-none w-[90%] md:w-auto">
            <CardHeader>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                <Image
                  className="rounded-full shadow-lg mt-6"
                  src={test.image}
                  width={50}
                  height={50}
                  alt={`${test.name}'s
                                profile picture`}
                />
                <div className="text-center sm:text-left pt-4">
                  <h3 className="text-[24px] font-medium text-[#1E1E1E]">{test.name}</h3>
                  <p className="text-[16px] text-[#757575] font-medium">{test.designation}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="relative">
                {/*
                                <QuoteIcon className="absolute top-0 left-0 text-muted-foreground/50 h-8 w-8 -translate-x-2 -translate-y-2" />
                                <QuoteIcon className="absolute bottom-0 right-0 text-muted-foreground/50 h-8 w-8 rotate-180" /> */}
                <blockquote className="py-4 text-[14px] text-[#757575] font-medium">"{test.feedback}"</blockquote>
              </div>
            </CardContent>
          </Card>
        ))}
      </motion.div>
    </>
  );
}
