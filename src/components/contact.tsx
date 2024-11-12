// newsletter.tsx
// calendly.tsx

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


export default function Newsletter() {
    return (
        <main>
            <Tabs defaultValue="account" className="flex w-full">
                <TabsList>
                    <TabsTrigger value="newsletter">Newsletter</TabsTrigger>
                    <TabsTrigger value="calendly">Book Demo</TabsTrigger>
                </TabsList>
                <TabsContent value="newsletter">

                </TabsContent>
                <TabsContent value="calendly">

                </TabsContent>
            </Tabs>

        </main>
    )
}