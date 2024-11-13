// newsletter.tsx
// calendly.tsx

import Newsletter from './newsletter';
import Calendly from "./calendly";


export default function Contact() {
    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-col md:flex-row gap-4">
                <Newsletter/>
                <Calendly/>
            </div>

        </div>
    )
}