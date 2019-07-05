/*
 *  Author : Ernie
 *  Date : 2019/6/12
 *  Editor :
 *  Recently Edited Date :
 */

import React from "react";
import PropTypes from "prop-types";
import { withTranslation, Link } from "../../i18n.js";
import MetaHead from "../../components/MetaHead";

class SecondPage extends React.Component {
  static async getInitialProps() {
    return {
      namespacesRequired: ["second-page"]
    };
  }

  render() {
    const { t } = this.props;
    return (
      <React.Fragment>
        <MetaHead title="i18n-SecondPage" />
        <h1>{t("h1")}</h1>
        <Link href="/i18n">
          <button type="button">{t("back-to-home")}</button>
        </Link>
      </React.Fragment>
    );
  }
}

SecondPage.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation("second-page")(SecondPage);
