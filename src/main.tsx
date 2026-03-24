import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Intro } from "./components/Intro";
import { Experience } from "./components/Experience";

function App() {
  return (
    <div className="App">
      <Intro />
      <Experience />
      <div className="text-center text-2xl w-3/4 mx-auto mb-8 bg-burnt_peach-500 rounded-lg p-6">
        Page is still under construction ... You can email me for inquiries or
        just to say hi! (<strong>I need a job</strong>)<p>gabglodj@gmail.com</p>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
