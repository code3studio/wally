import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";
import { ThemeProvider } from "@mui/material";
import { theme } from "./style/theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App  />
    </ThemeProvider>
  </React.StrictMode>
);
