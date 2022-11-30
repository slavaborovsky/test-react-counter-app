import styled, { css, keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const MyImage = styled.img`
  margin: 48px;

  ${(props) =>
    props.isRotated &&
    css`
      animation: ${rotate} 2s linear infinite;
    `}
`;

export default MyImage;
