// newsletter.tsx
// calendly.tsx

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Newsletter from './newsletter';


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

                </TabsContent>
            </Tabs>

        </main>
    )
}