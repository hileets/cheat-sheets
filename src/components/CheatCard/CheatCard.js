import React, { useContext } from "react"
import styled, { ThemeContext } from "styled-components"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { CopyAlt } from "styled-icons/boxicons-solid/CopyAlt"
// import SyntaxHighlighter from 'react-syntax-highlighter'
import SyntaxHighlighter from "react-syntax-highlighter"
import { ThemeProvider } from "styled-components"
import { foundation } from "react-syntax-highlighter/dist/esm/styles/hljs"
import { nord } from "react-syntax-highlighter/dist/esm/styles/hljs"

const CheatCardContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 400px;
  justify-content: flex-start;
  padding: 0px;
`
const HeadingWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex: 0 1 auto;
`
const CheatCardHeading = styled.h3`
  flex: 1 1 auto;
  font-weight: 400;
  font-family: "Work Sans", sans-serif;
  font-size: 20px;
`
const CodeWrapper = styled.pre`
  position: relative;
  flex: 0 1 auto;
  padding-bottom: 0px;
  box-shadow: 0px 0px 4px rgba(105, 105, 105, 0.5),
    0px 0px 1px rgba(105, 255, 255, 0.5);
  border: 1.5px solid transparent;
  border-radius: 5px;

  & .icon {
    display: block;
    position: absolute;
    margin-top: 0px;
    margin-right: 0px;
    top: 0;
    right: 0;
    transition: 0.5s;
    border-radius: 0px 0px 0px 5px;
    padding: 5px;
  }
`
const CopyIcon = styled(CopyAlt)``

const DescriptionFooter = styled.div`
  /* margin-top:-20px; */
  /* padding:20px; */
  border: 1px solid white;
`

const CheatCard = ({ cardTitle, cardText, className }) => {
  const styles = useContext(ThemeContext)
  return (
    <CheatCardContainer className={className}>
      <HeadingWrapper>
        <CheatCardHeading className="cheatCardHeading">
          {cardTitle}
        </CheatCardHeading>
      </HeadingWrapper>
      <CodeWrapper className="codeWrapper">
        <CopyToClipboard text={cardText}>
          <CopyIcon className="icon" size="35" />
        </CopyToClipboard>
        <SyntaxHighlighter
          className="syntaxHighlighter"
          language="javascript"
          style={styles.themeType === "dark" ? nord : foundation}
          customStyle={{ background: styles.layoutContainerColor }}
        >
          {cardText}
        </SyntaxHighlighter>
      </CodeWrapper>
    </CheatCardContainer>
  )
}

export default CheatCard
