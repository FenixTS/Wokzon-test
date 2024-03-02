import React from 'react'
import Header from './Header';
import LogoArea from './LogoArea';
import { Link } from 'react-router-dom';

const Post = () => {
  return (
    <>
    <Header />
    <LogoArea/>
     <div class="title-breadcrumb">
                <div class="container" style={{marginTop:"-30px"}}>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="bred-title">
                                <h3>Post</h3>
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
                                
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            </>
  )
}

export default Post