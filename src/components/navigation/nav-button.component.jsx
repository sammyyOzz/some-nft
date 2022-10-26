import styled from 'styled-components'
import { color } from '../../theme'

const StyledNavButton = styled.button`
  background-color: ${color('background')};
  border: 1px solid transparent;
  color: ${color('primary')};
  text-transform: uppercase;
  padding: 7px 12px;
  border-radius: 3px;
  font-weight: bold;
  margin-right: 15px;

  &:hover {
    background-color: white;
    cursor: pointer;
    transition: 200ms linear all;
  }
`

const NavButton = ({ children, ...props }) => (
  <StyledNavButton { ...props }>
    { children }
  </StyledNavButton>
)

export default NavButton