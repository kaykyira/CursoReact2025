import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Routes from "./routes.jsx";
import GlobalStyles from "./styles/GlobalStyles";




createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyles />
    <Routes />
  </StrictMode>
);