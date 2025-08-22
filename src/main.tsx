import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/tokens.css";
import "./styles/index.css";
import App from "./App.tsx";
/* //broke: 
import "@fontsource-variable/dosis";
import "@fontsource-variable/libre-franklin"; */
import "@fontsource-variable/dosis/index.css";
import "@fontsource-variable/libre-franklin/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
