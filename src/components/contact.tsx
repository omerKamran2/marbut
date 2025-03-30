// newsletter.tsx
// calendly.tsx

import Newsletter from "./newsletter";
import Calendly from "./calendly";

export default function Contact() {
  return (
    <div className="container mx-auto pb-8 card-container">
      <div className="mx-auto my-8 max-w-7xl px-4 text-center md:my-12 lg:my-16">
        <h2 className="text-[32px] md:text-[48px] font-medium text-[#1E1E1E]">Hire the Perfect Fit</h2>
        <p className="pt-[32px] text-[#757575] text-[20px[ md:text-[24px] font-medium">
          Book a free call with our team now!
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center">
        <Calendly />
      </div>
    </div>
  );
}
