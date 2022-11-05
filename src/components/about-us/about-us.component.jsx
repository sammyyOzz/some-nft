import React from 'react'
import styled from 'styled-components'
import { breakpoints, color, fontSize } from '../../theme'
import logoImage from '../../assets/logo.jpg'
import AnimatedCard from '../animated/animated-card.component'

const Root = styled.div`
  box-sizing: border-box;
  padding: 30px;
  display: flex;
`

const ImageContainer = styled.div`
  width: 50%;
  box-sizing: border-box;
  padding: 50px;
  display: flex;
  align-items: center;

  @media(max-width: ${breakpoints('desktop')}) {
    display: none;
  }

  & img {
    /* height: 100%; */
    width: 100%;
  }
`

const ContentContainer = styled.div`
  width: 50%;
  text-align: center;
  color: white;

  @media(max-width: ${breakpoints('desktop')}) {
    width: 100%;
  }
`

const Title = styled.h2`
  font-family: 'Luckiest Guy', cursive;
  color: ${color('secondary')};
  font-size: ${fontSize('large')};
`

const Text = styled.p`
  color: ${color('secondary')};
  font-size: ${fontSize('regular')};
`

function AboutUs() {
  return (
    <AnimatedCard>
      <Root id="about-us">
        <ImageContainer>
          <img src={logoImage} alt="" />
        </ImageContainer>

        <ContentContainer>
          <Title>About Us</Title>
          <Text>
            Lorem Ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem Ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem Ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem Ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem Ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem Ipsum dolor sit amet, consectetur adipiscing elit.
          </Text> 
          <Text>
            Lorem Ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem Ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem Ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem Ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem Ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem Ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Text>
            Lorem Ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem Ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem Ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem Ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem Ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem Ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Text>
            Lorem Ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem Ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem Ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem Ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem Ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem Ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </ContentContainer>
      </Root>
    </AnimatedCard>
  )
}

export default AboutUs