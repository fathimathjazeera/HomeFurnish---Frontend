import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../styles/productList.css'; 
import { useNavigate } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:7000/api/products'); 
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error.message);
      }
    };

    fetchProducts();
  }, []);

 
  const handleDelete = async (productId) => {
    try {
      await axios.delete(`http://localhost:7000/api/products/${productId}`);
      setProducts(products.filter(product => product.id !== productId)); // Update UI
      alert('Product deleted successfully');
    } catch (error) {
      console.error('Error deleting product:', error.message);
    }
  };


  const handleEdit = (productId) => {
    navigate(`/edit-product/${productId}`); 
  };


  return (
    <div className="product-list-container">
      <h2 className="table-title">Product List</h2>
      <table className="product-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <img src={product.image} alt={product.name} className="product-image" />
              </td>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>{product.category}</td>
              <td>
                <button className="edit-button" onClick={() => handleEdit(product.id)}>Edit</button>
                <button className="delete-button" onClick={() => handleDelete(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};



export default ProductList;