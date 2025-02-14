// newsletter.tsx
// calendly.tsx

import Newsletter from './newsletter';
import Calendly from "./calendly";


export default function Contact() {
    return (
        <div className="container mx-auto pb-8 card-container mb-[100px]">
            <div className='mx-auto my-8 max-w-7xl px-4 text-center md:my-12 lg:my-16'>
                <h2 className="text-[48px] font-medium text-gray-900">
                    Hire the Perfect Fit
                </h2>
                <p className="mt-2 text-gray-600 text-[24px] pb-[50px] sm:pb-[100px] font-medium">
                    Book a free call with our team now!
                </p>
            </div>
            <div className="flex flex-col md:flex-row justify-center">
                <Calendly />
            </div>
        </div>
    )
}