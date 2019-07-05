const initialState = {
  getProduct: false,
  product: "123"
};

const saveFetchedProduct = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_FETCHED_PRODUCT":
      return {
        ...state,
        getProduct: true,
        product: action.data
      };

    default:
      return state;
  }
};

export default saveFetchedProduct;
