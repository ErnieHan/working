import React, { Component } from "react";
import styled from "styled-components";

const Div = styled.div`
  font-size: 13px;
  margin: 15px 0;
`;
const TitleSpan = styled.span`
  color: #c69967;
  font-style: italic;
`;
const Label = styled.label`
  cursor: pointer;
`;

const CordSpan = styled.span`
  background: #c69967;
  color: #fff;
  padding: 5px;
  margin-left: 10px;
`;

const SelectCord = styled.div`
  margin: 5px 0;
  height: ${props => (props.show ? "25px" : "0")};
  transition: all 500ms;
  overflow: hidden;
`;

class Charme extends Component {
  state = {
    defaultCharme: this.props.defaultCharme,
    show: false
  };
  handleChange = event => {
    this.setState({
      defaultCharme: event.target.value
    });
  };
  render() {
    const { data } = this.props;
    const cordsList = [
      { name: "黑色" },
      { name: "白色" },
      { name: "灰色" },
      { name: "不加購" }
    ];
    return (
      <Div>
        <TitleSpan>第{data}條Charme 配繩:</TitleSpan>
        {this.state.defaultCharme !== "不加購" ? (
          <CordSpan>手繩,{this.state.defaultCharme}(皮質),15公分</CordSpan>
        ) : (
          <CordSpan>不加購</CordSpan>
        )}
        <span
          style={{ marginLeft: "15px", opacity: "0.6", cursor: "pointer" }}
          onClick={() => {
            this.setState({
              show: !this.state.show
            });
          }}
        >
          <img style={{ width: "15px" }} src="/static/img/edit.png" alt="" />
        </span>
        <SelectCord show={this.state.show}>
          {cordsList.map((cord, i) => (
            <Label key={i}>
              <input
                type="radio"
                name={`charme-${data}`}
                value={cord.name}
                onChange={this.handleChange}
                checked={this.state.defaultCharme === cord.name ? true : false}
              />
              {cord.name}
            </Label>
          ))}
        </SelectCord>
      </Div>
    );
  }
}

export default Charme;
