import { Wrapper, Code, Title, Description, HomeLink } from "./styles";

const NotFoundPage = () => (
  <Wrapper>
    <Code>404</Code>
    <Title>Page Not Found</Title>
    <Description>
      The cocktail you&rsquo;re looking for doesn&rsquo;t exist yet&mdash;or
      maybe it was shaken, not stirred out of existence.
    </Description>
    <HomeLink to="/">Back to Home</HomeLink>
  </Wrapper>
);

export default NotFoundPage;
