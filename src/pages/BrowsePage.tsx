import styled from "styled-components";
import BrowseIndex from "../components/BrowseIndex";
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

const BrowsePage = () => (
  <PageWrapper>
    <Navbar />
    <Main>
      <BrowseIndex />
    </Main>
    <Footer />
  </PageWrapper>
);

export default BrowsePage;
