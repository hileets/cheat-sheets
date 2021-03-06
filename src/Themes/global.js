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

  .cheatCardHeading{
    color: ${({ theme }) => theme.cheatCardHeadingColor};
  }

  .codeWrapper{
    background-color: ${({ theme }) => theme.codeWrapperBackgroundColor};
    :hover {
    border: ${({ theme }) => theme.codeWrapperBorder};
    transition:1s;
    }
  }
  .icon{
    color: ${({ theme }) => theme.iconColor};
    :hover{
    color:${({ theme }) => theme.iconHoverColor};
    background-color: ${({ theme }) => theme.iconHoverBackgroundColor};
    border-radius: ${({ theme }) => theme.iconBorderRadius};
    transition: ${({ theme }) => theme.iconTransition};
   }
  }
  `