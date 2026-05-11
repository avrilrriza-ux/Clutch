import { useState } from "react";

export default function ClutchLandingPage() {
const [selectedProduct, setSelectedProduct] = useState(null);
const [selectedSize, setSelectedSize] = useState("");
const [quantity, setQuantity] = useState(1);
const [cart, setCart] = useState([]);
const [selectedImage, setSelectedImage] = useState(null);
const [imageIndex, setImageIndex] = useState(0);
const [showCart, setShowCart] = useState(false);

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

/*products*/
  const products = [
    {
      name: "Clutch Unisex Shadow Hoodie – Black",
      desc: "Built for comfort with a sleek athletic look",
      price: "₱999",
      image: "/products/unisex shadow hoodie.png",
      sizes: ["S", "M", "L", "XL"],
      gallery: [
        "/products/unisex shadow hoodie.png",
        "/products/unisex shadow hoodie f.png",
        "/products/unisex shadow hoodie samp.png", 
      ],
    },
    {
      name: "Clutch Unisex Curve Hoodie – White & Orange",
      desc: "Minimal, breathable, and made for everyday style.",
      price: "₱799",
      image: "/products/curve h 1.png",
      sizes: ["S", "M", "L", "XL"],
      gallery: [
        "/products/curve h 1.png",      
        "/products/curve h.png",
        "/products/curve h 2.png",
        "/products/curve h3.png",
        "/products/curve h4.png",
      ],    
    },
    {
      name: "Clutch Unisex PREMIUM Hoodie – White & Orange",
      desc: "A clean sport-inspired hoodie designed for comfort and everyday wear.",
      price: "₱899",
      image: "/products/prem hoodie 1.png",
      sizes: ["S", "M", "L", "XL"],
      gallery: [
        "/products/prem hoodie 1.png",
        "/products/prem hoodie.png",
        "/products/premium hoodie 1.png", 
        "/products/premium hoodie 2.png", 
        "/products/premium hoodie samp.png", 
           ],      
    }

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
          linear-gradient(rgba(246,242,236,0.7), rgba(246,242,236,0.7)),
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

        .reason-card {
          background: rgba(255,255,255,0.72);
          border: 1px solid rgba(226, 137, 34, 0.14);
          padding: 24px;
          box-shadow: 0 10px 28px rgba(0,0,0,0.03);
        }

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 28px;
  align-items: stretch;
}

.product-card {
  display: flex;
  flex-direction: column;
  padding: 24px;
  padding-bottom: 34px;
  height: 100%;
}

.product-card h3 {
  min-height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.product-card p {
  min-height: 120px;
  text-align: center;
}

.price {
  margin-top: auto;
  margin-bottom: 24px;
  text-align: center;
}

.product-actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

.product-image {
  width: 100%;
  height: 320px;
  margin-bottom: 18px;
  border-radius: 22px;
  overflow: hidden;
  background: #f7f4ef;
  border: 1px solid rgba(226, 137, 34, 0.14);
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 14px;
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

  
        .reason-card h3 {
          margin-bottom: 12px;
          font-size: 24px;
          line-height: 1.1;
          text-transform: uppercase;
        }


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


.product-actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  margin-top: 26px;
  padding-top: 6px;
}

.cart-btn,
.buy-btn,
.confirm-btn {
  border: none;
  padding: 13px 14px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 900;
  text-transform: uppercase;
  cursor: pointer;
}

.cart-btn {
  background: #ffffff;
  color: #111111;
  border: 1px solid rgba(17,17,17,0.15);
}

.buy-btn,
.confirm-btn {
  background: #e28922;
  color: #ffffff;
}

.variant-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.45);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  padding: 40px;
}


.close-btn {
  position: absolute;
  top: 14px;
  right: 18px;
  border: none;
  background: #111111;
  color: #ffffff;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  font-size: 20px;
}

.variant-title {
  margin: 16px 0 8px;
  font-weight: 900;
}

.variant-options {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.variant-options button {
  min-width: 48px;
  height: 42px;
  padding: 10px 16px;
  border-radius: 999px;
  border: 1px solid rgba(17,17,17,0.15);
  background: #ffffff;
  color: #111111;
  font-weight: 900;
  cursor: pointer;
}

.confirm-btn {
  width: 100%;
  margin-top: 20px;
}

.shop-modal {
  width: min(100%, 1050px);
  max-height: 90vh;
  overflow-y: auto;
  background: #ffffff;
  border-radius: 24px;
  padding: 28px;
  display: grid;
  grid-template-columns: 430px 1fr;
  gap: 34px;
  position: relative;
}

.shop-left {
  width: 100%;
}

.main-preview {
  width: 100%;
  height: 430px;
  background: #f7f4ef;
  border-radius: 20px;
  overflow: hidden;
}

.main-preview img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 18px;
}

.shop-right {
  padding: 18px 10px;
}

.shop-right h2 {
  font-size: 32px;
  margin: 10px 0 12px;
  text-transform: uppercase;
}

.shop-desc {
  margin-bottom: 24px;
  line-height: 1.7;
  color: #444;
}

