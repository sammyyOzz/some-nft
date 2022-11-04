import React from 'react'
import AboutUs from '../../components/about-us/about-us.component'
import ConfettiComponent from '../../components/confetti/confetti.component'
import Layout from '../../components/layout/layout.component'
import {
  Cover
} from './main.styles'

function Main() {

  return (
    <Layout>
      {/* <ConfettiComponent /> */}
      <Cover />
      <AboutUs />
    </Layout>
  )
}

export default Main