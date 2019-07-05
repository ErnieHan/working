import React, { Component } from "react";
import Charme from "../Charme";
import styled from "styled-components";

const Select = styled.select`
  padding: 8px 16px;
  outline: 0;
  border: 1px solid #cccccc;
  margin: 5px 0;
  width: 100%;
`;

const SelectCordButton = styled.button`
  border: 1px solid black;
  padding: 16px;
  background: white;
  width: 100%;
`;

const AddToBag = styled.button`
  background: black;
  color: white;
  padding: 16px;
  border: 0;
  width: 100%;
`;

class SelectCord extends Component {
  state = {
    charmeQuanity: [],
    selectCharme: false
  };

  handleClick = () => {
    const list = [];
    for (var i = 1; i <= this.refs.quanity.value; i++) {
      list.push(i);
    }
    const defaultCharme = "黑色";
    this.setState({
      charmeQuanity: list,
      selectCharme: true,
      defaultCharme: defaultCharme
    });
  };

  TotalQuanity = emarkQuanity => {
    const list = [];
    for (var i = 1; i <= emarkQuanity; i++) {
      list.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return list;
  };
  render() {
    const emarkQuanity = 11;
    return (
      <div style={{ width: "350px" }}>
        <Select ref="quanity" onChange={this.handleClick}>
          {this.TotalQuanity(emarkQuanity)}
        </Select>
        <div>
          <SelectCordButton onClick={this.handleClick}>
            只要加購NT.400，即可挑選喜愛的配繩
          </SelectCordButton>
        </div>

        {this.state.selectCharme ? (
          <div>
            {this.state.charmeQuanity.map((data, i) => (
              <Charme
                key={i}
                data={data}
                defaultCharme={this.state.defaultCharme}
              />
            ))}
            <div>
              <AddToBag>加入購物袋</AddToBag>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default SelectCord;
