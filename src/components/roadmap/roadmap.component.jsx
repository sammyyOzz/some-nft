import React from "react";
import { VerticalTimeline }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Root } from './roadmap.styles';
import TimelineElement from "./timeline-element.component";

function Roadmap() {
  return (
    <Root>
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
