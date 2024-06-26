import React from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import ProductList from './Components/ProfessionList';
import ProductDetail from './Components/ProfessionDetail';
import ShoppingCart from './Components/Wishlist';
import MyAccount from './Components/MyAccount';
import Login from './Components/Login';
import RegistrationForm from './Components/Register';
import Post from './Components/Post';
import { createBrowserHistory } from 'history';
import { CityDataProvider } from './Components/CityDataContext';
import Chatbot from './Components/Chatbot';




const App = () => {

  const history = createBrowserHistory();
  return (
   
      <CityDataProvider>
        <BrowserRouter>
          <main>
            <Routes history={history}>
              <Route path="/" element={<ProductList />} />
              <Route path={`/Profession_detail`} element={<ProductDetail />} />
              <Route path="/wishlist" element={<ShoppingCart />} />
              <Route path="/register" element={<RegistrationForm />} />
              <Route path="/chatbot" element={<Chatbot/>} />
              <Route path="/my_account" element={<MyAccount />} />
              <Route path="/login" element={<Login />} />
              <Route path="/post" element={<Post />} />
            </Routes>
          </main>
        </BrowserRouter>
      </CityDataProvider>
   
    
  );
}

export default App;
