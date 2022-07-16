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
