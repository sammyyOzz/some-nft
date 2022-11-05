import React from "react";
import { VerticalTimeline }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import TimelineElement from "./timeline-element.component";
import styled from 'styled-components'
import { breakpoints, color, fontSize } from "../../theme";

const Root = styled.div`
  box-sizing: border-box;
  padding: 30px;

  & > div {
    width: 70%;
    margin: 0 auto;

    @media(max-width: ${breakpoints('mobile')}) {
      width: 90%;
    }
  }
`

const Title = styled.h2`
  font-family: 'Luckiest Guy', cursive;
  color: ${color('secondary')};
  font-size: ${fontSize('large')};
  text-align: center;
`

function Roadmap() {
  return (
    <Root id="roadmap">
      <Title>Roadmap</Title>
      <div>
        <VerticalTimeline lineColor="black">
          <TimelineElement>
            <h3 className="vertical-timeline-element-title">APTOS PUMPKINS</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit in diam. 
            </p>
          </TimelineElement>
          <TimelineElement>
            <h3 className="vertical-timeline-element-title">APTOS PUMPKINS</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit in diam. 
            </p>
          </TimelineElement>
          <TimelineElement>
            <h3 className="vertical-timeline-element-title">APTOS PUMPKINS</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit in diam. 
            </p>
          </TimelineElement>
          <TimelineElement>
            <h3 className="vertical-timeline-element-title">APTOS PUMPKINS</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit in diam. 
            </p>
          </TimelineElement>
          
        </VerticalTimeline>

        
        </div>
    </Root>
  );
}

export default Roadmap;
