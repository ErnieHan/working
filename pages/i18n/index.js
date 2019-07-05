/*
 *  Author : Ernie
 *  Date : 2019/6/12
 *  Editor :
 *  Recently Edited Date :
 */

import React from "react";
import PropTypes from "prop-types";
import { i18n, withTranslation, Trans } from "../../i18n.js";
import Title from "../../components/i18Title";
import Footer from "../../components/i18Footer";
import MetaHead from "../../components/MetaHead";
import styled from "styled-components";
import Link from "next/link";
import { Router } from "../../i18n";

const ButtonLanguage = styled.button`
  padding: 16px;
  border: 0;
  background: #333;
  color: white;
  margin: 15px;
  transition: all 300ms;
  &:hover {
    background: #000;
  }
`;

const ButtonLanguage2 = styled.button`
  padding: 16px;
  border: 0;
  background: #e9e8e7;
  color: black;
  color: white;
  margin: 15px;
  transition: all 300ms;
  &:hover {
    background: #ddd;
  }
`;

const Clip = styled.div`
  width: 100px;
  height: 125px;
  background: #069;
  clip-path: polygon(65% 0%, 0% 0%, 0% 100%, 100% 100%, 100% 25%);
  margin: 15px;
`;

class i18nPage extends React.Component {
  static async getInitialProps() {
    return {
      namespacesRequired: ["common", "footer"]
    };
  }

  changeLanguage = event => {
    const language = event.target.value;
    i18n.changeLanguage(language);
  };

  render() {
    const { t } = this.props;
    return (
      <React.Fragment>
        <MetaHead title="i18n語言" />
        <Clip />
        <Title />
        <ButtonLanguage
          type="button"
          onClick={() =>
            i18n.changeLanguage(i18n.language === "en" ? "zh" : "en")
          }
        >
          {t("change-locale")}
        </ButtonLanguage>
        <Trans i18nKey="change-locale" />
        <Link href="/second-page">
          <ButtonLanguage2 type="button">{t("to-second-page")}</ButtonLanguage2>
        </Link>
        <button onClick={() => Router.push("/second-page")}>
          透過RouterPush切換網頁
        </button>
        <Footer />
      </React.Fragment>
    );
  }
}

i18nPage.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation("common")(i18nPage);
