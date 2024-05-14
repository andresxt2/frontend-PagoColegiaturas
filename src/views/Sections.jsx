import React from 'react'
import Product from '../components/common/Product'

const Products = [
    {
    productoID : 1,
    nombre : "Semestre 2024-A",
    precio : 3000.00
    },
    {
    productoID : 2,
    nombre : "Semestre 2024-B",
    precio : 3000.00
    },
    {
    productoID : 3,
    nombre : "Semestre 2024-Verano-Idiomas",
    precio : 300.00
    },
    {
    productoID : 4,
    nombre : "Semestre 2024-Invierno-Idiomas",
    precio : 300.00
    }
]


function Secciones() {
  return (
        <>
            <section className="container">
                <div className="row justify-content-between  mt-5 p-3">
                        {Products.map((product) => (
                            <Product key={product.productoID} nombre={product.nombre} precio={product.precio} />
                        ))}
                </div>
            </section>
        </>
  )
}

export default Secciones