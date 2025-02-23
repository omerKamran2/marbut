import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { icon } from '@fortawesome/fontawesome-svg-core';

// Footer
export default function Footer() {
  return (
    <footer className="bg-white text-black border-t mx-auto px-4 md:px-6 lg:px-8 max-w-[1680px]">
      {/* We remove 'container' so the footer spans the full width */}
      <div className="px-4 py-8">
        {/* Use a 3-column grid for desktop */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

          {/* Column 1: Marbut + Icons */}
          <div className="space-y-4">
            {/* Logo (SVG) */}
            {/* <Link href="/" className="block">
              <Icon className="h-6 w-6" />
            </Link> */}

            {/* Marbut text */}
            <Link href="/" className="inline-flex items-center">
              <img src="/assets/images/Logo.svg" alt="Marbūt Logo" className="h-8 w-8 mr-2" />
              <span className="text-[40px] font-medium text-[#1E1E1E]">Marbūt</span>
            </Link>

            {/* Icons under "Marbut" */}
            
            <div className="flex gap-4" style={{width:"100px"}}>
              <FontAwesomeIcon icon={faTwitterSquare} />
              
              <FontAwesomeIcon icon={faInstagram} />
              
              <FontAwesomeIcon icon={faLinkedin} />
            
            </div>
          </div>

          {/* Column 2: Useful Links */}
          <div className="space-y-4">
            <h3 className="text-[16px] font-normal text-[#1E1E1E]">Useful Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="#" className="hover:underline text-[14px] text-[#757575]">
                FAQs
              </Link>
            </nav>
          </div>

          {/* Column 3: Contact Us */}
          <div className="space-y-4">
            <h3 className="text-[16px] font-normal text-[#1E1E1E]">Contact Us</h3>
            <a href="mailto:contact@marbut.info" className="text-[14px] text-[#757575]">contact@marbut.info</a>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-4 flex flex-col justify-between gap-4 border-t pt-4 md:flex-row">
          <p className="text-sm text-[#757575]">
            &copy; 2024 Marbut. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

// Example SVG for "Marbut" (placeholder). Adjust as needed.
function Icon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="24"
      viewBox="0 0 100 24"
      {...props}
    >
      <text
        x="0"
        y="20"
        fontFamily="Arial, sans-serif"
        fontSize="20"
        fill="currentColor"
      >
        Marbut
      </text>
    </svg>
  )
}
