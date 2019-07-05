import React, { Component } from "react";
import styled from "styled-components";
import Label from "../Label";
import Router, { withRouter } from "next/router";

const LayoutInside = styled.div`
  break-inside: avoid;
  padding: 15px 0;
  transition: all 300ms;
  transform: ${props =>
    props.state.move ? `translate(${props.state.x}px,${props.state.y}px)` : ""};
`;

const Div = styled.div`
  background: white;
  border-radius: 10px;
  padding: 15px;
  position: relative;
  h2 {
    font-family: "Galano";
    font-size: 32px;
  }
  h3 {
    color: #aaaaaa;
    font-size: 14px;
    padding-bottom: 15px;
    border-bottom: 1px solid #e9e8e7;
  }
`;

const Date = styled.p`
  margin: 5px 0;
  text-align: right;
  color: #aaa;
`;

const Point = styled.p`
  margin: 5px 0;
  padding-bottom: 15px;
  border-bottom: 1px solid #e9e8e7;
  font-size: 13px;
  &::first-letter {
    padding-left: 15px;
  }
`;

const Title = styled.div`
  cursor: pointer;
`;

const Author = styled.div`
  margin-top: 10px;
  .author-image {
    float: left;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: url("/static/img/sid.jpg") no-repeat center center;
    background-size: cover;
  }
  .author-name-and-labels {
    margin-left: 15px;
    float: left;
    width: calc(100% - 65px);
  }
  .author-name {
    margin: 0;
    font-size: 19px;
  }
  .labels {
    display: flex;
    flex-wrap: wrap;
  }
  &::after {
    display: block;
    content: "";
    clear: both;
  }
`;

class Article extends Component {
  state = {
    move: false,
    x: 0,
    y: 0,
    showCircle: false
  };

  // 置中元件
  handleClick = () => {
    const element = this.refs.element;
    const x = element.offsetLeft;
    const y = element.offsetTop;
    const windowWidth = document.body.offsetWidth;
    const windowHeight = window.innerHeight;
    const elementWidth = element.offsetWidth;
    const elementHeight = element.offsetHeight;
    this.setState({
      move: !this.state.move,
      x: -x + windowWidth / 2 - elementWidth / 2,
      y: -y + windowHeight / 2 - elementHeight / 2
    });
  };

  //
  goToWorkPage = url => {
    Router.push(`/work?id=${url}`, `/work/${url}`, { shallow: true });
  };

  render() {
    const {
      title,
      subtitle,
      date,
      pointWords,
      labels,
      url
    } = this.props.articleData;
    return (
      <LayoutInside ref="element" state={this.state}>
        <Div>
          <Title onClick={this.goToWorkPage.bind(this, url)}>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
          </Title>
          <Date>{date}</Date>
          <Point>{pointWords}</Point>
          <Author>
            <div className="author-image" />
            <div className="author-name-and-labels">
              <p className="author-name">Ernie Han</p>
              <div className="labels">
                {labels.map((label, i) => (
                  <Label key={i} name={label.labelName} background="#67C867" />
                ))}
              </div>
            </div>
          </Author>
        </Div>
      </LayoutInside>
    );
  }
}

export default withRouter(Article);
