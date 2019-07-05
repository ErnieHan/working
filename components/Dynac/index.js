import React, { Component } from "react";
import styled from "styled-components";
import { withRouter } from "next/router";

const Search = styled.input`
  width: 350px;
  padding: 8px 25px;
  margin: 15px;
  outline: 0;
  border: 1px solid #e9e8e7;
  &::placeholder {
    font-size: 12px;
  }
`;

class Dynac extends Component {
  state = {
    productList: false,
    result: ""
  };

  handleChange = event => {
    const productLists = [
      { name: "apple", id: "KR-401" },
      { name: "banana", id: "CD-201" },
      { name: "dor", id: "EE-621" },
      { name: "dog", id: "KG-777" }
    ];
    if (event.target.value !== "") {
      const apple = productLists.filter(data =>
        data.name.includes(event.target.value)
      );
      const id = productLists.filter(data =>
        data.id.includes(event.target.value.toUpperCase())
      );
      console.log("name:", apple);
      console.log("id:", id);
      this.setState({
        productList: apple,
        result: event.target.value
      });
    }
  };

  handler = event => {
    const Router = this.props.router;
    // Router.push({
    //   pathname: "/result",
    //   query: { slug: this.state.result }
    // });
    event.preventDefault();
    if (this.state.result === "") {
      console.log("AAAA");
    } else {
      Router.push(
        `/result?id=${this.state.result}`,
        `/result/${this.state.result}`,
        {
          shallow: true
        }
      );
    }
  };
  render() {
    const product = this.props.product.channelCatalogItems[0];
    return (
      <div>
        <h1>Dynac #itemId:{product.itemId}</h1>
        <h3>
          {product.productName1}
          <br />
          {product.productName2}
          <br />
          {product.productName3}
        </h3>
        <form onSubmit={this.handler}>
          <Search
            type="text"
            placeholder="請輸入商品相關名稱或編號"
            onChange={this.handleChange}
          />
          <button type="submit">搜尋結果頁面</button>
        </form>
      </div>
    );
  }
}

export default withRouter(Dynac);
