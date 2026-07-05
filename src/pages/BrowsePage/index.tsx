import BrowseIndex from "../../components/BrowseIndex";
import Navbar from "../../layouts/Navbar";
import Footer from "../../layouts/Footer";
import { Main, PageWrapper } from "./styles";

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
