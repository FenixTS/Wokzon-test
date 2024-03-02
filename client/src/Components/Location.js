import * as React from 'react';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import Stack from '@mui/joy/Stack';
import Add from '@mui/icons-material/Add';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function Location() {

    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <a
               
                // classNameName="dropdown-toggle"
                variant="outlined"
                color="neutral"
                // startDecorator={<Add />}
                onClick={() => setOpen(true)}
                style={{ fontSize: "15px", height: '44px', width: '100%' ,cursor:'pointer'}}
            // classNameName="dropdown-toggle"
            >
                <FontAwesomeIcon icon={faLocationDot} style={{ marginRight: '10px' }} />
                Location
                <b className="caret"></b>

            </a>
            <Modal open={open} onClose={() => setOpen(false)}>
                <ModalDialog style={{ width: '40%' }}>
                    {/* <DialogTitle>Create new project</DialogTitle> */}
                    <DialogContent>

                        <h3> <u className="title">Select Your City</u></h3>
                        <br />

                        <div className="grid-container">

                            <div className='center'>
                                <img className="grid-elements" src="images/Kanyakumari.png" alt="Description of the image" />
                                Kanyakumari
                            </div>
                            <div className='center'>
                                <img className="grid-elements" src="images/Nagercoil.jpg" alt="Description of the image" />
                                Nagercoil
                            </div>
                            <div className='center'>
                                <img className="grid-elements" src="images/Chennai.webp" alt="Description of the image" />
                                Chennai
                            </div>
                            <div className='center'>
                                <img className="grid-elements" src="images/Delhi.webp" alt="Description of the image" />
                                   Delhi
                            </div>
                            <div className='center'>
                                <img className="grid-elements" src="images/Faridabad.jpg" alt="Description of the image" />
                                Faridabad
                            </div>
                            <div className='center'>
                                <img className="grid-elements" src="images/Ghaziabad.jpeg" alt="Description of the image" />
                                Ghaziabad
                            </div>
                            <div className='center'>
                                <img className="grid-elements" src="images/Greater Noida.jpg" alt="Description of the image" />
                                Greater_Noida
                            </div>
                            <div className='center'>
                                <img className="grid-elements" src="images/gurgaon.jpg" alt="Description of the image" />
                                gurgaon
                            </div>
                            <div className='center'>
                                <img className="grid-elements" src="images/Hyderabad.png" alt="Description of the image" />
                                Hyderabad
                            </div>
                            <div className='center'>
                                <img className="grid-elements" src="images/Mumbai.jpg" alt="Description of the image" />
                                Mumbai
                            </div>
                            <div className='center'>
                                <img className="grid-elements" src="images/Tirunelveli.jpg" alt="Description of the image" />
                                Tirunelveli
                            </div>
                            <div className='center'>
                                <img className="grid-elements" src="images/Trichy.webp" alt="Description of the image" />
                                Trichy
                            </div>
                            {/* <img className="grid-elements" src="images/Bangalore.jpeg" alt="Description of the image"/>                             */}



                        </div>


                        <br /><br /><br /><br /><br />
                    </DialogContent>
                </ModalDialog>
            </Modal>
        </React.Fragment>
    );
}