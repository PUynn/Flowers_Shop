import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            WHERE NATURE MEET<br />
            <span className="highlight">BEAUTY</span>
          </h1>
          <p className="hero-description">
           Premium fresh flowers and arrangements for every moment that matters
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
