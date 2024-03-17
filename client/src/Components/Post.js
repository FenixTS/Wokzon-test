import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Input, Button } from 'antd';
import Header from './Header';
import LogoArea from './LogoArea';
import Footer from './Footer';
import axios from 'axios';
import { baseUrl } from '../baseUrl';

function Post() {
    const [image, setImage] = useState(null);

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        profession: '',
        address: '',
        district: '',
        state: '',
        postalCode: '',
        email: '',
        phoneNumber: '',
        whatsAppNumber: '',
        salary: '',
        description: '',
        image: null,
        createProfessionAccount: false
    });
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('auth');
        setIsLoggedIn(false);
        navigate('/register');
    };

    useEffect(() => {
        const auth = localStorage.getItem('auth');
        if (auth) {
            setIsLoggedIn(true);
        } else {
            navigate('/register');
        }
    }, [navigate]);

    // const handleChange = (event) => {
    //     const { name, value, type, checked, files } = event.target;
    //     const newValue = type === 'checkbox' ? checked : type === 'file' ? files[0] : value;

    //     setFormData({
    //         ...formData,
    //         [name]: newValue
    //     });
    // };

    const handleChange = (event) => {
        setImage(event.target.files[0]);
      };

      const handleSubmit = async (event) => {
        event.preventDefault();
    
        const formData = new FormData();
        formData.append('image', image);
    
        try {
          const response = await axios.post(baseUrl +'/upload', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
          
          console.log(response.data); // Assuming the server returns a message
        } catch (error) {
          console.error('Error uploading image:', error);
        }
      };

    // const handleSubmit = async (event) => {
    //     event.preventDefault();

    //     // Check if all fields are filled
    //     for (const key in formData) {
    //         if (formData[key] === '' && key !== 'image') {
    //             alert(`Please fill in ${key.replace(/([A-Z])/g, ' $1').toLowerCase()}`);
    //             return;
    //         }
    //     }

        // Upload the image
    //     const imageData = new FormData();
    //     imageData.append('image', formData.image);

    //     try {
    //         const uploadResponse = await fetch('http://localhost:8000/upload', {
    //             method: 'POST',
    //             body: imageData
    //         });

    //         if (uploadResponse.ok) {
    //             const imagePath = await uploadResponse.json();
    //             const postData = { ...formData, imagePath };

    //             const response = await fetch('http://localhost:3001/productData', {
    //                 method: 'POST',
    //                 headers: {
    //                     'Content-Type' : 'application/json'
    //                 },
    //                 body: JSON.stringify(postData)
    //             });

    //             if (response.ok) {
    //                 alert('Data submitted successfully');
    //                 // Clear form fields
                    
    //             }
    //         } else {
    //             alert('Failed to upload image');
    //         }
    //     } catch (error) {
    //         console.error('Error:', error);
    //     }
    // };

 

    return (
        <>
            <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
            <LogoArea />
            <div className="title-breadcrumb">
                <div className="container" style={{ marginTop: "-30px" }}>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="bred-title">
                                <h3>My Account</h3>
                            </div>
                            <ol className="breadcrumb">
                                <li>
                                    <Link to='/'>Home</Link>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            <section style={{ paddingTop: '30px' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="headline">
                                <h2>Profession Details</h2>
                            </div>

                            <form onSubmit={handleSubmit}>
                                {/* <div className="name">
                                    <div className="col">
                                        <label htmlFor="firstName" className="form-label">First Name</label>
                                        <input type="text" id="firstName" name="firstName" className="form-control" value={formData.firstName} onChange={handleChange} />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="lastName" className="form-label">Last Name</label>
                                        <input type="text" id="lastName" name="lastName" className="form-control" value={formData.lastName} onChange={handleChange} />
                                    </div>
                                </div>

                                <label htmlFor="profession" className="form-label">Profession Name</label>
                                <input type="text" id="profession" name="profession" className="form-control mb-4" value={formData.profession} onChange={handleChange} />

                                <label htmlFor="address" className="form-label">Address</label>
                                <input type="text" id="address" name="address" className="form-control mb-4" value={formData.address} onChange={handleChange} placeholder='' />

                                <div className="name">
                                    <div className="col">
                                        <label htmlFor="district" className="form-label">District</label>
                                        <input type="text" id="district" name="district" className="form-control" value={formData.district} onChange={handleChange} />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="state" className="form-label">State</label>
                                        <input type="text" id="state" name="state" className="form-control" value={formData.state} onChange={handleChange} />
                                    </div>
                                </div>

                                <label htmlFor="postalCode" className="form-label">Postal Code</label>
                                <input type="text" id="postalCode" name="postalCode" className="form-control" value={formData.postalCode} onChange={handleChange} />

                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" id="email" name="email" className="form-control mb-4" value={formData.email} onChange={handleChange} />

                                <div className="name">
                                    <div className="col">
                                        <label htmlFor="phoneNumber" className="form-label">Phone number</label>
                                        <input type="number" id="phoneNumber" name="phoneNumber" className="form-control" value={formData.phoneNumber} onChange={handleChange} />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="whatsAppNumber" className="form-label">WhatsApp number</label>
                                        <input type="number" id="whatsAppNumber" name="whatsAppNumber" className="form-control" value={formData.whatsAppNumber} onChange={handleChange} />
                                    </div>
                                </div>

                                <label htmlFor="salary" className="form-label">Salary</label>
                                <input type="number" id="salary" name="salary" className="form-control mb-4" value={formData.salary} onChange={handleChange} />

                                <label htmlFor="description" className="form-label">Description</label>
                                <textarea id="description" name="description" className="form-control mb-4" rows="4" value={formData.description} onChange={handleChange}></textarea> */}

                                <label htmlFor="image" className="form-label">Upload Image</label>
                                <input type="file" id="image" name="image" className="form-control mb-4" onChange={handleChange} />

                                {/* <div className="form-check d-flex justify-content-center mb-4">
                                    <input type="checkbox" id="createProfessionAccount" name="createProfessionAccount" className="form-check-input" checked={formData.createProfessionAccount} onChange={handleChange} />
                                    <label htmlFor="createProfessionAccount" className="form-check-label">Create profession account?</label>
                                </div> */}

                                <Button type="primary" htmlType="submit" className="mb-4">Submit</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <br />
            <br />
            <Footer />
        </>
    );
}

export default Post;
