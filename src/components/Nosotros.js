import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import styled, {css} from 'styled-components';

const Container = styled.div`
    max-width:1920px;
    height:100vh;
    margin:0 auto;
    background-color: rgba(0,0,0,.5);
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    color:white;

    h2{
        font-size:5rem;
    }

    p{
        max-width:960px;
        text-align:center;
        line-height:2;
    }
`

const Nosotros = () => {

    const resultado = useStaticQuery(graphql`
        query {
            allDatoCmsPagina(filter: {slug: {eq: "nosotros"}}){
                nodes {
                    titulo
                    contenido
                    imagen { fluid( maxWidth: 1200 ) { ...GatsbyDatoCmsFluid } }
                }
            }
        }
    `)

    const { titulo, contenido, imagen } = resultado.allDatoCmsPagina.nodes[0];

    return (
        <>

            <div data-aos='zoom-out' css={css`
                background-image: url(${imagen.fluid.src});
                background-size: cover;
            `}>
                <Container>
                    <h2 data-aos='fade-up'>{titulo}</h2>
                    <p
                        data-aos='fade-up'
                        data-aos-delay="300"
                    >{contenido}</p>
                </Container>
            </div>
        </>
    )
}

export default Nosotros
