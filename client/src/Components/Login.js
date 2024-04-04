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


  React.useEffect(() => {
    if (localStorage.getItem('auth')) navigate('/')
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
        localStorage.setItem('user', user._id);
      } else {
        setError('Incorrect email or password. Please try again.');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setError('An error occurred while logging in. Please try again later.');
    }
  };




  return (



    <div className='login-cointainer' >
      <div className="mail-left" >
        <form onSubmit={handleSubmit}>
          <label>Email *</label>
          <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label>Password *</label>
          <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          {error && <div style={{ color: 'red' }}>{error}</div>}

          <div className="mail-btn">
            <button type="submit" className="btn btn-default">Login</button>
          </div>
          <br/>
          <div className="already-have-account">
            <Link to="/forgot_psw">Forgot password?</Link>
          </div>
        </form>
      </div>
    </div>
               
  );
}

export default LoginForm;