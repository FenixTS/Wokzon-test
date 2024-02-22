import React, { useState } from 'react';

const LanguageDropdown = () => {
  // State to manage the selected value
  const [selectedValue, setSelectedValue] = useState('');

  // Function to handle changes in the dropdown selection
  const handleDropdownChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <select
       
      
        style={{
          color: 'black',
          padding: '2px',
          margin: '0',
          // Additional styling as needed
        }}
      >
        {/* Individual options */}
        <option value="option1">English</option>
        <option value="option2">Tamil</option>
        <option value="option3">Malayalam</option>
      </select>
    </div>
  );
};

export default LanguageDropdown;
