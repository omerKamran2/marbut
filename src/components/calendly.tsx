'use client'


import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export default function Calendly() {
    //palceholder calender

    const [date, setDate] = useState<Date | undefined>(new Date())
    return (
        <Card>
          <CardHeader>
            <CardTitle>Calendar</CardTitle>
            <CardDescription>
              View and select dates on the calendar.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground">
              Selected date: {date?.toDateString()}
            </p>
          </CardFooter>
        </Card>
    );
}