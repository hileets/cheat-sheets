import React from "react";
import styled from "styled-components"
import CopyButton from "../CopyButton/CopyButton"
import SyntaxHighlighter from 'react-syntax-highlighter'
import { nord } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const CheatCardContainer = styled.div`
display:flex;
flex-flow:column wrap;
width: 400px;
margin-bottom:30px;
justify-content:flex-start;
padding: 0px;
transition:all 0.3s ease 0s;
`
const HeadingWrapper = styled.div`
display:flex;
flex-flow:row wrap;
flex: 0 1 auto;
`
const CheatCardHeading = styled.h3`
flex: 1 1 auto;
color:#8ABCBB;
`
const CodeWrapper = styled.pre`
position: relative;
flex: 0 1 auto;
background-color:#2E3440;
padding-bottom:0px;
box-shadow:0 0 20px rgba(59, 66, 82, .6), 0 0px 40px rgba(59, 66, 82, .6);;

:hover {
  box-shadow: 0 0 20px rgba(105, 105, 105, .3), 0 0px 40px rgba(105, 255, 255, .1);
  transition:all 0.3s ease 0s;
  border: 1px solid #8ABCBB;
 }
 & .Button{
   display:none;
   position: absolute;
   margin-top:5px;
   margin-right:5px;
   top: 0;
   right: 0;
 }

 &:hover .Button{
   display: block
 }
`
const HighLighter = styled.div`
/* width: 0px; */
/* flex: 0 1 auto; */
/* padding:0px; */
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
        {/* <HighLighter> */}
        <SyntaxHighlighter language="javascript" style={nord} >
          {cardText}
        </SyntaxHighlighter>
        {/* </HighLighter> */}
      </CodeWrapper>

    </CheatCardContainer >
  )
}

export default CheatCard
