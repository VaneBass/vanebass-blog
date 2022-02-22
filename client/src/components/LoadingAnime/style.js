import styled from "styled-components";

const StyledAnime = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Balls = styled.div`
  display: flex;
`;

const Ball = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ theme }) => (theme === "light" ? "#333" : "white")};
  margin-right: 10px;
  animation: ball 0.5s ease infinite alternate;

  :nth-child(2) {
    animation-delay: 0.1s;
  }

  :nth-child(3) {
    animation-delay: 0.2s;
  }

  @keyframes ball {
    to {
      transform: translateY(-10px);
    }
  }
`;

const LoadingText = styled.span`
  font-weight: 100;
  color: ${({ theme }) => (theme === "light" ? "#333" : "white")};
`;

export default StyledAnime;
export { Balls, Ball, LoadingText };
