import React from 'react'
import styled from 'styled-components'

const Logo = styled.h1`
position: fixed;
top: 2rem;
left: 50%;
transform: translate(-50%, 0);
color: #ffc8dd;
font-family: 'Unica One';
position: fixed;
box-shadow: 0 5px 15px 0 rgba(255, 200, 221, .2);

padding: 5px;


z-index:3;
`

const LogoComponent = (props) => {
    return (
        <Logo >
          Buildmeawebsitefast.com
        </Logo>
    )
}

export default LogoComponent