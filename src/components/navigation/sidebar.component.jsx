import React, { useEffect } from 'react'
import styled from 'styled-components'
import routes from '../../routes'
import NavButton from './nav-button.component'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import useWindowSize from 'react-use/lib/useWindowSize'
import { sidebar } from '../../theme'
import logoImage from '../../assets/logo.jpg'


const Root = styled.div`
  aside {
    background-color: ${sidebar('background')};
    position: fixed;
    top: 0;
    z-index: 100;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  .links-container {
    margin-top: 50px;
  }

  & .links {
    margin: 0 0 20px 20px;
  }
`

const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box;
  padding: 7px 15px;
`

const Logo = styled.div`
  font-size: 30px;

  & > img {
    width: 50px;
    height: 50px;
  }

  & > h1 {
    margin: 0;
    color: white;
  }
`


const itemVariants = {
  closed: {
    opacity: 0
  },
  open: { 
    opacity: 1 
  }
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  },
  open: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: 1
    }
  }
};

function Sidebar({ closeSidebar }) {
  const { width } = useWindowSize();

  useEffect(() => {
    if (width > 900) {
      closeSidebar()
    }
  }, [width])

  return (
    <Root>
      <motion.aside
        initial={{ width: 0 }}
        animate={{
          height: '100vh',
          width: '100vw',
          
        }}
        exit={{
          width: 0,
          height: 0,
          transition: { delay: 0.7, duration: 0.3 }
        }}
      >
        <Header>
          {/* <Logo>
            <img src={logoImage} alt="" />
            <h1><em>Zoro</em></h1>
          </Logo> */}

          <NavButton onClick={closeSidebar}>
            <FontAwesomeIcon icon={faXmark} />
          </NavButton>  
        </Header>

        <motion.div
          className="links-container"
          initial="closed"
          animate="open"
          exit="closed"
          variants={sideVariants}
        >
          {routes
            .filter(route => route.type === 'link')
            .map(({ displayName, link }) => (
            <motion.div
              key={displayName}
              variants={itemVariants}
              className="links"
            >
              <a href={link}>
                <NavButton onClick={closeSidebar}>
                  { displayName }
                </NavButton>
              </a>
            </motion.div>
          ))}
          {routes
            .filter(route => route.type === 'icon')
            .map(({ icon, link }, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="links"
            >
              <a href={link}>
                <NavButton onClick={closeSidebar}>
                  <FontAwesomeIcon icon={icon} />
                </NavButton>
              </a>
            </motion.div>
          ))}
        </motion.div>
        
      </motion.aside>
    </Root>
  )
}

export default Sidebar