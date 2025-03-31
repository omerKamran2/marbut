"use client";
import { FC, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedCircle: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const circlesRef = useRef<(HTMLDivElement | null)[]>(Array(3).fill(null));

  // Circle starting angles in radians (0°, 120°, 240°).
  // 0 rad = top; we want that to align with red on the wheel.
  const initialAngles = [0, (2 * Math.PI) / 3, (4 * Math.PI) / 3];

  // Distance from center for each orbiting circle
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const orbitRadius = isMobile ? 125 : 180;

  useEffect(() => {
    // We'll rotate from 0 -> 360 as the user scrolls the page
    const rotation = { value: 0 };

    gsap.to(rotation, {
      value: 360,
      ease: "none",
      scrollTrigger: {
        trigger: document.body, // or a specific container
        start: "top top",
        end: "bottom bottom",
        scrub: 0.1,
      },
      onUpdate: () => {
        initialAngles.forEach((baseAngle, index) => {
          // currentAngle in radians
          const currentAngle = baseAngle + (rotation.value * Math.PI) / 180;

          // Convert radians to degrees. 0° at top.
          const angleDeg = (currentAngle * 180) / Math.PI;

          // Position in XY plane
          const x = orbitRadius * Math.cos(currentAngle);
          const y = orbitRadius * Math.sin(currentAngle);

          const circle = circlesRef.current[index];
          if (circle) {
            // Set position and color, matching the wheel’s hue at angleDeg
            gsap.set(circle, {
              x,
              y,
              background: `hsl(${(angleDeg + 180) % 360}, 100%, 50%)`,
            });
          }
        });
      },
    });
  }, []);

  return (
    <div
      ref={containerRef}
      // Mobile: 300x300, md+: 400x400
      className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] flex items-center justify-center"
    >
      {/* The Color Wheel: also changes size on md+ */}
      <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden">
        <div
          className="w-full h-full rounded-full"
          style={{
            background: `conic-gradient(from -90deg,
              hsl(0,100%,50%) 0deg,
              hsl(60,100%,50%) 60deg,
              hsl(120,100%,50%) 120deg,
              hsl(180,100%,50%) 180deg,
              hsl(240,100%,50%) 240deg,
              hsl(300,100%,50%) 300deg,
              hsl(360,100%,50%) 360deg
            )`,
            mask: `radial-gradient(transparent 50%, black 51%)`,
          }}
        />
      </div>

      {/* Center Gradient Circle - smaller on mobile, bigger on md+ */}
      <div
        className="absolute rounded-full"
        style={{
          width: "35px",
          height: "35px",
          background: "radial-gradient(circle at 50% 50%, white 0%, #808080 100%)",
        }}
      />
      {/* If you want to scale it on md+:
          className="absolute rounded-full md:w-[45px] md:h-[45px]"
          and so on. 
      */}

      {/* Orbiting Circles - smaller on mobile, bigger on md+ */}
      {initialAngles.map((_, index) => (
        <div
          key={index}
          ref={(el) => {
            circlesRef.current[index] = el;
          }}
          // Mobile ~80px, md ~101px
          className="absolute w-[80px] h-[80px] md:w-[101px] md:h-[101px] rounded-full shadow-lg border-2 border-white"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedCircle;
