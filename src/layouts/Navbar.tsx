import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  background: ${({ theme }) => theme.colors.glassBg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.glassBorder};
  backdrop-filter: blur(12px);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Banner = styled(Link)`
  font-size: 1.3rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.accent};
  text-decoration: none;
  letter-spacing: -0.02em;
  transition: opacity ${({ theme }) => theme.transitions.fast};
  &:hover { opacity: 0.85; }
`;

const Tagline = styled.div`
  text-align: right;
  font-size: 0.8rem;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.muted};
  font-weight: 500;
`;

const Navbar = () => (
  <NavContainer>
    <Banner to="/" data-testid="navbar-heading">The CockTails</Banner>
    <Tagline>
      <div>Find your drink…</div>
      <div>Learn to make. Enjoy!</div>
    </Tagline>
  </NavContainer>
);

export default Navbar;
