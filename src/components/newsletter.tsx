import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";

export default function Newsletter() {
    return (
        <main>
            <Card>
                <CardHeader>
                    <CardTitle>Newsletter Signup</CardTitle>
                    <CardDescription>
                    Stay updated with our latest news and offers.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                    <div className="space-y-1">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                    </div>
                    <div className="space-y-1">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your Name" />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button>Subscribe</Button>
                </CardFooter>
            </Card>
        </main>
    );
}