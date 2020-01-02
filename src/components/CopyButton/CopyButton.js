import React from 'react';
import styled from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Copy } from 'styled-icons/feather/Copy';

const IconWrapper = styled.div`
padding:3px;
`
const CopyIcon = styled(Copy)`
color: white;
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