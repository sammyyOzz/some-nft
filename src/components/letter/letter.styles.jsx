import styled from "styled-components";
import background from '../../assets/K-background.jpg'

export const Root = styled.div`
  /* width: 200px; */
  /* height: 420px; */
  border: 1px solid red;
  /* & > div {
    transform: scale(2.2);
  } */
`

export const Mask = styled.div`
  -webkit-mask-image: url(${p => p.image});
  mask-image: url(${p => p.image});
  
  /* -webkit-mask-size: cover;
  mask-size: cover; */

  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;

  /* -webkit-mask-position: 60% 50%;
  mask-position: 60% 50%;  */
`

export const Image = styled.img`
  width: 100%;
  height: 420px;
  object-fit: cover;
`

export const FillText = styled.span`
  background-image: url(${background});
  background-size: cover;
	-webkit-text-fill-color: #000000bb;
	-webkit-background-clip: text;
  background-clip: text;
	color: #fff;
	font-size: 420px;
	font-family: 'Lobster', cursive;
  /* border: 1px solid green; */

  &:hover {
    -webkit-text-fill-color: transparent;
  }
`