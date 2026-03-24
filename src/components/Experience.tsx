import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FhContent, { FH_pics } from "./FhContent";

export function Experience() {
  return (
    <div className="flex flex-col justify-center items-center champagne-mist font-outfit text-center text-stone-700 my-[5%] gap-7">
      {/* <div className="font-outfit text-center text-stone-700 my-10"> */}
      <h1 className="text-7xl">Timeline</h1>
      <p className="text-2xl w-3/4 mb-10">
        Here are the checkpoints of my life so far. It may not be the most
        professional or complete, but it encompasses the memories that still
        stands out to me this day. <br />
      </p>
      {/* </div> */}
      <Accordion
        type="single"
        collapsible
        defaultValue="shipping"
        className="w-screen font-xl font-outfit text-stone-700"
      >
        <AccordionItem value="fh">
          <AccordionTrigger>Work at Fraunhofer FOKUS</AccordionTrigger>
          <AccordionContent>
            <FhContent />
            <FH_pics />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="sm">
          <AccordionTrigger>Gap? What Gap?</AccordionTrigger>
          <AccordionContent className="text-2xl w-3/4 mx-auto">
            I graduated during covid 😭 It was very hard to find a job and I
            moved back to Indo. 1 Year of unsuccessfully trying out Forex
            trading and I worked as the whole marketing department for a startup
            product. Yes i was there to get the first 5-10 customers since I
            went from none LMAO.
            {/* And I think the basis of their current marketing is still basically
          the Meta Ads I set up. */}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="bachelors">
          <AccordionTrigger>Baccalaureate</AccordionTrigger>
          <AccordionContent className="text-2xl w-3/4 mx-auto">
            Ah the good ol' days. I had a lot of fun but somehow this memory of
            mine is fading quickly. It lowkey feels like a dream now... I had a
            circle of friends and a BF LMAO. It felt like home, but for some
            reason it had to end. Everything from that time has pretty much been
            left behind. I am only in contact with 2 people that I met before
            UCLA.
            {/* It felt like home, so much that I forgot my mother tongue at some point. A bit Ironic how bad my English is compared to then, but hey, worse doesn't mean bad.  */}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
