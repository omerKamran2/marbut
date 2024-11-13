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
        <div className="pb-8">
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

            <br/>
            <div className="flex items-center justify-center">
            <Card className="w-full max-w-md p-4">
                <CardContent className="flex items-center justify-center">
                    <h2>Why us?</h2>
                </CardContent>
            </Card>
    
            </div>
        </main>
    );
  }
  