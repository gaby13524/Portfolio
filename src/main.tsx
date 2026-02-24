import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Intro } from "./components/Intro";
import FhContent, { FH_pics } from "./components/FhContent";

function App() {
  return (
    <div className="App">
      <Intro />
      <div className="text-center text-2xl m-4">
        Page is still under construction... You can email me for inquiries or
        just to say hi! (I need a job)
        <p>gabglodj@gmail.com</p>
      </div>
      <FhContent />
      <FH_pics />
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
