import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  .mainHeading{
    color: ${({ theme }) => theme.mainHeadingColor};
    background-color: ${({ theme }) => theme.mainHeadingBackgroundColor};
  }

  .subHeading{
    color: ${({ theme }) => theme.subHeadingColor};
  }

  .layoutContainer{
    background-color: ${({ theme }) => theme.layoutContainerColor};
  }

  .toggleButtonWrapper{
    background-color: ${({ theme }) => theme.toggleButtonWrapperColor};
  }

  .tagName{
    color:${({ theme }) => theme.tagNameColor};
  }

  .tagLine{
    color: ${({ theme }) => theme.tagLineColor};
    background-color: ${({ theme }) => theme.tagLineBackgroundColor};
  }
  `