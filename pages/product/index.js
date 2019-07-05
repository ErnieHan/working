import React, { Component } from "react";
// import fetch from "isomorphic-unfetch";
import MetaHead from "../../components/MetaHead";
import { connect } from "react-redux";
import { saveFetchedProduct, testingFetchData } from "../../store/actions";
import { Button, Dialog } from "dawn-react-ui-lib";

class Product extends Component {
  static async getInitialProps(context) {
    const id = context.query.id;
    const isServer = !!context.req;
    await context.reduxStore.dispatch(testingFetchData());
    const daraFromRedux = await context.reduxStore.getState().product
      .saveFetchedProduct.product;
    return { id, daraFromRedux, isServer };
  }

  componentWillMount = () => {
    if (this.props.isServer) {
      console.log(this.props.isServer);
      this.props.testingFetchData();
    }
  };

  //   componentDidMount = () => {
  //     if (this.props.isServer) {
  //       this.props.testingFetchData();
  //     }
  //   };

  //   changeTitle = async () => {
  //     await fetch("http://localhost:8081/abc", {
  //       method: "PATCH",
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify({
  //         num: "123"
  //       })
  //     })
  //       .then(response => response.json())
  //       .then(responseJsonData => {
  //         // console.log(responseJsonData);
  //         fetch("http://localhost:8081/abc")
  //           .then(res => res.json())
  //           .then(respone => {
  //             console.log(respone);
  //           });
  //       })
  //       .catch(error => {
  //         alert(error);
  //       });
  //   };

  state = {
    SEO: true,
    open: false
  };

  // 使用者自行定義的Button的點擊事件
  openDialog = () => {
    this.setState({
      open: true
    });
  };
  // 傳下去給Dialog關閉畫面的事件
  closeDialog = () => {
    this.setState({
      open: false
    });
  };

  render() {
    // SEO初始值為true，
    const data = this.state.SEO
      ? this.props.daraFromRedux.channelCatalogItems[0]
      : this.props.product.channelCatalogItems[0];

    return (
      <div>
        <MetaHead
          title={`${this.props.id} | 點睛品`}
          description={data.productDesc}
        />
        <h1>這是Product頁面的 #{this.props.id}</h1>
        <div>testing123</div>
        <div>
          <Button
            text="基本對話框"
            onClick={this.openDialog}
            width="250px"
            padding="16px"
          />
          <Dialog
            open={this.state.open}
            handleClose={this.closeDialog}
            contentHeader="標題文字"
            contentBody={<div>內容</div>}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    product: state.product.saveFetchedProduct.product,
    getProduct: state.product.saveFetchedProduct.getProduct
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveFetchedProduct: data => {
      dispatch(saveFetchedProduct(data));
    },
    testingFetchData: () => {
      dispatch(testingFetchData());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product);
