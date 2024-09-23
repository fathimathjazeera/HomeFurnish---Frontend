import React from 'react';
import sofa2 from '../assets/sofa2.jpg';
import sofa3 from '../assets/rug.jpg';
import sofa4 from '../assets/livingroom-category.jpg';
import sofa5 from '../assets/sofa2.jpg';
import '../styles/similar.css';

const SimilarProducts = () => {
  return (
    <div className="similar-container">
      <p className="similar-product-title">Similar Products</p>
      <div className="similar-products-container">
        <div className="similar-products">
          <img src={sofa2} alt="" className="similar-product-image" />
        </div>
        <div className="similar-products">
          <img src={sofa3} alt="" className="similar-product-image" />
        </div>
        <div className="similar-products">
          <img src={sofa4} alt="" className="similar-product-image" />
        </div>
        <div className="similar-products">
          <img src={sofa5} alt="" className="similar-product-image" />
        </div>
      </div>
    </div>
  );
};

export default SimilarProducts;
