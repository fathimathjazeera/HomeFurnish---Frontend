import React from 'react';
import '../styles/arrivals.css';
import lamp from '../assets/lamp.jpg';
import table from '../assets/table.jpg';
import sofa from '../assets/sofa.jpg';
import rug from '../assets/rug.jpg';
import vase from '../assets/plant-vase.jpg';
import stool from '../assets/stool.jpg';
import mirror from '../assets/mirror.jpg';
import sofa2 from '../assets/sofa2.jpg';
import heart from '../assets/heart.png';
import shoppingcart from '../assets/shopping-cart.png';


const NewArrivals = () => {
  return (
    <div>
      <p className="new-arrivals-title">New Arrivals</p>
      <div className="arrivals-container">
        <div>
          <div className="arrivals-image-container">
            <img src={sofa2} alt="" className="arrivals-image" />
            <div className="wishlist-icon-container">
              <img src={heart} alt="" className="wishlist-icon" />
            </div>
            <div className="add-cart-container">
              <img src={shoppingcart} alt="" className="add-cart-icon" />
            </div>
          </div>
          <div className="arrivals-detail">
            <p>Comfy craft</p>
            <p>$200</p>
          </div>
        </div>
        <div>
          <div className="arrivals-image-container">
            <img src={lamp} alt="" className="arrivals-image" />
            <div className="wishlist-icon-container">
              <img src={heart} alt="" className="wishlist-icon" />
            </div>
            <div className="add-cart-container">
              <img src={shoppingcart} alt="" className="add-cart-icon" />
            </div>
          </div>
          <div className="arrivals-detail">
            <p>Comfy craft</p>
            <p>$200</p>
          </div>
        </div>
        <div>
          <div className="arrivals-image-container">
            <img src={table} alt="" className="arrivals-image" />
            <div className="wishlist-icon-container">
              <img src={heart} alt="" className="wishlist-icon" />
            </div>
            <div className="add-cart-container">
              <img src={shoppingcart} alt="" className="add-cart-icon" />
            </div>
          </div>
          <div className="arrivals-detail">
            <p>Comfy craft</p>
            <p>$200</p>
          </div>
        </div>
        <div>
          <div className="arrivals-image-container">
            <img src={sofa} alt="" className="arrivals-image" />
            <div className="wishlist-icon-container">
              <img src={heart} alt="" className="wishlist-icon" />
            </div>
            <div className="add-cart-container">
              <img src={shoppingcart} alt="" className="add-cart-icon" />
            </div>
          </div>
          <div className="arrivals-detail">
            <p>Comfy craft</p>
            <p>$200</p>
          </div>
        </div>
      </div>
      <div className="arrivals-container">
        <div>
          <div className="arrivals-image-container">
            <img src={rug} alt="" className="arrivals-image" />
            <div className="wishlist-icon-container">
              <img src={heart} alt="" className="wishlist-icon" />
            </div>
            <div className="add-cart-container">
              <img src={shoppingcart} alt="" className="add-cart-icon" />
            </div>
          </div>
          <div className="arrivals-detail">
            <p>Comfy craft</p>
            <p>$200</p>
          </div>
        </div>
        <div>
          <div className="arrivals-image-container">
            <img src={vase} alt="" className="arrivals-image" />
            <div className="wishlist-icon-container">
              <img src={heart} alt="" className="wishlist-icon" />
            </div>
            <div className="add-cart-container">
              <img src={shoppingcart} alt="" className="add-cart-icon" />
            </div>
          </div>
          <div className="arrivals-detail">
            <p>Comfy craft</p>
            <p>$200</p>
          </div>
        </div>
        <div>
          <div className="arrivals-image-container">
            <img src={stool} alt="" className="arrivals-image" />
            <div className="wishlist-icon-container">
              <img src={heart} alt="" className="wishlist-icon" />
            </div>
            <div className="add-cart-container">
              <img src={shoppingcart} alt="" className="add-cart-icon" />
            </div>
          </div>
          <div className="arrivals-detail">
            <p>Comfy craft</p>
            <p>$200</p>
          </div>
        </div>
        <div>
          <div className="arrivals-image-container">
            <img src={mirror} alt="" className="arrivals-image" />
            <div className="wishlist-icon-container">
              <img src={heart} alt="" className="wishlist-icon" />
            </div>
            <div className="add-cart-container">
              <img src={shoppingcart} alt="" className="add-cart-icon" />
            </div>
          </div>
          <div className="arrivals-detail">
            <p>Comfy craft</p>
            <p>$200</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;