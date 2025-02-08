"use client";
import { FC } from "react";

const ServicesSection: FC = () => {
  // Our array of services
  const services = [
    {
      title: "Results First, Payment Later",
      description:
        "Our approach ensures you only pay for successful hires, keeping the process risk-free.",
      features: [
        {
          title: "Zero Upfront Cost",
          detail: "Pay only when your new hire officially starts.",
        },
        {
          title: "One Time Fee",
          detail:
            "Equivalent to the hire's first month's salary. No hidden charges.",
        },
        {
          title: "Guaranteed Success",
          detail: "If they don't start, you don't pay. Simple!",
        },
      ],
    },
    {
      title: "Direct Hire Model",
      description:
        "Once we connect you with the right talent, they become a part of your team, fully integrated into your payroll, benefits, and compliance system.",
      features: [
        {
          title: "Hire the Top 1%",
          detail: "High caliber professionals, fully onboarded",
        },
        {
          title: "Guaranteed Success",
          detail:
            "If they don't start, you don't pay. Simple!",
        },
      ],
    },
    {
      title: "End to End Recruitment Support",
      description:
        "We take guesswork out of the hiring process, so you can fully focus on your business.",
      features: [
        {
          title: "Candidate Screening",
          detail: "We handle everything from resume reviews to interviews and skill assessments.",
        },
        {
          title: "Cultural Fit Assessment",
          detail:
            "We prioritise candidates who align with your company’s values, work ethic, and vision.",
        },
        {
          title: "Global Time Zone Alignment",
          detail: "Talent that seamlessly adapts to your time zone requirements and integrates into your workflows.",
        },
      ],
    },
    {
      title: "Flexible Payment Terms",
      description:
        "We understand that hiring is an investment. That’s why our payment structure is built for ease and flexibility.",
      features: [
        {
          title: "30 Day Payment Window",
          detail: "Settle payments after the onboarding is complete.",
        },
        {
          title: "No Surprises, No Complications",
          detail:
            "Just a seamless and fully transparent hiring experience.",
        },
      ],
    },
    {
      title: "Tailored Solutions",
      description:
        "We work closely with you to create customised recruitment solutions that align with your goals, growth plans, and long term vision.",
      features: [
        {
          title: "Fully Bespoke",
          detail: "Strategic hiring plans built around your specific business needs",
        },
        {
          title: "Your Best Interest is our Utmost Priority",
          detail:
            "A consultative approach to help you scale with the right talent.",
        },
        {
          title: "Hiring Specialists",
          detail: "Industry specific expertise for specialised roles.",
        },
      ],
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 md:px-6 lg:px-[100px]">
      {services.map((service, idx) => (
        <div
          key={idx}
          className="mb-16 flex flex-col md:flex-row md:items-start"
        >
          {/* Left Column: Title & Description */}
          <div className="w-full md:w-1/2 md:pr-10">
            <h2 className="mb-4 text-[48px] font-normal text-gray-900">
              {service.title}
            </h2>
            <p className="text-[24px] text-gray-700">
              {service.description}
            </p>
          </div>

          {/* Right Column: Features */}
          <div className="mt-6 w-full md:mt-0 md:w-1/2">
            {service.features.map((feature, i) => (
              <div
                key={i}
                className="mb-6 flex items-center space-x-4 rounded-lg  p-4"
              >
                {/* Placeholder for an icon or image */}
                <div className="h-[160px] w-[160px] flex-shrink-0 rounded bg-gray-200" />
                <div>
                  <h3 className="text-[24px] font-thin text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-gray-700 text-[16px]">{feature.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ServicesSection;
