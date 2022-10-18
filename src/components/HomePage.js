import React from "react";
import styled, { keyframes } from 'styled-components';
import HomeButton from "../subcomponents/HomeButton";
import LogoComponent from "../subcomponents/LogoComponent";
import SocialIcons from "../subcomponents/SocailIcons";

const HomeContainer = styled.div`
background: ${props => props.theme.body};
width: 100vw;
height: 100vh;
overflow:hidden;
position: relative;
h2,h3,h4,h5,h6{
  font-family:'Karla', sans-serif ;
  font-weight:500;
}
`

const Container = styled.div`
padding: 2rem;
`


const HomePage = () => {
    return (
        <HomeContainer>
            <Container>
                <HomeButton/>
                <LogoComponent/>
                <SocialIcons/>
            </Container>
        </HomeContainer>
    )
}

export default HomePage