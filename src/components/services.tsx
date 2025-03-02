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
        "Once we connect you with the right talent, they become a part of your team, fully integrated into your payroll, benefits, and compliance system.",
      features: [
        {
          title: "Hire the Top 1%",
          detail: "Highly qualified professionals, fully onboarded",
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
          image: "/assets/images/candidate_screening.png",
        },
        {
          title: "Cultural Fit Assessment",
          detail:
            "We source candidates who align with your company’s values, work ethic, and vision.",
          image: "/assets/images/cultural_fit_assessment.png",
        },
        {
          title: "Global Time Zone Alignment",
          detail:
            "We find talent that seamlessly adapts to your time zone requirements and integrates into your workflows.",
          image: "/assets/images/5.svg",
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
          detail: "Strategic hiring plans built around your specific business needs.",
          image: "/assets/images/fully_bespoke.png",
        },
        {
          title: "Your Best Interest is our Utmost Priority",
          detail: "A consultative approach to help you scale with the right talent.",
          image: "/assets/images/7.svg",
        },
        {
          title: "We Hire Specialists",
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
    /**
     * 1) For screens < 768px (mobile), do nothing => no animations.
     * 2) For screens >= 768px, run your existing pinned/scroll animations.
     */
    ScrollTrigger.matchMedia({

      // (A) Disable on mobile
      "(max-width: 767px)": function() {
        // Do nothing => no GSAP timeline for mobile
      },

      // (B) Enable on tablet and above
      "(min-width: 768px)": () => {
        sectionsRef.current.forEach((section) => {
          const leftCol = section.querySelector<HTMLElement>(".left-col");
          const rightCol = section.querySelector<HTMLElement>(".right-col");
          const featureItems = rightCol?.querySelectorAll<HTMLElement>(".feature-item") || [];

          if (!leftCol || !rightCol) return;

          // Same logic as before
          const viewportHeight = window.innerHeight;
          const sectionHeight = section.offsetHeight;
          const rightColHeight = rightCol.offsetHeight;

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: `top+=${viewportHeight * 0.25} center`,
              end: () => `+=${sectionHeight + rightColHeight}`,
              scrub: 1.5,
              pin: true,
              anticipatePin: 1,
              markers: false,
            },
          });

          // Left column animation
          tl.from(leftCol, {
            y: 200,
            opacity: 0.2,
            duration: 1.2,
            ease: "power4.out",
          });

          // Right column features
          tl.from(
            featureItems,
            {
              y: 400,
              opacity: 0,
              stagger: 0.3,
              duration: 1.5,
              ease: "power3.out",
            },
            "-=0.5"
          );

          // Exit animation
          tl.to(
            [leftCol, rightCol],
            {
              y: -200,
              opacity: 0,
              duration: 1.2,
              ease: "power4.in",
            },
            "+=0.2"
          );
        });
      },

    });
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-5 lg:px-[100px]">
      {services.map((service, idx) => (
        <section
          key={idx}
          ref={(el) => {
            if (el) sectionsRef.current[idx] = el;
          }}
          className="service-section flex flex-col md:flex-row"
        >
          {/* Left Column */}
          <div
            className="
              left-col
              w-full 
              md:w-1/2 
              md:pr-10 
              flex 
              flex-col 
              items-center  md:items-start 
              text-center   md:text-left
            "
          >
            {/* Service Title: 24px on mobile, 48px on md+ */}
            <h2 className="mb-[36px] pt-[144px] md:pt-[20px] font-medium text-[#1E1E1E] leading-tight text-[32px] md:text-[48px]">
              {service.title}
            </h2>
            {/* Service Description: 20px on mobile, 24px on md+ */}
            <p className=" text-[#757575] font-medium text-[20px] md:text-[24px]">
              {service.description}
            </p>
          </div>

          {/* Right Column */}
          <div className="right-col w-full md:mt-0 md:w-1/2">
            {service.features.map((feature, i) => (
              <div
                key={i}
                className="feature-item flex items-start space-x-4 rounded-lg mt-[56px] md:mt-[10px]"
              >
                {/* Image: 100px on mobile, 160px on md+ */}
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="h-[100px] w-[100px] md:h-[160px] md:w-[160px] flex-shrink-0 rounded object-cover"
                />
                <div>
                  {/* Feature Title: 24px on mobile (unchanged), 
                      if you need it bigger on desktop, do e.g. md:text-[28px] */}
                  <h3 className="text-[#1E1E1E] font-medium text-[24px] font-thin">
                    {feature.title}
                  </h3>
                  {/* Feature Description: 16px on both mobile & desktop (already 16). 
                      If you want a bigger size on desktop, add md:text-[18px] etc. */}
                  <p className="mt-1 text-[#757575] text-[16px] font-medium">
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