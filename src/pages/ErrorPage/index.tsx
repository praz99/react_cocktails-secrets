import {
  Wrapper,
  Icon,
  Title,
  Description,
  ErrorDetail,
  RetryButton,
} from "./styles";

interface ErrorPageProps {
  error?: Error | null;
  onRetry?: () => void;
}

const ErrorPage = ({ error, onRetry }: ErrorPageProps) => (
  <Wrapper>
    <Icon>⚠️</Icon>
    <Title>Something went wrong</Title>
    <Description>
      An unexpected error occurred. It might be a network issue or a temporary
      glitch. Please try again or head back to the home page.
    </Description>
    {error?.message && <ErrorDetail>{error.message}</ErrorDetail>}
    {onRetry && <RetryButton onClick={onRetry}>Try Again</RetryButton>}
  </Wrapper>
);

export default ErrorPage;
