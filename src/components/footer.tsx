import { LinkedinIcon as LinkedIn, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="rounded-xl bg-primary text-primary-foreground py-4 w-full">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-6 md:gap-4 px-4">
        {/* Contacts Section (Left) */}
        <div className="flex flex-col items-center md:items-start space-y-2 order-2 md:order-1">
          <h2 className="font-semibold text-lg">Contacts</h2>
          <p className="text-sm">contact@marbut.com</p>
          <div className="flex space-x-2">
            {/* Social Icons */}
            <a href="#" aria-label="LinkedIn" className="p-2 border rounded-full hover:bg-primary-foreground hover:text-primary transition-colors">
              <LinkedIn className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Twitter" className="p-2 border rounded-full hover:bg-primary-foreground hover:text-primary transition-colors">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Instagram" className="p-2 border rounded-full hover:bg-primary-foreground hover:text-primary transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
        
        {/* Useful Links Section (Center) */}
        <div className="flex flex-col items-center space-y-2 order-1 md:order-2">
          <h2 className="font-semibold text-lg">Useful Links</h2>
          <a href="#" className="text-sm hover:underline">FAQs</a>
          <a href="#" className="text-sm hover:underline">Blog</a>
        </div>
        
        {/* Copyright Section (Right) */}
        <div className="flex items-center justify-center md:justify-end order-3">
          <p className="text-sm">&copy; 2024 Marbut</p>
        </div>
      </div>
    </footer>
  )
}