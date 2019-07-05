import React, { Component } from "react";
import styled from "styled-components";

const Payment = styled.div`
  width: 25%;
  padding: 5px;
  height: 119px;
  border: 1px solid #e9e8e7;
  img {
    width: 50%;
  }
`;

class Background extends Component {
  render() {
    const href = "https://profile.erniexx.website/";
    return (
      <div>
        <Payment>
          <div>
            <img src="/static/img/linepay.png" />
          </div>
        </Payment>
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fdeerandboy%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
          style={{
            width: "340px",
            height: "500px",
            border: "none",
            overflow: "hidden"
          }}
          scrolling="no"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
        />
        <div>
          <iframe
            src="https://www.instagram.com/p/BzON9MKBIYX/embed"
            width="400"
            height="650"
            frameborder="0"
            scrolling="no"
            allowtransparency="true"
          />
        </div>
        <div>
          <iframe
            src={`https://www.facebook.com/plugins/share_button.php?href=${href}&layout=button_count&size=small&width=92&height=20&appId`}
            width="92"
            height="20"
            style={{
              border: "none",
              overflow: "hidden"
            }}
            scrolling="no"
            frameborder="0"
            allowTransparency="true"
            allow="encrypted-media"
          />
        </div>
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/videoseries?list=PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
          />
        </div>
        <div
          class="fb-comments"
          data-href="https://profile.erniexx.website/"
          data-width="100%"
          data-numposts="5"
        />
      </div>
    );
  }
}

export default Background;
