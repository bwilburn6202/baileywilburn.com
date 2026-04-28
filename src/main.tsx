import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import BaileyWilburnSite from "./BaileyWilburnSite";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BaileyWilburnSite />
  </StrictMode>,
);
