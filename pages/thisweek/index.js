import React, { Component } from "react";
import styled from "styled-components";
import MetaHead from "../../components/MetaHead";
import * as theme from "../../style/theme";

const Div = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 962px;
  height: 782px;
  background: url("/static/img/add.svg") repeat center center;
  background-size: 30px;
  position: relative;
`;

const Square1 = styled.div`
  width: 90px;
  height: 90px;
  position: absolute;
  top: 0;
  left: 0;
  background: white;
`;

const Square2 = styled.div`
  width: 390px;
  height: 450px;
  position: absolute;
  bottom: 0;
  left: 0;
  background: white;
`;

const Square3 = styled.div`
  width: 148px;
  height: 58px;
  position: absolute;
  top: 2px;
  right: 2px;
  background: white;
  text-align: center;
  h2 {
    color: ${theme.background.primary};
    margin-top: 14px;
    font-size: 28px;
    text-decoration: line-through;
    font-style: italic;
  }
`;

const Square4 = styled.div`
  width: 298px;
  height: 88px;
  position: absolute;
  top: 62px;
  right: 152px;
  background: white;
  text-align: center;
  h1 {
    color: ${theme.background.primary};
    font-size: 60px;
    margin-top: 8px;
  }
`;

const Square5 = styled.div`
  width: 328px;
  height: 508px;
  position: absolute;
  top: 182px;
  right: 92px;
  background: white;
  text-align: center;
`;

const Square6 = styled.div`
  width: 88px;
  height: 118px;
  position: absolute;
  top: 212px;
  right: 422px;
  background: white;
  text-align: center;
`;

const Square6_5 = styled.div`
  width: 328px;
  height: 58px;
  position: absolute;
  top: 272px;
  right: 422px;
  background: white;
  text-align: center;
`;

const Square7 = styled.div`
  width: 328px;
  height: 118px;
  position: absolute;
  top: 152px;
  left: 122px;
  background: white;
  text-align: center;
`;

class Thisweek extends Component {
  render() {
    return (
      <Div>
        <MetaHead title="THIS WEEK" />
        <Content>
          <Square1 />
          <Square2 />
          <Square3>
            <h2>20190628</h2>
          </Square3>
          <Square4>
            <h1>THIS WEEK</h1>
          </Square4>
          <Square5>123</Square5>
          <Square6 />
          <Square6_5 />
          <Square7 />
        </Content>
      </Div>
    );
  }
}

export default Thisweek;
