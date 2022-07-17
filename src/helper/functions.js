export const shorten = (text) => {
  const arrText = text.split(" ");
  return `${arrText[0]} ${arrText[1]}`;
};

export const eachItemTotal = (price, quantity) => {
  const value = (price * quantity).toFixed(2);
  return value;
};

export const isInCart = (arr, id) => {
  return !!arr.find((item) => item.id === id);
};

export const getSingleProduct = (arr, id) => {
  return arr.find((item) => item.id === id);
};

export const getDate = () => {
  const date = new Date();
  return date.getFullYear();
};

export const goToTop = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};
