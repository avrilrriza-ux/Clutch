export default function ClutchLandingPage() {
  const collections = [
    {
      title: "Training Essentials",
      text: "Core pieces built for practice, movement, and everyday performance.",
      tone: "gold",
    },
    {
      title: "Street Motion",
      text: "Athletic styling blended with a clean, modern streetwear look.",
      tone: "light",
    },
    {
      title: "Game Day Focus",
      text: "Statement apparel designed for confidence when pressure is on.",
      tone: "dark",
    },
  ];

  const products = [
    {
      name: "Performance Jersey",
      desc: "Lightweight and breathable for training days and game moments.",
      price: "₱799",
      image: "/products/performance-jersey.png",
    },
    {
      name: "Training Shorts",
      desc: "Flexible everyday sportswear made for movement and comfort.",
      price: "₱599",
      image: "/products/training-shorts.png",
    },
    {
      name: "Active Hoodie",
      desc: "A modern layer that blends street style with athletic function.",
      price: "₱1,099",
      image: "/products/active-hoodie.png",
    },
  ];

  const reasons = [
    {
      title: "Performance",
      text: "Designed to support active lifestyles with comfort-first materials and easy movement.",
    },
    {
      title: "Style",
      text: "A bold sportswear identity inspired by modern athletic brands and clean visuals.",
    },
    {
      title: "Presence",
      text: "Built to stand out across product design, social media, presentations, and web.",
    },
  ];

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          font-family: Arial, Helvetica, sans-serif;
        }

        html, body, #root {
          width: 100%;
          min-height: 100%;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          background: #f6f2ec;
          color: #111111;
          overflow-x: hidden;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .page {
          width: 100%;
          min-height: 100vh;
          background: linear-gradient(135deg, #f7f4ef 0%, #f1ece6 55%, #ece6df 100%);
        }

        .navbar {
          position: sticky;
          top: 0;
          z-index: 100;
          width: 100%;
          background: rgba(246, 242, 236, 0.9);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(226, 137, 34, 0.15);
        }

        .nav-inner {
          width: 100%;
          padding: 18px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .brand img {
          width: 80px;
          height: 80px;
          object-fit: contain;
          background: #ffffff;
          border-radius: 50%;
          padding: 6px;
          border: 1px solid rgba(226, 137, 34, 0.18);
          box-shadow: 0 8px 20px rgba(0,0,0,0.05);
        }

        .brand-name {
          font-size: 30px;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .brand-sub {
          margin-top: 4px;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 3px;
          color: #e28922;
        }

        .nav-links {
          display: flex;
          gap: 28px;
          font-size: 14px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .nav-links a:hover {
          color: #e28922;
        }

        .hero {
          width: 100%;
          min-height: calc(100vh - 117px);
          padding: 50px 56px 56px;
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.95fr);
          gap: 40px;
          align-items: center;
          position: relative;
          overflow: hidden;
          background: 
          linear-gradient(rgba(246,242,236,0.85), rgba(246,242,236,0.9)),
          url("https://images.unsplash.com/photo-1517836357463-d25dfeac3438");
          background-size: cover;
          background-position: center;
        }

        .hero::before,
        .hero::after {
          content: "";
          position: absolute;
          left: 28px;
          width: 56px;
          background: #e28922;
          border-radius: 4px;
        }

        .hero::before {
          top: 34px;
          height: 165px;
        }

        .hero::after {
          bottom: 34px;
          height: 165px;
        }

        .hero-left {
          position: relative;
          z-index: 2;
          padding-left: 64px;
        }

        .hero-panel {
          background: rgba(255,255,255,0.42);
          border: 1px solid rgba(255,255,255,0.6);
          border-radius: 34px;
          padding: 36px;
          box-shadow: 0 14px 34px rgba(0,0,0,0.04);
          backdrop-filter: blur(6px);
        }

        .eyebrow {
          color: #e28922;
          text-transform: uppercase;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 3px;
          margin-bottom: 18px;
        }

        .hero-kicker {
          font-size: clamp(46px, 7vw, 96px);
          line-height: 0.92;
          font-weight: 900;
          text-transform: uppercase;
        }

        .gold {
          color: #e5c920;
        }

        .orange {
          color: #e28922;
        }

        .black {
          color: #111111;
        }

        .tagline {
          display: flex;
          flex-wrap: wrap;
          align-items: flex-end;
          gap: 10px 12px;
          margin-top: 4px;
          margin-bottom: 22px;
        }

        .heartbeat {
          font-size: clamp(34px, 5vw, 70px);
          line-height: 0.9;
          color: #e5c920;
          font-weight: 700;
          transform: translateY(-4px);
        }

        .hero-text {
          max-width: 760px;
          font-size: clamp(16px, 2vw, 20px);
          line-height: 1.75;
          color: #333333;
          margin-bottom: 28px;
        }

        .hero-buttons {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .btn-primary,
        .btn-secondary {
          display: inline-block;
          padding: 15px 26px;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: transform 0.2s ease, opacity 0.2s ease, border-color 0.2s ease;
        }

        .btn-primary {
          background: #e28922;
          color: #ffffff;
          box-shadow: 0 14px 30px rgba(226, 137, 34, 0.22);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
        }

        .btn-secondary {
          background: rgba(255,255,255,0.5);
          border: 1px solid rgba(17,17,17,0.14);
          color: #111111;
        }

        .btn-secondary:hover {
          border-color: #e28922;
          color: #e28922;
        }

        .hero-right {
          display: flex;
          justify-content: center;
          position: relative;
          z-index: 2;
        }

        .hero-card {
          width: min(100%, 520px);
          min-height: 620px;
          background: rgba(246, 242, 236, 0.86);
          border: 6px solid #e28922;
          border-radius: 48px;
          padding: 36px 30px 84px;
          text-align: center;
          position: relative;
          box-shadow: 0 24px 60px rgba(0,0,0,0.08);
        }

        .hero-card::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: -6px;
          transform: translateX(-50%);
          width: 170px;
          height: 54px;
          background: #e28922;
          border-radius: 0 0 20px 20px;
        }

        .hero-card img {
          width: min(100%, 450px);
          max-width: 100%;
          display: block;
          margin: 36px auto 20px;
          object-fit: contain;
        }

        .hero-card .small {
          margin-bottom: 12px;
          color: #e28922;
          font-size: 12px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 3px;
        }

        .hero-card h3 {
          font-size: clamp(28px, 4vw, 44px);
          line-height: 1.05;
          text-transform: uppercase;
          margin-bottom: 14px;
        }

        .hero-card .muted {
          max-width: 410px;
          margin: 0 auto;
          color: #313131;
          line-height: 1.7;
          font-size: 16px;
        }

        .category-strip {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 0;
          width: 100%;
          border-top: 1px solid rgba(17,17,17,0.08);
          border-bottom: 1px solid rgba(17,17,17,0.08);
          background: rgba(255,255,255,0.35);
        }

        .category-item {
          padding: 22px 18px;
          text-align: center;
          font-size: 14px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .section {
          width: 100%;
          padding: 64px 56px;
        }

        .section-head {
          max-width: 760px;
          margin: 0 auto 32px;
          text-align: center;
        }

        .section-label {
          margin-bottom: 12px;
          color: #e28922;
          font-size: 13px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 3px;
        }

        .section h2 {
          margin-bottom: 14px;
          color: #111111;
          font-size: clamp(30px, 4vw, 44px);
          line-height: 1.1;
          text-transform: uppercase;
        }

        .section-desc {
          color: #333333;
          font-size: 17px;
          line-height: 1.75;
        }

        .collection-grid,
        .product-grid,
        .reason-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
          align-items: stretch;
        }

        .collection-card,
        .product-card,
        .reason-card {
          border-radius: 30px;
          overflow: hidden;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .collection-card:hover,
        .product-card:hover,
        .reason-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 34px rgba(0,0,0,0.08);
        }

        .collection-card {
          min-height: 260px;
          padding: 28px;
          position: relative;
        }

        .collection-card::after {
          content: "";
          position: absolute;
          right: -28px;
          bottom: -28px;
          width: 150px;
          height: 150px;
          border-radius: 50%;
          background: rgba(255,255,255,0.18);
        }

        .collection-card.gold {
          background: linear-gradient(135deg, #e5c920, #e28922);
          color: #111111;
        }

        .collection-card.light {
          background: rgba(255,255,255,0.72);
          border: 1px solid rgba(226, 137, 34, 0.14);
          color: #111111;
        }

        .collection-card.dark {
          background: linear-gradient(135deg, #111111, #2b2b2b);
          color: #ffffff;
        }

        .collection-card span {
          display: inline-block;
          margin-bottom: 16px;
          font-size: 12px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 2px;
          position: relative;
          z-index: 1;
        }

        .collection-card h3 {
          max-width: 220px;
          margin-bottom: 12px;
          font-size: 24px;
          line-height: 1.1;
          text-transform: uppercase;
          position: relative;
          z-index: 1;
        }

        .collection-card p {
          max-width: 280px;
          line-height: 1.75;
          position: relative;
          z-index: 1;
        }

        .product-card,
        .reason-card {
          background: rgba(255,255,255,0.72);
          border: 1px solid rgba(226, 137, 34, 0.14);
          padding: 24px;
          box-shadow: 0 10px 28px rgba(0,0,0,0.03);
        }

        .product-image {
          height: 250px;
          margin-bottom: 18px;
          border-radius: 22px;
          overflow: hidden;
          background: linear-gradient(135deg, #f3cf38 0%, #e28922 100%);
        }

        .product-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .product-topline {
          margin-bottom: 10px;
          color: #e28922;
          font-size: 12px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .product-card h3,
        .reason-card h3 {
          margin-bottom: 12px;
          font-size: 24px;
          line-height: 1.1;
          text-transform: uppercase;
        }

        .product-card p,
        .reason-card p {
          color: #363636;
          line-height: 1.7;
        }

        .price {
          margin: 18px 0 16px;
          color: #e28922;
          font-size: 22px;
          font-weight: 900;
        }

        .cta-section {
          width: 100%;
          padding: 24px 56px 72px;
        }

        .cta-card {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 26px;
          padding: 42px;
          border-radius: 36px;
          background: linear-gradient(135deg, #111111 0%, #2a2a2a 100%);
          color: #ffffff;
          box-shadow: 0 20px 50px rgba(0,0,0,0.12);
        }

        .cta-card .section-label {
          color: #f3cf38;
          margin-bottom: 10px;
        }

        .cta-card h2 {
          margin-bottom: 12px;
          font-size: clamp(32px, 5vw, 52px);
          line-height: 1;
          text-transform: uppercase;
        }

        .cta-card p {
          max-width: 760px;
          color: rgba(255,255,255,0.82);
          line-height: 1.75;
        }

        .contact-banner {
          background: linear-gradient(135deg, #e28922 0%, #f3cf38 100%);
          color: #111111;
        }

        .contact-inner {
          width: 100%;
          padding: 68px 56px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
          align-items: start;
        }

        .contact-inner h2 {
          margin: 10px 0 12px;
          font-size: clamp(30px, 4vw, 48px);
          line-height: 1.05;
          text-transform: uppercase;
        }

        .contact-inner p {
          max-width: 700px;
          font-size: 17px;
          line-height: 1.75;
        }

        .contact-list {
          background: rgba(255,255,255,0.38);
          border: 1px solid rgba(17,17,17,0.08);
          border-radius: 28px;
          padding: 24px;
        }

        .contact-item {
          margin-bottom: 14px;
          padding: 14px 16px;
          background: rgba(255,255,255,0.72);
          border-radius: 16px;
          font-weight: 700;
        }

        .contact-item:last-child {
          margin-bottom: 0;
        }

        .footer {
          padding: 24px 56px;
          background: rgba(255,255,255,0.45);
          border-top: 1px solid rgba(226, 137, 34, 0.15);
          color: #525252;
          font-size: 14px;
        }

        .footer-inner {
          width: 100%;
          display: flex;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
        }

        @media (max-width: 1100px) {
          .hero {
            grid-template-columns: 1fr;
            min-height: auto;
          }

          .hero-right {
            justify-content: flex-start;
          }

          .cta-card {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 900px) {
          .category-strip,
          .collection-grid,
          .product-grid,
          .reason-grid,
          .contact-inner {
            grid-template-columns: 1fr;
          }

          .nav-inner {
            padding: 16px 20px;
            flex-direction: column;
            align-items: flex-start;
          }

          .nav-links {
            flex-wrap: wrap;
            gap: 14px;
          }

          .hero,
          .section,
          .cta-section,
          .contact-inner,
          .footer {
            padding-left: 20px;
            padding-right: 20px;
          }

          .hero {
            padding-top: 30px;
          }

          .hero::before,
          .hero::after {
            left: 10px;
            width: 34px;
            height: 120px;
          }

          .hero-left {
            padding-left: 26px;
          }

          .hero-panel {
            padding: 24px;
          }

          .hero-card {
            min-height: auto;
            padding: 26px 20px 70px;
            border-radius: 34px;
          }

          .hero-card::after {
            width: 120px;
            height: 42px;
          }
        }

        @media (max-width: 640px) {
          .brand {
            gap: 10px;
          }

          .brand img {
            width: 62px;
            height: 62px;
          }

          .brand-name {
            font-size: 24px;
          }

          .brand-sub {
            font-size: 11px;
            letter-spacing: 2px;
          }

          .nav-links {
            width: 100%;
            justify-content: space-between;
            font-size: 12px;
          }

          .eyebrow,
          .section-label,
          .product-topline,
          .collection-card span {
            font-size: 11px;
            letter-spacing: 2px;
          }

          .tagline {
            gap: 8px;
          }

          .hero-buttons {
            flex-direction: column;
            align-items: stretch;
          }

          .btn-primary,
          .btn-secondary {
            width: 100%;
            text-align: center;
          }

          .hero-card img {
            width: 100%;
            margin-top: 18px;
          }

          .collection-card,
          .product-card,
          .reason-card,
          .contact-list,
          .cta-card {
            padding: 20px;
          }


          .product-image {
            height: 190px;
          }

          .footer-inner {
            flex-direction: column;
          }
        }
      `}</style>

      <div className="page">
        <header className="navbar">
          <div className="nav-inner">
            <div className="brand">
              <img src="/clutch logo.png" alt="Clutch logo" />
              <div>
                <div className="brand-name">CLUTCH</div>
                <div className="brand-sub">Sports Apparel</div>
              </div>
            </div>

            <nav className="nav-links">
              <a href="#collections">Collections</a>
              <a href="#products">Products</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
        </header>

        <section className="hero">
          <div className="hero-left">
            <div className="hero-panel">
              <div className="eyebrow">Built for hustle. Made to perform.</div>
              <div className="hero-kicker gold">Clutch</div>
              <div className="tagline">
                <div className="hero-kicker" style={{ marginBottom: 0 }}>
                  <span className="orange">Style In</span>{" "}
                  <span className="black">Motion</span>
                </div>
                <div className="heartbeat">∿╲╱∿</div>
              </div>
              <p className="hero-text">
                Clutch is a sports apparel brand focused on performance, movement, and bold style.
                We create athletic wear that supports active lifestyles while keeping your look
                sharp on and off the game.
              </p>
              <div className="hero-buttons">
                <a href="#products" className="btn-primary">Shop the Line</a>
                <a href="#contact" className="btn-secondary">Connect</a>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-card">
              <img src="/clutch logo.png" alt="Clutch emblem" />
              <p className="small">Brand Identity</p>
              <h3>Fast. Strong. Reliable.</h3>
              <p className="muted">
                The Clutch identity represents momentum, endurance, and energy — perfect for a
                modern sportswear brand.
              </p>
            </div>
          </div>
        </section>

        <section className="category-strip">
          <div className="category-item">Jerseys</div>
          <div className="category-item">Shorts</div>
          <div className="category-item">Hoodies</div>
          <div className="category-item">Accessories</div>
        </section>

        <section className="section" id="collections">
          <div className="section-head">
            <div className="section-label">Featured Collections</div>
            <h2>Style that moves</h2>
            <p className="section-desc">
              Explore signature Clutch collections designed to balance sports performance, modern
              branding, and street-ready confidence.
            </p>
          </div>

          <div className="collection-grid">
            {collections.map((item) => (
              <div className={`collection-card ${item.tone}`} key={item.title}>
                <span>Clutch Drop</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="products">
          <div className="section-head">
            <div className="section-label">Core Products</div>
            <h2>Built for motion</h2>
            <p className="section-desc">
              These sample products can be used for your class presentation now, then replaced with
              your final apparel concepts later.
            </p>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <div className="product-card" key={product.name}>
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-topline">Clutch Apparel</div>
                <h3>{product.name}</h3>
                <p>{product.desc}</p>
                <div className="price">{product.price}</div>
                <a href="#contact" className="btn-secondary">View Details</a>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="about">
          <div className="section-head">
            <div className="section-label">Why Clutch</div>
            <h2>Sport style with purpose</h2>
            <p className="section-desc">
              Clutch was built for athletes and everyday movers who want apparel that feels sharp,
              active, and ready for motion. It is a brand designed to perform visually and
              functionally.
            </p>
          </div>

          <div className="reason-grid">
            {reasons.map((item) => (
              <div className="reason-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-card">
            <div>
              <div className="section-label">Own your clutch moment</div>
              <h2>Bring the brand to life</h2>
              <p>
                Launch your social pages, connect your Vercel site, and complete your sportswear
                identity with a polished digital presence.
              </p>
            </div>
            <a href="#contact" className="btn-primary">Start Your Brand</a>
          </div>
        </section>

        <section className="contact-banner" id="contact">
          <div className="contact-inner">
            <div>
              <div className="section-label" style={{ color: '#111111' }}>Connect with Clutch</div>
              <h2>Build your brand online</h2>
            </div>

            <div className="contact-list">
              <div className="contact-item">Facebook: @clutchsportswear</div>
              <div className="contact-item">Instagram: @clutchsportswear</div>
              <div className="contact-item">TikTok: @clutchsportswear</div>
              <div className="contact-item">Email: clutchsportswear@email.com</div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="footer-inner">
            <div>© 2026 Clutch Sports Apparel. All rights reserved.</div>
            <div>Style in Motion.</div>
          </div>
        </footer>
      </div>
    </>
  );
}
