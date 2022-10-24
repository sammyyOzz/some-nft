import styled from 'styled-components'

export const Root = styled.div`
  /* box-shadow: 0 2px 6px skyblue; */
  /* border-radius: 20px; */
  /* cursor: pointer; */
  background-color: #f3eadb;
  position: relative;
  color: #bb9772;

  &:hover img { 
    transform: scale(1.2);
    transition: 1000ms linear all;
  }
`

export const ImageContainer = styled.div`
  overflow: hidden;
  height: 550px;
  width: 100%;
  /* border-radius: 20px 20px 0 0; */
`

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: 1000ms linear all;
`

export const ContentContainer = styled.div`
  box-sizing: border-box;
  padding: 30px;
`

export const Top = styled.div`
  display: flex;
`

export const TopLeft = styled.div`

`

export const TopRight = styled.div`
  
`

export const Body = styled.div`
  display: flex;
  flex-direction: ${p => p.isSingle ? 'row' : 'column'};
  justify-content: space-between;

  @media (max-width: 720px) {
    flex-direction: column;
  }
`

export const Description = styled.div`

`

export const ButtonContainer = styled.div`

`