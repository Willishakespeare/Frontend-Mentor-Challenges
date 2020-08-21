import React, { useState } from 'react';
import styled from '@Styles/styled';
import Head from 'next/head';
import PrincipalTheme from '@Styles/theme';
import ShareIcon from '@Public/article-preview-component/icon-share.svg';
import FacebookIcon from '@Public/article-preview-component/icon-facebook.svg';
import TwitterIcon from '@Public/article-preview-component/icon-twitter.svg';
import PinterestIcon from '@Public/article-preview-component/icon-pinterest.svg';

const StyledContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.articlePreviewComponent.Colors.LightGrayishBlue};
`;
const StyledTag = styled.div`
  width: max-content;
  height: max-content;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const StyledImage = styled.div`
  width: 285px;
  height: 280px;
  border-radius: 10px 0px 0px 10px;
  background: url('/article-preview-component/drawers.jpg') left/cover;
  @media (max-width: 768px) {
    border-radius: 10px 10px 0px 0px;
    width: 327px;
    height: 200px;
  }
`;
const StyledTagContainer = styled.div`
  width: 445px;
  height: 280px;
  padding: 32px 40px 32px 40px;
  border-radius: 0px 10px 10px 0px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    justify-content: flex-start;
    padding: 30px 30px 0px 40px;
    border-radius: 0px 0px 10px 10px;
    width: 327px;
    height: 304px;
  }
`;

const StyledTitle = styled.h3`
  width: 365px;
  height: 80px;
  margin-bottom: 18px;
  color: ${({ theme }) => theme.articlePreviewComponent.Colors.VeryDarkGrayishBlue};
  font-family: ${({ theme }) => theme.articlePreviewComponent.Fonts.FontFamily};
  font-weight: ${({ theme }) => theme.articlePreviewComponent.Fonts.Weights[1]};
  font-size: ${({ theme }) => theme.articlePreviewComponent.Fonts.FontSize[2]};
  @media (max-width: 768px) {
    width: 100%;
    height: 66px;
    font-size: ${({ theme }) => theme.articlePreviewComponent.Fonts.FontSize[1]};
  }
`;
const StyledParagraph = styled.h4`
  width: 365px;
  height: 60px;
  margin-bottom: 18px;
  color: ${({ theme }) => theme.articlePreviewComponent.Colors.DesaturatedDark};
  font-family: ${({ theme }) => theme.articlePreviewComponent.Fonts.FontFamily};
  font-weight: ${({ theme }) => theme.articlePreviewComponent.Fonts.Weights[0]};
  font-size: ${({ theme }) => theme.articlePreviewComponent.Fonts.FontSize[0]};
  @media (max-width: 768px) {
    width: 100%;
    height: 95px;
    margin-bottom: 35px;
  }
`;
const StyledUserContainer = styled.div`
  display: flex;
  width: 365px;
  height: 40px;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 18px;
  }
`;
const StyledUserInfoContainer = styled.div`
  display: flex;
`;
const StyledUserImage = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 20px;
  border-radius: 50px;
  background: url('/article-preview-component/avatar-michelle.jpg') center/cover;
`;
const StyledUserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledUserInfoName = styled.h4`
  color: ${({ theme }) => theme.articlePreviewComponent.Colors.VeryDarkGrayishBlue};
  font-family: ${({ theme }) => theme.articlePreviewComponent.Fonts.FontFamily};
  font-weight: ${({ theme }) => theme.articlePreviewComponent.Fonts.Weights[1]};
  font-size: ${({ theme }) => theme.articlePreviewComponent.Fonts.FontSize[0]};
`;
const StyledUserInfoDate = styled.h4`
  color: ${({ theme }) => theme.articlePreviewComponent.Colors.DesaturatedDark};
  font-family: ${({ theme }) => theme.articlePreviewComponent.Fonts.FontFamily};
  font-weight: ${({ theme }) => theme.articlePreviewComponent.Fonts.Weights[0]};
  font-size: ${({ theme }) => theme.articlePreviewComponent.Fonts.FontSize[0]};
