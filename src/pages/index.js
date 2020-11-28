import React from "react"
import styled, { css } from 'styled-components';
import Layout from '../components/Layout';
import ImagenHotel from '../components/ImagenHotel';
import Inicio from '../components/Inicio';
import HabitacionPreview from '../components/HabitacionPreview';
import Footer from '../components/Footer';

import useHabitaciones from '../hooks/useHabitaciones'

const CardsContainer = styled.div`
  max-width:1920px;
  width:95%;
  margin: 0 auto;
  display:grid;
  /* grid-template-columns:repeat(3, 1fr); */
  column-gap:2rem;

  @media(min-width: 560px){
    grid-template-columns:repeat(2, 1fr);
  }

  @media(min-width: 768px){
    grid-template-columns:repeat(3, 1fr);
  }

  @media(min-width: 1200px){
    grid-template-columns:repeat(4, 1fr);
  }
`

const IndexPage = () => {

  const habitaciones = useHabitaciones()

  return (
    <Layout>
      <ImagenHotel/>
      <Inicio/>

      <h2 css={css`
        text-align:center;
        margin:5rem 0;
      `}>Nuestras habitaciones</h2>

      <CardsContainer>
        {habitaciones.map((habitacion, index) => (
          <HabitacionPreview key={index} habitacion={habitacion} />
        ))}
      </CardsContainer>
      <Footer/>
    </Layout>
  )

}

export default IndexPage;