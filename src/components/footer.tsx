import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="flex justify-center bg-black text-white rounded-xl">
      <div className="container px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 justify-between">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Icon className="h-6 w-6" />
              <span className="sr-only">Marbut</span>
            </Link>
              <h2>Marbut</h2>
              <div className="flex space-x-3">
              <Button variant="ghost" size="icon" asChild className='text-white hover:text-gray-300 hover:bg-gray-800'>
                  <Link href="#" aria-label="LinkedIn">
                    <Linkedin className="h-4 w-4" />
                  </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild className='text-white hover:text-gray-300 hover:bg-gray-800'>
                <Link href="#" aria-label="Twitter">
                  <Twitter className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild className='text-white hover:text-gray-300 hover:bg-gray-800'>
                <Link href="#" aria-label="Instagram">
                  <Instagram className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild className='text-white hover:text-gray-300 hover:bg-gray-800'>
                <Link href="#" aria-label="Facebook">
                  <Facebook className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Useful Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="#" className="hover:underline">
                FAQs
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p className="text-sm text-muted-foreground">contact@marbut.com</p>
          </div>
        </div>
        <div className="mt-4 flex flex-col justify-between gap-4 border-t pt-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; 2024 Marbut. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

function Icon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="24"
        viewBox="0 0 100 24"
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