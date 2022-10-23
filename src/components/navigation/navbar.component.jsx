import NavButton from './nav-button.component'
import { 
  Root,
  Logo,
  LinksContainer
} from './navbar.styles'
import routes from '../../routes'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


function Navbar() {
  return (
    <Root>
      <Logo>
        <h1><em>Zoro</em></h1>
      </Logo>

      <LinksContainer>
        {routes
          .filter(route => route.type === 'link')
          .map(({ displayName, path}) => (
          <Link to={path}>
            <NavButton>{displayName}</NavButton>
          </Link>
        ))}
        {routes
          .filter(route => route.type === 'icon')
          .map(({ icon, link }) => (
          <a href={link}>
            <NavButton>
              <FontAwesomeIcon icon={icon} />
            </NavButton>
          </a>
        ))}
        <NavButton id="menu-bar">
          <FontAwesomeIcon icon={faBars} />
        </NavButton>
      </LinksContainer>
    </Root>
  )
}

export default Navbar