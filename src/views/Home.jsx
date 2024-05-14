import React from 'react'
import Article from '../components/common/Article'


const articles = [
    {
      title: 'Innovación y Tradición en Educación Superior',
      content: '"Bullworth College se enorgullece de combinar lo mejor de la tradición académica con una vanguardista aproximación a la enseñanza y el aprendizaje. Situados en el corazón de Quito, ofrecemos un entorno diverso y dinámico donde los estudiantes pueden prosperar. Con programas que van desde las humanidades hasta la tecnología avanzada, cada curso está diseñado para desafiar, inspirar y preparar a los estudiantes para el éxito en un mundo globalizado. Únete a nosotros para una experiencia universitaria que dejará una huella duradera en tu vida personal y profesional."',
      flex_class: 'flex-row',
      img_src:'https://andrestayupanta.neocities.org/imagesMvc/bullworth.jpg'
    },
    {
        title: 'Nuestro Compromiso con la Excelencia',
        content: '"En Bullworth College, la excelencia no es solo una meta, es nuestro compromiso. Nuestra facultad de renombre internacional impulsa la investigación innovadora y una enseñanza que cambia vidas, enmarcada por un campus vibrante que alberga una amplia gama de actividades culturales, sociales y deportivas. Estamos dedicados a cultivar líderes y ciudadanos responsables, equipados para aportar a la sociedad y al bienestar global. Experimenta el poder de la educación en una institución que valora la curiosidad, el debate intelectual y la búsqueda incesante del conocimiento."',
        flex_class: 'flex-row-reverse',
        img_src:'https://andrestayupanta.neocities.org/imagesMvc/sites1.jpg'
    }
  ]

export default function Home() {
  return (
    <>
        <section className="container">
            {articles.map((article, index) => (
                <Article key={index} title={article.title} content={article.content} flex_class={article.flex_class} img_src={article.img_src} />
            ))}
        </section>    
    </>
  )
}