.variant-group {
  margin-bottom: 22px;
}

.variant-group p,
.quantity-row p {
  margin-bottom: 10px;
  font-weight: 900;
  text-transform: uppercase;
}

.quantity-row {
  margin-bottom: 24px;
}

.quantity-box {
  display: flex;
  align-items: center;
  gap: 12px;
}

.quantity-box button {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  border: none;
  background: #111;
  color: white;
  font-size: 18px;
}

.shop-buttons {
  display: flex;
  gap: 14px;
}

.shop-buttons button {
  flex: 1;
  border-radius: 12px;
  padding: 16px;
}

@media (max-width: 900px) {
  .shop-modal {
    grid-template-columns: 1fr;
  }

  .main-preview {
    height: 300px;
  }
}

.product-image {
  cursor: pointer;
}

.gallery-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.72);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
}

.gallery-img {
  max-width: 80vw;
  max-height: 82vh;
  object-fit: contain;
  border-radius: 18px;
  background: #f6f2ec;
}

.gallery-close {
  position: absolute;
  top: 24px;
  right: 28px;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: none;
  background: #ffffff;
  color: #111;
  font-size: 28px;
  cursor: pointer;
}

.gallery-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: none;
  background: #ffffff;
  color: #111;
  font-size: 38px;
  cursor: pointer;
}

.gallery-arrow.left {
  left: 40px;
}

.gallery-arrow.right {
  right: 40px;
}

.active-variant {
  background: #e28922 !important;
  color: white !important;
  border-color: #e28922 !important;
}

.cart-count {
  font-weight: 900;
  color: #e28922;
}

.cart-nav {
  border: none;
  background: #e28922 !important;
  color: #ffffff !important;
  padding: 10px 16px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 900;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 88px;
}

.cart-modal {
  width: min(100%, 520px);
  background: #ffffff;
  border-radius: 24px;
  padding: 28px;
  position: relative;
}

.cart-modal h2 {
  margin-bottom: 20px;
  text-transform: uppercase;
}

.cart-item {
  display: grid;
  grid-template-columns: 90px 1fr;
  gap: 16px;
  padding: 14px 0;
  border-bottom: 1px solid rgba(17,17,17,0.1);
}

.cart-item img {
  width: 90px;
  height: 90px;
  object-fit: contain;
  background: #f7f4ef;
  border-radius: 14px;
}

.cart-page-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.45);
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 80px 40px;
  overflow-y: auto;
}

.cart-page {
  width: min(100%, 1100px);
  background: #ffffff;
  border-radius: 18px;
  padding: 28px;
  position: relative;
}

.cart-page h2 {
  margin-bottom: 24px;
  text-transform: uppercase;
  color: #111;
}

.cart-header,
.cart-row {
  display: grid;
  grid-template-columns: 2.4fr 1fr 1fr 1fr 1fr 0.8fr;
  align-items: center;
  gap: 18px;
}

.cart-header {
  padding: 16px 18px;
  background: #f7f4ef;
  color: #666;
  font-size: 13px;
  font-weight: 800;
  text-transform: uppercase;
  border-radius: 12px;
  margin-bottom: 12px;
}

.cart-row {
  padding: 18px;
  border-bottom: 1px solid rgba(17,17,17,0.1);
}

.cart-product {
  display: grid;
  grid-template-columns: 20px 82px 1fr;
  align-items: center;
  gap: 14px;
}

.cart-product img {
  width: 82px;
  height: 82px;
  object-fit: contain;
  background: #f7f4ef;
  border-radius: 12px;
}

.cart-product h4 {
  font-size: 15px;
  line-height: 1.35;
}

.cart-qty {
  display: flex;
  align-items: center;
}

.cart-qty button {
  width: 32px;
  height: 32px;
  border: 1px solid rgba(17,17,17,0.14);
  background: #ffffff;
  cursor: pointer;
}

.cart-qty span {
  width: 42px;
  height: 32px;
  display: grid;
  place-items: center;
  border-top: 1px solid rgba(17,17,17,0.14);
  border-bottom: 1px solid rgba(17,17,17,0.14);
}

.cart-total {
  color: #e28922;
  font-weight: 900;
}

.delete-btn {
  border: none;
  background: transparent;
  color: #e28922;
  font-weight: 800;
  cursor: pointer;
}

.empty-cart {
  padding: 30px;
  text-align: center;
  color: #777;
}

.cart-footer {
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding-top: 20px;
  border-top: 1px solid rgba(17,17,17,0.1);
}

.cart-summary {
  font-size: 20px;
  font-weight: 800;
}

.cart-summary span {
  color: #e28922;
  margin-left: 10px;
}

.checkout-btn {
  border: none;
  background: #e28922;
  color: #ffffff;
  padding: 16px 28px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 900;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.2s ease;
}

