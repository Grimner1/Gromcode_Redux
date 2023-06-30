const ADDPRODUCT = "CART/ADDPRODUCT";
const DELETEPRODUCT = "CART/REMOVEPRODUCT";

export const addProduct = (product) => {
  return {
    type: ADDPRODUCT,
    product,
  };
};

export const removeProduct = (id) => {
  return {
    type: DELETEPRODUCT,
    id,
  };
};
