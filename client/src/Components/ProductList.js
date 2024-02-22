import React from 'react';
import { Link } from 'react-router-dom';
import CategoriesMenu from './CategoriesMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import LogoArea from '../Components/LogoArea';
import Footer from './Footer';



const ProductList = () => {
  const [productData, setProductData] = useState([]);
  const [bestWorker, setBestWorker] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [id, setId] = useState();
  const userId = 1;



  useEffect(() => {
    // Fetch data when the component mounts
    fetch('http://localhost:3001/productData')
      .then(response => response.json())
      .then(data => setProductData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Empty dependency array to ensure effect runs only once on mount


  useEffect(() => {
    // Fetch data when the component mounts
    fetch('http://localhost:3001/bestWorker')
      .then(response => response.json())
      .then(data => setBestWorker(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Empty dependency array to ensure effect runs only once on mount

  const navigate = useNavigate();

  const handleProductClick = (id) => {
    setId(id);
    console.log(id, 'product list page ')
    navigate((`/Product_detail`), { state: { id: id } });
  };




  const handleCartClick = (productId) => {
    // Find the product with the given ID
    const productToAdd = productData.find(product => product.id === productId);
    // If the product is found, add it to the cart
    if (productToAdd) {
      addToCart(productId); // Pass productId to addToCart function
    } else {
      console.error(`Product with ID ${productId} not found.`);
    }
  };

  // Function to add item to cart
  const addToCart = (productId) => {
    const cartItem = {
      id: Math.random().toString(36).substr(2, 9), // Generate a random ID
      userId: userId,
      productId: productId,
      quantity: 1
    };

    // Make a POST request to add the product to the cart
    fetch('http://localhost:3001/cartItems', {
      method: 'POST',
      headers: {
        // 'Content-Type': 'application/json'
      },
      body: JSON.stringify(cartItem)
    })
      .then(response => {
        if (response.ok) {
          navigate((`/cart-page`))
          console.log('Product successfully added to cart');
          // Optionally, update the UI or perform any additional actions after successful addition
        } else {
          console.error('Failed to add product to cart');
        }
      })
      .catch(error => {
        console.error('Error occurred while adding product to cart:', error);
      });
  };
// for change toggle login logout
  React.useEffect(() => {
    const isLoggedIn = localStorage.getItem('auth') !== null; // Check if 'auth' exists in localStorage
    setIsLoggedIn(isLoggedIn);
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


  return (
    <>
    <Header isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout} />
        <LogoArea /> 
       
    <div className="product-list-area section-padding">
      <div className="container">
        <div className="row">
          {/* Best Sellers Carousel */}
          <div className="col-md-3 col-sm-3 col-xs-12">
            <CategoriesMenu />
            <div className="best-sell">
              <h3>Best Worker</h3>
              <div id="plCarousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner" role="listbox">
                  {bestWorker.map((product, index) => (
                    <div key={index} className={`item ${index === 0 ? 'active' : ''}`}>
                      <div className="single-wid-product sel-pd">
                        <a href="#"><img src={product.image} alt="" className="product-thumb" /></a>
                        <h2><a href="single-product.html">{product.name}</a></h2>
                        <div className="product-wid-rating">
                          {[...Array(5)].map((_, i) => (
                            <i key={i} className="fa fa-star"></i>
                          ))}
                        </div>
                        <div className="product-wid-price">
                          <ins>{product.price}</ins>

                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <a className="left carousel-control" href="#plCarousel" role="button" data-slide="prev">
                  <i className="fa fa-angle-left"></i>
                </a>
                <a className="right carousel-control" href="#plCarousel" role="button" data-slide="next">
                  <i className="fa fa-angle-right"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Product Display */}
          <div className="col-md-9 col-sm-9 col-xs-12">
            <div className="row" >
              {/* Sample product items */}
              {productData.map(product => (
                <div key={product.id} className="col-md-4 col-sm-4 col-xs-12 "  >
                  <div className="product-single "  >

                    <Link to={{ pathname: `/Product_detail`, state: { id: product.id } }} >
                      <img
                        src={product.image}
                        onClick={() => handleProductClick(product.id)}
                        alt="#"
                        style={{ width: '250px', height: '250px' }}
                      />
                    </Link>

                    <div className="tag new">
                      <span><FontAwesomeIcon icon={faPhone} /></span>
                    </div>

                    <div className='productName-star' >
                      <div className="hot-wid-rating"  >
                        <h4><a href="/Product_detail">{product.name}   </a><br /><br />

                          {[...Array(product.rating)].map((_, i) => (
                            <i key={i} className="fa fa-star"></i>
                          ))}
                        </h4>
                      </div>
                      <div className="product-wid-price" >
                        <ins>₹{product.price}</ins>
                      </div>
                    </div>
                    <div>

                      <div className="col-md-12" style={{ bottom: '40px' }} >
                        <div className="add_cart-contact">
                          {/* <button type="button" className="btn btn-primary"  onClick={() => handleCartClick(product.id)}>Add to cart</button> */}

                          <button
                            key={product.id}
                            type="button"
                            className="btn btn-primary"
                            onClick={() => handleCartClick(product.id)}
                          >
                            Add to cart
                          </button>


                          <button type="button" className="btn btn-success">Contact</button>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ProductList;



