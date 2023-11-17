export const initialState = {
  cart: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case "UPDATE_CART":
      let updatedCart = state.cart.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );

      return {
        ...state,
        cart: updatedCart,
      };

    case "DELETE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter(({ id }) => id !== action.payload),
      };
    default:
      throw new Error();
  }
};
