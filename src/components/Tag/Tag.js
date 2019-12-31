import React from "react"
import styled from "styled-components"

const TagTitle = styled.div`
display:flex;
flex-flow: row wrap;
`
const TagName = styled.h1`
font-family: Operator Mono, arial, sans-serif;
flex: 1 1 auto;
color: whitesmoke;
`
const TagLine = styled.hr`
/* background-image: linear-gradient(to left, rgba(0,255,0,0), rgba(0,255,0,1)); */
border-top: 1px dotted;
flex: 1 1 auto;
height: 1px;
margin-top: 15px;
`

const Tag = ({ tagTitle }) => {
    return (
        <>
            <TagTitle>
                <TagLine />
                <TagName>
                    ~{tagTitle}
                </TagName>
            </TagTitle>
        </>
    )
}

export default Tag