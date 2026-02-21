import { useState } from "react";

export function Intro() {
  const [scroll, setScroll] = useState<Boolean>(false);
  const [u_sure, setU_sure] = useState<Boolean>(false);
  //    bg-indigo-700 text-white;
  return (
    <div className="h-screen flex items-center justify-center gap-4">
      <div className="mb-4 items-center justify-between w-full md:w-1/2 px-4">
        <h5>Hi there, I am</h5>
        <h1 className="text-center">Gabriela Djuhadi.</h1>
        <p className="text-md">
          This portfolio is built because
          <ul className="list-disc list-inside">
            <li>I need a job</li>
            <li>
              I am still heartbroken and would like to archive memories from my
              prev job.
            </li>
          </ul>
        </p>
      </div>
      <div className="mb-4 flex flex-col text-end w-full md:w-1/2">
        <p className="font-bitcount text-4xl">
          Bioinformatician by training, web developer by (former) part-time job.
          Full-time cat-servant and former <s>personality hire</s> event
          organizer.
        </p>
        <button onClick={() => setU_sure(true)}>Hire me!</button>
        {u_sure && (
          <div>
            <p>
              While skipping the resume? I recommend at least skimming through
              it first.
            </p>
            <button>
              I'm good, let's see your rates.
              {/* TODO: skip to the rates and add a note that i'll still allow them to scroll */}
            </button>
            <button
              onClick={() => {
                setU_sure(false);
                setScroll(true);
              }}
            >
              Sure, let's do that.
            </button>
          </div>
        )}
        {scroll && <p>Gate is open, scroll down</p>}
      </div>
    </div>
  );
}

// please only contact me through email
