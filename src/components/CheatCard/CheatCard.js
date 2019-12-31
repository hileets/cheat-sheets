import React from "react";
import styled from "styled-components"
import CopyButton from "../CopyButton/CopyButton"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism'

const CheatCardContainer = styled.div`
display:flex;
flex-flow:column wrap;
width: 400px;
margin-bottom:30px;
justify-content:flex-start;
padding: 0px;
`
const HeadingWrapper = styled.div`
display:flex;
flex-flow:row wrap;
flex: 0 1 auto;
`
const CheatCardHeading = styled.h3`
flex: 1 1 auto;
color:whitesmoke;
`

const CodeWrapper = styled.pre`
position: relative;
flex: 0 1 auto;
background-color:#3B4252;
transition: all 0.5s ease 0s;
/* box-shadow: 0 0 20px rgba(105, 105, 105, .3), 0 0px 40px rgba(105, 255, 255, .1); */
padding-bottom:0px;

:hover {
 letter-spacing: 0.5px;
 transition: all 0.5s ease 0s;
 }
 & .Button{
   display:none;
   position: absolute;
   top: 0;
   right: 0;
 }

 &:hover .Button{
   display: block
 }
`
const HighLighter = styled.div`
width: 0px;
flex: 0 1 auto;
padding:0px;
/* color:#3B4252; */
`
const CheatCard = ({ cardTitle, cardText, className }) => {
  return (
    <CheatCardContainer className={className}>
      <HeadingWrapper>

        <CheatCardHeading>
          {cardTitle}
        </CheatCardHeading>

      </HeadingWrapper>
      <CodeWrapper>
        <CopyButton className="Button" copyText={cardText}></CopyButton>
        <HighLighter>
          <SyntaxHighlighter language="javascript" style={coy} >
            {cardText}
          </SyntaxHighlighter>
        </HighLighter>
      </CodeWrapper>

    </CheatCardContainer >
  )
}

export default CheatCard
