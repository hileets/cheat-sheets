import React from 'react';
import styled from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Copy } from 'styled-icons/feather/Copy';

const ButtonWrapper = styled.div`  
color: #8ABCBB ;
padding: 0px;
margin-right: 15px;
margin-top: 15px;
/* border-radius: 50px; */
transition: all 0.3s ease 0s;

:hover {
color: #8ABCBB ;
font-weight: 700 !important;
letter-spacing: 3px;
/* border: 1px solid #00E676; */
background: none;
box-shadow: 0 0 10px rgba(105, 105, 105, .3), 0 0px 10px rgba(105, 255, 255, .1);
transition: all 0.3s ease 0s;
}

:active{
    transform:translateY(10px) translateX(-10px)
}
`
const CopyIcon = styled(Copy)`
color: #8ABCBB;
`

const CopyButton = ({ copyText, ...props }) => {
    return (
        <>
            <CopyToClipboard text={copyText} {...props}>
                <ButtonWrapper>
                    <CopyIcon size="24" />
                </ButtonWrapper>
            </CopyToClipboard>
        </>
    )
}

export default CopyButton;