import styled from "styled-components";
import * as theme from "../../style/theme";

export const Layout = styled.div`
  max-width: 1480px;
  padding: 0 15px;
  margin: 0 auto;
  column-count: 4;
  column-gap: 25px;
  @media screen and (max-width: 1300px) {
    column-count: 3;
  }
  @media screen and (max-width: 991px) {
    column-count: 2;
  }
  @media screen and (max-width: 767px) {
    column-count: 1;
  }
`;

export const TopSection = styled.div`
  max-width: 1480px;
  padding: 0 15px;
  margin: 35px auto 15px auto;
`;

export const SearchBar = styled.input`
  border: 0;
  border-radius: 50px;
  outline: 0;
  padding: 4px 16px;
  font-size: 16px;
  &::placeholder {
    color: #aaa;
  }
`;

export const SearchText = styled.div`
  max-width: 1480px;
  padding: 0 15px;
  margin: 0 auto;
  font-size: 18px;
  font-weight: bold;
  font-family: "微軟正黑體";
  span {
    font-family: "Galano";
    color: ${theme.background.primary_red};
    padding: 0 5px;
    font-size: 24px;
  }
`;
