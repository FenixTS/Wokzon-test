import React, { useState } from 'react';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogContent from '@mui/joy/DialogContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function Location() {

    const [open, setOpen] = React.useState(false);
    const [selectedCity, setSelectedCity] = useState("Location");


    const handleCityClick = (cityName) => {
        setSelectedCity(cityName);
        setOpen(false); // Close modal after selecting a city
    };


    return (
        <React.Fragment>
            <a
                variant="outlined"
                color="neutral"
                onClick={() => setOpen(true)}
                style={{ fontSize: "15px", height: '44px', width: '100%' ,cursor:'pointer'}}
            // classNameName="dropdown-toggle"
            >
                <FontAwesomeIcon icon={faLocationDot} style={{ marginRight: '10px' }} />
                {selectedCity}
                
                 <b className="caret"></b>

            </a>
            <Modal open={open} onClose={() => setOpen(false)}>
                <ModalDialog style={{ width: '40%' }}>
                    {/* <DialogTitle>Create new project</DialogTitle> */}
                    <DialogContent>

                        <h3> <u className="title">Select Your City</u></h3>
                        <br />

                        <div className="grid-container">
                            <div className='center' onClick={() => handleCityClick("Kanyakumari")}>
                                <img className="grid-elements" src="images/Kanyakumari.png" alt="Description of the image" />
                                Kanyakumari
                            </div>
                            <div className='center' onClick={() => handleCityClick("Nagercoil")}>
                                <img className="grid-elements" src="images/Nagercoil.jpg" alt="Description of the image" />
                                Nagercoil
                            </div>
                            <div className='center' onClick={() => handleCityClick("Chennai")}>
                                <img className="grid-elements" src="images/Chennai.webp" alt="Description of the image" />
                                Chennai
                            </div>
                            <div className='center' onClick={() => handleCityClick("Delhi")}>
                                <img className="grid-elements" src="images/Delhi.webp" alt="Description of the image" />
                                Delhi
                            </div>
                            <div className='center' onClick={() => handleCityClick("Faridabad")}>
                                <img className="grid-elements" src="images/Faridabad.jpg" alt="Description of the image" />
                                Faridabad
                            </div>
                            <div className='center' onClick={() => handleCityClick("Ghaziabad")}>
                                <img className="grid-elements" src="images/Ghaziabad.jpeg" alt="Description of the image" />
                                Ghaziabad
                            </div>
                            <div className='center' onClick={() => handleCityClick("Greater Noida")}>
                                <img className="grid-elements" src="images/Greater Noida.jpg" alt="Description of the image" />
                                Greater_Noida
                            </div>
                            <div className='center' onClick={() => handleCityClick("Gurgaon")}>
                                <img className="grid-elements" src="images/gurgaon.jpg" alt="Description of the image" />
                                Gurgaon
                            </div>
                            <div className='center' onClick={() => handleCityClick("Hyderabad")}>
                                <img className="grid-elements" src="images/Hyderabad.png" alt="Description of the image" />
                                Hyderabad
                            </div>
                            <div className='center' onClick={() => handleCityClick("Mumbai")}>
                                <img className="grid-elements" src="images/Mumbai.jpg" alt="Description of the image" />
                                Mumbai
                            </div>
                            <div className='center' onClick={() => handleCityClick("Tirunelveli")}>
                                <img className="grid-elements" src="images/Tirunelveli.jpg" alt="Description of the image" />
                                Tirunelveli
                            </div>
                            <div className='center' onClick={() => handleCityClick("Trichy")}>
                                <img className="grid-elements" src="images/Trichy.webp" alt="Description of the image" />
                                Trichy
                            </div>
                        </div>


                        <br /><br /><br />
                    </DialogContent>
                </ModalDialog>
            </Modal>
        </React.Fragment>
    );
}