import React from 'react'
import PropTypes from 'prop-types'

function Product(props) {
  return (
    <div className="col-md-4">
    <div className="card text-center">
        <div className="card-body">
                <h5 className="card-title">{props.nombre}</h5>
                <p className="card-text">${props.precio}</p>
                <button className="btn btn-primary"  data-producto='{"productoID":"1", "nombre":"Semestre 2024-A", "precio":3000}'>
                    Agregar al carrito
                </button>
            </div>
            </div>
        </div>
  )
}

Product.propTypes = {
    nombre: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired
}

export default Product
