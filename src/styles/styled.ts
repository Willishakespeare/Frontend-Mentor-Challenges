import styled, { CreateStyled } from '@emotion/styled';

interface IarticlePreviewComponent {
  Layout: {
    Mobile: string;
    Desktop: string;
  };
  Colors: {
    VeryDarkGrayishBlue: string;
    DesaturatedDark: string;
    GrayishBlue: string;
    LightGrayishBlue: string;
  };
  Fonts: {
    FontSource: string;
    FontFamily: string;
    FontSize: [string, string, string];
    Weights: [string, string];
  };
}
export type Theme = {
  articlePreviewComponent: IarticlePreviewComponent;
};

export default styled as CreateStyled<Theme>;
