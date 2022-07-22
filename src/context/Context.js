import React, { useState, useEffect } from "react";
// import { storeProducts } from "../data";
import { getData } from "../services/api";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      const products = await getData("products");
      // console.log(products);
      setData(products);
      setLoading(false);
    };
    getProduct();
  }, []);

  return (
    <AppContext.Provider
      value={{
        data,
        loading,
        setLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext };
export default AppProvider;
