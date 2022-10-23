import NavButton from './nav-button.component'
import routes from '../../routes'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import Sidebar from './sidebar.component'
import { AnimatePresence, useCycle } from 'framer-motion'
import { useEffect, useState } from 'react'

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 7px 15px;
`

const Logo = styled.div`
  font-size: 30px;

  & > h1 {
    margin: 0;
  }
`

const LinksContainer = styled.div`
  #menu-bar {
    display: none;
  }

  @media(max-width: 900px) {
    button:not(#menu-bar) {
      display: none;
    }

    #menu-bar {
      display: block;
    }
  }
`


function Navbar() {
  const [isSidebarOpen, toggleSidebarIsOpen] = useCycle(false, true);
  const [screenWidth, setScreenWidth] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = document.documentElement.clientWidth;
      setScreenWidth(viewportWidth);
    }

    if (screenWidth > 900 && isSidebarOpen) {
      toggleSidebarIsOpen()
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize);
  }, [isSidebarOpen, screenWidth])

  return (
    <>
      <Root>
        <Logo>
          <h1><em>Zoro</em></h1>
        </Logo>

        <LinksContainer>
          {routes
            .filter(route => route.type === 'link')
            .map(({ displayName, path}) => (
              <Link to={path} key={displayName}>
                <NavButton>{displayName}</NavButton>
              </Link>
          ))}
          {routes
            .filter(route => route.type === 'icon')
            .map(({ icon, link }, i) => (
              <a href={link} key={i}>
                <NavButton>
                  <FontAwesomeIcon icon={icon} />
                </NavButton>
              </a>
          ))}
          <NavButton id="menu-bar" onClick={toggleSidebarIsOpen}>
            <FontAwesomeIcon icon={faBars} />
          </NavButton>
        </LinksContainer>

      </Root>
      
      <AnimatePresence>
        { isSidebarOpen && <Sidebar closeSidebar={toggleSidebarIsOpen} /> }
      </AnimatePresence>
    </>
  )
}

export default Navbar