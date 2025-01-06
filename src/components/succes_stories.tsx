//todo: animation
'use client'
// picture
// name

// designation

// feedback
import Image from 'next/image'
import { QuoteIcon } from 'lucide-react'


import { motion } from 'framer-motion'

const testies = [
    {
        id: "1",
        name: "Ryan Gartin",
        designation: "VP @ Trails Offroad ",
        feedback: "Such a wonderfully smooth process. Working with the founder was easy, his communication skills were excellent, and he really strived to understand what we were looking for. The candidates were top-notch. I continue to be impressed with the candidate we hired and will definitely utilize Marbūt's services again in the future as we grow our team."
    },
    {
        id: "2",
        name: "Alex Plavljanic ",
        designation: "Founder @ TalentHaul",
        feedback: "Partnering with Marbut has been an outstanding experience. Their ability to source exceptional talent with remarkable efficiency is truly impressive. Every recommendation has been a perfect fit, demonstrating their deep understanding of my requirements. The professionalism and dedication of Muhammad, the founder, make Marbut a trusted and invaluable partner for my agency. Highly recommended!"
    },
    {
        id: "3",
        name: "Noman Khan",
        designation: "Managing Partner @ Young Friends Partnet Ltd.",
        feedback: "Marbut has been instrumental in helping my firm find exceptional remote talent from Pakistan. The account executives they sourced have exceeded expectations in both skill and professionalism. Muhammad demonstrates an unwavering commitment to delivering top-tier candidates. I highly recommend Marbut for anyone seeking reliable and efficient recruitment services."
    }
]


interface testies {
    id: String
    name: String,
    designation: String,
    feedback: String
}

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"


export default function SuccessStories() {
    return (
            <motion.div 
                className="grid md:grid-cols-3 sm:grid-cols-1 gap-4 pb-8 card-container"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1}}
                transition={{
                    type: 'spring',
                    stiffness: 50
                }}
            >
                {testies.map(test => (
                    <Card key={test.id}>
                        <CardHeader>
                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                                {/* <Image
                                    className="rounded-full shadow-lg"
                                    src="/cheema.jpg"
                                    width={100}
                                    height={100}
                                    alt={`${test.name}'s profile picture`}
                                /> */}
                                <div className="text-center sm:text-left pt-4">
                                    <h3 className="text-lg font-semibold">{test.name}</h3>
                                    <p className="text-sm text-muted-foreground">{test.designation}</p>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                        <div className="relative">
                            <QuoteIcon className="absolute top-0 left-0 text-muted-foreground/50 h-8 w-8 -translate-x-2 -translate-y-2" />
                            <QuoteIcon className="absolute bottom-0 right-0 text-muted-foreground/50 h-8 w-8 rotate-180" />
                            <blockquote className="px-8 py-4 italic text-muted-foreground">
                                {test.feedback}
                            </blockquote>
                        </div>
                        </CardContent>
                    </Card>
                ))}
            </motion.div>
    );
}
  