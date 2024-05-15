import React from 'react'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
//import useCart from '../hooks/useCart'
//TODO: Agregar estado para que cuando se agregue un producto se cargue al carrito

function Product(props) {

    const [buttonAdd, setButtonAdd] = useState(false)

    const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart')) || [];

    const [cart, setCart ] = useState(cartFromLocalStorage);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const handleClick = () => {
        if (buttonAdd){
            removeFromCart(props);
        } else {
            addToCart(props);
        }
        setButtonAdd(!buttonAdd);
      };

      const getTotalSum = () => {
        return cart.reduce(
          (sum, { precio, quantity }) => sum + precio * quantity,
          0
        );
      };
    
      const clearCart = () => {
        setCart([]);
      };
    
      const setQuantity = (product, amount) => {
        const newCart = [...cart];
        newCart.find(
          (item) => item.nombre === product.nombre
        ).quantity = amount;
        setCart(newCart);
      };
    
      const removeFromCart = (productToRemove) => {
        setCart(
          cart.filter((product) => product.nombre !== productToRemove.nombre)
        );
      };
  
      const addToCart = (product) => {
          let newCart = [...cart];
          let itemInCart = newCart.find(
            (item) => product.nombre === item.nombre
          );
          if (itemInCart) {
            itemInCart.quantity++;
          } else {
            itemInCart = {
              ...product,
              quantity: 1,
            };
            newCart.push(itemInCart);
          }
          setCart(newCart);
        };



    return (
        <div className="col-md-4">
            <div className="card text-center">
                <div className="card-body">
                    <h5 className="card-title">{props.nombre}</h5>
                    <p className="card-text">${props.precio}</p>
                    <button id="boton" onClick={handleClick}
                       className={`btn ${buttonAdd ? 'btn-danger' : 'btn-primary'}`}
                    data-producto='{"productoID":"1", "nombre":"Semestre 2024-A", "precio":3000}'>
                           {buttonAdd ? 'Remover del carrito' : 'Agregar al carrito'}
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