`;
const StyledUserShared = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.articlePreviewComponent.Colors.LightGrayishBlue};
  transition: all 0.3s ease;
  :hover {
    background-color: ${({ theme }) => theme.articlePreviewComponent.Colors.DesaturatedDark};
    svg {
      path {
        fill: white;
      }
    }
    cursor: pointer;
  }
  svg {
    transform: translateY(-1px);
    path {
      fill: ${({ theme }) => theme.articlePreviewComponent.Colors.DesaturatedDark};
    }
  }
`;

const StyledUserSharedContainer = styled.div`
  z-index: 1;
  width: 327px;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  border-radius: 0px 0px 10px 10px;
  background-color: ${({ theme }) => theme.articlePreviewComponent.Colors.VeryDarkGrayishBlue};
  div:nth-of-type(2) {
    display: flex;
  }

  transform: translateY(-5px) translateX(-40px);
  @media (min-width: 768px) {
    border-radius: 10px;
    width: 250px;
    height: 55px;
    transform: translateY(-70px) translateX(215px);
    div:nth-of-type(2) {
      display: none;
    }
    span:after {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      border-width: 10px;
      border-style: solid;
      border-color: ${({ theme }) => theme.articlePreviewComponent.Colors.VeryDarkGrayishBlue} transparent
        transparent transparent;
      top: 54px;
      left: 120px;
    }
  }
`;
const StyledUserSharedButton = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.articlePreviewComponent.Colors.DesaturatedDark};
  transition: all 0.3s ease;
  svg {
    path {
      fill: white;
    }
  }
`;

const StyledUserSharedButtonTitle = styled.h4`
  color: ${({ theme }) => theme.articlePreviewComponent.Colors.LightGrayishBlue};
  font-family: ${({ theme }) => theme.articlePreviewComponent.Fonts.FontFamily};
  font-weight: ${({ theme }) => theme.articlePreviewComponent.Fonts.Weights[0]};
  font-size: ${({ theme }) => theme.articlePreviewComponent.Fonts.FontSize[0]};
  letter-spacing: 5px;
`;
const StyledUserSharedButtonContainer = styled.div`
  cursor: pointer;
  margin-left: 25px;
  margin-right: 20px;
  svg {
    margin-right: 10px;
  }
  svg:hover {
    path {
      fill: ${({ theme }) => theme.articlePreviewComponent.Colors.DesaturatedDark};
    }
  }
  svg {
    path {
      fill: white;
    }
  }
`;
const Index: React.FC = () => {
  const [SharedContainer, setSharedContainer] = useState(false);
  return (
    <StyledContainer>
      <Head>
        <title>Article Preview Component</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href={PrincipalTheme.articlePreviewComponent.Fonts.FontSource} rel="stylesheet" />
      </Head>
      <StyledTag>
        <StyledImage />
        <StyledTagContainer>
          <StyledTitle>
            Shift the overall look and feel by adding these wonderful touches to furniture in your home
          </StyledTitle>
          <StyledParagraph>
            Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and
            uninviting. I’ve got some simple tips to help you make any room feel complete.
          </StyledParagraph>
          <StyledUserContainer>
            <StyledUserInfoContainer>
              <StyledUserImage />
              <StyledUserInfo>
                <StyledUserInfoName>Michelle Appleton</StyledUserInfoName>
                <StyledUserInfoDate>28 Jun 2020</StyledUserInfoDate>
              </StyledUserInfo>
            </StyledUserInfoContainer>
            <StyledUserShared
              onClick={() => {
                setSharedContainer(!SharedContainer);
              }}
            >
              <ShareIcon />
            </StyledUserShared>
            {SharedContainer ? (
              <StyledUserSharedContainer>
                <StyledUserSharedButtonTitle>SHARE</StyledUserSharedButtonTitle>
                <StyledUserSharedButtonContainer>
                  <FacebookIcon />
                  <TwitterIcon />
                  <PinterestIcon />
                </StyledUserSharedButtonContainer>
                <StyledUserSharedButton
                  onClick={() => {
                    setSharedContainer(!SharedContainer);
                  }}
                >
                  <ShareIcon />
                </StyledUserSharedButton>
                <span />
              </StyledUserSharedContainer>
            ) : null}
          </StyledUserContainer>
        </StyledTagContainer>
      </StyledTag>
    </StyledContainer>
  );
};

export default Index;
