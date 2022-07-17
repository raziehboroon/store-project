import React, { useState, useEffect } from "react";
// import { storeProducts } from "../data";
import { getData } from "../services/api";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  // const [data, setData] = useState(storeProducts);
  const [data, setData] = useState([]);

  // const [subtotal, setSubtotal] = useState(0);
  // const [tax, setTax] = useState(0);
  // const [total, setTotal] = useState(0);

  // const [showModal, setShowModal] = useState(false);
  // const [modalID, setModalID] = useState(1);

  // const [itemInBasket, setItemInBasket] = useState(0);

  useEffect(() => {
    const getProduct = async () => {
      const products = await getData("products");
      console.log(products);
      setData(products);
    };
    getProduct();
  }, []);

  // useEffect(() => {
  //   const subtotal = parseFloat(
  //     data.reduce((acc, item) => (acc += item.total), 0).toFixed(2)
  //   );
  //   const tax = parseFloat((subtotal * 0.1).toFixed(2));
  //   const total = parseFloat((subtotal + tax).toFixed(2));
  //   setSubtotal(subtotal);
  //   setTax(tax);
  //   setTotal(total);
  // }, [data]);

  // const addItemToCart = (id) => {
  //   const products = data.map((item) =>
  //     item.id === id
  //       ? { ...item, inCart: true, count: 1, total: item.price }
  //       : item
  //   );
  //   setModalID(id);
  //   setData(products);
  // };

  // const removeFromCart = (id) => {
  //   const products = data.map((item) =>
  //     item.id === id ? { ...item, inCart: false, count: 0, total: 0 } : item
  //   );
  //   setData(products);
  // };

  // const increaseCount = (id) => {
  //   const products = data.map((item) => {
  //     if (item.id === id) {
  //       return {
  //         ...item,
  //         count: item.count + 1,
  //         total: parseFloat((item.price * (item.count + 1)).toFixed(2)),
  //       };
  //     } else {
  //       return item;
  //     }
  //   });
  //   setData(products);
  // };

  // const decreaseCount = (id) => {
  //   const products = data.map((item) => {
  //     if (item.id === id) {
  //       if (item.count - 1 === 0) {
  //         return { ...item, inCart: false, count: 0, total: 0 };
  //       } else {
  //         return {
  //           ...item,
  //           count: item.count - 1,
  //           total: parseFloat((item.price * (item.count - 1)).toFixed(2)),
  //         };
  //       }
  //     } else {
  //       return item;
  //     }
  //   });
  //   setData(products);
  // };

  // const clearCart = () => {
  //   const newData = data.map((item) =>
  //     item.inCart ? { ...item, inCart: false, count: 0 } : item
  //   );
  //   setData(newData);
  // };

  // useEffect(() => {
  //   const countItem = data.reduce((acc, item) => (acc += item.count), 0);
  //   setItemInBasket(countItem);
  // }, [data]);

  return (
    <AppContext.Provider
      value={{
        data,
        // addItemToCart,
        loading,
        setLoading,
        // removeFromCart,
        // increaseCount,
        // decreaseCount,
        // subtotal,
        // tax,
        // total,
        // showModal,
        // setShowModal,
        // modalID,
        // setModalID,
        // clearCart,
        // itemInBasket,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext };
export default AppProvider;
