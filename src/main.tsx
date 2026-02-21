import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Intro } from "./components/Intro";

function App() {
  return (
    <div className="App">
      <Intro />
      <div className="text-center text-2xl mt-4">
        Page is still under construction...
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
