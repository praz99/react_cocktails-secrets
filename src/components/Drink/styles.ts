import { Link } from "react-router-dom";
import styled from "styled-components";

type ContainerProps = { $bg: string; $large?: boolean };

export const Card = styled(Link)<ContainerProps>`
  position: relative;
  width: 100%;
  aspect-ratio: ${({ $large }) => ($large ? "4 / 5" : "1 / 1")};
  border-radius: ${({ theme }) => theme.radius.md};
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  background-image: url(${(p) => p.$bg});
  background-size: cover;
  background-position: center;
  text-decoration: none;
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: all ${({ theme }) => theme.transitions.normal};

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      transparent 40%,
      rgba(6, 13, 26, 0.85) 100%
    );
    opacity: 0.7;
    transition: opacity ${({ theme }) => theme.transitions.normal};
  }

  &:hover {
    transform: translateY(-4px) scale(1.02);
    box-shadow: ${({ theme }) => theme.shadows.lg};
    &::before {
      opacity: 0.9;
    }
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 2px;
  }
`;

export const Name = styled.span`
  position: relative;
  z-index: 1;
  display: block;
  width: 100%;
  padding: 0.75rem;
  font-weight: 700;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text};
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  line-height: 1.3;
`;
