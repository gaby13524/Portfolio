import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionDemo() {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="shipping"
      className="max-w-lg"
    >
      <AccordionItem value="fh">
        <AccordionTrigger>Work at Fraunhofer FOKUS</AccordionTrigger>
        <AccordionContent>
          Do I get the job done? Maybe, but am I a great addition to the team?
          Absolutely. I had a lot of fun working there and I learned a lot. I
          got to work on a lot of different projects and I met amazing people,
          but lowkey work environment was okay. I had to be the one organizing
          things like potluck and secret santa, and
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="sm">
        <AccordionTrigger>Gap? What Gap?</AccordionTrigger>
        <AccordionContent>
          I graduated during covid 😭 It was very hard to find a job and I moved
          back to Indo. 1 Year of unsuccessfully trying out Forex trading and I
          worked as the whole marketing department for a startup product. Yes i
          was there to get the first 5-10 customers since I went from none LMAO.
          And I think the basis of their current marketing is still basically
          the Meta Ads I set up.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="bachelors">
        <AccordionTrigger>Baccalaureate</AccordionTrigger>
        <AccordionContent>
          Ah the good ol' days. I had a lot of fun but somehow this my memory of
          this is fading quickly. It lowkey feels like a dream now... I had a
          circle of friends and a BF LMAO. It felt like home, but for some
          reason it had to end. Everything from that time has pretty much been
          left behind. I am only in contact with 2 people that I met before
          UCLA.
          {/* It felt like home, so much that I forgot my mother tongue at some point. A bit Ironic how bad my English is compared to then, but hey, worse doesn't mean bad.  */}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
