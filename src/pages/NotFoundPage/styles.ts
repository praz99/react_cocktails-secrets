import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const fadeIn = keyframes`from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  padding: 4rem 1.5rem;
  text-align: center;
  animation: ${fadeIn} 0.6s ease-out;
`;

export const Code = styled.h1`
  font-size: clamp(5rem, 12vw, 8rem);
  font-weight: 900;
  margin: 0;
  line-height: 1;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.accent},
    #48d1c0
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const Title = styled.h2`
  font-size: clamp(1.3rem, 3vw, 1.8rem);
  font-weight: 700;
  margin: 1rem 0 0.5rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.muted};
  font-size: 1rem;
  max-width: 400px;
  margin: 0 auto 2rem;
`;

export const HomeLink = styled(Link)`
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
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
`;
