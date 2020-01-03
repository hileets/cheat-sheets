import React from "react"
import styled from "styled-components"

const TagTitle = styled.div`
display:flex;
flex-flow: row wrap;
margin-top: 30px;
margin-bottom: 10px;
`
const TagName = styled.h1`
font-family: 'Work Sans', sans-serif;
flex: 1 1 auto;
font-size: 50px;
font-weight: 500;
padding-left: 10px;
`
const TagLine = styled.hr`
border-top: 5px dotted;
flex: 35 1 auto;
height: 1px;
margin-top: 25px;

background-color: #2E3440;
`

const Tag = ({ tagTitle }) => {
    return (
        <>
            <TagTitle>
                <TagLine className='tagLine' />
                <TagName className='tagName'>
                    {tagTitle}
                </TagName>
            </TagTitle>
        </>
    )
}

export default Tag