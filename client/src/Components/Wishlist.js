import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import Header from './Header';
import LogoArea from './LogoArea';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect} from 'react';
import { baseUrl } from '../baseUrl';




const Wishlist = () => {
    const [productData, setProductData] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState();




    useEffect(() => {
        // Fetch data when the component mounts
        fetch(baseUrl +'/productData')
          .then(response => response.json())
          .then(data => setProductData(data))
          .catch(error => console.error('Error fetching data:', error));
      }, []); // Empty dependency array to ensure effect runs only once on mount
      
      const navigate = useNavigate();
      const [id, setId] = useState([]);
      const handleProductClick = (id) => {
        setId(id);
        console.log(id, 'product list page ')
        navigate((`/Product_detail`), { state: { id: id } });
      };




      // auth function

// const navigate = useNavigate();
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

    
    return (
        <>
        <Header isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout} />
        <LogoArea/>
      
            <div class="title-breadcrumb">
                <div class="container" style={{marginTop:"-30px"}}>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="bred-title" >
                                <h3>Wishlist</h3>
                            </div>
                            <ol class="breadcrumb">
                                <li>
                                <Link to='/'>                                       
                                            <button 
                                            type="button" 
                                            className="btn btn-default add-cart"
                                            style={{display: 'flex', alignItems: 'center', height: '3.5vh'}}
                                            >Home</button>
                                      
                                    </Link>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wish-area section-padding" style={{ marginTop: '-50px' }}>
                <div className="container">
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
                        <h4><a href="single-product.html">{product.name}   </a><br /><br />{[...Array(5)].map((_, i) => (
                          <i key={i} className="fa fa-star"></i>
                        ))}</h4>
                      </div>
                      <div className="product-wid-price" style={{ marginTop: '20px', display: 'flex', alignItems: 'center', }}>
                        <ins>₹{product.price}</ins>
                      </div>
                    </div>
                    <div>

                      <div className="col-md-12" style={{ bottom: '40px' }} >
                        <div className="add_cart-contact">
                          <button type="button" className="btn btn-primary" >Add to cart</button>
                          <button type="button" className="btn btn-success">Contact</button>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>
              ))}
            </div>
          
                    <div className="row">
                        <div className="col-md-12">
                            <div className="wish-button">
                                <button type="button" className="btn btn-default add-cart">Add all to the cart</button>
                                <button type="button" className="btn btn-default clear-list">Clear the list</button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>


        <Footer/>
        </>
    );
};

export default Wishlist;
