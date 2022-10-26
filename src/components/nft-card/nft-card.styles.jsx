import styled from 'styled-components'
import { breakpoints, color } from '../../theme'

export const Root = styled.div`
  background-color: ${color('background')};
  color: ${color('primary')};
`

export const ImageContainer = styled.div`
  overflow: hidden;
  height: 500px;
  width: 100%;
`

export const Image = styled.img`
  min-height: 350px;
  max-height: 600px;
  width: 100%;
  object-fit: cover;
  transition: 1000ms linear all;
`

export const ContentContainer = styled.div`
  box-sizing: border-box;
  padding: 30px 35px 50px 35px;
`

export const Top = styled.div`
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
`

export const TopLeft = styled.div`
  text-transform: uppercase;
`

export const TopRight = styled.div`
  
`

export const SmallTitle = styled.p`
  margin-bottom: 12px;
  font-size: 16px;
  font-weight: 500;
`

export const MediumTitle = styled.h3`
  font-size: 25px;
  margin: 0;
  text-align: center;
`

export const LargeTitle = styled.h2`
  color: ${color('secondary')};
  font-size: 37px;
  margin: 0;
`

export const Body = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: ${p => p.isSingle ? 'row' : 'column'};

  @media (max-width: ${breakpoints('tablet')}) {
    flex-direction: column;
    width: 100%;
  }
`

export const Description = styled.p`
  margin: 0 0 30px 0;
  font-size: 18px;
  line-height: 23px;
  width: ${p => p.isSingle ? '50%' : '100%'};

  @media (max-width: ${breakpoints('tablet')}) {
    width: 100%;
  }
`

export const ButtonContainer = styled.div`

`