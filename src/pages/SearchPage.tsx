import React from "react";
import styled from "styled-components";
import SearchIndex from "../components/SearchIndex";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`;

const SearchPage = () => (
  <PageWrapper>
    <Navbar />
    <Main>
      <SearchIndex />
    </Main>
    <Footer />
  </PageWrapper>
);

export default SearchPage;
