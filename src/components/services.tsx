"use client";
import { FC, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ServicesSection: FC = () => {
  const sectionsRef = useRef<HTMLElement[]>([]);
  const services = [
    {
      title: "Direct Hire Model",
      description:
        "Once we connect you with the right talent, they become a part of your team...",
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
          detail:
            "We handle everything from resume reviews to interviews and skill assessments.",
          image: "/assets/images/3.svg",
        },
        {
          title: "Cultural Fit Assessment",
          detail:
            "We source candidates who align with your company’s values, work ethic, and vision.",
          image: "/assets/images/4.svg",
        },
        {
          title: "Global Time Zone Alignment",
          detail:
            "We find talent that seamlessly adapts to your time zone requirements...",
          image: "/assets/images/5.svg",
        },
      ],
    },
    {
      title: "Tailored Solutions",
      description:
        "We work closely with you to create customised recruitment solutions...",
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

  useEffect(() => {
    sectionsRef.current.forEach((section) => {
      const leftCol = section.querySelector<HTMLElement>(".left-col");
      const rightCol = section.querySelector<HTMLElement>(".right-col");

      if (!leftCol || !rightCol) return;

      const featureItems = rightCol.querySelectorAll(".feature-item");

      // Create the timeline for this section
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          // start when the center of the section hits the center of the viewport
          start: "-=300",
          // keep the leftCol pinned until the bottom of this section
          // reaches the top of the viewport (so the next section can start)
          end: "+=500",
          pin: leftCol,       // pin the left column
          pinSpacing: true,   // add space so the next sections are pushed down
          scrub: 1,           // tie the timeline's progress to the scroll
          markers: false,     // or true for debugging
        },
      });

      // Animate the left column in from below
      tl.from(leftCol, {
        y: 200,
        opacity: 0,
        duration: 2,
        immediateRender: false, // important so it doesn't jump right away
        ease: "power2.out",
      });

      // Animate the right column's features with a stagger
      // We use a label (">0.5") so this starts 0.5s *after* the leftCol animation
      tl.from(
        featureItems,
        {
          y: 600,
          opacity: 0.3,
          stagger: 0.5,
          duration: 5,
          ease: "power2.out",
        },
        ">"
      );
    });
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 md:px-6 lg:px-[100px]">
      {services.map((service, idx) => (
        <section
          key={idx}
          ref={(el) => {
            if (el) sectionsRef.current[idx] = el;
          }}
          className="service-section mb-32 flex flex-col md:flex-row"
        >
          {/* Left Column */}
          <div className="left-col mt-6 w-full md:w-1/2 md:pr-10">
            <h2 className="mb-10 text-[48px] font-medium text-gray-900">
              {service.title}
            </h2>
            <p className="text-[24px] text-gray-700 font-medium">
              {service.description}
            </p>
          </div>

          {/* Right Column */}
          <div className="right-col mt-6 w-full md:mt-0 md:w-1/2">
            {service.features.map((feature, i) => (
              <div
                key={i}
                className="feature-item flex items-center space-x-4 rounded-lg"
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="h-[160px] w-[160px] flex-shrink-0 rounded object-cover"
                />
                <div>
                  <h3 className="text-[24px] font-thin text-gray-900 font-medium">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-gray-700 text-[16px] font-medium">
                    {feature.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default ServicesSection;
