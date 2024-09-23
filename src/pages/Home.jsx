import React from 'react';
import Navbar from '../components/Navbar.jsx';
import '../styles/home.css';
import chair from '../assets/chair.png';
import light from '../assets/light.png';
import latestchair from '../assets/latestchair.png';
import brand1 from '../assets/brand1.png';
import brand2 from '../assets/brand2.webp';
import brand3 from '../assets/brand3.svg';
import brand4 from '../assets/brand4.svg';
import brand5 from '../assets/brand5.svg';
import brand6 from '../assets/brand6.svg';
import brand7 from '../assets/brand7.svg';
import brand8 from '../assets/brand8.png';
import brand9 from '../assets/brand9.png';
import brand10 from '../assets/brand10.svg';
import brand11 from '../assets/brand11.webp';
import brand12 from '../assets/brand12.svg';
import Categories from '../components/Categories.jsx';
import NewArrivals from '../components/NewArrivals.jsx';
import Delivery from '../components/Delivery.jsx';
import Footer from '../components/Footer.jsx';

const Home = () => {
  return (
    <>
      <div className="home-container">
        <Navbar />
        <div className="main-section">
          <div className="left-main">
            <p className="main-section-title">Interior Needs</p>
            <p className="main-section-sub-title">
              Various new collections of furniture to decorate the corner of
              your house.
            </p>
            <button className="shop-now-button">Shop Now</button>
          </div>
          <div className="right-main">
            <img src={chair} alt="" />
          </div>
        </div>
        <div className="brand-container">
          <p className="brand-title">Various brands have used our products</p>
          <div className="brands">
            <div className="brand-track">
              <div className="brand">
                <img src={brand1} alt="" className="brand-image" />
              </div>
              <div className="brand">
                <img src={brand2} alt="" className="brand-image" />
              </div>
              <div>this</div>
              <div className="brand">
                <img src={brand3} alt="" className="brand-image" />
              </div>
              <div className="brand">
                <img src={brand4} alt="" className="brand-image" />
              </div>
              <div className="brand">
                <img src={brand5} alt="" className="brand-image" />
              </div>
              <div className="brand">
                <img src={brand6} alt="" className="brand-image" />
              </div>
              <div className="brand">
                <img src={brand7} alt="" className="brand-image" />
              </div>
              <div className="brand">
                <img src={brand8} alt="" className="brand-image" />
              </div>
              <div className="brand">
                <img src={brand9} alt="" className="brand-image" />
              </div>
              <div className="brand">
                <img src={brand10} alt="" className="brand-image" />
              </div>
              <div className="brand">
                <img src={brand11} alt="" className="brand-image" />
              </div>
              <div className="brand">
                <img src={brand12} alt="" className="brand-image" />
              </div>
              <div className="brand">
                <img src={brand6} alt="" className="brand-image" />
              </div>
              <div className="brand">
                <img src={brand8} alt="" className="brand-image" />
              </div>
              <div className="brand">
                <img src={brand4} alt="" className="brand-image" />
              </div>
            </div>
          </div>
        </div>
        <div className="latest-products">
          <div className="left-latest">
            <div className="inner-left">
              <p className="latest-title">Living Room</p>
              <p className="latest-sub-title">The best foam padded chair</p>
              <button className="latest-shop-button">Shop Now</button>
            </div>
            <div className="inner-right">
              <img src={latestchair} alt="" className="latest-chair" />
            </div>
          </div>
          <div className="right-latest">
            <div className="inner-left">
              <p className="latest-title">Living Room</p>
              <p className="latest-sub-title">Latest model chandelier</p>
              <button className="latest-shop-button">Shop Now</button>
            </div>
            <div className="inner-right">
              <img src={light} alt="" className="chandelier-light" />
            </div>
          </div>
        </div>
        <Categories />
        <NewArrivals />
        <Delivery />
        <Footer />
      </div>
    </>
  );
};

export default Home;
