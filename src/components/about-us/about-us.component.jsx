import React from 'react'
import styled from 'styled-components'
import { color, fontSize } from '../../theme'
import logoImage from '../../assets/logo.jpg'

const Root = styled.div`
  box-sizing: border-box;
  padding: 30px;
  display: flex;
`

const ImageContainer = styled.div`
  width: 50%;
  box-sizing: border-box;
  padding: 50px;

  & img {
    height: 100%;
    width: 100%;
  }
`

const ContentContainer = styled.div`
  width: 50%;
  text-align: center;
  color: white;
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
    <Root>
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
  )
}

export default AboutUs