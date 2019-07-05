import React, { Component } from "react";
import { connect } from "react-redux";
import { startLoading, stopLoading } from "../store/actions";
import styled from "styled-components";

const Div = styled.div`
  margin: 15px 0;
`;

const Button = styled.button`
  padding: 8px 16px;
  background: #0309ef;
  border: 0;
  outline: 0;
  color: white;
  margin: 5px;
  transition: all 300ms;
`;

class ReduxExample extends Component {
  render() {
    return (
      <Div>
        {this.props.show ? "Redux狀態:true" : "Redux狀態:false"}
        <div>
          <Button onClick={this.props.startLoading}>宇宙人</Button>
          <Button onClick={this.props.stopLoading}>飛行船</Button>
          <Button onClick={this.props.stopLoading}>兵工廠</Button>
          <Button onClick={this.props.stopLoading}>更多商品</Button>
        </div>
      </Div>
    );
  }
}

const mapStateToProps = state => {
  return {
    show: state.product.example.show
  };
};

const mapDispatchToProps = dispatch => {
  return {
    startLoading: () => {
      dispatch(startLoading());
    },
    stopLoading: () => {
      dispatch(stopLoading());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxExample);
