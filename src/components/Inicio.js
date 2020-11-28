import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import styled, { css } from 'styled-components';

const TextInicio = styled.div`
    padding:5rem;
    max-width:1920px;
    width:95%;
    max-width:0 auto;

    @media(min-width: 768px){
        display:grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap:5rem;
    }

    p{
        line-height:2;
    }
`

const Inicio = () => {

    const informacion = useStaticQuery(graphql`
        query {
            allDatoCmsPagina(filter: {slug: {eq: "inicio"}}){
                nodes {
                    titulo
                    contenido
                    imagen { fluid { ...GatsbyDatoCmsFluid } }
                }
            }
        }  
    `)

    const {titulo, imagen, contenido} = informacion.allDatoCmsPagina.nodes[0];

    return ( 
        <>
            <h2
                data-aos='fade-up'
                css={css`
                    text-align:center;
                    margin-top:5rem;
                `}
            >{titulo}</h2>
            <TextInicio>
                <p data-aos='fade-up'>{contenido}</p>
                <div data-aos='fade-up'>
                    <Image fluid={imagen.fluid} />
                </div>
            </TextInicio>
        </>
     );
}
 
export default Inicio;