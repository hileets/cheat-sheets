import React from "react";
import styled from "styled-components"
import CopyButton from "../CopyButton/CopyButton"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism'

const CheatCardContainer = styled.div`
display:flex;
flex-flow:column wrap;
width: 600px;
margin-top:10px;
margin-bottom:30px;
`
const HeadingLineWrapper = styled.div`
display:flex;
flex-flow:row wrap;
flex: 0 1 auto;
`
const HeadingDiv = styled.div`
flex: 1 1 auto;
`
const CheatCardHeading = styled.h3``

const HeadingLineDiv = styled.div`
flex: 15 1 auto;
`
const HeadingLine = styled.hr`
background-image: linear-gradient(to left, rgba(0,255,0,0), rgba(0,255,0,1));
height: 1px;
margin-top: 20px;
`
const CodeDiv = styled.div`
flex: 0 1 auto;
box-shadow: 0 0 20px rgba(105, 105, 105, .3), 0 0px 40px rgba(105, 255, 255, .1);
`
const CodeWrapper = styled.pre`
position: relative;
flex: 0 1 auto;
background-color:white;
transition: all 0.5s ease 0s;

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
width: 100px;
`
const CheatCard = ({ cardTitle, cardText }) => {
  return (
    <>
      <CheatCardContainer>
        <HeadingLineWrapper>
          <HeadingDiv>
            <CheatCardHeading>
              {cardTitle}
            </CheatCardHeading>
          </HeadingDiv>
          <HeadingLineDiv>
            <HeadingLine />
          </HeadingLineDiv>
        </HeadingLineWrapper>
        <CodeDiv>
          <CodeWrapper>
            <CopyButton className="Button" copyText={cardText}></CopyButton>
            <HighLighter>
              <SyntaxHighlighter language="javascript" style={coy} >
                {cardText}
              </SyntaxHighlighter>
            </HighLighter>
          </CodeWrapper>
        </CodeDiv>
      </CheatCardContainer>
    </>
  )
}

export default CheatCard
