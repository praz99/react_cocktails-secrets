import { Info, Line, Shimmer, Wrapper } from "./styles";

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
