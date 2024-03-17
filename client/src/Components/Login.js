import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { baseUrl } from '../baseUrl';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [passUserId, setPassUserId] = useState('');
  const navigate = useNavigate();


  React.useEffect (()=>{
    if(localStorage.getItem('auth')) navigate('/')
    }, [])

    const handleSubmit = async (e) => {
      e.preventDefault();
      setError('');
      if (!email || !password) {
        setError('Please enter your email and password.');
        return;
      }
    
      try {
        const response = await axios.get(baseUrl + '/user');
    
        // Check if response data contains user array
        if (!Array.isArray(response.data.user)) {
          console.error('User data is not an array:', response.data.user);
          setError('An error occurred while logging in. Please try again later.');
          return;
        }
    
        // Check if the provided email and password match any user
        const user = response.data.user.find((user) => user.email === email && user.password === password);
    
        if (user) {
          navigate('/'); // Redirect to product detail page on successful login
          localStorage.setItem('auth', true);
        } else {
          setError('Incorrect email or password. Please try again.');
        }
      } catch (error) {
        console.error('Error logging in:', error);
        setError('An error occurred while logging in. Please try again later.');
      }
    };
    
    
    

  return (
    <div className="wish-area section-padding">
      <div className="container" style={{ display: "flex", marginTop: '-60px', justifyContent: 'center' }}>
        <div className="contact-mail" style={{ width: '280px', display: "flex", justifyContent: 'center', boxShadow: '5px 5px 5px 1px rgba(0, 0, 0, 0.1)' }}>
          <div className="row">
            <div className="col-md-6 col-sm-6 col-xs-12" >
              <div className="mail-left" style={{ width: '280%', backgroundColor: '', display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
                <form onSubmit={handleSubmit}>
                  <label>Email *</label>
                  <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  <label>Password *</label>
                  <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  {error && <div style={{ color: 'red' }}>{error}</div>}
                  <div className="mail-btn">
                    <button type="submit" className="btn btn-default">Login</button>
                    <Link to="/forgot_psw">Forgot password?</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
