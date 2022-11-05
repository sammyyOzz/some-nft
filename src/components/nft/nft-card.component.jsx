import React from 'react'
import NftButton from './nft-button.component'
import {
  Root,
  ImageContainer,
  Image,
  ContentContainer,
  Body,
  Top,
  TopLeft,
  TopRight,
  SmallTitle,
  MediumTitle,
  LargeTitle,
  Description,
  ButtonContainer
} from './nft-card.styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function NftCard({ isSingle, imgSrc }) {
  return (
    <Root>
      <Image src={imgSrc || "https://assets-global.website-files.com/622eead55797fc2865c24818/62fdfa240b641e664decf242_Lonzo_Ball_Bear-p-1600.webp"} alt="" />

      {/* <ContentContainer>
        <Top>
          <TopLeft>
            <SmallTitle>1 of 2 auctions</SmallTitle>
            <LargeTitle>zoro cares</LargeTitle>
          </TopLeft>
          <TopRight>
            <SmallTitle>Total Raised</SmallTitle>
            <MediumTitle>0.44K</MediumTitle>
          </TopRight>
        </Top>

        <Body isSingle={isSingle}>
          <Description isSingle={isSingle}>
            Okay Cares is a global community of givers. 
            Through charity auctions in partnership with global icons, 
            community giving activities and non-profit partnerships, 
            we transform our #WAGBO message into action.
          </Description>
          <ButtonContainer>
            <NftButton>explore&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowRight} /></NftButton>
          </ButtonContainer>
        </Body>

      </ContentContainer> */}
    </Root>
  )
}

export default NftCard