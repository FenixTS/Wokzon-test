import React, { useState } from 'react';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogContent from '@mui/joy/DialogContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { baseUrl } from '../baseUrl';
import { useCityData } from './CityDataContext';



const Location = () => {

   
    const [open, setOpen] = useState(false);
    const [selectedCity, setSelectedCity] = useState("Location");
    // redux used for CityData -------------
    const { setProductData } = useCityData();

    const handleCityClick = async (cityName) => {
        try {
            const response = await fetch(baseUrl + '/productData');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            // Filter data based on the 'district' property
            const districtNames = data.map(product => product.district);
        
            // Filter the district names to match cityName
            const filteredDistrictNames = districtNames.filter(district => district.toLowerCase() === cityName.toLowerCase());

            
            // Filter data based on the filtered district names
            const filteredData = data.filter(product => filteredDistrictNames.includes(product.district));
            
            // Set filtered data to productData
            console.log("City Name:", cityName);
            setProductData(filteredData);
            setSelectedCity(cityName);
            setOpen(false);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <React.Fragment>
            <a
            className='set-location'
                variant="outlined"
                color="neutral"
                onClick={() => setOpen(true)}
                style={{ fontSize: "15px", height: '44px', width: '100%' ,cursor:'pointer'}}
            
            >
                <FontAwesomeIcon icon={faLocationDot} style={{ marginRight: '10px' }} />
                {selectedCity}
                
                 <b className="caret"></b>

            </a>
            <Modal open={open} onClose={() => setOpen(false)}>
                <ModalDialog style={{ width: '40%' }}>
                   
                    <DialogContent>

                        <h3> <u className="title">Select Your City</u></h3>
                        <br />

                        <div className="grid-container" >
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
export default Location