import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header from './Header';
import LogoArea from './LogoArea';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import { ImageBaseUrl, baseUrl } from '../baseUrl';

const MyCart = () => {

  // const apiEndpoint = 'http://localhost:3001/cartItems';
  const [cartItems, setCartItems] = useState([]);
  const [productData, setProductData] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [id, setId] = useState();
  const userId = (localStorage.getItem('user'));



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
    const itemId = cartItemsMap[productId]._id;
  };

  const handleProductClick = (id) => {
    setId(id);
    console.log(id, 'product list page ')
    navigate((`/Profession_detail`), { state: { id: id } });
  };
    
        

  const removeAllItemFromDatabase = (id) => {
    fetch(baseUrl + `/cartItem/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to delete item from database');
        }
        window.location.reload();
      })
      .catch(error => {
        console.error('Error removing item from database:', error);
      });
  };
  

  const removeItemFromDatabase = (id) => {
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
        const cartItem = data.find(item => item.productId === id);
        
        if (!cartItem) {
          throw new Error('Item not found in cart');
        }
        const itemId = cartItem._id;
        
        fetch(baseUrl + `/cartItem/${itemId}`, {
          method: 'DELETE',
        })
          .then(response => {
            if (!response.ok) {
              throw new Error('Failed to delete item from database');
            }
            window.location.reload();
          })
          .catch(error => {
            console.error('Error removing item from database:', error);
          });
      })
      .catch(error => {
        console.error('Error fetching cart items:', error);
      });
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
                <a href="/">
                    <button
                      type="button"
                      className="btn btn-default add-cart"
                      style={{ display: 'flex', alignItems: 'center', height: '3.5vh' }}
                    >
                      Home
                    </button>
                  </a>
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
                      <th className="cart-product item">profesional image</th>
                      <th className="cart-product-name item">profession Detail</th>    
                      <th className="cart-unit item">salary</th>
                      <th className="cart-romove item">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                  {productData.map((item, index) => (
                      <tr key={index}>
                        <td className="cart-image">
                          <a  className="entry-thumbnail">
                            <img 
                            onClick={() => handleProductClick(item._id)}
                            src={ImageBaseUrl + item.imagePath}
                             alt=""style={{height:'200px', width: '200px'}} />
                          </a>
                        </td>
                        <td className="cart-product-name-info">
                          <div className="cc-tr-inner">
                            <h4 className="cart-product-description"><a href="#">{item.profession}</a></h4>
                            <div className="cart-product-info">
                              <span className="product-color">Experience :</span><span>{item.experience}</span>
                              <br />
                              <span className="product-color">rating :</span>
                              <div style={{ color: 'orange' }}>
                                {[...Array(item.rating)].map((_, i) => (
                                  <i key={i} className="fa fa-star"></i>
                                ))}
                              </div>
                            </div>
                          </div>
                        </td>
                      
                        <td className="cart-product-price"><div className="cc-pr">${item.salary}</div></td>                   
                        <td className="remove-item"  style={{display:"flex",alignItems:"center",justifyContent:"center"}}> 
                            <img
                              src="images/remove.png"
                              alt="Remove"
                              onClick={() => removeItemFromDatabase(item._id)}
                            />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan="7">
                        <div className="shopping-cart-btn">
                        <a href="/">
                          <button type="button" className="btn btn-default left-cart">Go to home</button>
                          </a>
                          <button
                            type="button"
                            className="btn btn-default right-cart right-margin"
                            onClick={() => cartItems.forEach(item => removeAllItemFromDatabase(item._id))}>
                            Clear All wishlist
                          </button>
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