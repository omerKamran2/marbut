"use client";
import { FC } from "react";

const RoadMap: FC = () => {
  // Define your steps data here
  const steps = [
    {
      title: "Discovery Call",
      description:
        "We start with a deep dive into your hiring needs, expectations, and team dynamics.",
      image: "/assets/images/12-5.svg",

    },
    {
      title: "Job Description",
      description:
        "Together, we craft a detailed job description that aligns with your exact requirements.",
      image: "/assets/images/13.svg",

    },
    {
      title: "Job Distribution",
      description:
        "We tap into our exclusive talent network and top university partnerships to source the best candidates.",
      image: "/assets/images/14.svg",

    },
    {
      title: "Candidate Shortlisting",
      description:
        "Within 48–96 hours, we present rigorously vetted candidates ready for your review.",
      image: "/assets/images/13-5.svg",

    },
    {
      title: "Client Interviews",
      description:
        "You interview and assess shortlisted candidates through one or more rounds.",
      image: "/assets/images/14-3.svg",

    },
    {
      title: "Offer Placement",
      description:
        "Once you select the right fit, you extend an offer, and the candidate signs the agreement.",
      image: "/assets/images/14-6.svg",

    },
    {
      title: "Invoice & Payment",
      description:
        "We issue an invoice upon signature, payable within 30 days for complete flexibility.",
      image: "/assets/images/17.svg",

    },
    {
      title: "Free Replacement Guarantee",
      description:
        "If your new hire leaves within 60 days, we find a replacement at no extra cost.",
      image: "/assets/images/18.svg",

    },
  ];

  return (
    <section className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
      <h2 className="text-center text-[48px] font-medium text-[#1E1E1E] pb-[160px]">
        Our Hiring Process
      </h2>
      <div className="space-y-[24px] pt-[32px]">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center space-x-4">
            {/* Placeholder for step image/thumbnail */}
            {/* <div className="h-[160px] w-[160px] flex-shrink-0 bg-gray-200" /> */}
            <img src={step.image} alt={step.title} className="h-[160px] w-[160px] flex-shrink-0 rounded object-cover" />

            {/* Step Text */}
            <div>
              <h2 className="mb-1 font-medium text-[#1E1E1E] text-[24px] leading-tight">
                {index + 1}. {step.title}
              </h2>
              <p className="text-[#757575] text-[16px] font-medium">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RoadMap;
