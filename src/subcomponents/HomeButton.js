import React from "react";
import styled, { keyframes } from 'styled-components';
import coffeIcon from "../assets/icons8-fast-64.png";
import './HomeBtn.css'
import {
    NavLink
  } from "react-router-dom";

const Home = styled.button`
position: fixed;
top: 2rem;
left: 4rem;
transform: translate(-50%, 0);
padding: 0.1rem;
border: 2px solid #D8F3DC;
width: 5rem;
height: 5rem;
display: flex;
justify-content: center;
align-items:center;
z-index:3;
cursor: pointer;

&>*:first-child{
    text-decoration: none;
    color: inherit;
}
`

const HomeButton = () => {
    return (
        <Home className="homebtn">
            <NavLink to="/">
                <img className="coffeIcon" src={coffeIcon} width="100%" height="100%" />
            </NavLink>

        </Home>
    )
}

export default HomeButton