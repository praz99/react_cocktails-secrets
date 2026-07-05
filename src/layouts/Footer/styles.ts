import styled from "styled-components";

export const FooterBar = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 1.2rem;
  background: ${({ theme }) => theme.colors.glassBg};
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.85rem;
  border-top: 1px solid ${({ theme }) => theme.colors.glassBorder};
  backdrop-filter: blur(8px);
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }
`;

export const Dev = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
`;

export const Social = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const SLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: ${({ theme }) => theme.radius.full};
  color: ${({ theme }) => theme.colors.muted};
  transition: all ${({ theme }) => theme.transitions.fast};
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    background: ${({ theme }) => theme.colors.accentGlow};
    transform: translateY(-1px);
  }
  svg {
    width: 18px;
    height: 18px;
    fill: currentColor;
  }
`;
