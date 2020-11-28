import React from 'react'
import styled from 'styled-components';
import Image from 'gatsby-image';
import { Link } from 'gatsby'

const Card = styled.div`
    background-color: #f9f9ff;
    border-radius:.5rem;
    overflow:hidden;
    transition:.3s;
    margin-bottom:2rem;
    
    :hover{
        box-shadow:0 3px 16px rgba(0,0,0,.16);
    }

    .card-content{
        padding:2rem;
    }
`

const Button = styled(Link)`
    background-color: black;
    display:block;
    padding:1rem;
    margin-top:1rem;
    width:100%;
    text-align:center;
    text-decoration:none;
    color:white;
`

const HabitacionPreview = ({ habitacion }) => {

    const {contenido, imagen, titulo, slug} = habitacion;

    return (
        <Card>
            <Image fluid={imagen.fluid}/>
            <div className='card-content'>
                <h2>{titulo}</h2>
                <p>{contenido.substr(0,100)}{contenido.substr(0,100).length < 100 ? null : '...'}</p>
                <Button to={slug}>Ver habitacion</Button>
            </div>
        </Card>
    )
}

export default HabitacionPreview
