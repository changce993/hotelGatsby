import React from 'react'
import styled from 'styled-components';

const Container = styled.footer`
    max-width:1920px;
    margin:0 auto;
    padding:2rem 5rem;
    background-color: #070d10;
    color:white;
    display:flex;
    justify-content:space-between;
    align-items:center;
`

const Footer = () => {

    const year = new Date().getFullYear()

    return (
        <Container>
            <p>Hotel Gatsby © {year}</p>
            <p>Made by Ricardo Chance</p>
        </Container>
    )
}

export default Footer
