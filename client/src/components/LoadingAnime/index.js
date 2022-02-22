import React from "react";
import StyledAnime, { Ball, Balls, LoadingText } from "./style";

function LoadingAnime({ theme }) {
  return (
    <StyledAnime>
      <Balls>
        <Ball theme={theme} />
        <Ball theme={theme} />
        <Ball theme={theme} />
      </Balls>
      <LoadingText theme={theme}>loading...</LoadingText>
    </StyledAnime>
  );
}

export default LoadingAnime;
