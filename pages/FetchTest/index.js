import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import { connect } from "react-redux";

import { saveFetchData } from "../../store/actions";

class FetchTest extends Component {
  static async getInitialProps({ reduxStore }) {
    let data;
    let data2;

    await fetch("http://localhost:8081/test")
      .then(res => res.json())
      .then(res => (data = res));

    // try -> catch -> finally 範例
    try {
      const response = await fetch("http://localhost:8081/test1");
      if (response.status == 201) {
        const data = await response.json();
        return data;
      }
      if (response.status == 400) {
        throw new Error();
      }
    } catch (err) {
      console.log(err);
    } finally {
      console.log("Function");
    }

    // redux 範例
    await reduxStore.dispatch(saveFetchData(data, true));
    let aaa = await reduxStore.getState().product.example.data.num;

    return { data, aaa, data2 };
  }

  componentDidMount() {
    this.props.saveFetch(this.props.data, true);
  }

  change = () => {
    this.props.saveFetch({ num: 456 }, true);
  };

  render() {
    return (
      <div>
        Fetch的data:{this.props.data.num}/ {this.props.saveData.num}
        <button onClick={this.change}>456</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    saveData: state.product.example.data,
    saveFetchData: state.product.example.saveFetchData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveFetch: (data, saveBoolean) => {
      dispatch(saveFetchData(data, saveBoolean));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FetchTest);
