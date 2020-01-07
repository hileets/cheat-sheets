import React from "react"
import styled from "styled-components"

const TagTitle = styled.div`
display:flex;
flex-flow: row wrap;
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
flex: 40 1 auto;
max-width:100%;
height: 1px;
margin-top: 25px;
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