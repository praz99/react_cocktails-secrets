import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  background: linear-gradient(90deg, var(--bg-1), var(--bg-2));
  color: var(--text);
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
`;

const Banner = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--accent);
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const Slogan = styled.div`
  text-align: right;
  font-size: 0.9rem;
  opacity: 0.85;
  color: var(--muted);
`;

const Navbar = () => (
  <NavContainer>
    <Banner>
      <StyledLink to="/" data-testid="navbar-heading">
        The CockTails
      </StyledLink>
    </Banner>
    <Slogan>
      <div>Find your drink...</div>
      <div>Learn to make</div>
      <div>Enjoy!</div>
    </Slogan>
  </NavContainer>
);

export default Navbar;
