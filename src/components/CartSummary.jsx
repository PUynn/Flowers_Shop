import { useSelector } from 'react-redux';
import './CartSummary.css';

function CartSummary() {
  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-summary">
      <h2>Order Summary</h2>
      <div className="summary-content">
        <div className="summary-row">
          <span>Total Items:</span>
          <span className="summary-value">{totalItems}</span>
        </div>
        <div className="summary-row">
          <span>Total Price:</span>
          <span className="summary-value">${totalPrice.toFixed(2)}</span>
        </div>
        <button className="checkout-btn" disabled={totalItems === 0}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default CartSummary;
