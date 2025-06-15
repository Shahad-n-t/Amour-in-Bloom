import { useCart } from "./CartContext";

const ShoppingCart = () => {
  const { cartItems, updateQuantity, removeItem } = useCart();

  const getTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your Cart is currently empty!</p>
      ) : (
        <table className="cart-table">
          <thead>
            <tr>
              <th>Remove</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(({ name, price, img, quantity }) => (
              <tr key={name}>
                <td>
                  <button onClick={() => removeItem(name)}>✕</button>
                </td>
                <td className="cart-product">
                  <img src={img} alt={name} width="60" />
                  <div>
                    <p>{name}</p>
                    <p>${price.toFixed(2)}</p>
                  </div>
                </td>
                <td>
                  <button onClick={() => updateQuantity(name, -1)}>-</button>
                  <span>{quantity}</span>
                  <button onClick={() => updateQuantity(name, 1)}>+</button>
                </td>
                <td>${(price * quantity).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <h2>Total: ${getTotal().toFixed(2)}</h2>
    </div>
  );
};

export default ShoppingCart;
