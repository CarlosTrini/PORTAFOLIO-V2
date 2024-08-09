import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import '../node_modules/bootstrap/scss/bootstrap.scss';
import "../node_modules/normalize.css/normalize.css";
import "./styles/globlals.scss";

import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
