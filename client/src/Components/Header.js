import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faUser, faMoneyCheckDollar, faArrowRight, faArrowLeft, } from '@fortawesome/free-solid-svg-icons';
import { faRocketchat } from '@fortawesome/free-brands-svg-icons';


const Header = ({ isLoggedIn, onLogin, onLogout }) => {
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
                      <FontAwesomeIcon icon={faUser} /> My Account
                    </Link>
                  </li>
                  <li>
                    <Link to="/chatbot">
                    <FontAwesomeIcon icon={faRocketchat} /> Chat Bot
                    </Link>
                  </li>
                  <li>
                    <Link to="/post">
                      <FontAwesomeIcon icon={faAddressCard} /> Post
                    </Link>
                  </li>
                  <li className="last-child">
                    {isLoggedIn ? (
                      <a style={{ cursor: 'pointer' }} onClick={onLogout}> <img className="login" style={{ cursor: 'pointer' }} onClick={onLogout} />  <FontAwesomeIcon icon={faArrowLeft} /> logout</a>
                    ) : (
                      <a style={{ cursor: 'pointer' }} onClick={onLogin}> <img className="login" style={{ cursor: 'pointer' }} onClick={onLogin} /> <FontAwesomeIcon icon={faArrowRight} /> login</a>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
