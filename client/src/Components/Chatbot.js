import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import LogoArea from './LogoArea';
import Footer from './Footer';


function Chatbot() {
    return (
        <>
            <Header />
            <LogoArea />
            <div className="title-breadcrumb">
                <div className="container" style={{ marginTop: "-30px" }}>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="bred-title">
                                <h3>Chat bot</h3>
                            </div>
                            <ol className="breadcrumb">
                                <li>
                                    <a href="/">
                                        <button
                                            type="button"
                                            className="btn btn-default add-cart"
                                            style={{ display: 'flex', alignItems: 'center', height: '3.5vh' }}
                                        >
                                            Home
                                        </button>
                                    </a>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wish-area section-padding" style={{ marginTop: '-50px' }}>
                <div className="container">
                    <div className="Bot-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <iframe
                            src='https://webchat.botframework.com/embed/FenixaI-bot?s=qQaX9kXsUQ4.lI2N3FzKdck39sz3Y7kr_RJMwOLj_gEigSCxGR1ejco'
                            style={{ minWidth: '250px', width: '100%', minHeight: '400px' }}
                        ></iframe>
                    </div>
                </div>
            </div>

            <Footer />

        </>
    );
}

export default Chatbot;
