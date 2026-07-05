import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import styled from "styled-components";
import ErrorBoundary from "./components/ErrorBoundary";
const Landing = lazy(() => import("./components/Landing"));
const BrowsePage = lazy(() => import("./pages/BrowsePage"));
const SearchPage = lazy(() => import("./pages/SearchPage"));
const DrinkDetails = lazy(() => import("./components/DrinkDetails"));

const LoadingFallback = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 1rem;
`;

const PageLoading = () => (
  <LoadingFallback>
    <span>Loading…</span>
  </LoadingFallback>
);

export const Routes = () => (
  <BrowserRouter>
    <ErrorBoundary>
      <Suspense fallback={<PageLoading />}>
        <RouterRoutes>
          <Route path="/browse" element={<BrowsePage />} />
          <Route path="/" element={<Landing />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/details/:id" element={<DrinkDetails />} />
        </RouterRoutes>
      </Suspense>
    </ErrorBoundary>
  </BrowserRouter>
);
