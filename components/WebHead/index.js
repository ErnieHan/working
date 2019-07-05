import styled from "styled-components";
import Router, { withRouter } from "next/router";

const Header = styled.header`
  width: 100%;
  background: #ffffff;
  border-bottom: 1px solid white;
`;

const Inline = styled.div`
  max-width: 1480px;
  margin: 0 auto;
  display: flex;
  padding: 15px;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  color: #fa8182;
  font-size: 36px;
  font-weight: 900;
  font-family: "Galano";
  cursor: pointer;
`;

const User = styled.div`
  width: 50px;
  height: 50px;
  background: url("/static/img/xion.jpg") no-repeat center center;
  background-size: contain;
  border-radius: 50%;
  border: 1px solid #e9e8e7;
`;

const handleClick = () => {
  Router.push("/");
};

const WebHead = () => {
  return (
    <Header>
      <Inline>
        <Logo onClick={handleClick}>Practice</Logo>
        <User />
      </Inline>
    </Header>
  );
};

export default withRouter(WebHead);
