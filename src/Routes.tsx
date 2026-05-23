import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import App from "./components/App";
import Landing from "./components/Landing";
import DrinkDetails from "./components/DrinkDetails";

const Routes = () => (
  <BrowserRouter>
    <RouterRoutes>
      <Route path="/" element={<Landing />} />
      <Route path="/browse" element={<App />} />
      <Route path="/search" element={<App />} />
      <Route path="/details/:id" element={<DrinkDetails />} />
    </RouterRoutes>
  </BrowserRouter>
);

export default Routes;
