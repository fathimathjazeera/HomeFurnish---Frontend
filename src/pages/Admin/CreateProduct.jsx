import React, { useState } from 'react';
import axios from 'axios'; // Make sure you import axios
import '../../styles/createproduct.css';
import UploadProduct from '../../cloudinary/UploadProduct.jsx';
import { useNavigate } from 'react-router-dom'; // Assuming you are using react-router-dom for navigation

const CreateProduct = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const navigate = useNavigate(); // Use the navigate hook from react-router-dom

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let imageUrl = '';
      if (image) {
        // Await the result of the image upload
        imageUrl = await UploadProduct(image);
      }

      // Submit product data
      await axios.post(
        'http://localhost:7000/api/products',
        {
          name,
          description,
          price,
          category,
          imageUrl, // Add the imageUrl in the request
        }
      );

      // Reset the form and navigate to home page
      event.target.reset();
      navigate('/'); // Navigate to the home page or another route after submission
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  return (
    <div className="product-form-container">
      <h2 className="form-title">Create Product</h2>
      <form onSubmit={handleSubmit} className="product-form">
        <div className="input-container">
          <label htmlFor="name">Product Name</label>
          <input
            type="text"
            id="name"
            className="form-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter product name"
            required
          />
        </div>

        <div className="input-container">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            className="form-input"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter product description"
            required
          />
        </div>

        <div className="input-container">
          <label htmlFor="price">Price ($)</label>
          <input
            type="number"
            id="price"
            className="form-input"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter product price"
            required
          />
        </div>

        <div className="input-container">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            className="form-input"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select category</option>
            <option value="Living Room">Living Room</option>
            <option value="Dining Room">Dining Room</option>
            <option value="Bedroom">Bedroom</option>
            <option value="Kitchen">Kitchen</option>
          </select>
        </div>

        <div className="input-container">
          <label htmlFor="image">Product Image</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            className="form-input"
            onChange={handleImageChange}
            required
          />
        </div>

        {imagePreview && (
          <div className="image-preview-container">
            <img src={imagePreview} alt="Preview" className="image-preview" />
          </div>
        )}

        <button type="submit" className="submit-button">
          Create Product
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
