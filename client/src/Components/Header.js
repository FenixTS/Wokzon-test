import React from 'react';
import LanguageDropdown from './LanguageDropdown';
import { Link } from 'react-router-dom';




const Header = ({isLoggedIn,onLogin,onLogout}) => {
  return (
    <header className="entire_header">
      <div className="header-area">
        <div className="container" >
          <div className="row">
            <div className="col-md-6 col-sm-5">
              <div className="user-menu">
                <ul className="list-unstyled list-inline">
                  <li className="dropdown dropdown-small">
                    <a
                      data-toggle="dropdown"
                      data-hover="dropdown"
                      className="dropdown-toggle"
                      href="#"
                    >
                      <span className="value"><LanguageDropdown /> </span>

                    </a>
                    <ul className="dropdown-menu">
                      <li>

                      </li>
                    </ul>
                  </li>

                  <li>Welcome to WOKZON</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-sm-7">
              <div className="header-right">
                <ul>
                  <li>
                    <Link to='/my_account'>
                      <img

                        src="images/account.png"
                        alt="#"
                      />

                      <span className="value">My Account </span>
                      <i className="fa fa-angle-down"></i>
                    </Link>

                  </li>
                  <li>
                    <Link to='/wishlist'>
                      <i className="fa fa-heart-o"></i> Wishlist
                    </Link>
                  </li>
                  <li>
                    <Link to="/checkout">
                      <img src="images/check.png" alt="#" /> Checkout
                    </Link>
                  </li>
                  <li className="last-child">
                    {/* <Link to="/register" className="logg" > */}
                      {/* <img className="login" src="images/log.png" alt="#" />Login */}

                     
                        {isLoggedIn ? (
                         <a style={{cursor:'pointer'}} onClick={onLogout}> <img className="login" style={{cursor:'pointer'}}src="images/log.png" onClick={onLogout}/>logout</a>
                        ) : (
                         <a style={{cursor:'pointer'}} onClick={onLogin}> <img className="login" style={{cursor:'pointer'}} src="images/log.png" onClick={onLogin}/>login</a>
                        )}
                      
                    {/* </Link> */}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Header-area:END */}


    </header>
  );
};

export default Header;
