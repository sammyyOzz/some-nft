import styled from 'styled-components'

export const LettersContainer = styled.div`
  height: 380px;
  /* border: 1px solid red; */
  margin-top: 50px;
  display: flex;
  justify-content: center;
  overflow: hidden;

  & > span {
    /* transform: scaleY(1.2); */
    margin-top: -50px;
  }
`