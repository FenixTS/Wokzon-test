import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header from './Header';
import LogoArea from './LogoArea';
import Footer from './Footer';
import { baseUrl } from '../baseUrl';

// functions

const ProductDetail = () => {
  const location = useLocation();
  const id = location.state ? location.state.id : null;
  const [product, setProduct] = useState(null);

  const fetchProductDetails = async (id) => {
    try {
      const response = await fetch(baseUrl +`/productData/${id}`);

      if (!response.ok) {
        throw new Error('Failed to fetch product details');
      }

      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchProductDetails(id);
    }
  }, [id]);

  return (
    <> 
    <Header/>
    <LogoArea/>
    <div className="title-breadcrumb">
    <div className="container" style={{marginTop:"-30px"}}>
        <div className="row">
            <div className="col-md-12">
                <div className="bred-title">
                    <h3>Worker Profile</h3>
                </div>
                <ol className="breadcrumb">
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
    <div className="wish-area section-padding" style={{ marginTop: '-50px' }}>
      <div className="container">
        <div className="col-md-9 col-sm-9 col-xs-12">
          <div className="single-product-details">
            {product ? (
              <div className="row">
                <div className="col-md-6 col-sm-6 col-xs-12">
                  <div className="product-img-detail">
                    <div className="single_product_image">
                      <input type="hidden" id="__VIEWxSTATE" />
                      <ul id="zoom1" className="">
                        <li>
                          <img src={"http://localhost:8000/" +product.imagePath} alt={product.profession} style={{ width: '400px', height: '400px' }}/>
                        </li> 
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-12">
                  <div className="single-product-content">
                    <h3>{product.profession}</h3>
                    <div className="product-review">
                      <ul>
                        <li>
                          {Array.from({ length: product.rating }).map((_, index) => (
                            <i key={index} className="fa fa-star"></i>
                          ))}
                        </li>
                      </ul>
                      <h4>
                        Availability <span>: {product.availability}</span>
                      </h4>
                      <div className="product-wid-price">
                        <ins>₹{product.salary}</ins> <del>₹{product.previousPrice}</del>
                      </div>
                      <p>{product.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <p>Product profile loading...</p>
            )}
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ProductDetail;
