import styled, { css } from 'styled-components';

const MyButton = styled.button`
  border-radius: 2px;
  padding: 8px 12px;
  margin: 0 10px;
  bottom: 1px solid green;
  background: transparent;
  color: black;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 5px -1px #000000;
  }

  ${(props) =>
    props.primary &&
    css`
      background-color: rgba(0, 255, 0, 0.2);
    `}

  ${(props) =>
    props.secondary &&
    css`
      background-color: rgba(0, 0, 255, 0.2);
    `}

  ${(props) =>
    props.tertiary &&
    css`
      background-color: rgba(255, 0, 0, 0.2);
    `}
`;

export default MyButton;
