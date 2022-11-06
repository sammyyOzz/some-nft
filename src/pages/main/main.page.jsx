import React from 'react'
import AboutUs from '../../components/about-us/about-us.component'
import ConfettiComponent from '../../components/confetti/confetti.component'
import Faqs from '../../components/faqs/faqs.component'
import Home from '../../components/home/home.component'
import Layout from '../../components/layout/layout.component'
import Nft from '../../components/nft/nft.component'
import Roadmap from '../../components/roadmap/roadmap.component'


function Main() {

  return (
    <Layout>
      <ConfettiComponent />
      <Home />
      <AboutUs />
      <Nft />
      <Roadmap />
      <Faqs />
    </Layout>
  )
}

export default Main