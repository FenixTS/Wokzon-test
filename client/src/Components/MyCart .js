import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header from '../Components/Header';
import LogoArea from '../Components/LogoArea';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../baseUrl';

const MyCart = () => {

  // const apiEndpoint = 'http://localhost:3001/cartItems';
  const [cartItems, setCartItems] = useState([]);
  const [productData, setProductData] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState();
  // const [logout, setLogout] = useState(false);
  const userId = 1;
console.log(productData,'productData')


  // auth function
  const navigate = useNavigate();
  React.useEffect(() => {
    const isLoggedIn = localStorage.getItem('auth') !== null; // Check if 'auth' exists in localStorage
    setIsLoggedIn(isLoggedIn);

    if (!localStorage.getItem('auth')) navigate('/register')

  }, []);

  const handleLogin = () => {
    if (!localStorage.getItem('auth')) {
      navigate("/register");
    } else {
      setIsLoggedIn(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('auth');
    window.location.reload();
  };

  // React.useEffect(()=>{
  //   if (!localStorage.getItem('auth')) navigate('/register')
  // },[])

  // const CartItemsId = cartItems.map(cartId => cartId.id );

  useEffect(() => {
    // Fetch user's cart items
    fetch(baseUrl + '/cartItem')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
        
      })
      .then(data => {
        if (!Array.isArray(data)) {
          
          throw new Error('Invalid API response: data is not an array');
        }
        // Filter user's cart items by userId
        const userCartItems = data.filter(item => item.userId === userId);
        // Extract product IDs from cart items
        const productIds = userCartItems.map(item => item.productId);
        // Update cartItems state with user's cart items
        setCartItems(userCartItems);
        
       
        // Fetch product data for each product ID
        const fetchProductDataPromises = productIds.map(productId =>
          fetch(baseUrl + `/productData/${productId}`)
            .then(response => {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              return response.json();
            })
        );

        // Wait for all product data fetch requests to complete
        Promise.all(fetchProductDataPromises)
          .then(productData => {
            // Update productData state with fetched product data
            setProductData(productData);
          })
          .catch(error => {
            console.error('Error fetching product data:', error);
          });
      })
      .catch(error => {
        console.error('Error fetching or processing data:', error);
      });
  }, []); // Empty dependency array to run effect only once


  const cartItemsMap = cartItems.reduce((map, item) => {
    map[item.id] = item;
   
    return map;
  }, {});

  const removeItemFromCart = (productId) => {
    const itemId = cartItemsMap[productId].id;
    // Implement the logic to remove the item from cartItems based on itemId
  };

  const removeItemFromDatabase = (id) => {
    const itemId = cartItemsMap[id].id;
    fetch(baseUrl + `/cartItem/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to delete item from database');
        }
        // If deletion is successful, update cartItems state
        // If deletion is successful, reload the page
        window.location.reload();
        const updatedCartItems = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCartItems);
      })
      .catch(error => {
        console.error('Error removing item from database:', error);
      });
  };

  const updateQuantityInDatabase = (id, newQuantity) => {
    fetch(baseUrl + `/cartItem/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ quantity: newQuantity }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to update quantity in database');
        }
        // If update is successful, update cartItems state
        const updatedCartItems = cartItems.map(item =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        );
        setCartItems(updatedCartItems);
      })
      .catch(error => {
        console.error('Error updating quantity in database:', error);
      });
  };

  // Function to remove item from cart and database


  const updateQuantity = (id, newQuantity) => {
    updateQuantityInDatabase(id, newQuantity);
  };
  return (
    <>
      <Header isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout} />
      <LogoArea />
      <div className="title-breadcrumb">
        <div className="container" style={{ marginTop: "-30px" }}>
          <div className="row">
            <div className="col-md-12">
              <div className="bred-title">
                <h3>Wishlist</h3>
              </div>
              <ol className="breadcrumb">
                <li>
                  <Link to='/'>
                    <button
                      type="button"
                      className="btn btn-default add-cart"
                      style={{ display: 'flex', alignItems: 'center', height: '3.5vh' }}
                    >
                      Home
                    </button>
                  </Link>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div style={{ paddingTop: '40px' }} >
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="headline">
                <h2>Wishlist</h2>
              </div>
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th className="cart-product item">Product</th>
                      <th className="cart-product-name item">Product Name</th>
                      {/* <th className="cart-qty item">Quantity</th> */}
                      <th className="cart-unit item">Unit price</th>
                      <th className="cart-delivery item">Transport info</th>
                      {/* <th className="cart-sub-total last-item">Sub total</th> */}
                      <th className="cart-romove item">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                  {productData.map((item, index) => (
                      <tr key={index}>
                        <td className="cart-image">
                          <a href="#" className="entry-thumbnail">
                            <img src={item.productData.image} alt="" />
                          </a>
                        </td>
                        <td className="cart-product-name-info">
                          <div className="cc-tr-inner">
                            <h4 className="cart-product-description"><a href="#">{item.productData.profession}</a></h4>
                            <div className="cart-product-info">
                              <span className="product-color">Experience :</span><span>{item.productData.experience}</span>
                              <br />
                              <span className="product-color">rating :</span>
                              <div style={{ color: 'orange' }}>
                                {[...Array(item.productData.rating)].map((_, i) => (
                                  <i key={i} className="fa fa-star"></i>
                                ))}
                              </div>
                            </div>
                          </div>
                        </td>
                        {/* <td className="cart-product-quantity">
                          <div className="quant-input">
                            <input
                              type="number"
                              size="4"
                              className="input-text qty text"
                              title="Qty"
                              value={item.quantity}
                              onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                              name="quantity[113]"
                              max="119"
                              min="0"
                              step="1"
                            />
                          </div>
                        </td> */}
                        <td className="cart-product-price"><div className="cc-pr">${item.productData.salary}</div></td>
                        <td className="cart-product-delivery"><div className="cc-pr">Free shipping</div></td>
                        {/* <td className="cart-product-sub-total"><div className="cc-pr">${item.productData.salary * item.productData.quantity}</div></td> */}
                        <td className="remove-item"> 
                            <img
                              src="images/remove.png"
                              alt="Remove"
                              onClick={() => removeItemFromDatabase(item.id)}
                            />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan="7">
                        <div className="shopping-cart-btn">
                          <Link to='/'><button type="button" className="btn btn-default left-cart">Continue Shopping</button></Link>
                          <button
                            type="button"
                            className="btn btn-default right-cart right-margin"
                            onClick={() => cartItems.forEach(item => removeItemFromDatabase(item.id))}>
                            Clear shopping cart
                          </button>
                          {/* <button type="button" className="btn btn-default right-cart">Update shopping cart</button> */}
                        </div>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyCart;
