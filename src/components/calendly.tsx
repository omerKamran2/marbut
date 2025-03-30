"use client";

import { useEffect } from "react";
import { Card } from "@/components/ui/card";

export default function Calendly() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Clean up the script on unmount
    };
  }, []);

  return (
    <Card className="w-full md:w-1/2 flex flex-col h-[800px]">
      <div
        className="calendly-inline-widget"
        // replace with link
        data-url="https://calendly.com/msani321/discovery-call "
        style={{ minWidth: "320px", height: "800px" }}
      ></div>
    </Card>
  );
}
