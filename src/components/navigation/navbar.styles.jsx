import styled from 'styled-components'

export const Root = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 7px 15px;
`

export const Logo = styled.div`
  font-size: 30px;

  & > h1 {
    margin: 0;
  }
`

export const LinksContainer = styled.div`
  #menu-bar {
    display: none;
  }

  @media(max-width: 900px) {
    button:not(#menu-bar) {
      display: none;
    }

    #menu-bar {
      display: block;
    }
  }
`