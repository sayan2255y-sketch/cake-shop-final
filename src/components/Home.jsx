
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const featuredCakes = [
  {
    id: 1,
    name: "Luxury Chocolate Cake",
    category: "Cakes",
    price: 125,
    image: "/Image/Cake1.jpeg",
  },
  {
    id: 2,
    name: "Chocolate Celebration Cake",
    category: "Cakes",
    price: 145,
    image: "/Image/Cake2.jpeg",
  },
  {
    id: 3,
    name: "Premium Black Forest Cake",
    category: "Cakes",
    price: 135,
    image: "/Image/Cake3.jpeg",
  },
  {
    id: 16,
    name: "Tropical Pineapple Cream Cake",
    category: "Cakes",
    price: 145,
    image: "/Image/Pinecake3.png",
  },
  {
    id: 17,
    name: "Pineapple Crunch Delight",
    category: "Cakes",
    price: 120,
    image: "/Image/Pinecake2.webp",
  },
  {
    id: 18,
    name: "Classic Crème Brûlée Cheesecake",
    category: "Cakes",
    price: 160,
    image: "/Image/Cheesecake1.jpeg",
  },
];

function Home() {
  const [activeCake, setActiveCake] = useState(0);

  // Automatically show the next cake every four seconds.
  useEffect(() => {
    const slideTimer = window.setInterval(() => {
      setActiveCake((current) => (current + 1) % featuredCakes.length);
    }, 4000);

    return () => window.clearInterval(slideTimer);
  }, []);

  const showPreviousCake = () => {
    setActiveCake((current) =>
      (current - 1 + featuredCakes.length) % featuredCakes.length
    );
  };

  const showNextCake = () => {
    setActiveCake((current) => (current + 1) % featuredCakes.length);
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="home-hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="hero-small-title">
                WELCOME TO BCA CAKE WALA
              </p>

              <h1 className="hero-title">
                Crafted With
                <br />
                Passion &amp; Sweetness
              </h1>

              <p className="hero-description">
                Discover premium cakes, cupcakes, pastries and bakery delights
                made specially for your memorable moments.
              </p>

              <div className="hero-buttons">
                <Link to="/catalog" className="hero-btn">
                  Explore Catalog
                </Link>

                <Link to="/about" className="hero-outline-btn">
                  About Us
                </Link>
              </div>
            </div>

            <div className="col-md-6">
              <div className="home-cake-carousel">
                <div className="home-cake-carousel-window">
                  <div
                    className="home-cake-carousel-track"
                    style={{
                      transform: `translateX(-${activeCake * 100}%)`,
                    }}
                  >
                    {featuredCakes.map((cake) => (
                      <div className="home-cake-slide" key={cake.id}>
                        <Link
                          to="/product"
                          state={{ product: cake }}
                          className="home-cake-slide-link"
                          aria-label={`View details for ${cake.name}`}
                        >
                          <img
                            src={cake.image}
                            alt={cake.name}
                          />

                          <span className="home-cake-caption">
                            <span>{cake.name}</span>
                            <strong>${cake.price}</strong>
                          </span>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Previous Button */}
                <button
                  type="button"
                  className="home-cake-arrow home-cake-prev"
                  onClick={showPreviousCake}
                  aria-label="Show previous cake"
                >
                  &#8249;
                </button>

                {/* Next Button */}
                <button
                  type="button"
                  className="home-cake-arrow home-cake-next"
                  onClick={showNextCake}
                  aria-label="Show next cake"
                >
                  &#8250;
                </button>

                {/* Navigation Dots */}
                <div
                  className="home-cake-dots"
                  aria-label="Choose a cake"
                >
                  {featuredCakes.map((cake, index) => (
                    <button
                      type="button"
                      key={cake.id}
                      className={
                        index === activeCake ? "active" : ""
                      }
                      onClick={() => setActiveCake(index)}
                      aria-label={`Show ${cake.name}`}
                      aria-current={
                        index === activeCake ? "true" : undefined
                      }
                    />
                  ))}
                </div>

                <p className="home-cake-hint">
                  Click a cake to view its details
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="home-features">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="feature-card">
                <div className="feature-icon">♡</div>
                <h3>Premium Quality</h3>
                <p>
                  We use quality ingredients to create delicious products.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="feature-card">
                <div className="feature-icon">★</div>
                <h3>Freshly Made</h3>
                <p>
                  Every product is prepared with freshness and care.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="feature-card">
                <div className="feature-icon">✓</div>
                <h3>Special Moments</h3>
                <p>
                  Perfect treats for birthdays, celebrations and special
                  occasions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collection */}
      <section className="home-collection">
        <div className="container text-center">
          <p className="category-text">
            OUR SPECIAL COLLECTION
          </p>

          <h2 className="home-section-title">
            Something Sweet For Everyone
          </h2>

          <p className="home-section-description">
            From rich chocolate cakes to delicious cupcakes and pastries,
            explore our collection.
          </p>

          <Link to="/catalog" className="cart-btn">
            View All Products
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
