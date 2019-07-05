import React from "react";
import MetaHead from "../components/MetaHead";

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  render() {
    return (
      <div>
        <MetaHead title="無法顯示頁面" />
        <h1>頁面錯誤{this.props.statusCode}</h1>
        {this.props.statusCode
          ? `An error ${this.props.statusCode} occurred on server`
          : "An error occurred on client"}
      </div>
    );
  }
}

export default Error;
