import React from "react";
import Faq from "react-faq-component";
import styled from 'styled-components'
import { breakpoints, color, fontSize } from "../../theme";
import AnimatedCard from "../animated/animated-card.component";
import { data } from "./faqs.data"

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

const styles = {
    bgColor: 'transparent',
    titleTextColor: "blue",
    rowTitleColor: "#250330",
    rowContentColor: '#ca06ca',
    // rowTitleTextSize: '20px'
    // arrowColor: "red",
};

const config = {
    animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};

function Faqs() {
  return (
      <Root id="faqs">
        <Title>Faqs</Title>
        <Faq
          data={data}
          styles={styles}
          config={config}
        />
      </Root>
  )
}

export default Faqs