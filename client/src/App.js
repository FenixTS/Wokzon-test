import React from 'react';
import { BrowserRouter, Routes, Route,} from 'react-router-dom';
import ProductList from './Components/ProductList';
import ProductDetail from './Components/ProductDetail';
import ShoppingCart from './Components/MyCart ';
import Checkout from './Components/Checkout';
import MyAccount from './Components/MyAccount';
import ChangePassword from './Components/ChangePassword';
import Login from './Components/Login';
import RegistrationForm from './Components/Register';
import Post from './Components/Post';
import Search from './Components/Search';

import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';




const App = () => {

  const history = createBrowserHistory();
  return (

    <BrowserRouter>
      <main>    
        <Routes  history={history}>
          <Route path="/" element={<ProductList/>} />
          <Route path={`/Product_detail`} element={<ProductDetail />}/>
          <Route path="/cart-page" element={<ShoppingCart/>}/>
          {/* <Route path="/wishlist" element={<Wishlist/>}/> */}
          <Route path="/register" element={ <RegistrationForm/>}/>
          <Route path="/checkout" element={ <Checkout/>}/>
          <Route path="/my_account" element={ <MyAccount/>}/>
          <Route path="/forgot_psw" element={ <ChangePassword/>}/>
          <Route path="/search" element={ <Search/>}/>
          <Route path="/login" element={ <Login/>}/>
          <Route path="/post" element={ <Post/>}/>            
        </Routes>
        {/* <Footer /> */}
      </main>       
    </BrowserRouter>
    
  );
}

export default App;
