import styled from 'styled-components';
import backgroundImage from '../../assets/logo.jpg'
import { breakpoints, color } from '../../theme';

const Cover = styled.div`
  /* height: 85vh; */
  margin-top: -100px;
  width: 100%;
  height: 85vh;
  /* background-image: url(${backgroundImage}); */
  /* background-size: cover; */
  /* background-repeat: no-repeat;
  background-position: center; */
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Image = styled.img`
  height: calc(100% - 100px);
  width: auto;
  margin-top: 100px;
`

const Home = () => (
  <Cover id="home">
    <Image src={backgroundImage} alt="" />
  </Cover>
)

export default Home