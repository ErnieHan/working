import React, { Component } from "react";
import styled from "styled-components";
import * as theme from "../../style/theme";

const Div = styled.div``;

const Title = styled.h2`
  font-size: ${theme.fontsize.xl};
  border-bottom: 2px solid ${theme.color.black};
  font-weight: 900;
`;

const Section = styled.section`
  margin-top: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #e9e8e7;
  .section-left {
    width: 30%;
    float: left;
  }
  .section-right {
    width: 70%;
    padding-left: 15px;
    float: right;
    label {
      background: ${theme.background.black};
      color: ${theme.color.white};
      padding: 5px 12px;
      font-size: ${theme.fontsize.xs};
      font-weight: 100;
      margin-bottom: 5px;
    }
    h3 {
      font-size: ${theme.fontsize.lg};
      font-weight: 500;
      margin-top: 5px;
    }
    p {
      margin: 5px 0 0 0;
      font-size: 0.9rem;
      font-weight: 300;
    }
  }
  .clear {
    clear: both;
  }
`;

const ButtonSection = styled.div`
  text-align: right;
  margin-top: 5px;
  button {
    font-size: ${theme.fontsize.xs};
    background: #e9e8e7;
    color: black;
    border: 0;
    font-weight: 300;
    padding: 8px 16px;
  }
`;

class LatestNews extends Component {
  render() {
    return (
      <Div>
        <Title>Latest News</Title>
        <Section>
          <div className="section-left">
            <img src="/static/img/48131029873_302ed67e3d_z.jpg" alt="" />
          </div>
          <div className="section-right">
            <label>元件</label>
            <h3>
              享受自己動手組裝遊戲機的樂趣！
              Clockwork【GameShell】它可以是台暢玩復古遊戲的掌機，甚至還能做到更多？！
            </h3>
            <p>
              在玩過《薩爾達傳說 曠野之息》、《魔物獵人
              世界》、《漫威蜘蛛人》、《碧血狂殺2》......等超好玩的遊戲大作之後，各位玩具人是不是偶爾依然會想起復古小遊戲帶給我們的回憶與獨特魅力呢？如果你的Gameboy
              已經壞 ...
            </p>
            <ButtonSection>
              <button>閱讀更多</button>
            </ButtonSection>
          </div>
          <div className="clear" />
        </Section>
      </Div>
    );
  }
}

export default LatestNews;
