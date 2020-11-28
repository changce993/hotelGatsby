import React from 'react'
import { graphql } from 'gatsby';
import Imagen from 'gatsby-image';
import Layout from './Layout';
import styled, {css} from 'styled-components';

export const query = graphql`
    query($slug: String!) {
        allDatoCmsHabitacion(filter: { slug: {eq: $slug}}){
            nodes {
                titulo
                contenido
                imagen {
                    fluid (maxWidth: 1200) {
                        ...GatsbyDatoCmsFluid
                    }
                }
            }
        }
    }
`

const Main = styled.main`
    display:grid;

    .content{
        margin-top:10rem;
        padding:2rem;
        overflow-y:scroll;
    }

    @media(min-width:768px){
        grid-template-columns: 2fr 1fr;
        column-gap:2rem;

        .content{
            height:calc(100vh - 15rem);
        }
    }
`

const Image = styled(Imagen)`
    height:40vh;
    object-fit:cover;

    @media(min-width:768px){
        height:100vh;
    }
`

const HabitacionTemplate = ({ data: { allDatoCmsHabitacion: { nodes } } } ) => {

    const {titulo, contenido, imagen} = nodes[0];

    return (
        <Layout right='black'>
            <Main>

                <div css={css`
                    overflow:hidden;
                `}>
                    <div data-aos='zoom-out'>
                        <Image  fluid={imagen.fluid}/>
                    </div>
                </div>

                <div className='content'>
                    <h1 data-aos='fade-up' data-aos-delay='100'>{titulo}</h1>
                    <p data-aos='fade-up' data-aos-delay='200'>{contenido}</p>
                </div>
            </Main>
        </Layout>
    )
}

export default HabitacionTemplate