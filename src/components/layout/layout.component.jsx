import React from 'react'
import Navbar from '../navigation/navbar.component'
import styled from 'styled-components'

const Root = styled.div`
  overflow-x: hidden;
`

const Layout = ({ children }) => (
  <Root>
    <Navbar />
    { children }
  </Root>
)

export default Layout