// import React, { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
// import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
// import { faUser } from '@fortawesome/free-solid-svg-icons';




// const Contact = ({ProductId }) => {
//     const [contactData, setContactData] = useState([]);


//     useEffect(() => {


//         if (ProductId !== null) {
//           // Fetch data by selectedProductId
//           fetch(`http://localhost:3001/productData/${ProductId}`)
//             .then(response => response.json())
//             .then(data => setContactData([data])) // Wrap the data in an array to maintain consistency with productData state
//             .catch(error => console.error('Error fetching data:', error));
//         }
//       }, [ProductId]);
    

//     return (
//         <>

//             {contactData.map(product => (
//                 <div key={product.id} style={{ display: 'flex', flexDirection: 'column', lineHeight: '35px', padding: '30px' }}>
//                     <div><FontAwesomeIcon icon={faUser} /> {product.personName}</div>
//                     <div><FontAwesomeIcon icon={faPhone} style={{ color: "black" }} /> {product.phoneNumber}</div>
//                     <div><FontAwesomeIcon icon={faWhatsapp} style={{ color: '#23f207', height: '20px'}} /> {product.whatsappNumber}</div>
//                     <div><FontAwesomeIcon icon={faEnvelope} style={{ color: "#1b1f17" }} /> {product.email}</div>
//                     <div><FontAwesomeIcon icon={faLocationDot} style={{ color: "skyblue" }} /> {product.distric},{product.state}</div>
//                 </div>
//             ))}

//         </>
//     );
// };

// export default Contact;
