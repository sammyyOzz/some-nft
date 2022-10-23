import styled from 'styled-components'

const StyledNavButton = styled.button`
  background-color: #f3eadb;
  border: 1px solid transparent;
  color: #916b46;
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