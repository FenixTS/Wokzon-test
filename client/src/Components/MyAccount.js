import { Link } from 'react-router-dom';
import Header from './Header';
import LogoArea from './LogoArea';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

function MyAccount() {
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
    <Header isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout} />
    <LogoArea/>
     <div class="title-breadcrumb">
                <div class="container" style={{marginTop:"-30px"}}>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="bred-title">
                                <h3>My Account</h3>
                            </div>
                            <ol class="breadcrumb">
                                <li>
                                <Link to='/'> 
                                        <button
                                            type="button"
                                            className="btn btn-default add-cart"
                                            style={{ display: 'flex', alignItems: 'center', height: '3.5vh' }}>
                                            Home
                                        </button>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/change_password"
                                    >change password</Link>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
    <section style={{paddingTop:'30px'}} >
      <div className="container" >
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="headline">
              <h2>Personal details</h2>
            </div>

            <div className="personal-form">
              <div className="userleft">
                <form>
                  <label>Username</label>
                  <br />
                  <input type="text" placeholder="Anderson" />
                  <br />
                  <label>Firstname</label>
                  <br />
                  <input type="text" placeholder="Cory" />
                  <br />
                  <label>Email</label>
                  <br />
                  <input type="email" placeholder="Mail@YourDomain.Com" />
                  <br />
                  <label>Address</label>
                  <br />
                  <input type="text" placeholder="Street And House Number" />
                  <br />
                  <label>State/Country</label>
                  <br />
                  <input type="text" placeholder="Your Country" />
                </form>
              </div>
              <div className="userright">
                <h5>Username cannot be changed</h5>
                <form>
                  <label>Lastname</label>
                  <br />
                  <input type="text" placeholder="Anderson" />
                  <br />
                  <label>Phone</label>
                  <br />
                  <input type="text" placeholder="+91 123 456 78" />
                  <br />
                  <label>ZIP Code</label>
                  <br />
                  <input type="text" placeholder="Your City Name" />
                  <br />
                  <label>State/Country</label>
                  <br />
                  <input type="text" placeholder="0123 Australia" />
                  <br />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
}

export default MyAccount;
