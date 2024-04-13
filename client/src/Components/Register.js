import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { baseUrl } from '../baseUrl';

function RegistrationForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setImage(selectedFile);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!name) {
      setError('Please enter your name.');
      return;
    }
    if (!phone) {
      setError('Please enter your Phone number.');
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
    if (!image) {
      setError('Please uplode your profile image.');
      return;
    }
    if (image.size > 2 * 1024 * 1024) { // 2MB limit
      setError('File size exceeds 2MB limit.');
      return;
    }
    setIsLoading(true);
    const formDataToSend = new FormData();
    formDataToSend.append('name', name);
    formDataToSend.append('phone', phone);
    formDataToSend.append('email', email);
    formDataToSend.append('password', password);
    formDataToSend.append('image', image);

    try {
      await axios.post(baseUrl + '/Register-upload', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      navigate('/login');
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('Error submitting form. Please try again.');
    }
    setIsLoading(false);
  };

  return (
    <div className='Register-cointainer'>
      <div className="mail-left">
        <form onSubmit={handleSubmit}>
          <label>Name *</label>
          <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
          <label>Phone *</label>
          <input type="number" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
          <label>Email *</label>
          <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label>Password *</label>
          <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <label>Upload Profile Image </label>
          <input type="file" name="image" onChange={handleFileChange} />
          {error && <div style={{ color: 'red' }}>{error}</div>}
          <div className="mail-btn">
            <button type="submit" className="btn btn-default" disabled={isLoading}>Register</button>
          </div>
          <br />
          <div className="already-have-account">
            Already have an account? <Link to='/login'>Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
