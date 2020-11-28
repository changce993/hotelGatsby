import { graphql, useStaticQuery } from 'gatsby';

const useHabitaciones = () => {

    const data = useStaticQuery(graphql`
        query {
            allDatoCmsHabitacion{
                nodes {
                    titulo
                    contenido
                    slug
                    imagen {
                        fluid (maxWidth: 1200) {
                            ...GatsbyDatoCmsFluid
                        }
                    }
                }
            }
        }
    `)

    return data.allDatoCmsHabitacion.nodes.map((habitacion, index) => ({
        titulo: habitacion.titulo,
        contenido: habitacion.contenido,
        slug: habitacion.slug,
        imagen: habitacion.imagen,
        id: habitacion.id
    }))

}
 
export default useHabitaciones;