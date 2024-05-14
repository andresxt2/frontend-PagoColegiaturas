import React from 'react'
import PropTypes from 'prop-types'

function Article(props) {
    return (
        <>
            <div className={`row ${props.flex_class}`}>
                <article className="col-12 col-lg-6 p-4">
                    <h2>{props.title}</h2>
                    <p>{props.content}</p>
                </article>

                <article className="col-12 col-lg-6 p-4">
                    <img src={`${props.img_src}`} className="img-fluid" alt="" />
                </article>
            </div>
        </>
    )
}

Article.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    flex_class: PropTypes.string.isRequired,
    img_src: PropTypes.string.isRequired
}

export default Article
