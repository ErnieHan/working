import React, { Component } from "react";
import styled from "styled-components";

const First = styled.div`
  width: 100%;
  height: 350px;
  background: url("/static/img/48131004561_bc01b75ffe_z.jpg") no-repeat center
    center;
  background-size: cover;
  position: relative;
`;

const Shadown = styled.div`
  position: absolute;
  width: 100%;
  height: 200px;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  bottom: 0;
  color: white;
`;

class Newest extends Component {
  render() {
    return (
      <section>
        <First>
          <Shadown>
            <h1>Title</h1>
          </Shadown>
        </First>
      </section>
    );
  }
}

export default Newest;
