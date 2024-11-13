//todo: animation

// picture
// name

// designation

// feedback


const testies = [
    {
        id: "1",
        name: "Umar Saeed Cheema",
        designation: "Software Engineer",
        feedback: "Full ok"
    },
    {
        id: "2",
        name: "Potato",
        designation: "Software Engineer",
        feedback: "Behtareen"
    },
    {
        id: "3",
        name: "Mukeet",
        designation: "Software Engineer",
        feedback: "Bambu"
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
        <div className="pb-8">
            <div className="flex items-center justify-center pb-4">
                <Card className="w-full max-w-md p-4">
                    <CardTitle className="flex items-center justify-center">
                        <h2>
                            Why us?
                        </h2>
                    </CardTitle>
                    <CardContent className="flex items-center justify-center">
                        Hear from our customers
                    </CardContent>
                </Card>
    
            </div>
            <div className="grid grid-cols-3 gap-8">
                {testies.map(test => (
                    <Card key={test.id}>
                        <CardHeader>
                            <div>
                                <CardTitle>{test.name}</CardTitle>
                                <CardDescription>{test.designation}</CardDescription>
                                {/* Can add picture here */}
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p>
                                {test.feedback}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
  }
  