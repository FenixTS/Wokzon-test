import React from 'react';
import { BrowserRouter, Routes, Route,} from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import LogoArea from './Components/LogoArea';
import ProductList from './Components/ProductList';
import ProductDetail from './Components/ProductDetail';
import ShoppingCart from './Components/MyCart ';
import Wishlist from './Components/Wishlist';
import Checkout from './Components/Checkout';
import MyAccount from './Components/MyAccount';
import ChangePassword from './Components/ChangePassword';
import Login from './Components/Login';
import RegistrationForm from './Components/Register';







const App = () => {
  return (

    
    <BrowserRouter>
      <main>
        {/* <Header />
        <LogoArea /> */}
        
       
        
        <Routes>
          <Route path="/" element={<ProductList/>} />
          <Route path={`/Product_detail`} element={<ProductDetail />}/>
          <Route path="/cart-page" element={<ShoppingCart/>}/>
          {/* <Route path="/wishlist" element={<Wishlist/>}/> */}
          <Route path="/register" element={ <RegistrationForm/>}/>
          <Route path="/checkout" element={ <Checkout/>}/>
          <Route path="/my_account" element={ <MyAccount/>}/>
          <Route path="/forgot_psw" element={ <ChangePassword/>}/>
          <Route path="/login" element={ <Login/>}/>
        </Routes>


        {/* <Footer /> */}
      </main>
    </BrowserRouter>
  );
}

export default App;
