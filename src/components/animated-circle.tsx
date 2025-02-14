import { FC, useEffect, useState, useRef } from "react";
import gsap from "gsap";

const AnimatedCircle: FC = () => {
  const [isClient, setIsClient] = useState(false);
  const initialAngles = useRef<number[]>([0, (2 * Math.PI) / 3, (4 * Math.PI) / 3]); // Evenly spaced angles

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    // Animate gradient border rotation only
    gsap.to(".gradient-border", {
      rotation: 360,
      repeat: -1,
      ease: "none",
      duration: 6,
    });
  }, [isClient]);

  if (!isClient) return null;

  return (
    <div className="relative w-[300px] h-[300px] flex items-center justify-center">
      {/* Gradient Border Circle */}
      <div className="gradient-border absolute w-[280px] h-[280px] rounded-full overflow-hidden">
        <div
          className="w-full h-full rounded-full"
          style={{
            background: `conic-gradient(
              #FF6347,
              #FF7F50,
              #FFD700,
              #ADFF2F,
              #32CD32,
              #FF6347
            )`,
            mask: `radial-gradient(transparent 55%, black 56%)`,
          }}
        />
      </div>

      {/* Three Equally-Spaced Circles */}
      {["red", "yellow", "blue"].map((color, index) => {
        const angle = initialAngles.current[index];
        const orbitRadius = 140;
        const x = orbitRadius * Math.cos(angle);
        const y = orbitRadius * Math.sin(angle);

        return (
          <div
            key={color}
            className={`absolute w-12 h-12 bg-${color}-400 rounded-full shadow-lg`}
            style={{
              transform: `translate(
                calc(-50% + ${x}px),
                calc(-50% + ${y}px)
              )`,
              top: "50%",
              left: "50%",
            }}
          />
        );
      })}
    </div>
  );
};

export default AnimatedCircle;
