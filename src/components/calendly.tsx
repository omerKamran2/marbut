import {
    Card,
} from "@/components/ui/card";

export default function Calendly() {
    //palceholder calender
    return (
        <Card className="w-full md:w-1/2 flex flex-col h-[800px]">
          <div className="calendly-inline-widget h-[775px]" data-url="https://calendly.com/omer-kamran4466/custom-1on1"></div>
          <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
        </Card>
    );
}
