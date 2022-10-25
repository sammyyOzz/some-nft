import styled from 'styled-components';

const Button = styled.button`
  background-color: #402d28;
  color: #f3eadb;
  text-transform: uppercase;
  cursor: pointer;
  padding: 15px;
  border: none;
  border-radius: 4px;
  letter-spacing: 1.5px;
`


const NftButton = ({ children, ...props}) => (
  <Button { ...props }>
    { children }
  </Button>
)

export default NftButton