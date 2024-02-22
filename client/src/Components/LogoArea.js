import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import SearchableDropdown from './ProductDetail';
import { Link } from 'react-router-dom';


const LogoArea = () => {
  return (
    <div className="logo_area" >
      <div className="container"style={{marginTop:"-30px"}} >
        <div className="row">
          <div className="col-sm-4 col-md-4 col-xs-12">
            <div className="logo">
              <a href="index.html">
                <img src="images/logo.png" style={{ width: '250px', height: '60px', marginTop: '-10px' }} alt="" />
              </a>
            </div>
          </div>
          <div className="col-sm-8 col-md-8 col-xs-12">
            <div className="search-area">
              <form>
                <div className="control-group">

                  <ul className="categories-filter animate-dropdown">
                    <li className="dropdown">

                      <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                        <FontAwesomeIcon icon={faLocationDot} style={{ marginRight: '10px' }} />
                        Location
                        <b className="caret"></b>
                      </a>
                    </li>
                  </ul>
                  <input className="search-field" placeholder="Search here..." />
                  <a className="search-button" href="#"></a>
                </div>
              </form>

            </div>


            <div>
              <div className="menu_right">
                <Link to="/cart-page">My Cart</Link>
                <span>2</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoArea;
