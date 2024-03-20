import React from 'react';

const Footer = () => {
  return (
    <footer className="entire_footer">
      {/* FOOTER-TOP-AREA */}
      <div className="footer_top_area footer-padding">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 col-xs-12">
              <div className="footer_top_single">
                <i className="fa fa-plane"></i>
                <h4>Free Shipping on order over $1000</h4>
                <p>It's time to meet the Muppets on the Muppet Show tonight. And we know Flipper.</p>
              </div>
            </div>
            <div className="col-sm-4 col-xs-12">
              <div className="footer_top_single">
                <i className="fa fa-gift"></i>
                <h4>unlimited gifts on every order</h4>
                <p>It's time to meet the Muppets on the Muppet Show tonight. And we know Flipper.</p>
              </div>
            </div>
            <div className="col-sm-4 col-xs-12">
              <div className="footer_top_single">
                <i className="fa fa-exchange"></i>
                <h4>100% money back guarantee</h4>
                <p>It's time to meet the Muppets on the Muppet Show tonight. And we know Flipper.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FOOTER-TOP-AREA:END */}

      {/* FOOTER-WIDGET-AREA */}
      <div className="footer-widget">
        <div className="ovelay">
          <div className="container">
            <div className="row">
              <div className="col-sm-4 col-xs-12">
                <div className="widget_logo">
                  <a href="index.html">   <img src="images/footer_logo.png" style={{ width: '250px', height: '60px', marginTop: '-10px' }} alt="" /></a>
                  <ul>
                    <li>
                      <div className="wl_left">
                        <i className="fa fa-location-arrow"></i>
                      </div>
                      <div className="wl_right">
                        <a href="#"><span>Address :</span> 09 Ecommerceshop, Design Street, Victoria, Australia</a>
                      </div>
                    </li>
                    <li>
                      <div className="wl_left">
                        <i className="fa fa-envelope-o"></i>
                      </div>
                      <div className="wl_right">
                        <a href="#"><span>E-mail :</span> Info@Ecommerceshop.com</a>
                      </div>
                    </li>
                    <li>
                      <div className="wl_left">
                        <i className="fa fa-phone"></i>
                      </div>
                      <div className="wl_right">
                        <a href="#"><span>phone :</span> +01 123 456 78</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div className="col-sm-2 col-xs-12">
                <div className="widget_single">
                  <h4><a href="#">My Account</a></h4>
                  <ul>
                    <li><a href="profile.html">My Account</a></li>
                    <li><a href="wishlist.html">Wishlist</a></li>
                    <li><a href="cart-page.html">Shopping Cart</a></li>
                    <li><a href="checkout.html">Checkout</a></li>
                  </ul>
                </div>
              </div> */}
              {/* <div className="col-sm-2 col-xs-12">
                <div className="widget_single">
                  <h4><a href="#">Information</a></h4>
                  <ul>
                    <li><a href="#">About Our Shop</a></li>
                    <li><a href="#">Top Seller</a></li>
                    <li><a href="#">Special Products</a></li>
                    <li><a href="#">Manufacturers</a></li>
                    <li><a href="#">Secure Shopping</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Delivery Information</a></li>
                  </ul>
                </div>
              </div> */}
              <div className="col-sm-2 col-xs-12">
                <div className="widget_single">
                  <h4><a href="#">Our Support</a></h4>
                  <ul>
                    <li><a href="contact-us.html">Contact Us</a></li>
                    {/* <li><a href="#">Shipping & Taxes</a></li> */}
                    <li><a href="#">Return Policy</a></li>
                    <li><a href="#">Careers</a></li>
                    {/* <li><a href="#">Affiliates</a></li> */}
                    {/* <li><a href="#">Gift Vouchers</a></li> */}
                  </ul>
                </div>
              </div>
              <div className="col-sm-2 col-xs-12">
                <div className="widget_single">
                  <h4><a href="#">Our Services</a></h4>
                  <ul>
                    <li><a href="#">Get reach profesional</a></li>
                    {/* <li><a href="#">International Shopping</a></li> */}
                    <li><a href="#">Best Customer Support</a></li>
                    {/* <li><a href="#">Easy Replacement</a></li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FOOTER-WIDGET-AREA:END */}

      {/* FOOTER-AREA */}
      <div className="footer_area">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="footer_text">
                <p>&copy;2015 <a href="index.html">E-Comshop</a>. All rights reserved</p>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="footer_right">
                <ul>
                  <li><a href="#"><img src="images/mc.png" alt="" /></a></li>
                  <li><a href="#"><img src="images/visa.png" alt="" /></a></li>
                  <li><a href="#"><img src="images/crr.png" alt="" /></a></li>
                  <li><a href="#"><img src="images/disco.png" alt="" /></a></li>
                  <li><a href="#"><img src="images/bank.png" alt="" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FOOTER-AREA:END */}
    </footer>
  );
};

export default Footer;
