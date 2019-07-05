import React, { Component } from "react";
import styled from "styled-components";
import { Base64 } from "js-base64";

const Div = styled.div`
  width: 350px;
  margin: 0 auto;
  text-align: center;
  input {
    width: 100%;
    padding: 8px;
    outline: 0;
    border: 1px solid #e9e8e7;
    margin-top: 15px;
    font-size: 18px;
    &::placeholder {
      font-size: 12px;
      color: black;
      font-weight: 100;
    }
  }
`;

const LoginButton = styled.button`
  display: block;
  width: 100%;
  padding: 16px;
  margin: 15px 0;
  background: black;
  color: white;
  border: 0;
  font-size: 13px;
  font-weight: 100;
`;

class Log extends Component {
  state = {
    passwordSame: false
  };

  check = () => {
    const orginalPassword = this.refs.password.value;
    const againPassword = this.refs.passwordAgain.value;
    if (orginalPassword !== againPassword) {
      this.setState({
        passwordSame: false
      });
    } else {
      this.setState({
        passwordSame: true
      });
    }
  };

  login = async () => {
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    // console.log("帳號:", email, "密碼", password);
    var encypass = Base64.encode(password); // 加密
    var decryptpass = Base64.decode(encypass); // 解密
    console.log(encypass, decryptpass);
    const data = { email: email, password: encypass };
    await fetch("http://localhost:8081/abc", {
      method: "POST",
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(res => res.json())
      .catch(error => console.error("Error:", error))
      .then(response => console.log("Success:", response));
  };

  render() {
    return (
      <Div>
        <h1>註冊帳號</h1>
        <form>
          <input
            type="email"
            placeholder="輸入帳號/電子信箱"
            ref="email"
            autoComplete="username"
          />
          <input
            type="password"
            autoComplete="new-password"
            ref="password"
            placeholder="輸入密碼"
            onChange={this.check}
          />
          <input
            type="password"
            autoComplete="new-password"
            ref="passwordAgain"
            placeholder="再次輸入密碼"
            onChange={this.check}
          />
        </form>
        {this.state.passwordSame ? "密碼正確" : "密碼不相同"}
        <LoginButton onClick={this.login}>註冊</LoginButton>
      </Div>
    );
  }
}

export default Log;
