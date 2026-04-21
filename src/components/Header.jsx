import { useSelector } from 'react-redux';
import './Header.css';

function Header({ onCartClick, onCartHover, onCartLeave }) {
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span className="logo-icon"></span>
          <span className="logo-text">Pu's Flowers</span>
        </div>

        <nav className="nav-menu">
          <a href="#home" className="nav-link">HOME</a>
          <a href="#shop" className="nav-link">Shop</a>
          <a href="#about" className="nav-link">About Us</a>
          <a href="#contact" className="nav-link">Contact Us</a>
        </nav>

        <div className="header-icons">
          <button className="icon-btn">🔍</button> 
          <button className="icon-btn">♡</button>
          <button 
            className="icon-btn cart-btn" 
            onClick={onCartClick}
            onMouseEnter={onCartHover}
            onMouseLeave={onCartLeave}
          >
            🛒
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
