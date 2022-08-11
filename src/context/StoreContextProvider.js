import React, { useReducer } from "react";
export const StoreContext = React.createContext();

const initialValue = {
  selectedItems: [],
  itemCount: 0,
  subtotal: 0,
  tax: 0,
  total: 0,
  showModal: false,
  modalID: 0,
  checkout: false,
};

const getSummary = (selectedItems) => {
  const itemCount = selectedItems.reduce(
    (acc, item) => (acc += item.quantity),
    0
  );
  const subtotal = selectedItems
    .reduce((acc, item) => (acc += item.price * item.quantity), 0)
    .toFixed(2);
  const tax = (Number(subtotal) * 0.1).toFixed(2);
  const total = (Number(subtotal) + Number(tax)).toFixed(2);
  return { itemCount, subtotal, tax, total };
};

const storeReducer = (state, action) => {
  // console.log(state);

  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
      }
      return {
        ...state,
        ...getSummary(state.selectedItems),
        showModal: true,
        modalID: action.payload.id,
        checkout: false,
      };
    case "REMOVE_ITEM":
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );

      return {
        ...state,
        selectedItems: [...newSelectedItems],
        ...getSummary(newSelectedItems),
      };
    case "INCREASE":
      // console.log(action.payload.id);
      const indexI = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[indexI].quantity++;
      return { ...state, ...getSummary(state.selectedItems) };
    case "DECREASE":
      const indexD = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[indexD].quantity > 1 &&
        state.selectedItems[indexD].quantity--;
      return { ...state, ...getSummary(state.selectedItems) };
    case "CHECKOUT":
      return {
        selectedItems: [],
        itemCount: 0,
        subtotal: 0,
        tax: 0,
        total: 0,
        checkout: true,
      };
    case "CLEAR_CART":
      return {
        selectedItems: [],
        itemCount: 0,
        subtotal: 0,
        tax: 0,
        total: 0,
        checkout: false,
      };
    case "CLOSE_MODAL":
      return { ...state, showModal: false, modalID: 0 };
    default:
      return state;
  }
};

const StoreContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(storeReducer, initialValue);
  return (
    <>
      <StoreContext.Provider value={{ state, dispatch }}>
        {children}
      </StoreContext.Provider>
    </>
  );
};

export default StoreContextProvider;
