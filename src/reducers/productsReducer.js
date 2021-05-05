export const getData = () => ({ type: "getData" });

const productsReducer = (state = [], action) => {

  if (action.type === "getData") {
      return state = action.payload
  }
  return state;
};

export default productsReducer
 