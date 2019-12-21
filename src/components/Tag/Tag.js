import React from "react"
import styled from "styled-components"

const TagTitle = styled.h1`
font-family: Operator Mono, arial, sans-serif;
`

const Tag = ({ tagTitle }) => {
    return (
        <>
            <TagTitle>
                ~{tagTitle}
            </TagTitle>
        </>
    )
}

export default Tag