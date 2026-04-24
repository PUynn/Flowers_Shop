import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCart } from './store/cartSlice';
import store from './store/store';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Cart from './components/Cart';
import CartSummary from './components/CartSummary';
import Toast from './components/Toast';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCartLocked, setIsCartLocked] = useState(false);
  const [notification, setNotification] = useState({ visible: false, message: '' });

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        const cartData = JSON.parse(savedCart);
        dispatch(setCart(cartData));
      } catch (error) {
        console.error('Failed to load cart from localStorage:', error);
      }
    }
  }, [dispatch]);

  // Save to localStorage whenever cart items change
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleCartClick = () => {
    const newLockedState = !isCartLocked;
    setIsCartLocked(newLockedState);
    setIsCartOpen(newLockedState);
  };

  const handleCartHover = () => {
    if (!isCartLocked) {
      setIsCartOpen(true);
    }
  };

  const handleCartLeave = () => {
    if (!isCartLocked) {
      setIsCartOpen(false);
    }
  };

  const showNotification = (productName) => {
    setNotification({ visible: true, message: `${productName} added to cart!` });
    setTimeout(() => {
      setNotification({ visible: false, message: '' });
    }, 2000);
  };

  return (
    <div className="app">
      <Header 
        onCartClick={handleCartClick}
        onCartHover={handleCartHover}
        onCartLeave={handleCartLeave}
      />
      <Hero />
      
      <div className="main-container">
        <Products onAddToCart={showNotification} />

        {isCartOpen && (
          <div className="cart-sidebar">
            <Cart />
            <CartSummary />
          </div>
        )}
      </div>

      <Toast message={notification.message} isVisible={notification.visible} />
    </div>
  );
}

export default App;
