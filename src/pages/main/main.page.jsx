import React from 'react'
import AboutUs from '../../components/about-us/about-us.component'
import ConfettiComponent from '../../components/confetti/confetti.component'
import Layout from '../../components/layout/layout.component'
import Roadmap from '../../components/roadmap/roadmap.component'
import {
  Cover
} from './main.styles'

function Main() {

  return (
    <Layout>
      {/* <ConfettiComponent /> */}
      <Cover />
      <AboutUs />
      <Roadmap />
    </Layout>
  )
}

export default Main