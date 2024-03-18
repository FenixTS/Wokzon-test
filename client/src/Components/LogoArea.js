import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Location from '../Components/Location';
import { baseUrl } from '../baseUrl';


const LogoArea = ({ onSearchInputChange, searchTerm }) => {
  const [cartItems, setCartItems] = useState([]);

  fetch(baseUrl + '/cartItem')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // Parse response body as JSON
    })
    .then(data => {
      const cartItemCount = data.length; // Calculate the length of the data array
      setCartItems(cartItemCount); // Update cartItems state with the count
    })
    .catch(error => {
      console.error('Error fetching cart items:', error);
    });


  return (

    <div className="logo_area" >
      
      <div className="container" style={{ marginTop: "-30px" }} >
        <div className="row">
          <div className="col-sm-4 col-md-4 col-xs-12">
            <div className="logo">
              <a href="index.html">
                <img src="images/logo.png" style={{ width: '250px', height: '60px', marginTop: '-10px' }} alt="" />
              </a>
            </div>
          </div>
          <div className="search-area" style={{ height: '45px', }}>
            <ul className="categories-filter ">
              <Location />
            </ul>
            <input
              className="search-field"
              placeholder="Search here..."
              type="text"
              value={searchTerm}
              onChange={onSearchInputChange} />
            <a className="search-button" href="#" style={{}}></a>
          </div>
          <div className="menu_right">
            <Link to="/cart-page">Wishlist</Link>
            <span>{cartItems}</span>
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>
    // </div>
    // </div>
  );
};

export default LogoArea;
