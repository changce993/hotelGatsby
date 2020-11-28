import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from 'styled-components';

const ImageBackground = styled(BackgroundImage)`
    height:90vh;
`

const TextoImagen = styled.div`
    background-image: linear-gradient(to bottom, rgba(0,0,0,.4), rgba(0,0,0,.9));
    height:100%;
    color:white;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    h1{
        font-size:4rem;
        margin:0;

        @media(min-width: 768px){
            font-size:6rem;
        }
    }

    p{
        font-size:2rem;
        @media(min-width: 768px){
            font-size:3rem;
        }
    }
`

const ImagenHotel = () => {

    const { image } = useStaticQuery(graphql`
        query {
            image: file( relativePath: { eq: "8.jpg"}){
                sharp: childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `)

    return (
        <ImageBackground data-aos='zoom-out-down' tag='section' fluid={image.sharp.fluid} fadeIn='soft'>
            <TextoImagen>
                <h1 data-aos='fade-up'>Bienvenido a Hotel Gatsby</h1>
                <p data-aos-delay="200" data-aos='fade-up'>El mejor hotel para tus vacaciones</p>
            </TextoImagen>
        </ImageBackground>
    )
}

export default ImagenHotel
