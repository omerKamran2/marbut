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
                <Card className="h-[600px]">
                    <CardHeader>
                    <CardTitle></CardTitle>
                    <CardDescription></CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p></p>
                    </CardContent>
                    <CardFooter>
                        <p></p>
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
                <Card className="w-full max-w-md p-4">
                    <CardTitle className="flex items-center justify-center">
                        <h2 className="pb-2 border-b">
                            Why us?
                        </h2>
                    </CardTitle>
                    <CardContent className="flex items-center justify-center pt-2">
                        Hear from our customers
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    );
}
  