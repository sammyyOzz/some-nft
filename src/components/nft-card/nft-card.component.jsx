import React from 'react'
import {
  Root,
  ImageContainer,
  Image,
  ContentContainer,
  Body,
  Description,
  ButtonContainer
} from './nft-card.styles'

function NftCard({ isSingle }) {
  return (
    <Root>
      <ImageContainer>
        <Image src="https://assets-global.website-files.com/622eead55797fc2865c24818/62fdfa240b641e664decf242_Lonzo_Ball_Bear-p-1600.webp" alt="" />
      </ImageContainer>

      <ContentContainer>
        <Body isSingle={isSingle}>
          <Description>
            Some description of the nft
          </Description>
          <ButtonContainer>
            <button>click me</button>
          </ButtonContainer>
        </Body>
      </ContentContainer>
    </Root>
  )
}

export default NftCard