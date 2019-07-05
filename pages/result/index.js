import React, { Component } from "react";

class Result extends Component {
  static async getInitialProps(ctx) {
    console.log(ctx);
    const { id } = ctx.query;
    return {
      namespacesRequired: ["common"],
      id
    };
  }

  state = {
    nameResult: [],
    idResult: []
  };

  componentDidMount = () => {
    const lists = this.props.id.split(" ");
    const list2 = this.props.id.split(" ");
    const productLists = [
      { name: "apple", id: "KR-401" },
      { name: "banana", id: "CD-201" },
      { name: "dor", id: "EE-621" },
      { name: "dog", id: "KG-777" }
    ];
    const productLists2 = [
      { name: "apple", id: "KR-401" },
      { name: "banana", id: "CD-201" },
      { name: "dor", id: "EE-621" },
      { name: "dog", id: "KG-777" }
    ];

    const nameResult = productLists.filter(data =>
      data.name.includes(lists.map(list => list))
    );
    const idResult = productLists2.filter(app =>
      app.id.includes(list2.map(data => data))
    );
    const result = lists.map((data, i) =>
      productLists.filter(list => list.id.includes(data))
    );
    console.log(result);
    this.setState({
      nameResult: nameResult,
      idResult: idResult
    });
  };

  render() {
    return (
      <div>
        <h1>以下為{this.props.id}相關的搜尋結果:</h1>
        {this.state.nameResult.map((data, i) => (
          <div key={i}>
            產品名稱{data.name} | 產品編號{data.id}
          </div>
        ))}
        {this.state.idResult.map((data, i) => (
          <div key={i}>
            產品名稱{data.name} | 產品編號{data.id}
          </div>
        ))}
      </div>
    );
  }
}

export default Result;
