import React from 'react';
import { createRoot } from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';
import Routes from './Routes';

const GlobalStyle = createGlobalStyle`
  *, *::after, *::before { margin: 0; padding: 0; border: 0; }
  body {
    margin: 0 0 60px 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 10px;
    background-color: #bb7b3b;
  }
  code { font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace; }
`;

const container = document.getElementById('root');
if (!container) {
  throw new Error('Root element not found');
}

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Routes />
  </React.StrictMode>,
);
