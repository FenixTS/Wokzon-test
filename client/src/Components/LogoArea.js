import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Location from '../Components/Location';
import { baseUrl } from '../baseUrl';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const LogoArea = ({ onSearchInputChange, searchTerm }) => {
  const [cartItems, setCartItems] = useState([]);
  const userId = (localStorage.getItem('user'));

  fetch(baseUrl + '/cartItem')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // Parse response body as JSON
    })
    .then(data => {
      const userCartItems = data.filter(item => item.userId === userId);
      const cartItemCount = userCartItems.length; // Calculate the length of the data array
      setCartItems(cartItemCount); // Update cartItems state with the count
    })
    .catch(error => {
      console.error('Error fetching cart items:', error);
    });


  return (

    <div className="logo_area" >

      <div className="container" style={{ marginTop: "-30px" }} >
        <div className="row">
          <div className="logo-search-wishlist">

            <a href="index.html">
              <img src="images/logo.png" style={{ width: '250px', height: '60px', marginTop: '-10px' }} alt="" />
            </a>

            <div className='location-input-button' >

              <div className="location" >
                <Location />
              </div>
              <div>
                <input
                  className="search-input"
                  placeholder="Search here..."
                  type="text"
                  value={searchTerm}
                  onChange={onSearchInputChange} />
              </div>
              <Link to="/" className="search-btn" >
                <FontAwesomeIcon icon={faSearch} />
              </Link>
            </div>


            <Link to="/cart-page">
              <div className='list-count'>
                <div className="wishlist-btn">Wishlist </div>
                <div className='wishlist-count'>{cartItems}</div>
              </div>
            </Link>
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
