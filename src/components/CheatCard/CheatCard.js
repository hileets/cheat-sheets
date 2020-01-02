import React from "react"
import styled from "styled-components"
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { CopyAlt } from 'styled-icons/boxicons-solid/CopyAlt'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { nord } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const CheatCardContainer = styled.div`
display:flex;
flex-flow:column wrap;
width: 400px;
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
font-weight: 400;
font-family: 'Work Sans', sans-serif;
font-size: 20px;
color:#8FBCBB;
`
const CodeWrapper = styled.pre`
position: relative;
flex: 0 1 auto;
padding-bottom: 0px;
background-color:#2E3440;
box-shadow: 0px 0px 4px rgba(105, 105, 105, .5), 0px 0px 1px rgba(105, 255, 255, .5);
border: 1.5px solid transparent;
border-radius:5px;
transition:1s;
:hover {
  border: 1.5px solid #729AC1;
  transition:1s;
 }

 & .Button{
   display:block;
   position: absolute;
   margin-top:0px;
   margin-right:0px;
   top: 0;
   right: 0;
   transition:0.5s;  
   border-radius:0px 0px 0px 5px ; 
   padding:5px;
   color:#8FBCBB;
   :hover{
   background-color:#8FBCBB;
   border-radius:0px 0px 0px 5px ;     
   transition:0.5s;
   }
 }
`
const CopyIcon = styled(CopyAlt)`
:hover{
  color:#3B4252;
}
`
const Footer = styled.div`
/* margin-top:-20px; */
/* padding:20px; */
border: 1px solid white;
`

const CheatCard = ({ cardTitle, cardText, className, ...props }) => {
  return (
    <CheatCardContainer className={className}>
      <HeadingWrapper>
        <CheatCardHeading>
          {cardTitle}
        </CheatCardHeading>
      </HeadingWrapper>

      <CodeWrapper>
        <CopyToClipboard text={cardText}{...props}>
          <CopyIcon className="Button" size="35" />
        </CopyToClipboard>
        <SyntaxHighlighter language="javascript" style={nord} >
          {cardText}
        </SyntaxHighlighter>
      </CodeWrapper>


    </CheatCardContainer >
  )
}

export default CheatCard
