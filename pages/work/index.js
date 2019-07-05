import React, { Component } from "react";
import MetaHead from "../../components/MetaHead";
import WebHeadForWorkPage from "../../components/WebHeadForWorkPage";
import styled from "styled-components";
import { data } from "../data.json";
import Label from "../../components/Label";
import { GH_PAGE_URL } from "../../constants";

const Layout = styled.div`
  max-width: 980px;
  padding: 0px 15px;
  margin: 35px auto;
`;

const ArticleTitle = styled.h1`
  font-family: "Galano";
  font-size: 48px;
`;

const ArticleSubTitle = styled.h2`
  color: #aaaaaa;
  font-size: 20px;
`;

const Author = styled.div`
  margin-top: 10px;
  .author-image {
    width: 50px;
    height: 50px;
    background: url("/static/img/48131029873_302ed67e3d_z.jpg") no-repeat center;
    border-radius: 50%;
    background-size: cover;
    float: left;
  }
  .author-name-and-labels {
    float: left;
    margin-left: 15px;
    .author-name {
      margin: 0;
      font-size: 17px;
      display: flex;
      align-items: center;
      margin-bottom: 5px;
    }
  }
  &::after {
    content: "";
    display: block;
    clear: both;
  }
`;

const MainPhoto = styled.div`
  width: 100%;
  height: 400px;
  background: url("/static/img/work/main/thumb-1920-795968.png") no-repeat
    center;
  /* background-attachment: fixed; */
  background-size: cover;
`;

const DateAndLabels = styled.div`
  display: flex;
  align-items: center;
  .date {
    margin: 0;
    color: #aaaaaa;
    padding-right: 10px;
  }
  .label-tag {
    margin-top: 0 !important;
  }
`;

const FollowButton = styled.button`
  border: 1px solid black;
  border-radius: 5px;
  background: white;
  margin-left: 5px;
  padding: 1px 10px;
  &:hover {
    background: #000;
    color: #fff;
  }
`;

const Response = styled.div``;

class Work extends Component {
  static async getInitialProps(context) {
    const { id } = context.query;
    const articleData = data.find(articleData => articleData.id === id);
    return { articleData };
  }

  render() {
    const {
      title,
      subtitle,
      author,
      date,
      labels,
      url
    } = this.props.articleData;
    const href = `${GH_PAGE_URL}/${url}`;
    return (
      <div>
        <MetaHead title={`${title} | 爾尼工作元件`} />
        <WebHeadForWorkPage />
        <Layout>
          <ArticleTitle>{title}</ArticleTitle>
          <ArticleSubTitle>{subtitle}</ArticleSubTitle>
          <Author>
            <div className="author-image" />
            <div className="author-name-and-labels">
              <p className="author-name">
                {author}
                <FollowButton>Follow</FollowButton>
                <iframe
                  src={`https://www.facebook.com/plugins/share_button.php?href=${href}&layout=button_count&size=small&width=92&height=20&appId`}
                  width="92"
                  height="20"
                  style={{
                    border: "none",
                    overflow: "hidden",
                    marginLeft: "5px"
                  }}
                  scrolling="no"
                  frameBorder="0"
                  allowtransparency="true"
                  allow="encrypted-media"
                />
              </p>

              <DateAndLabels>
                <span className="date">{date}</span>
                {labels.map((label, i) => (
                  <Label key={i} name={label.labelName} background="#67C867" />
                ))}
              </DateAndLabels>
            </div>
          </Author>
        </Layout>
        <MainPhoto />
        <Layout>
          透過不同的網站
          <Response>
            <h1>寫下你的評論吧！</h1>
            <div
              className="fb-comments"
              data-href={href}
              data-width="100%"
              data-numposts="5"
            />
            <div id="fb-root" />
            <script
              async
              defer
              crossOrigin="anonymous"
              src="https://connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=v3.3"
            />
          </Response>
        </Layout>
        <div style={{ height: "2000px" }} />
      </div>
    );
  }
}

export default Work;
