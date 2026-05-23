import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`;

const LoaderWrapper = styled.div`
  width: 100%;
  height: 320px;
  border-radius: 16px;
  overflow: hidden;
  background: var(--bg-2);
`;

const Skeleton = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.06) 25%,
    rgba(255, 255, 255, 0.12) 37%,
    rgba(255, 255, 255, 0.06) 63%
  );
  background-size: 400% 100%;
  animation: ${shimmer} 1.2s ease-in-out infinite;
`;

const LoaderContent = styled.div`
  padding: 1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const Line = styled.div<{ width?: string; height?: string }>`
  height: ${({ height }) => height || "12px"};
  width: ${({ width }) => width || "100%"};
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.08);
`;

const Loading = () => {
  return (
    <LoaderWrapper>
      <Skeleton />
      <LoaderContent>
        <Line width="70%" height="16px" />
        <Line width="90%" />
        <Line width="60%" />
      </LoaderContent>
    </LoaderWrapper>
  );
};

export default Loading;
