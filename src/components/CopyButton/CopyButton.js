import React from 'react';
import styled from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { CopyAlt } from 'styled-icons/boxicons-solid/CopyAlt';

const IconWrapper = styled.div`
padding:3px;
`
const CopyIcon = styled(CopyAlt)`
color: #2E3440;
font-weight:bold;
    :active{
    transform: translate3d(-1px, 1px, -1px);
}
`
const CopyButton = ({ copyText, ...props }) => {
    return (
        <>
            <CopyToClipboard text={copyText} {...props}>
                <IconWrapper>
                    <CopyIcon size="24" />
                </IconWrapper>
            </CopyToClipboard>
        </>
    )
}

export default CopyButton;