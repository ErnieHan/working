import styled from "styled-components";

export const FixedDash = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${props => (props.width ? `${props.width}px` : "")};
  height: 100vh;
  background: #f4f4f4;
  padding: 35px;
  h1 {
    float: right;
  }
  transform: ${props =>
    props.position ? `translateX(-${props.position}px)` : ""};
`;

export const Button = styled.button`
  background: white;
  border: 1px solid #ccc;
  padding: 16px 24px;
  margin-right: 15px;
  outline: 0;
  cursor: pointer;
  &:active {
    background: #f4f4f4;
  }
`;
