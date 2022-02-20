import styled from "styled-components";

const StyledReader = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Output = styled.div`
  display: flex;
  width: 70%;
  gap: 20px;
`;

const Article = styled.div`
  width: 75%;
  height: 70%;
  padding: 5px;

  h1 {
    font-size: 32px;
  }

  h2 {
    margin-top: 0.5rem;
    scroll-margin-top: 50px;
    border-bottom: 1px solid green;
  }

  h2::before {
    content: ".";
    background-color: green;
    color: transparent;
    margin-right: 5px;
  }

  h2:hover {
    > a {
      opacity: 1;
    }
  }

  p {
    font-size: 16px;
  }

  code {
    border-radius: 15px;
  }

  a {
    opacity: 0;
    padding-left: 0.5rem;
    transition: opacity 0.5s;
    font-size: 1.5rem;

    :hover {
      opacity: 1;
      color: green;
      cursor: pointer;
    }

    :visited {
      color: green;
    }
  }
`;

const Navigation = styled.div`
  width: 25%;
`;

export default StyledReader;
export { Output, Article, Navigation };
