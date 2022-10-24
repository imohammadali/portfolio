import mixins from './mixins';

const theme = {
  light: {
    bp: {
      mobileS: `max-width: 330px`,
      mobileM: `max-width: 400px`,
      mobileL: `max-width: 480px`,
      tabletS: `max-width: 600px`,
      tabletL: `max-width: 768px`,
      desktopXS: `max-width: 900px`,
      desktopS: `max-width: 1080px`,
      desktopM: `max-width: 1200px`,
      desktopL: `max-width: 1400px`,
    },
    body: '#fff',
    text: '#0a192f',
    navBackground: '#fff',
    navColor: '#8892b0',
    headingsColor: '#495670',
    mixins,
  },
  dark: {
    bp: {
      mobileS: `max-width: 330px`,
      mobileM: `max-width: 400px`,
      mobileL: `max-width: 480px`,
      tabletS: `max-width: 600px`,
      tabletL: `max-width: 768px`,
      desktopXS: `max-width: 900px`,
      desktopS: `max-width: 1080px`,
      desktopM: `max-width: 1200px`,
      desktopL: `max-width: 1400px`,
    },
    body: '#0a192f',
    text: '#fff',
    navBackground: 'rgba(10, 25, 47, 0.85)',
    navColor: '#ccd6f6',
    headingsColor: '#ccd6f6',
    mixins,
  },
};
export default theme;
