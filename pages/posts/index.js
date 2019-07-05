/*
 *  Author : Ernie
 *  Date : 2019/6/12
 *  Editor :
 *  Recently Edited Date :
 */

import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import MetaHead from "../../components/MetaHead";
import dynamic from "next/dynamic";
import Link from "next/link";
import { withRouter } from "next/router";
import Log from "../../components/Log";

const DynamicComponent = dynamic(() => import("../../components/Dynac"));

class Post extends Component {
  state = {
    totalData: [],
    data: this.props.list,
    change: true
  };

  static async getInitialProps(context) {
    const { id } = context.query;
    const res = await fetch("http://localhost:8081/chowsangsang");
    const product = await res.json();
    return { postId: id, product };
  }

  render() {
    return (
      <div>
        <MetaHead title={this.props.postId} />
        <DynamicComponent product={this.props.product} />
        <h1>My blog post #{this.props.postId}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Log />
      </div>
    );
  }
}

export default withRouter(Post);
