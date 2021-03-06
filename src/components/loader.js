import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  width: 4em;
  height: 4em;
  margin: 4em;
  border-radius: 10em;
  border-top: 0.4em solid #64afcc;
  border-right: 0.4em solid transparent;
  border-bottom: 0.4em solid #64afcc;
  border-left: 0.4em solid transparent;
  animation: ${rotate} 1.4s linear infinite;
`;

export default Loader;
