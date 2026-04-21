import { useDispatch } from 'react-redux';
import { addItem } from '../store/cartSlice';
import './Products.css';

const products = [
  { id: 1, name: 'Bouquet 1', price: 7.59, image: '/public/images/products/1.jpg' },
  { id: 2, name: 'Bouquet 2', price: 9.49, image: '/public/images/products/2.jpg' },
  { id: 3, name: 'Bouquet 3', price: 18.98, image: '/public/images/products/3.jpg' },
  { id: 4, name: 'Bouquet 4', price: 20.88, image: '/public/images/products/4.jpg' },
  { id: 5, name: 'Bouquet 5', price: 18.98, image: '/public/images/products/5.jpg' },
  { id: 6, name: 'Bouquet 6', price: 17.09, image: '/public/images/products/6.jpg' },
  { id: 7, name: 'Bouquet 7', price: 13.29, image: '/public/images/products/7.jpg' },
  { id: 8, name: 'Bouquet 8', price: 15.19, image: '/public/images/products/8.jpg' },
  { id: 9, name: 'Bouquet 9', price: 20.88, image: '/public/images/products/9.jpg' },
  { id: 10, name: 'Bouquet 10', price: 20.88, image: '/public/images/products/10.jpg' },
  { id: 11, name: 'Bouquet 11', price: 13.29, image: '/public/images/products/11.jpg' },
  { id: 12, name: 'Bouquet 12', price: 15.19, image: '/public/images/products/12.jpg' },
  { id: 13, name: 'Bouquet 13', price: 17.09, image: '/public/images/products/13.jpg' },
  { id: 14, name: 'Bouquet 14', price: 13.29, image: '/public/images/products/14.jpg' },
  { id: 15, name: 'Bouquet 15', price: 11.39, image: '/public/images/products/15.jpg' },
  { id: 16, name: 'Bouquet 16', price: 13.29, image: '/public/images/products/16.jpg' },
];

function Products({ onAddToCart }) {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addItem({
      id: product.id,
      name: product.name,
      price: product.price,
    }));
    // Trigger notification
    if (onAddToCart) {
      onAddToCart(product.name);
    }
  };

  return (
    <section className="products-section">
      <div className="products-container">
        <h2 className="section-title">ALL ITEMS</h2>
        <h3 className="section-subtitle">OUR BEST PRODUCT</h3>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                {product.image ? (
                  <img src={product.image} alt={product.name} className="product-image" />
                ) : (
                  <div className="image-placeholder">
                    <p>Add Image Here</p>
                  </div>
                )}
                <button className="heart-btn">♡</button>
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <div className="product-rating">
                  <span className="stars">★★★★★</span>
                  <span className="rating-count">(5 Products)</span>
                </div>
                <div className="product-price">
                  <span className="price">${product.price.toFixed(2)}</span>
                </div>
              </div>
              <button
                className="add-to-cart-btn"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
