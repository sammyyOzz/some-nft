export const theme = {
  color: {
    primary: '#916b46',
    secondary: '#402d28',
    background: '#f3eadb',
    htmlBody: '#fff9f0'
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
    background: '#008056'
  }
}

export const color = (name) => theme.color[name]
export const breakpoints = (name) => theme.breakpoints[name]
export const fontSize = (name) => theme.fontSize[name]
export const sidebar = (name) => theme.sidebar[name]