.checkout-btn:hover {
  transform: translateY(-2px);
  opacity: 0.92;
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
<button className="cart-nav" onClick={() => setShowCart(true)}>
  Cart: {cart.length}
</button></nav>          

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
            <div className="section-label">Products</div>
            <h2>Built for motion</h2>
            <p className="section-desc">
              Performance-driven apparel designed for athletes, creators, 
              and everyday movers who want style without sacrificing comfort.
            </p>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <div className="product-card" key={product.name}>
                <div
  className="product-image"
  onClick={() => {
    setSelectedImage(product);
    setImageIndex(0);
  }}
>
  <img src={product.image} alt={product.name} />
</div>
                <div className="product-topline">Clutch Apparel</div>
                <h3>{product.name}</h3>
                <p>{product.desc}</p>
                <div className="price">{product.price}</div>
                <div className="product-actions">
  <button className="cart-btn" onClick={() => setSelectedProduct(product)}>
    Add to Cart
  </button>

  <button className="buy-btn" onClick={() => setSelectedProduct(product)}>
    Buy Now
  </button>
</div>



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
              <div className="contact-item">Facebook: Clutch Sports Apparel</div>
              <div className="contact-item">Instagram: @clutchsportswearapparel</div>
              <div className="contact-item">TikTok: @clutchsportswearapparel</div>
              <div className="contact-item">Email:clutchsportswearapparel@gmail.com</div>
            </div>
          </div>
        </section>

{selectedProduct && (
  <div className="variant-overlay">
    <div className="shop-modal">
      <button className="close-btn" onClick={() => setSelectedProduct(null)}>
        ×
      </button>


      <div className="shop-left">
        <div className="main-preview">
          <img src={selectedProduct.image} alt={selectedProduct.name} />
        </div>
      </div>

      <div className="shop-right">
        <div className="product-topline">Clutch Apparel</div>

        <h2>{selectedProduct.name}</h2>
        <div className="price">{selectedProduct.price}</div>

        <p className="shop-desc">{selectedProduct.desc}</p>


<div className="variant-group">
  <p>Size</p>
  <div className="variant-options">
    {selectedProduct.sizes?.map((size) => (
      <button
        key={size}
        className={selectedSize === size ? "active-variant" : ""}
        onClick={() => setSelectedSize(size)}
      >
        {size}
      </button>
    ))}
  </div>
</div>

<div className="quantity-row">
  <p>Quantity</p>
  <div className="quantity-box">
    <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
    <span>{quantity}</span>
    <button onClick={() => setQuantity(quantity + 1)}>+</button>
  </div>
</div>

<div className="shop-buttons">
  <button
    className="cart-btn"
    onClick={() => {
      if (!selectedSize) {
        alert("Please select a size first.");
        return;
      }

      setCart([
        ...cart,
        {
          ...selectedProduct,
          selectedSize,
          quantity,
        },
      ]);

      alert("Added to cart!");
      setSelectedProduct(null);
      setSelectedSize("");
      setQuantity(1);
    }}
  >
    Add To Cart
  </button>

  <button className="buy-btn">
    Buy Now
  </button>
</div>      </div>
    </div>
  </div>
)}

{selectedImage && (
  <div className="gallery-overlay">
    <button className="gallery-close" onClick={() => setSelectedImage(null)}>
      ×
    </button>

    <button
      className="gallery-arrow left"
      onClick={() =>
        setImageIndex(
          imageIndex === 0
            ? selectedImage.gallery.length - 1
            : imageIndex - 1
        )
      }
    >
      ‹
    </button>

    <img
      src={selectedImage.gallery[imageIndex]}
      alt={selectedImage.name}
      className="gallery-img"
    />

    <button
      className="gallery-arrow right"
      onClick={() =>
        setImageIndex(
          imageIndex === selectedImage.gallery.length - 1
            ? 0
            : imageIndex + 1
        )
      }
    >
      ›
    </button>
  </div>
)}
        
{showCart && (
  <div className="cart-page-overlay">
    <div className="cart-page">
      <button className="close-btn" onClick={() => setShowCart(false)}>×</button>

      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-header">
            <span>Product</span>
            <span>Variation</span>
            <span>Unit Price</span>
            <span>Quantity</span>
            <span>Total Price</span>
            <span>Action</span>
          </div>

          {cart.map((item, index) => (
            <div className="cart-row" key={index}>
              <div className="cart-product">
                <input type="checkbox" />
                <img src={item.image} alt={item.name} />
                <h4>{item.name}</h4>
              </div>

              <div>Size: {item.selectedSize}</div>

              <div>{item.price}</div>

              <div className="cart-qty">
                <button>-</button>
                <span>{item.quantity}</span>
                <button>+</button>
              </div>

              <div className="cart-total">{item.price}</div>

<button
  className="delete-btn"
  onClick={() => {
    setCart(cart.filter((_, i) => i !== index));
  }}
>
  Delete
</button>

            </div>
          ))}

          <div className="cart-footer">
  <div className="cart-summary">
    Total:
    <span>
      ₱
      {cart.reduce(
        (total, item) =>
          total +
          parseInt(item.price.replace("₱", "")) * item.quantity,
        0
      )}
    </span>
  </div>

  <button className="checkout-btn">
    Proceed to Checkout
  </button>
</div>
        </>
      )}
    </div>
  </div>
)}

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
