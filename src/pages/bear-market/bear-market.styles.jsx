import styled from 'styled-components';

export const Cover = styled.div`
  height: 85vh;
  margin-top: -100px;
  background-image: url("https://assets-global.website-files.com/622eead55797fc2865c24818/62fcee32a353c58760d93b70_OBM-home.webp");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  gap: 1rem 3rem;
  margin: 50px 0;
`

export const Content = styled.div`
  width: 80%;
  margin: 0 auto;
`