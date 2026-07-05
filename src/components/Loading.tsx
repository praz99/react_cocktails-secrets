import React from "react";
import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const Wrapper = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: ${({ theme }) => theme.radius.md};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.surface};
  display: flex;
  flex-direction: column;
`;

const Shimmer = styled.div`
  flex: 1;
  background: linear-gradient(90deg,
    rgba(255,255,255,0.03) 25%,
    rgba(255,255,255,0.08) 37%,
    rgba(255,255,255,0.03) 63%);
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s ease-in-out infinite;
`;

const Info = styled.div`
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Line = styled.div<{ w?: string }>`
  height: 0.6rem;
  width: ${({ w }) => w || "100%"};
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.06);
`;

const Loading = () => (
  <Wrapper>
    <Shimmer />
    <Info>
      <Line w="70%" />
      <Line w="50%" />
    </Info>
  </Wrapper>
);

export default Loading;
