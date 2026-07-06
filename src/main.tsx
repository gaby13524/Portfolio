import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Navbar } from "./components/Navbar";
import { Intro } from "./components/Intro";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Compensation } from "./components/Compensation";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Experience />
      <Projects />
      <Compensation />
      <Footer />
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
