import React from "react";
import styled from "styled-components"
import CopyButton from "../CopyButton/CopyButton"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism'

const CheatCardWrapper = styled.div`
max-width: 500px;
padding-top: 25px;
`

const HeadingWrapper = styled.div`

`

const Title = styled.h3`
font-family: Operator Mono, arial, sans-serif;
`

const HeadingLineWrapper = styled.div`
margin: 15px;
width: 100%; 
`
const CodeWrapper = styled.div`
position: relative;

& .ButtonHover{
  display:none;
  position: absolute;
  top: 0;
  right: 0;
}

&:hover .ButtonHover{
  display: block
}
`
const TextWrapper = styled.pre`
font-family: Operator Mono, arial, sans-serif;
background-color:white;
border-radius: 10px;
padding: 20px 20px 0px 20px;
font-weight: 200;
box-shadow: 0 0 20px rgba(105, 105, 105, .3), 0 0px 40px rgba(105, 255, 255, .1);
transition: all 0.3s ease 0s;

:hover {
font-weight: 500 !important;
letter-spacing: 1px;
transition: all 0.3s ease 0s;
}
`
const TitleLineMerge = styled.div`
display:flex;
align-items: stretch;
flex-direction:row;
`
const HeadingLine = styled.hr`
background-image: linear-gradient(to left, rgba(0,255,0,0), rgba(0,255,0,1));
height: 1px;
`
const Highlighter = styled.div`
width: 0px;
`

const CheatCard = ({ cardTitle, cardText }) => {
  return (
    <>
      <CheatCardWrapper>
        <TitleLineMerge>
          <HeadingWrapper>
            <Title>
              {cardTitle}
            </Title>
          </HeadingWrapper>
          <HeadingLineWrapper>
            <HeadingLine />
          </HeadingLineWrapper>
        </TitleLineMerge>

        <CodeWrapper>
          <TextWrapper>
            <CopyButton className="ButtonHover" copyText={cardText}></CopyButton>
            <Highlighter>
              <SyntaxHighlighter language="javascript" style={coy}>
                {cardText}
              </SyntaxHighlighter>
            </Highlighter>
          </TextWrapper>
        </CodeWrapper>

      </CheatCardWrapper>
    </>
  )
}

export default CheatCard
