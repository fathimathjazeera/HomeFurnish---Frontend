import React from 'react';
import '../styles/categories.css';
import living from '../assets/livingroom-category.jpg';
import bedroom from '../assets/bedroom-category.jpg';
import dining from '../assets/dining-category.jpg';
import kitchen from '../assets/kitchen-category.jpg';



const Categories = () => {
  return (
    <div>
      <p className="category-title">Categories</p>
      <div className="categories-container">
        <div className="categories">
          <div className="category-image-container">
            <img src={living} alt="" className="category-image" />
            <div className="image-cover">
              <p className="category-cover-title">Living Room Furniture</p>
            </div>
          </div>
        </div>
        <div className="categories">
          <div className="category-image-container">
            <img src={dining} alt="" className="category-image" />
            <div className="image-cover">
              <p className="category-cover-title">Dining Room Furniture</p>
            </div>
          </div>
        </div>
        <div className="categories">
          <div className="category-image-container">
            <img src={bedroom} alt="" className="category-image" />
            <div className="image-cover">
              <p className="category-cover-title">Bedroom Furniture</p>
            </div>
          </div>
        </div>
        <div className="categories">
          <div className="category-image-container">
            <img src={kitchen} alt="" className="category-image" />
            <div className="image-cover">
              <p className="category-cover-title">Kitchen Furniture</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Categories;