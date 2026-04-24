import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { addItem } from '../store/cartSlice';
import './Products.css';

function Products({ onAddToCart }) {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('/api/products');
        const contentType = res.headers.get('content-type') || '';
        const bodyText = await res.text();

        if (!res.ok) {
          throw new Error('Failed to fetch products');
        }

        if (!contentType.includes('application/json')) {
          throw new Error('API is not returning JSON. Please check backend server.');
        }

        const data = JSON.parse(bodyText);
        setProducts(data);
      } catch (fetchError) {
        setError(fetchError.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

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

  if (loading) {
    return (
      <section className="products-section">
        <div className="products-container">
          <p>Loading products...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="products-section">
        <div className="products-container">
          <p>Error: {error}</p>
        </div>
      </section>
    );
  }

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
                  <span className="price">${Number(product.price).toFixed(2)}</span>
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
