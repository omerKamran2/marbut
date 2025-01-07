// services: card - 3

// flow diagram
'use client'


const services = [
    {
        id: "2",
        service: "Performance-Based Fee Structure",
        description: "Our services are 100% results-driven. You only pay a one-time fee equivalent to the new hire's monthly gross salary, and only once they officially start working.",
        subItems: [
            {
                title: "Pay Only When You Hire",
                detail: "You only pay a one-time fee equivalent to the new hire's monthly gross salary, and only once they officially start working."
            },
            {
                title: "Flexible Payment Terms",
                detail: "Payments are due within 30 days of the employee signing the offer letter, giving you the time and flexibility to finalize onboarding."
            }
        ]
    },
    {
        id: "1",
        service: "Direct Hire",
        description: "We provide a seamless process to connect you with top-tier talent who join your team directly. From that point forward, you take charge of payroll, benefits, and compliance, ensuring complete integration into your organization.",
    },
    {
        id: "3",
        service: "Free Replacement Guarantee",
        description: "If the hire doesn’t meet your expectations within the first 60 days, we provide a free-of-cost replacement, ensuring a smooth transition without disrupting your operations."
    },
    {
        id: "5",
        service: "End-to-End Recruitment Support",
        description: "We handle the entire vetting process, including resume reviews, interviews, and skill assessments, so you only meet the most qualified candidates.",
        subItems: [
            {
                title: "Candidate Screening",
                detail: "We handle the entire vetting process, including resume reviews, interviews, and skill assessments, so you only meet the most qualified candidates."
            },
            {
                title: "Cultural Fit Assessment",
                detail: "Beyond technical skills, we prioritize candidates who align with your organization’s values and culture."
            },
            {
                title: "Global Time Zone Alignment",
                detail: "We focus on identifying professionals who are accustomed to working with international clients and can adapt to your time zone requirements."
            }
        ]
    },
    {
        id: "6",
        service: "Tailored Solutions",
        description: "Every organization is unique, and so are its hiring needs. We work closely with you to craft customized recruitment solutions that align with your business goals and hiring strategy."
    },
    {
        id: "4",
        service: "Industry Expertise",
        description: "Our extensive network and deep understanding of both the tech and non-tech industries allow us to find candidates who not only meet but exceed your expectations."
    },
];

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { motion } from "framer-motion";

export default function Services() {
    return (
        <>
            <motion.div 
                className="flex items-center justify-center my-4"
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5 }}
            >
                 {/* <Card className="w-full max-w-md p-4">
                    <CardTitle className="flex items-center justify-center"> */}
                    <div className="flex flex-col justify-center">
                        <h2 className="pb-2 border-b flex justify-center">
                            Services
                        </h2>
                        <span>
                            Exceptional services we offer
                        </span>
                    </div>
                    {/* </CardTitle> */}
                    {/* <CardContent className="flex items-center justify-center pt-2"> */}
                    {/* </CardContent> */}
                {/* </Card> */}
            </motion.div>
            <div className="pb-8 card-container">
                <div className="custom-grid gap-4">
                    {services.map((service, index) => (
                        <Card key={service.id} className={`services-container service-card card-${index + 1}`}>
                            <CardHeader className="flex items-center justify-center">
                                <div>
                                    <CardTitle className="text-center">{service.service}</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="flex flex-col items-center justify-center">
                                <p className="text-center mb-4">
                                    {service.description}
                                </p>
                                {service.subItems && (
                                    <ul className="list-disc px-4">
                                        {service.subItems.map((item, index) => (
                                            <li key={index}>
                                                <strong>{item.title}:</strong> {item.detail}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <br/>
                <Card className="">
                <CardContent className="flex flex-col items-center justify-center space-y-6">
                    <h2 className="text-xl font-bold text-center">Recruitment Process Flow</h2>
                    <div className="w-full max-w-2xl">
                        <ol className="relative border-l border-gray-300">
                            {/* Step 1 */}
                            <li className="mb-10 ml-6">
                                <div className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500">
                                    <span className="text-white font-bold text-sm">1</span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800">Discovery Call</h3>
                                <p className="text-sm text-gray-600">
                                    Discuss client’s hiring needs and expectations.
                                </p>
                            </li>
                            {/* Step 2 */}
                            <li className="mb-10 ml-6">
                                <div className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500">
                                    <span className="text-white font-bold text-sm">2</span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800">Job Description</h3>
                                <p className="text-sm text-gray-600">
                                    Create a detailed job description with client input.
                                </p>
                            </li>
                            {/* Step 3 */}
                            <li className="mb-10 ml-6">
                                <div className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500">
                                    <span className="text-white font-bold text-sm">3</span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800">Job Distribution</h3>
                                <p className="text-sm text-gray-600">
                                    Share the job with our talent database and partner universities.
                                </p>
                            </li>
                            {/* Step 4 */}
                            <li className="mb-10 ml-6">
                                <div className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500">
                                    <span className="text-white font-bold text-sm">4</span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800">Candidate Shortlisting</h3>
                                <p className="text-sm text-gray-600">
                                    Present vetted candidates within 48-96 hours.
                                </p>
                            </li>
                            {/* Step 5 */}
                            <li className="mb-10 ml-6">
                                <div className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500">
                                    <span className="text-white font-bold text-sm">5</span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800">Client Interviews</h3>
                                <p className="text-sm text-gray-600">
                                    Client conducts interviews in one or more rounds.
                                </p>
                            </li>
                            {/* Step 6 */}
                            <li className="mb-10 ml-6">
                                <div className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500">
                                    <span className="text-white font-bold text-sm">6</span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800">Offer Placement</h3>
                                <p className="text-sm text-gray-600">
                                    Client extends an offer; candidate signs the letter.
                                </p>
                            </li>
                            {/* Step 7 */}
                            <li className="mb-10 ml-6">
                                <div className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500">
                                    <span className="text-white font-bold text-sm">7</span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800">Invoice & Payment</h3>
                                <p className="text-sm text-gray-600">
                                    Invoice issued post-signature, payable within 30 days.
                                </p>
                            </li>
                            {/* Step 8 */}
                            <li className="ml-6">
                                <div className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500">
                                    <span className="text-white font-bold text-sm">8</span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800">Free Replacement</h3>
                                <p className="text-sm text-gray-600">
                                    Replacement provided if hire leaves within 60 days.
                                </p>
                            </li>
                        </ol>
                    </div>
                </CardContent>

                </Card>
            </div>
        </>
    );
}
  