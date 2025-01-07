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
                            Exceptional services we offe
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
                <Card className="h-[400px]">
                    <CardContent className="flex items-center justify-center">
                        Flow diagram
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
  