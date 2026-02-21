import { Carousel } from "./ui/carousel";

export default function FhContent() {
  return (
    <div className="p-4">
      <div className="flex items-center mb-4">
        <h2 className="text-xl font-bold mb-2">E-Learning and Web Dev</h2>
        <p className="mb-4">
          Worked on various projects in the field of bioinformatics and data
          analysis.
        </p>
      </div>
      <div className="flex items-center mb-4">
        <h2 className="text-xl font-bold mb-2">Events and Friends 🥺</h2>
        <p className="text-lg font-bold mb-2">
          This is the core of this entire portfolio, the purpose of this entire
          project because I'm a simp for everyone I'm including here and I still
          miss them a lot.
        </p>
        <Carousel />
      </div>
    </div>
  );
}
