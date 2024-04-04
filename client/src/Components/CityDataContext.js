
import React, { createContext, useState, useContext } from 'react';

const CityDataContext = createContext();


export const CityDataProvider = ({ children }) => {
  const [productData, setProductData] = useState([]);
 

  return (
    <CityDataContext.Provider value={{ productData, setProductData}}>
      {children}
    </CityDataContext.Provider>
  );
};

export const useCityData = () => useContext(CityDataContext)

