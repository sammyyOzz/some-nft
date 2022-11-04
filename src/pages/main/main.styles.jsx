import styled from 'styled-components';
import backgroundImage from '../../assets/background.jpg'
import { breakpoints, color } from '../../theme';

export const Cover = styled.div`
  /* height: 85vh; */
  margin-top: -100px;
  width: 100%;
  height: 85vh;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`