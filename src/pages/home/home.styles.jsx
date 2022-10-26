import styled from 'styled-components'

export const Section = styled.section`
  /* width: 100vw;
  overflow-x: hidden; */
  /* height: 100vh; */

  /* background-color: yellow; */
`

export const LettersContainer = styled.div`
  height: 400px;
  /* border: 1px solid red; */
  margin-top: 50px;
  display: flex;
  justify-content: center;
  overflow: hidden;

  /* & .hide {
    @media(max-width: 600px) {
      display: none;
    }
  } */

  & > span {
    margin-top: -50px;
    transform: scale(0.8, 1.2);
  }

  @media (max-width: 900px) {
    transform: scale(0.6, 1);
    overflow: visible;
    /* margin: 150px 0 0 -50px; */
  } 

  @media (max-width: 600px) {
    transform: scale(1);
    /* overflow-x: hidden; */
    margin: 150px 0 0 -50px;

    & .hide {
      display: none;
    }
  } 
`