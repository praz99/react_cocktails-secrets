import { Link } from "react-router-dom";
import styled from "styled-components";

export const W = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
export const M = styled.main`
  flex: 1;
  padding: 2rem 1rem;
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;
`;

export const Card = styled.div`
  display: flex;
  gap: 2rem;
  background: ${({ theme }) => theme.colors.glassBg};
  border: 1px solid ${({ theme }) => theme.colors.glassBorder};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

export const ImgSec = styled.div`
  flex: 0 0 38%;
  min-width: 260px;
`;
export const Img = styled.img`
  width: 100%;
  border-radius: ${({ theme }) => theme.radius.md};
  object-fit: cover;
  box-shadow: ${({ theme }) => theme.shadows.md};
`;
export const Info = styled.div`
  flex: 1;
  color: ${({ theme }) => theme.colors.text};
`;
export const Name = styled.h1`
  font-size: 1.75rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 0.75rem;
`;
export const Meta = styled.p`
  margin-bottom: 0.35rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textDim};
  strong {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 600;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
  th {
    text-align: left;
    padding: 0.5rem 0.75rem;
    font-size: 0.8rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.muted};
    border-bottom: 1px solid ${({ theme }) => theme.colors.glassBorder};
  }
  td {
    padding: 0.5rem 0.75rem;
    font-size: 0.9rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.glassBorder};
  }
`;

export const Inst = styled.div`
  margin-top: 1.25rem;
  h3 {
    font-size: 1rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.accent};
    margin-bottom: 0.5rem;
  }
  p {
    line-height: 1.7;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.textDim};
  }
`;

export const Back = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.85rem;
  margin-bottom: 1rem;
  transition: color ${({ theme }) => theme.transitions.fast};
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;
export const Msg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 40vh;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 1rem;
`;
