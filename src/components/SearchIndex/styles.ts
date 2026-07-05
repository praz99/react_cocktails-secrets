import { Link } from "react-router-dom";
import styled from "styled-components";

export const Section = styled.section`
  padding: 1.5rem 0;
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.25rem;
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.9rem;
`;

export const AlphabetNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.35rem;
  padding: 0;
  margin: 1rem 0 1.5rem;
`;

export const LetterLink = styled(Link)<{ $active?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ $active, theme }) =>
    $active ? theme.colors.accent : theme.colors.glassBg};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.bg2 : theme.colors.text};
  font-weight: ${({ $active }) => ($active ? "700" : "600")};
  font-size: 0.85rem;
  text-decoration: none;
  transition: all ${({ theme }) => theme.transitions.fast};
  border: 1px solid
    ${({ $active, theme }) =>
      $active ? "transparent" : theme.colors.glassBorder};

  &:hover {
    transform: translateY(-2px);
    background: ${({ $active, theme }) =>
      $active ? theme.colors.accent : theme.colors.accentGlow};
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
`;
