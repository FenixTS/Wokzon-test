import { Link } from 'react-router-dom';
import Header from './Header';
import LogoArea from './LogoArea';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const Checkout = () => {
    const [isLoggedIn, setIsLoggedIn] = useState();


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


    return (
        <>
        <Header isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout}/>
        <LogoArea/>
        <div class="title-breadcrumb">
                <div class="container" style={{marginTop:"-30px"}}>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="bred-title">
                                <h3>Checkout_page</h3>
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
        <div style={{paddingTop:'40px'}} >
            <div className="container">
                <div className="col-md-5 col-sm-5 col-xs-12">
                    <div className="headline">
                        <h2>Order summary</h2>
                    </div>
                    <div className="summary">
                        <h2>Products<span>Total</span></h2>
                        <p>Fabulas T-shirt<span>$75</span></p>
                        <p>Awesome t-Shirt<span>$75</span></p>
                        <h3 className="line">Cart subtotal<span>$155</span></h3>
                        <h3 className="line2">Shipping<span className="mcolor">Free shipping</span></h3>
                        <h5>Order Total Price<span>$155</span></h5>
                     </div>  
                     <div> 
                        <section className="payment-area">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <div className="headline">
                                            <h2>Select Payment Mode</h2>
                                        </div>
                                        <div className="payment">
                                            <div className="bank">
                                                <input type="radio" name="optradio" />
                                                Direct Bank Transfer
                                                <br />
                                                <div className="b_text">
                                                    <p>
                                                        Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order wont be shipped
                                                        <br /> until the funds have cleared in our account.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="bank-radio">
                                                <label>
                                                    <input type="radio" name="optradio" />
                                                    Cash On Delivery
                                                </label>
                                                <br />
                                                <label>
                                                    <input type="radio" name="optradio" />
                                                    Paypal
                                                    <img src="images/master-card.png" alt="" />
                                                </label>
                                                <br />
                                                <button type="button" className="btn btn-default right-cart">Place order</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>

    );
};

export default Checkout;
