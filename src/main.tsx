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
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
