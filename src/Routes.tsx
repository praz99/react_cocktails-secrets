import { Suspense, lazy } from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import styled from "styled-components";
import ErrorBoundary from "./components/ErrorBoundary";
const LandingPage = lazy(() => import("./pages/LandingPage"));
const BrowsePage = lazy(() => import("./pages/BrowsePage"));
const SearchPage = lazy(() => import("./pages/SearchPage"));
const DrinkDetailsPage = lazy(() => import("./pages/DrinkDetailsPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

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
          <Route path="/" element={<LandingPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/details/:id" element={<DrinkDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </RouterRoutes>
      </Suspense>
    </ErrorBoundary>
  </BrowserRouter>
);
