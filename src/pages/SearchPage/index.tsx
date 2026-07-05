import SearchIndex from "../../components/SearchIndex";
import Navbar from "../../layouts/Navbar";
import Footer from "../../layouts/Footer";
import { Main, PageWrapper } from "./styles";

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
