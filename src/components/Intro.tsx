// import { useState } from "react";
import { Button } from "@/components/ui/button";
import { TypeAnimation } from "react-type-animation";
import resumePdf from "@/assets/Djuhadi-Resume.pdf";

export function Intro() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row justify-center items-center bg-indigo-900 text-white px-10 pb-4 md:px-20">
      <div className="my-8 md:my-0 w-full md:w-1/2 px-10 gap-4 font-outfit">
        <h5 className="text-2xl">Hi there, my name is</h5>
        <h1 className="text-center text-5xl m-4">Gabriela Djuhadi.</h1>
        <p className="text-lg/8">
          I am a Fullstack Developer trying to find myself and my niche in a sea
          of others. I am one of a kind, for better or worse; get to know me if
          you dare (<strong>I need a job</strong>).
        </p>
        <a href={resumePdf} download="Djuhadi-Resume.pdf">
          <Button variant="rose" className="mx-auto block">
            Hire me!
          </Button>
        </a>
      </div>
      <div className="my-8 md:my-0 text-end text-balance w-full md:w-1/2 px-10">
        <TypeAnimation
          sequence={[
            "Bioinformatician by training.",
            500, // pause 1.5s
            "Bioinformatician by training. Web developer by (former) part-time job.",
            500, // pause 0.5s
            "Bioinformatician by training. Web developer by (former) part-time job. Full-time cat-servant and former personality hire",
            1500,
            "Bioinformatician by training. Web developer by (former) part-time job. Full-time cat-servant and former ",
            1500,
            "Bioinformatician by training. Web developer by (former) part-time job. Full-time cat-servant and former event organizer.",
          ]}
          deletionSpeed={10}
          speed={10}
          repeat={0}
          className="font-bitcount text-4xl"
        />
      </div>
    </div>
  );
}
// I am still heartbroken and would like to archive memories from my prev job.
// please only contact me through email
