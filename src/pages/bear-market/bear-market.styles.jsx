import styled from 'styled-components';
import { breakpoints, color } from '../../theme';

export const Cover = styled.div`
  height: 85vh;
  margin-top: -100px;
  background-image: url("https://assets-global.website-files.com/622eead55797fc2865c24818/62fcee32a353c58760d93b70_OBM-home.webp");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TitleContainer = styled.div`
  padding: 20px 50px 50px 50px;
  background-color: ${color('background')};
  text-transform: uppercase;

  @media(max-width: ${breakpoints('mobile')}) {
    padding: 35px 25px;
    margin: 20px;
  }
`

export const SmallTitle = styled.p`
  font-size: 20px;
  color: ${color('secondary')};
  letter-spacing: 2px;
  font-weight: 500;
  margin-bottom: 30px;

  @media (max-width: ${breakpoints('mobile')}) {
    margin-bottom: 50px;
  }
`

export const LargeTitle = styled.h2`
  font-size: 60px;
  margin: 0;
  transform: scaleY(1.5);
  color: ${color('secondary')};
  font-family: 'Luckiest Guy', cursive;

  @media(max-width: ${breakpoints('desktop')}) {
    font-size: 60px;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  gap: 3rem;
  margin: 50px 0;
`

export const Content = styled.div`
  width: 80%;
  margin: 0 auto;

  @media (max-width: ${breakpoints('mobile')}) {
    width: calc(100% - 30px);
  }
`