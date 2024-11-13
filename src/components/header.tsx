"use client";
// logo
// success stories
// services

// start hiring/book a demo

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/FBccZ0IWtW0
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import Link from "next/link"
import { Button } from "./ui/button"
import { Card } from "./ui/card"

export default function Header() {
  return (
    <Card>
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <header className="flex h-20 w-full items-center px-4 md:px-6 justify-between">
        <Link href="#" className="mr-6 hidden lg:flex" prefetch={false}>
          <Icon className="h-6 w-6" />
          <span className="sr-only">Marbut</span>
        </Link>
            <div className="flex gap-2 mx-auto">
                <Link onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })}
                href=""
                className="inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                prefetch={false}
                >
                    About Us
                </Link>
                <Link onClick={() => document.getElementById("success_stories").scrollIntoView({ behavior: "smooth" })}
                    href=""
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                    prefetch={false}
                >
                    Success Stories
                </Link>
                <Link onClick={() => document.getElementById("services").scrollIntoView({ behavior: "smooth" })}
                    href=""
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                    prefetch={false}
                >
                    Services
                </Link>
            </div>
            <div className="flex gap-2 ml-auto">
            
            <Button
              className="justify-self-end px-2 py-1 text-xs bg-primary text-primary-foreground hover:bg-primary/90 rounded transition-colors"
              onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
            >
              Start Hiring
            </Button>


            
            </div>
      </header>
    </div>
    </Card>
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