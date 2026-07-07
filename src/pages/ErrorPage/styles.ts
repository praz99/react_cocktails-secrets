import styled, { keyframes } from "styled-components";

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

export const Icon = styled.div`
  font-size: 3rem;
  margin-bottom: 0.5rem;
`;

export const Title = styled.h2`
  font-size: clamp(1.3rem, 3vw, 1.8rem);
  font-weight: 700;
  margin: 0 0 0.75rem;
  color: ${({ theme }) => theme.colors.error};
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.muted};
  font-size: 1rem;
  max-width: 420px;
  margin: 0 auto 1.5rem;
  line-height: 1.6;
`;

export const ErrorDetail = styled.pre`
  color: ${({ theme }) => theme.colors.muted};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.8rem;
  background: ${({ theme }) => theme.colors.glassBg};
  border: 1px solid ${({ theme }) => theme.colors.glassBorder};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: 1rem 1.25rem;
  max-width: 100%;
  overflow-x: auto;
  margin-bottom: 2rem;
  text-align: left;
  white-space: pre-wrap;
  word-break: break-word;
`;

export const RetryButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.bg2};
  padding: 0.7rem 1.5rem;
  border: none;
  border-radius: ${({ theme }) => theme.radius.full};
  font-weight: 700;
  font-size: 0.9rem;
  cursor: pointer;
  text-decoration: none;
  transition: all ${({ theme }) => theme.transitions.fast};
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
`;
