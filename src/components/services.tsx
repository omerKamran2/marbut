"use client";
import { FC } from "react";

const ServicesSection: FC = () => {
  const services = [
    {
      title: "Direct Hire Model",
      description:
        "Once we connect you with the right talent, they become a part of your team, fully integrated into your payroll, benefits, and compliance system.",
      features: [
        {
          title: "Hire the Top 1%",
          detail: "High caliber professionals, fully onboarded",
          image: "/assets/images/1.svg",
        },
        {
          title: "0% Risk, 100% Trust",
          detail: "If they don't start, you don't pay. Simple!",
          image: "/assets/images/2.svg",
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
          image: "/assets/images/3.svg",
        },
        {
          title: "Cultural Fit Assessment",
          detail: "We source candidates who align with your company’s values, work ethic, and vision.",
          image: "/assets/images/4.svg",
        },
        {
          title: "Global Time Zone Alignment",
          detail: "We find talent that seamlessly adapts to your time zone requirements and integrates into your workflows.",
          image: "/assets/images/5.svg",
        },
      ],
    },
    {
      title: "Tailored Solutions",
      description:
        "We work closely with you to create customised recruitment solutions that align with your goals, growth plans, and long-term vision.",
      features: [
        {
          title: "Fully Bespoke",
          detail: "Strategic hiring plans built around your specific business needs",
          image: "/assets/images/6.svg",
        },
        {
          title: "Your Best Interest is our Utmost Priority",
          detail: "A consultative approach to help you scale with the right talent.",
          image: "/assets/images/7.svg",
        },
        {
          title: "Hiring Specialists",
          detail: "Industry specific expertise for specialised roles.",
          image: "/assets/images/8.svg",
        },
      ],
    },
    {
      title: "Results First, Payment Later",
      description:
        "Our approach ensures you only pay for successful hires, keeping the process risk-free.",
      features: [
        {
          title: "Zero Upfront Cost",
          detail: "Pay only when your new hire officially starts.",
          image: "/assets/images/9.svg",
        },
        {
          title: "One Time Fee",
          detail: "Equivalent to the hire's first month's salary. No hidden charges.",
          image: "/assets/images/10.svg",
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
          image: "/assets/images/11.svg",
        },
        {
          title: "No Surprises, No Complications",
          detail: "Just a seamless and fully transparent hiring experience.",
          image: "/assets/images/12.svg",
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
          <div className="mt-6 w-full md:w-1/2 md:pr-10">
            <h2 className="mb-10 text-[48px] font-medium text-gray-900">
              {service.title}
            </h2>
            <p className="text-[24px] text-gray-700 font-medium">
              {service.description}
            </p>
          </div>

          {/* Right Column: Features */}
          <div className="mt-6 w-full md:mt-0 md:w-1/2">
            {service.features.map((feature, i) => (
              <div
                key={i}
                className="flex items-center space-x-4 rounded-lg"
              >
                {/* Placeholder for an icon or image */}
                {/* <div className="h-[160px] w-[160px] flex-shrink-0 rounded bg-gray-200" /> */}
                <img src={feature.image} alt={feature.title} className="h-[160px] w-[160px] flex-shrink-0 rounded object-cover" />

                <div>
                  <h3 className="text-[24px] font-thin text-gray-900 font-medium">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-gray-700 text-[16px] font-medium">{feature.detail}</p>
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
