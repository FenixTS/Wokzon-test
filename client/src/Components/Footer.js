import React from 'react';

const Footer = () => {
  return (
    <footer className="entire_footer">
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
                        <a href="#"><span>Address :</span> Aharathu vilai,<br></br>kanjikuzhi,kalkulam,<br></br>kanyakumari,<br></br>TamilNadu,629169</a>
                      </div>
                    </li>
                    <li>
                      <div className="wl_left">
                        <i className="fa fa-envelope-o"></i>
                      </div>
                      <div className="wl_right">
                        <a href="#"><span>E-mail :</span> fenixt.s2000@gmail.com</a>
                      </div>
                    </li>
                    <li>
                      <div className="wl_left">
                        <i className="fa fa-phone"></i>
                      </div>
                      <div className="wl_right">
                        <a href="#"><span>Phone :</span>7305760579</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
             
              <div className="col-sm-2 col-xs-12">
                <div className="widget_single">
                  <h4><a href="#">Our Support</a></h4>
                  <ul>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Careers</a></li>    
                  </ul>
                </div>
              </div>
              <div className="col-sm-2 col-xs-12">
                <div className="widget_single">
                  <h4><a href="#">Our Services</a></h4>
                  <ul>
                    <li><a href="#">Get reach profesional</a></li>
                    <li><a href="#">Best Customer Support</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>   
    </footer>
  );
};

export default Footer;
