import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Location from '../Components/Location';


const LogoArea = ({ onSearchInputChange ,searchTerm}) => {
  const [cartItems, setCartItems] = useState([]);
  
  fetch('http://localhost:3001/cartItems')
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
          <div className="col-sm-8 col-md-8 col-xs-12">
            <div className="search-area"  style={{ height: '45px', }}>
              <form>
                <div className="control-group">

                  <ul className="categories-filter animate-dropdown">
                    <li className="dropdown">
                      {/* <a className="dropdown-toggle" data-toggle="dropdown" href="#"> */}
                    <Location/>
                        {/* <FontAwesomeIcon icon={faLocationDot} style={{ marginRight: '10px' }} />
                        Location
                        <b className="caret"></b> */}
                      {/* </a> */}
                    </li>
                  </ul>
                  {/* <input className="search-field" placeholder="Search here..." /> */}
                  <input
                    className="search-field"
                    placeholder="Search here..."
                    type="text"
                    value={searchTerm}
                    onChange={onSearchInputChange } />
                  <a className="search-button" href="#" style={{ height: '43px', }}></a>
                </div>
              </form>
            </div>
            <div>
              <div className="menu_right">
                <Link to="/cart-page">Wishlist</Link>
                <span>{cartItems}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoArea;
