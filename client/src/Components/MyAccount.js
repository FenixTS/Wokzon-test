
import Header from './Header';
import LogoArea from './LogoArea';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../baseUrl';
import React, { useEffect, useState } from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import Footer from './Footer';

const MyAccount = () => {

  const userId = (localStorage.getItem('user'));
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [userData, setUserData] = useState([]);

  console.log(userData, 'djnjdn')
  // auth function
  const navigate = useNavigate();
  React.useEffect(() => {
    const isLoggedIn = localStorage.getItem('auth') !== null; // Check if 'auth' exists in localStorage
    setIsLoggedIn(isLoggedIn);

    if (!localStorage.getItem('auth')) navigate('/register')

  }, []);

  const handleLogin = () => {
    if (!localStorage.getItem('auth')) {
      navigate("/register");
    } else {
      setIsLoggedIn(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('auth');
    window.location.reload();
  };

  useEffect(() => {
    // Fetch data when the component mounts
    fetch(baseUrl + `/user/${userId}`)
      .then(response => response.json())
      .then(data => setUserData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Empty dependency array to ensure effect runs only once on mount


  return (
    <>
      <Header isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout} />
      <LogoArea />
      <div class="title-breadcrumb">
        <div class="container" style={{ marginTop: "-30px" }}>
          <div class="row">
            <div class="col-md-12">
              <div class="bred-title">
                <h3>My account</h3>
              </div>
              <ol class="breadcrumb">
                <li>
                  <a href="/">
                    <button
                      type="button"
                      className="btn btn-default add-cart"
                      style={{ display: 'flex', alignItems: 'center', height: '3.5vh' }}>
                      Home
                    </button>
                  </a>
                </li>

              </ol>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="wish-area section-padding" style={{ marginTop: '-60px', marginBottom: '70px' }}>
        <div className="container">
          {userData ? (
            <section key={userData._id} style={{ backgroundColor: '#eee',paddingTop:'50px',paddingBottom:'50px', }}>
              <MDBContainer className="py-5">
                <MDBRow>
                  <MDBCol lg="4">
                    <MDBCard className="mb-4">
                      <MDBCardBody className="text-center">
                        <MDBCardImage
                          src={"http://localhost:8000/" + userData.imagePath}
                          alt="avatar"
                          className="rounded-circle"
                          style={{ width: '40%',height:'',borderRadius:"10px", }}
                          fluid
                        />
                        <br/> <br/>
                        <p className="text-muted mb-1">{userData.name}</p>
                        {/* <p className="text-muted mb-4">Bay Area, San Francisco, CA</p> */}
                        {/* <div className="d-flex justify-content-center mb-2"> */}
                          {/* <MDBBtn>Follow</MDBBtn> */}
                          {/* <MDBBtn outline className="ms-1">Message</MDBBtn> */}
                        {/* </div> */}
                        <br/> <br/> 
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                  <MDBCol lg="8">
                    <MDBCard className="mb-4">
                      <MDBCardBody>
                        <MDBRow>
                          <MDBCol sm="3">
                            <MDBCardText>Full Name</MDBCardText>
                          </MDBCol>
                          <MDBCol sm="9">
                            <MDBCardText className="text-muted">{userData.name}</MDBCardText>
                          </MDBCol>
                        </MDBRow>
                        <hr />
                        <MDBRow>
                          <MDBCol sm="3">
                            <MDBCardText>Email</MDBCardText>
                          </MDBCol>
                          <MDBCol sm="9">
                            <MDBCardText className="text-muted">{userData.email}</MDBCardText>
                          </MDBCol>
                        </MDBRow>
                        <hr />
                        <MDBRow>
                          <MDBCol sm="3">
                            <MDBCardText>Phone</MDBCardText>
                          </MDBCol>
                          <MDBCol sm="9">
                            <MDBCardText className="text-muted">{userData.phone}</MDBCardText>
                          </MDBCol>
                        </MDBRow>
                        <hr />
                        {/* <MDBRow>
                          <MDBCol sm="3">
                            <MDBCardText>Address</MDBCardText>
                          </MDBCol>
                          <MDBCol sm="9">
                            <MDBCardText className="text-muted">Bay Area, San Francisco, CA</MDBCardText>
                          </MDBCol>
                        </MDBRow> */}
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </section>
          ) : (
            <div>No user data available</div>
          )}

        </div>
      </div>
      <Footer />
    </>
  )
}

export default MyAccount