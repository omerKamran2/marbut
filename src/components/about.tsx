'use client'
// leave empty space


// build trust / why us?

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  

import { motion } from "framer-motion";

  
export default function About() {

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.8 }, // Start small and invisible
        visible: {
            opacity: 1, // Fully visible
            scale: 1, // Scale to original size
            transition: {
            type: "spring",
            stiffness: 300,
            damping: 30,
          },
        },
    };
    return (
        <div className="pb-8 card-container">
            <motion.div
                className=""
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5 }}
            >
                <Card className="h-[500px] p-6">
                    <CardHeader>
                        <CardTitle className="text-center text-xl font-bold">About Us</CardTitle>
                        <CardDescription className="text-center text-sm text-gray-500">
                            Our Vision, Mission, and Motto
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div>
                            <h2 className="text-lg font-semibold">Vision Statement:</h2>
                            <p className="text-base text-gray-700">
                                "Making the world recognize and leverage the power of Pakistani talent."
                            </p>
                        </div>
                        <div className="">
                            <h2 className="text-lg font-semibold">Mission Statement:</h2>
                            <p className="text-base text-gray-700">
                                "To deliver world-class recruitment solutions that highlight the excellence and affordability of Pakistani expertise."
                            </p>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold">Motto:</h2>
                            <p className="text-base text-gray-700">
                                "Affordable Talent, Unmatched Excellence."
                            </p>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <p className="text-center text-sm text-gray-500">
                            Together, we create opportunities and excellence.
                        </p>
                    </CardFooter>
                </Card>
            </motion.div>


            <motion.div 
                className="flex items-center justify-center mt-4"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5 }}
            >
                 {/* <Card className="w-full max-w-md p-4">
                    <CardTitle className="flex items-center justify-center"> */}
                    <div className="flex flex-col justify-center">
                        <h2 className="pb-2 border-b flex justify-center">
                            Why us?
                        </h2>
                        <span>
                            Hear from our customers
                        </span>
                    </div>
                    {/* </CardTitle> */}
                    {/* <CardContent className="flex items-center justify-center pt-2"> */}
                    {/* </CardContent> */}
                {/* </Card> */}
            </motion.div>
        </div>
    );
}
  