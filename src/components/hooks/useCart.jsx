import React from 'react'
//sexo area lc1
export default function Cart({ cart, setCart }) {
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
        cart.filter((product) => product !== productToRemove)
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

}