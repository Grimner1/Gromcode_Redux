const initialState = {
  products: [],
};

const add = (product, productsList) => {
  return { products: [...productsList, product] };
};

const remove = (id, productsList) => {
  return { products: [...productsList].filter((product) => product.id !== id) };
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CART/ADDPRODUCT":
      return add(action.product, state.products);
    case "CART/REMOVEPRODUCT":
      return remove(action.id, state.products);
    default:
      return state;
  }
};
