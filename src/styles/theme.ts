import { Theme } from './styled';

const theme: Theme = {
  articlePreviewComponent: {
    Layout: {
      Desktop: '1440px',
      Mobile: '375px'
    },
    Colors: {
      VeryDarkGrayishBlue: 'hsl(217, 19%, 35%)',
      DesaturatedDark: 'hsl(214, 17%, 51%)',
      GrayishBlue: 'hsl(212, 23%, 69%)',
      LightGrayishBlue: 'hsl(210, 46%, 95%)'
    },
    Fonts: {
      FontSource: 'https://fonts.googleapis.com/css2?family=Manrope:wght@500;700&display=swap',
      FontFamily: `'Manrope', sans-serif`,
      FontSize: ['13px', '16px', '20px'],
      Weights: ['500', '700']
    }
  }
};

export default theme;
