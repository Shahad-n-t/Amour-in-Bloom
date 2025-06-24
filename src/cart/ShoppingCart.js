import { useCart } from "../cart/CartContext";
import CategoryData from "../categories/CategoryData";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";




function findProductByName(name) {
  for (const category of Object.values(CategoryData)) {
    const found = category.items.find(item => item.name === name);
    if (found) return found;
  }
  return null;
}

const ShoppingCart = () => {
  const { cartItems, updateQuantity, removeItem, clearCart } = useCart();

  const getTotal = () => {
    return cartItems.reduce((total, item) => {
      const product = findProductByName(item.name);
      return product ? total + product.price * item.quantity : total;
    }, 0);
  };

  const subtotal = getTotal();
  const shipping = subtotal > 300 ? 0 : 20; // example logic
  const couponDiscount = 0; // placeholder
  const totalPrice = subtotal + shipping - couponDiscount;

  return (
    <>
  <div className="page-wrapper cart-page">
    <div className="cart-header">
    <h2>Shopping Cart</h2>
    </div>
  <div className="cart-container">
    {cartItems.length === 0 ? (
      <div className="empty-cart-message">
       <p><i>Your cart feels a little empty... let’s find something beautiful to fill it with!</i></p>
       <Link to='/Categories'>
       <button>Tumble Back into the Garden!</button>
       </Link>
      </div>
    ) : (
      <>
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
            {cartItems.map(({ name, quantity }) => {
              const product = findProductByName(name);
              if (!product) return null;

              return (
                <tr key={name}>
                  <td>
                    <button
                      className="cart-remove-btn"
                      onClick={() => removeItem(name)}
                    >
                      X
                    </button>
                  </td>
                  <td className="cart-product-cell">
                    <img src={product.img} alt={product.name} />
                    <div>
                      <p>{product.name}</p>
                      <p>${product.price.toFixed(2)}</p>
                    </div>
                  </td>
                  <td>
                    <div className="quantity-control">
                      <button onClick={() => updateQuantity(name, -1)}>-</button>
                      <span>{quantity}</span>
                      <button onClick={() => updateQuantity(name, 1)}>+</button>
                    </div>
                  </td>
                  <td>${(product.price * quantity).toFixed(2)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>


       <div className="order-summary-wrapper">
        <div className="order-summary">
          <h3>Order Summary</h3>
          <hr/>
          <div className="order-summary-row">
            <span>Items</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="order-summary-row">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="order-summary-row">
            <span>Shipping</span>
            <span>${shipping.toFixed(2)}</span>
          </div>
          <div className="order-summary-row">
            <span>Coupon Discount</span>
            <span>${couponDiscount.toFixed(2)}</span>
          </div>
          <hr/>
          <div className="order-summary-row">
            <strong>Total Price</strong>
            <strong>${totalPrice.toFixed(2)}</strong>
          </div>
          <div>
            <Link to='/Checkout'>
            <button className="checkout-btn">Go to Checkout <FontAwesomeIcon icon={faArrowRight} size="1x" className="checkout-icon"/></button>
            </Link>
          </div>
        </div>
        {subtotal < 400 && (
         <div className="free-shipping-banner">
          🌟 Free shipping on orders over $400!
         </div>
       )}
        </div>

      </>
    )}
  </div>
  </div>

  {cartItems.length > 0 && (
    <div className="coupon-area">
      <div className="coupon-controls">
      <input
        className="coupon-input"
        type="text"
        placeholder="Coupon Code"
      />
      <button className="apply-coupon-btn">Apply Coupon</button>
      </div>

      <span
        className="clear-cart-link"
        onClick={clearCart}
      >
        Clear Shopping cart
      </span>
    </div>
  )}
</>
  )}

export default ShoppingCart;