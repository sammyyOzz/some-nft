export const theme = {
  color: {
    primary: '#250330',
    secondary: '#250d2d',
    background: '#f5d7c6',
    htmlBody: '#f3e5e2'
  },
  breakpoints: {
    mobile: '600px',
    tablet: '720px',
    desktop: '900px',
    largeDesktop: '1200px'
  },
  fontSize: {
    regular: '18px',
    large: '37px'
  },
  sidebar: {
    background: '#f88fea96'
  }
}

export const color = (name) => theme.color[name]
export const breakpoints = (name) => theme.breakpoints[name]
export const fontSize = (name) => theme.fontSize[name]
export const sidebar = (name) => theme.sidebar[name]