import { Banner, NavContainer, Tagline } from "./styles";

const Navbar = () => (
  <NavContainer>
    <Banner to="/" data-testid="navbar-heading">
      The CockTails
    </Banner>
    <Tagline>
      <div>Find your drink…</div>
      <div>Learn to make. Enjoy!</div>
    </Tagline>
  </NavContainer>
);

export default Navbar;
