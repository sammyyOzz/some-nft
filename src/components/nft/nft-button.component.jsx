import styled from 'styled-components';
import { color } from '../../theme';

const Button = styled.button`
  background-color: ${color('secondary')};
  color: ${color('background')};
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