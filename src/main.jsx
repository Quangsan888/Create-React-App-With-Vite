import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

//ReactDom.createRoot
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
