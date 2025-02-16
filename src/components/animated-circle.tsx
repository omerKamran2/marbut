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
  const orbitRadius = 140;

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
              background: `hsl(${(angleDeg -180 + 360)% 360}, 100%, 50%)`,
            });
          }
        });
      },
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-[300px] h-[300px] flex items-center justify-center"
    >
      {/* The Color Wheel */}
      <div className="absolute w-[280px] h-[280px] rounded-full overflow-hidden">
        <div
          className="w-full h-full rounded-full"
          style={{
            // 1) "from -90deg" makes 0° at the top, 90° on the right, 180° at the bottom, etc.
            // 2) We use hsl(0..360) stops to perfectly match the .from() circle angles
            background: `conic-gradient(from -90deg,
              hsl(0,100%,50%) 0deg,
              hsl(60,100%,50%) 60deg,
              hsl(120,100%,50%) 120deg,
              hsl(180,100%,50%) 180deg,
              hsl(240,100%,50%) 240deg,
              hsl(300,100%,50%) 300deg,
              hsl(360,100%,50%) 360deg
            )`,
            // Adjust these percentages to change ring thickness
            mask: `radial-gradient(transparent 50%, black 51%)`,
          }}
        />
      </div>

      {/* Orbiting Circles */}
      {initialAngles.map((_, index) => (
        <div
          key={index}
          ref={(el) => {
            circlesRef.current[index] = el;
          }}
          className="absolute w-12 h-12 rounded-full shadow-lg"
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
