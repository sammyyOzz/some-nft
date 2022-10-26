import React from 'react'
import { FillText } from './letter.styles'
import background from '../../assets/K-background.jpg'

const Letter = ({ letter, imgSrc, ...props }) => (
  <FillText
    imgSrc={imgSrc || background}
    { ...props }
  >
    {letter}
  </FillText>   
)

export default Letter