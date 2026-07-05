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

export const CategoryGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  margin: 1rem 0 2rem;
`;

export const CategoryButton = styled.button<{ $active?: boolean }>`
  padding: 0.5rem 1.25rem;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ $active, theme }) =>
    $active ? theme.colors.accent : theme.colors.glassBg};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.bg2 : theme.colors.text};
  font-weight: ${({ $active }) => ($active ? "700" : "600")};
  font-size: 0.85rem;
  border: 1px solid
    ${({ $active, theme }) =>
      $active ? "transparent" : theme.colors.glassBorder};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    transform: translateY(-2px);
    background: ${({ $active, theme }) =>
      $active ? theme.colors.accent : theme.colors.accentGlow};
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
`;

export const DrinkGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1.25rem;
  padding: 0 0 2rem;
`;

export const Message = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.95rem;
  text-align: center;
`;
