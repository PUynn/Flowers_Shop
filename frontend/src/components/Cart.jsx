import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from '../store/cartSlice';
import './Cart.css';

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleIncreaseQuantity = (itemId) => {
    const item = cartItems.find((item) => item.id === itemId);
    if (item) {
      dispatch(updateQuantity({ id: itemId, quantity: item.quantity + 1 }));
    }
  };

  const handleDecreaseQuantity = (itemId) => {
    const item = cartItems.find((item) => item.id === itemId);
    if (item && item.quantity > 1) {
      dispatch(updateQuantity({ id: itemId, quantity: item.quantity - 1 }));
    }
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="item-details">
                <h3>{item.name}</h3>
                <p className="item-price">${item.price}</p>
              </div>
              <div className="quantity-controls">
                <button
                  className="qty-btn"
                  onClick={() => handleDecreaseQuantity(item.id)}
                >
                  −
                </button>
                <span className="quantity">{item.quantity}</span>
                <button
                  className="qty-btn"
                  onClick={() => handleIncreaseQuantity(item.id)}
                >
                  +
                </button>
              </div>
              <div className="item-total">
                <p>${(item.price * item.quantity).toFixed(2)}</p>
              </div>
              <button
                className="remove-btn"
                onClick={() => handleRemoveItem(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
