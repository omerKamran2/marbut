// newsletter.tsx
// calendly.tsx

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Newsletter from './newsletter';
import Calendly from "./calendly";


export default function Contact() {
    return (
        <main>
            <Tabs defaultValue="account" className="flex w-full">
                <TabsList>
                    <TabsTrigger value="newsletter">Newsletter</TabsTrigger>
                    <TabsTrigger value="calendly">Book Demo</TabsTrigger>
                </TabsList>
                <TabsContent value="newsletter">
                    <Newsletter/>
                </TabsContent>
                <TabsContent value="calendly">
                    <Calendly/>
                </TabsContent>
            </Tabs>

        </main>
    )
}