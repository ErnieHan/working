/*
 *  Author : Ernie
 *  Date : 2019/6/12
 *  Editor :
 *  Recently Edited Date :
 */

import React from "react";
import MetaHead from "../../components/MetaHead";
import Link from "next/link";
import styled from "styled-components";
import WebHead from "../../components/WebHead";
import { i18n, withTranslation, Trans } from "../../i18n.js";
import NavBar from "../../components/NavBar";
import LatestNews from "../../components/LatestNews";

const Layout = styled.div`
  max-width: 980px;
  margin: 0 auto;
`;

const Left = styled.article`
  width: 70%;
  float: left;
  margin-top: 35px;
  padding-right: 15px;
`;

const Right = styled.aside`
  width: 30%;
  float: right;
  margin-top: 35px;
`;

class Practive extends React.Component {
  static async getInitialProps() {
    return {
      namespacesRequired: ["common"]
    };
  }

  render() {
    return (
      <div>
        <Layout>
          <MetaHead title="Practice | 宇宙飛行船" />
          <WebHead />
          <NavBar />
          <Left>
            <LatestNews />
          </Left>
          <Right>Right</Right>
          <div style={{ clear: "both" }} />
        </Layout>
      </div>
    );
  }
}

export default withTranslation("common")(Practive);
