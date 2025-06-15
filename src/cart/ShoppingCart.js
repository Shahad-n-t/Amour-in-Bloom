import { useState } from "react"
import CategoryData from "../categories/CategoryData"


function findProductByName(name) {
    for (const category of Object.values(CategoryData)) {
        const found = category.items.find(item => item.name === name);
        if (found) return found
    }
}


const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    { name: 'Sunset Spritz', quantity: 1 },
    { name: 'Fresh Bloom', quantity: 2 },
    { name: 'Pink Parade', quantity: 1 },
  ]);
  
  const updateQuantity = (name, amount) => {
    setCartItems( prev =>
     prev.map(item => item.name === name ?
        {...item, quuantity: Math.max(1, item.quantity + amount)} : item
     )
    );
  };


  const removeItem = (name) => {
    setCartItems(prev => prev.filter(item => item.name !== name));
  };

  const getTotatl = () => {
   return cartItems.reduce((total, item) => {
      const product = findProductByName(item.name);
      return product ? total + product.price * item.quantity : total;
   }, 0);
  };


  return (
    <div>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0? (
            <p>Your Cart is currently empty!</p>
        ): (
          <table>
            <thead>
                <tr>
                    <th>Remove</th>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {cartItems.map(({name, quantity}) => {
                    const product = findProductByName(name);
                    if (!product) return null;


                    return (
                        <tr key={name}>
                            <td><button onClick={() => removeItem(name)}>X</button></td>
                            <td>
                                <img src={product.img} alt={product.name} width="60"/>
                                <p>{product.name}</p>
                                <p>${product.price.toFixed(2)}</p>
                            </td>
                            <td>
                                <button onClick={() => updateQuantity(name, -1)}>-</button>
                                <span>{quantity}</span>
                                <button onClick={() => updateQuantity(name, 1)}>+</button>
                            </td>
                            <td>{(product.price*quantity).toFixed(2)}</td>
                        </tr>
                    )
                }
                )}
            </tbody>
          </table>
        )
        }
        <h2>Total: ${getTotatl().toFixed(2)}</h2>
    </div>
  )
}

export default ShoppingCart;