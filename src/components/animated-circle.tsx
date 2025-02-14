import { FC, useEffect, useState, useRef } from "react";

const AnimatedCircle: FC = () => {
  const [isClient, setIsClient] = useState(false);
  const initialAngles = useRef<number[]>([0, (2 * Math.PI) / 3, (4 * Math.PI) / 3]); // Evenly spaced angles

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="relative w-[300px] h-[300px] flex items-center justify-center">
      {/* Gradient Border Circle */}
      <div className="gradient-border absolute w-[280px] h-[280px] rounded-full overflow-hidden">
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
            mask: `radial-gradient(transparent 55%, black 56%)`,
          }}
        />
      </div>

      {/* Three Circles with Dynamic Colors */}
      {initialAngles.current.map((angle, index) => {
        const orbitRadius = 140;
        const x = orbitRadius * Math.cos(angle);
        const y = orbitRadius * Math.sin(angle);

        // Calculate color based on angle (matching the conic gradient)
        const hue = (angle * (180 / Math.PI)) % 360; // Convert radian to degrees
        const bgColor = `hsl(${hue}, 100%, 50%)`; // Use HSL for smooth transition

        return (
          <div
            key={index}
            className="absolute w-12 h-12 rounded-full shadow-lg"
            style={{
              backgroundColor: bgColor, // Dynamically set color
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
