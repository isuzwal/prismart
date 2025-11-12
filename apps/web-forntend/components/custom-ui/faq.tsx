import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "../ui/accordion";

export const FQApage = () => {
  return (
    <div className="max-w-7xl w-full mx-auto    py-5  px-4">
      <h2 className="text-start sm:text-2xl lg:text-4xl font-bold mb-10 bg-gradient-to-b from-neutral-500 to-neutral-800 dark:from-neutral-300 dark:to-neutral-600 bg-clip-text text-transparent">
        Frequently Asked Questions ?
      </h2>

      <Accordion type="single" collapsible className="w-full rounded-xl space-y-3  ">
        <AccordionItem value="item-1" className="border rounded-xl dark:border-neutral-800">
          <AccordionTrigger className="text-md font-semibold dark:text-neutral-300 text-neutral-800 px-4">
            What is this platform about?
          </AccordionTrigger>
          <AccordionContent className="text-neutral-600 dark:text-neutral-400 px-4 pb-3">
            It’s a real-time collaborative drawing board — an infinite canvas where you and your team can brainstorm, sketch, and create ideas together right in your browser.
          </AccordionContent>
        </AccordionItem>

      
        <AccordionItem value="item-2" className="border rounded-xl dark:border-neutral-800">
          <AccordionTrigger className="text-md font-semibold dark:text-neutral-300 text-neutral-800 px-4">
            Do I need to install anything?
          </AccordionTrigger>
          <AccordionContent className="text-neutral-600 dark:text-neutral-400 px-4 pb-3">
            Nope! It’s fully web-based — just open the app and start drawing. No downloads, no setup, just creativity.
          </AccordionContent>
        </AccordionItem>

        
        <AccordionItem value="item-3" className="border rounded-xl dark:border-neutral-800">
          <AccordionTrigger className="text-md font-semibold dark:text-neutral-300 text-neutral-800 px-4">
            Can multiple people draw together in real-time?
          </AccordionTrigger>
          <AccordionContent className="text-neutral-600 dark:text-neutral-400 px-4 pb-3">
            Yes! Collaboration is instant — everyone sees updates live as they happen. Perfect for teams, students, and creators.
          </AccordionContent>
        </AccordionItem>

      
        <AccordionItem value="item-4" className="border rounded-xl dark:border-neutral-800">
          <AccordionTrigger className="text-md font-semibold dark:text-neutral-300 text-neutral-800 px-4">
            How do I invite others to my canvas?
          </AccordionTrigger>
          <AccordionContent className="text-neutral-600 dark:text-neutral-400 px-4 pb-3">
            You’ll get a unique share link for each board. Send it to your teammates or friends — they can join instantly with no sign-up required.
          </AccordionContent>
        </AccordionItem>

      
        <AccordionItem value="item-5" className="border rounded-xl dark:border-neutral-800">
          <AccordionTrigger className="text-md font-semibold dark:text-neutral-300 text-neutral-800 px-4">
           Is my data or artwork saved automatically?
          </AccordionTrigger>
          <AccordionContent className="text-neutral-600 dark:text-neutral-400 px-4 pb-3">
            Yep! You can save your work automatically.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
