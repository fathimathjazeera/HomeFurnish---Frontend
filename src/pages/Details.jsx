import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/details.css';
import sofa from '../assets/sofa.jpg';
import SimilarProducts from '../components/SimilarProducts';
import Footer from '../components/Footer';

const Details = () => {
  return (
    <>
      <Navbar />
      <div className="details-container">
        <div className="product-detail-container">
          <div className="product-detail-left">
            <img src={sofa} alt="" className="product-detail-image" />
          </div>
          <div className="product-detail-right">
            <p className="product-detail-title">
              Complete set of sofa, pillows and bed sheets
            </p>
            <p className='product-review'>★ ★ ★ ★ ★ ( 1 review )</p>
            <p className="product-price">$75.00</p>
            <p>
              <span>Stok :</span>18
            </p>
            <p>
              <span>SKU :</span> BA65
            </p>
            <p>
              <span>Categories :</span> Chair, New Arrivals, Special
            </p>
            <p>
              <span>Tags :</span> Black, Chair
            </p>
            <p className="product-description">
              In order to sit comfortably for long periods, people need freedom
              of movement. The Form rocking chair has a molded plastic shell
              with a wide, curved seat, which gives plenty of opportunity for
              changing one’s sitting position.
            </p>
          </div>
        </div>
      </div>
      <SimilarProducts />
      <Footer />
    </>
  );
};

export default Details;