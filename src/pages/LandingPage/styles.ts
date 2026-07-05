import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const fadeIn = keyframes`from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}`;

export const Hero = styled.section`
  padding: 4rem 1.5rem 3rem;
  text-align: center;
  animation: ${fadeIn} 0.6s ease-out;
`;

export const Title = styled.h1`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  margin-bottom: 0.5rem;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.accent},
    #48d1c0
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const Sub = styled.p`
  color: ${({ theme }) => theme.colors.muted};
  font-size: 1.05rem;
  margin-bottom: 2rem;
  max-width: 480px;
  margin-left: auto;
  margin-right: auto;
`;

export const CTA = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.bg2};
  padding: 0.7rem 1.5rem;
  border-radius: ${({ theme }) => theme.radius.full};
  font-weight: 700;
  font-size: 0.9rem;
  text-decoration: none;
  transition: all ${({ theme }) => theme.transitions.fast};
  margin: 0 0.4rem 0.75rem;
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
`;

export const OutlineCTA = styled(CTA)`
  background: transparent;
  color: ${({ theme }) => theme.colors.accent};
  border: 1px solid ${({ theme }) => theme.colors.accent};
  &:hover {
    background: ${({ theme }) => theme.colors.accentGlow};
  }
`;

export const Featured = styled.section`
  padding: 1rem 1.5rem 4rem;
  max-width: 1100px;
  margin: 0 auto;
  animation: ${fadeIn} 0.6s ease-out 0.2s both;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
`;
