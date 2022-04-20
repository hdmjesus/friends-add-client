export const breakpoints = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '500px',
  tabletS: '640px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1224px',
  desktop: '2560px'
}

export const devices = {
  mobileS: `(min-width:${breakpoints.mobileS})`,
  mobileM: `(min-width:${breakpoints.mobileM})`,
  mobileL: `(min-width:${breakpoints.mobileL})`,
  tabletS: `(min-width:${breakpoints.tabletS})`,
  tabletMax: `(max-width:${breakpoints.tablet})`,
  tablet: `(min-width:${breakpoints.tablet})`,
  laptop: `(min-width:${breakpoints.laptop})`,
  laptopL: `(min-width:${breakpoints.laptopL})`,
  desktop: `(min-width:${breakpoints.desktop})`,
  desktopL: `(min-width:${breakpoints.desktop})`
}

export const colors = {
  primary: '#15171C',
  secondary: '#262a36',
  white: '#fffdfd',
  black: '#0A0A0A',
  gray: '#333',
  lighGray: '#787d8f',
  mediumGray: '#353b4b',
  red: 'rgba(229, 62, 62, .5)',
  facebook: '#3A579A',
  twitter: '#00A6EA',
  green: 'rgba(36, 78, 120, .5)',
  yellow: '#ffca37'
}
