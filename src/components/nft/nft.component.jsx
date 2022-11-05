import React from 'react'
import nft1 from '../../assets/nft1.jpg'
import nft2 from '../../assets/nft2.jpg'
import nft3 from '../../assets/nft3.jpg'
import nft4 from '../../assets/nft4.jpg'
import nft5 from '../../assets/nft5.jpg'
import nft6 from '../../assets/nft6.jpg'
import nft7 from '../../assets/nft7.jpg'
import styled from 'styled-components'
import { breakpoints, color, fontSize } from '../../theme'
import NftCard from './nft-card.component'
import AnimatedCard from '../animated/animated-card.component'

const Root = styled.div`
  box-sizing: border-box;
  padding: 30px;
`

const Title = styled.h2`
  text-align: center;
  font-family: 'Luckiest Guy', cursive;
  color: ${color('secondary')};
  font-size: ${fontSize('large')};
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin: 50px 0;
`

const Content = styled.div`
  width: 90%;
  margin: 0 auto;

  @media (max-width: ${breakpoints('mobile')}) {
    width: calc(100% - 30px);
  }
`

const nftList = [nft1, nft2, nft3, nft4, nft5, nft6, nft7]

function Nft() {
  return (
    <AnimatedCard>
      <Root id="nfts">
        <Title>Nft<small>s</small></Title>

        <Content>
            <Grid>
              { nftList.map((nft, i) => (
                <NftCard 
                  key={i}
                  imgSrc={nft}
                />
              ))}
            </Grid>
        </Content>
      </Root>
    </AnimatedCard>
  )
}

export default Nft