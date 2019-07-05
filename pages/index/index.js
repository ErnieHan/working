import React, { Component } from "react";
import MetaHead from "../../components/MetaHead";
import WebHead from "../../components/WebHead";
import Article from "../../components/Article";
import { Layout, TopSection, SearchBar, SearchText } from "./index-css";
import { data } from "../data.json";

class Home extends Component {
  state = {
    searchResult: false,
    searchResultArrary: [],
    keywords: ""
  };
  searching = e => {
    const keywords = e.target.value;
    this.setState({
      keywords: keywords
    });
    if (keywords.length > 2) {
      // 關鍵字需要三個字以上才開始搜尋
      this.setState({
        searchResult: true
      });
      const findKeywords = data.map(article =>
        article.keywords.findIndex(key => key.includes(keywords))
      );
      var i;
      const newArr = [];
      for (i = 0; i < findKeywords.length; i++) {
        if (findKeywords[i] === -1) {
        } else {
          newArr.push(data[i]);
        }
        this.setState({
          searchResultArrary: newArr
        });
      }
    } else {
      this.setState({
        searchResult: false
      });
    }
  };
  render() {
    return (
      <div style={{ background: "#f2f7fa", minHeight: "105vh" }}>
        <MetaHead title="工作元件區" />
        <WebHead />
        <TopSection>
          <SearchBar placeholder="Quick Search" onChange={this.searching} />
        </TopSection>
        {!this.state.searchResult ? (
          <Layout>
            {data.map((articleData, i) => (
              <Article key={i} articleData={articleData} />
            ))}
          </Layout>
        ) : (
          <div>
            <SearchText>
              以下為
              <span>{this.state.keywords}</span>的搜尋結果：
              <span>{this.state.searchResultArrary.length}</span>筆
            </SearchText>
            <Layout>
              {this.state.searchResultArrary.map((articleData, i) => (
                <Article key={i} articleData={articleData} />
              ))}
            </Layout>
          </div>
        )}
      </div>
    );
  }
}

export default Home;
