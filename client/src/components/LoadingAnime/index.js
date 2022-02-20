import React from "react";
import StyledAnime, { Ball, Balls, LoadingText } from "./style";

function LoadingAnime(props) {
  return (
    <StyledAnime>
      <Balls>
        <Ball />
        <Ball />
        <Ball />
      </Balls>
      <LoadingText>loading...</LoadingText>
    </StyledAnime>
  );
}

export default LoadingAnime;
