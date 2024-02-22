import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function RegistrationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    // for stop loading webpage while clicking register button write prevent default
    e.preventDefault();
    setError('');
    if (!name) {
      setError('Please enter your name.');
      return;
    }
    if (!email) {
      setError('Please enter your email.');
      return;
    }
    if (!password) {
      setError('Please enter your password.');
      return;
    }
    setIsLoading(true);
    try {
      // Make API request to register user
      const response = await axios.post('http://localhost:3001/users', { name, email, password });
      console.log('User registered successfully:', response.data);
      // Reset form fields and loading state
      setName('');
      setEmail('');
      setPassword('');
      navigate('/login');
    } catch (error) {
      console.error('Error registering user:', error);
      setError('An error occurred while registering. Please try again later.');
    }
    setIsLoading(false);
  };

  return (

    <div className="wish-area section-padding">
      <div className="container" style={{ display: "flex", marginTop: '-60px', justifyContent: 'center' }}>
        <div className="contact-mail" style={{ width: '27%', height: '', display: "flex", justifyContent: 'center', boxShadow: '5px 5px 5px 1px rgba(0, 0, 0, 0.1)' }}>
          <div className="row">
            <div className="col-md-6 col-sm-6 col-xs-12" >
              <div className="mail-left" >
                <div style={{ width: '250%', backgroundColor: '' }}>
                  <form onSubmit={handleSubmit}>
                    <label>Name *</label>
                    <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                    <label>Email *</label>
                    <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label>Password *</label>
                    <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    {error && <div style={{ color: 'red' }}>{error}</div>}
                    <div className="mail-btn">
                      <button type="submit" className="btn btn-default" disabled={isLoading}>Register</button>
                    </div>
                  </form>
                  <div className="already-have-account">
                    Already have an account? <Link to='/login'>Login</Link>
                  </div>
               
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default RegistrationForm;
