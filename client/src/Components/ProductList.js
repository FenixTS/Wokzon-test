import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import CategoriesMenu from './CategoriesMenu';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import LogoArea from '../Components/LogoArea';
import Footer from './Footer';
import axios from 'axios';
import FuzzySet from 'fuzzyset.js';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import Button from '@material-ui/core/Button';
import Typography from "@mui/material/Typography";
import Popover from "@mui/material/Popover";
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Contact from './Contact';



const ProductList = () => {
  const [productData, setProductData] = useState([]);
  const [bestWorker, setBestWorker] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProductIds, setFilteredProductIds] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [contactData, setContactData] = useState([]);
  const [id, setId] = useState();

  console.log(selectedProductId, 'prod')

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

  // search function---------------------------------------


  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await axios.get('http://localhost:3001/productData');
        const searchQuery = searchTerm.trim().toLowerCase().replace(/\s/g, '');
        const productNames = response.data.map((product) => product.name.toLowerCase());

        // Create a fuzzy set with product names
        const fuzzySet = FuzzySet(productNames);
        const correctedSearchTerm = fuzzySet.get(searchQuery, null, 0.5); // Get the closest match

        if (correctedSearchTerm && correctedSearchTerm[0][0] > 0.5) {
          setSearchTerm(correctedSearchTerm[0][1]); // Update searchTerm with the corrected term
        }

        const filteredResults = response.data.filter(
          (result) =>
            result.name
              .toLowerCase()
              .replace(/\s/g, '')
              .includes(searchTerm.toLowerCase().replace(/\s/g, ''))
        );
        setFilteredProductIds(filteredResults.map((result) => result.id));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Only fetch results if searchTerm is not empty
    if (searchTerm.trim() !== '') {
      fetchSearchResults();
    } else {
      // Clear results if searchTerm is empty
      setFilteredProductIds([]);
    }
  }, [searchTerm]);

  useEffect(() => {
    // Fetch product data for each product ID
    const fetchProductDataPromises = filteredProductIds.map((productId) =>
      fetch(`http://localhost:3001/productData/${productId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
    );

    // Wait for all product data fetch requests to complete
    Promise.all(fetchProductDataPromises)
      .then((productData) => {
        // Update productData state with fetched product data
        setProductData(productData);
      })
      .catch((error) => {
        console.error('Error fetching product data:', error);
      });
  }, [filteredProductIds]);

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);





  };
  // // contact button onclick function

  const handleButtonClick = (productId) => {

    setSelectedProductId(productId);
  };


  return (
    <>
      <Header isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout} />
      <LogoArea searchTerm={searchTerm} onSearchInputChange={handleSearchInputChange} />

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
                          <div className="add_cart-contact" style={{ marginLeft: '-20px', width: '250px', height: '35px', display: 'flex', justifyContent: 'center', }}>

                            <Button
                              style={{ marginRight: '20px', height: '35px', fontSize: '10px' }}
                              color="primary" variant="contained" key={product.id}
                              onClick={() => handleCartClick(product.id)}
                              className="btn btn-primary">
                              Add to Wishlist
                            </Button>
                            <PopupState variant="popover" popupId="demo-popup-popover">
                              {(popupState) => (
                                <div>
                                  <Button
                                    style={{
                                      height: "35px",
                                      backgroundColor: "#00c853",
                                      fontSize: "12px",
                                    }}
                                    variant="contained"
                                    className="btn btn-primary"
                                    // onClick={() => handleButtonClick(product.id)}
                                    {...bindTrigger(popupState)}
                                    onClick={(event) => {
                                      handleButtonClick(product.id);
                                      popupState.open(event); // Open the popover manually after handling the click
                                    }}
                                  >
                                    Contact
                                  </Button>
                                  <Popover
                                    {...bindPopover(popupState)}
                                    anchorOrigin={{
                                      vertical: "bottom",
                                      horizontal: "center",
                                    }}
                                    transformOrigin={{
                                      vertical: "top",
                                      horizontal: "center",
                                    }}
                                  >
                                    <Typography sx={{ p: 2 }}>
                                      
                                    <div  style={{ display: 'flex', flexDirection: 'column', lineHeight: '35px', padding: '30px' }}>
                                      <div><FontAwesomeIcon icon={faUser} /> {product.personName}</div>
                                      <div><FontAwesomeIcon icon={faPhone} style={{ color: "black" }} /> {product.phoneNumber}</div>
                                      <div><FontAwesomeIcon icon={faWhatsapp} style={{ color: '#23f207', height: '20px' }} /> {product.whatsappNumber}</div>
                                      <div><FontAwesomeIcon icon={faEnvelope} style={{ color: "#1b1f17" }} /> {product.email}</div>
                                      <div><FontAwesomeIcon icon={faLocationDot} style={{ color: "skyblue" }} /> {product.distric},{product.state}</div>
                                      </div>
                                    </Typography>
                                  </Popover>
                                </div>
                              )}
                            </PopupState>


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
      <Footer />
    </>
  );
};

export default ProductList;



