import React from "react";
import { createRoot } from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import Routes from "./Routes";

const GlobalStyle = createGlobalStyle`
  :root{
    --bg-1: #0f172a; /* deep navy */
    --bg-2: #071024; /* darker navy */
    --surface: #0b1220;
    --card: #0f172a;
    --accent: #0fb9a8; /* teal */
    --muted: #94a3b8;
    --text: #e6eef6;
  }
  *, *::after, *::before { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    margin: 0 0 60px 0;
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 0;
    background: linear-gradient(180deg, var(--bg-1), var(--bg-2));
    color: var(--text);
    min-height: 100vh;
  }
  code { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, 'Roboto Mono', 'Courier New', monospace; }
  a { color: inherit; }
`;

const container = document.getElementById("root");
if (!container) {
  throw new Error("Root element not found");
}

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Routes />
  </React.StrictMode>,
);
