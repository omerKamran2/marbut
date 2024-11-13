// services: card - 3

// flow diagram


const services = [
    {
        id: "1",
        service: "Service 1",
        description: "full ok kam",
    },
    {
        id: "2",
        service: "Service 2",
        description: "full ok kam",
    },
    {
        id: "3",
        service: "Service 3",
        description: "full ok kam",
    }
]

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

export default function Services() {
    return (
        <div>
            <div className="grid grid-cols-3 gap-8">
                {services.map(test => (
                    <Card key={test.id} className="h-[400px] flex flex-col items-center justify-center">
                        <CardHeader className="flex items-center justify-center">
                            <div>
                                <CardTitle className="text-center">{test.service}</CardTitle>
                                {/* Can add picture here */}
                            </div>
                        </CardHeader>
                        <CardContent className="flex items-center justify-center">
                            <p className="text-center">
                                {test.description}
                            </p>
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
    );
  }
  