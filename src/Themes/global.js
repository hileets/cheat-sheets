import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  .mainHeading{
    color: ${({ theme }) => theme.mainHeading};
    /* color: ${({ theme }) => theme.text}; */
    /* transition: all 5s; */
  }

  .subHeading{
    color: ${({ theme }) => theme.subHeading};
  }
  `