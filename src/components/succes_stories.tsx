//todo: animation

// picture
// name

// designation

// feedback
import Image from 'next/image'
import { QuoteIcon } from 'lucide-react'


const testies = [
    {
        id: "1",
        name: "Umar Saeed Cheema",
        designation: "Software Engineer",
        feedback: "Lorem Ipsum is simply dummy text of the printing and.Lorem Ipsum is simply dummy text of the printing and."
    },
    {
        id: "2",
        name: "Potato",
        designation: "Software Engineer",
        feedback: "BehtareenLorem Ipsum is simply dummy text of the printing and."
    },
    {
        id: "3",
        name: "Mukeet",
        designation: "Software Engineer",
        feedback: "BambuvLorem Ipsum is simply dummy text of the printing and.Lorem Ipsum is simply dummy text of the printing and."
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
        <div className="pb-8 card-container">
            <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-8">
                {testies.map(test => (
                    <Card key={test.id}>
                        <CardHeader>
                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                                <Image
                                    className="rounded-full shadow-lg"
                                    src="/cheema.jpg"
                                    width={100}
                                    height={100}
                                    alt={`${test.name}'s profile picture`}
                                />
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
            </div>
        </div>
    );
}
  