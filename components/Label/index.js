import styled from "styled-components";

const Label = styled.label`
  background: ${props => (props.background ? props.background : "black")};
  font-size: 12px;
  margin-right: 5px;
  margin-top: 5px;
  border-radius: 5px;
  min-width: 55px;
  text-align: center;
  padding: 6px 0;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export default props => {
  return (
    <Label background={props.background} className="label-tag">
      {props.name}
    </Label>
  );
};
