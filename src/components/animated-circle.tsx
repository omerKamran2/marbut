import { FC, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedCircle: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const circlesRef = useRef<(HTMLDivElement | null)[]>(Array(3).fill(null));
  const initialAngles = [0, (2 * Math.PI) / 3, (4 * Math.PI) / 3];
  const orbitRadius = 140;

  useEffect(() => {
    const rotation = { value: 0 };

    gsap.to(rotation, {
      value: 360,
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.1, // Reduce scrub value for faster rotation
      },
      onUpdate: () => {
        initialAngles.forEach((baseAngle, index) => {
          const currentAngle = baseAngle + (rotation.value * Math.PI) / 180;
          const x = orbitRadius * Math.cos(currentAngle);
          const y = orbitRadius * Math.sin(currentAngle);
          const circle = circlesRef.current[index];
          
          if (circle) {
            gsap.set(circle, {
              x: x,
              y: y,
              background: `hsl(${rotation.value}, 100%, 50%)`
            });
          }
        });
      },
    });
  }, []);

  return (
    <div ref={containerRef} className="relative w-[300px] h-[300px] flex items-center justify-center">
      {/* Gradient Border */}
      <div className="absolute w-[280px] h-[280px] rounded-full overflow-hidden">
        <div
          className="w-full h-full rounded-full"
          style={{
            background: `conic-gradient(
              #FF6347 0deg,
              #FF7F50 72deg,
              #FFD700 144deg,
              #ADFF2F 216deg,
              #32CD32 288deg,
              #FF6347 360deg
            )`,
            mask: `radial-gradient(transparent 55%, black 56%)`
          }}
        />
      </div>

      {/* Rotating Circles */}
      {initialAngles.map((_, index) => (
        <div
          key={index}
          ref={(el) => { circlesRef.current[index] = el }}
          className="absolute w-12 h-12 rounded-full shadow-lg"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedCircle;
