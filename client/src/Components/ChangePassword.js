import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import LogoArea from './LogoArea';
import Footer from './Footer';

function ChangePassword() {
    return (
        <>
        <Header/>
        <LogoArea/>
            <div class="title-breadcrumb">
                <div class="container"style={{marginTop:"-30px"}}>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="bred-title">
                                <h3>Wishlist</h3>
                            </div>
                            <ol class="breadcrumb">
                                <li>
                                    <a href="index.html">
                                    <Link to='/'>
                                        <button
                                            type="button"
                                            className="btn btn-default add-cart"
                                            style={{ display: 'flex', alignItems: 'center', height: '3.5vh' }}
                                        >Home</button>
                                    </Link>
                                    </a>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <section className="password-change" style={{paddingTop:'30px'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="headline">
                                <h2>Change your password</h2>
                            </div>
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <div className="change-form">
                                    <form>
                                        <label>Old Password</label>
                                        <br />
                                        <input type="password" />
                                        <br />
                                        <label>New Password</label>
                                        <br />
                                        <input type="password" />
                                        <br />
                                        <label>Repeat New Password</label>
                                        <br />
                                        <input type="password" />
                                        <br />
                                        <button type="button" className="btn btn-default">Save changes</button>
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

export default ChangePassword;
