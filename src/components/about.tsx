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
  
  
  
  
  export default function About() {
    return (
        <div className="pb-8 card-container">
            <Card className="h-[400px]">
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

            <div className="flex items-center justify-center mt-4">
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
            </div>
        </div>
    );
  }
  