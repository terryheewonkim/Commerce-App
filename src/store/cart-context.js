import { createContext, useReducer } from "react";

// items: [{prodId: "...", amount: 2, price: 19000, prodImgUrl: "...", prodName: "..."}, {...}]
const initialState = sessionStorage.getItem("cart")
  ? JSON.parse(sessionStorage.getItem("cart"))
  : { items: [], totalPrice: 0 };

export const CartContext = createContext(initialState);

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const updatedTotalPrice =
        state.totalPrice + action.payload.prodPrice * action.payload.amount;
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.prodId === action.payload.prodId
      );
      const existingCartItem = state.items[existingCartItemIndex];

      let updatedItems;

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.payload.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.payload);
      }
      sessionStorage.setItem(
        "cart",
        JSON.stringify({ items: updatedItems, totalPrice: updatedTotalPrice })
      );

      return { items: updatedItems, totalPrice: updatedTotalPrice };
    case "REMOVE_ITEM":
      const existingCartItemIndexR = state.items.findIndex(
        (item) => item.prodId === action.payload
      );
      const existingItem = state.items[existingCartItemIndexR];
      const updatedTotalPriceR = state.totalPrice - existingItem.prodPrice;

      let updatedItemsR;
      if (existingItem.amount === 1) {
        updatedItemsR = state.items.filter(
          (item) => item.prodId !== action.payload
        );
      } else {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount - 1,
        };
        updatedItemsR = [...state.items];
        updatedItemsR[existingCartItemIndexR] = updatedItem;
      }
      sessionStorage.setItem(
        "cart",
        JSON.stringify({ items: updatedItemsR, totalPrice: updatedTotalPriceR })
      );

      return { items: updatedItemsR, totalPrice: updatedTotalPriceR };
    case "DELETE_ITEM":
      const existingCartItemIndexD = state.items.findIndex(
        (item) => item.prodId === action.payload
      );
      const existingItemD = state.items[existingCartItemIndexD];
      const updatedTotalPriceD =
        state.totalPrice - existingItemD.prodPrice * existingItemD.amount;

      const updatedItemsD = state.items.filter(
        (item) => item.prodId !== action.payload
      );
      sessionStorage.setItem(
        "cart",
        JSON.stringify({ items: updatedItemsD, totalPrice: updatedTotalPriceD })
      );

      return { items: updatedItemsD, totalPrice: updatedTotalPriceD };
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, initialState);

  // item = {prodId: "...", amount: 1, prodPrice: 19000, prodImgUrl: "...", prodName: "..."}
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", payload: item });
  };

  const removeItemFromCartHandler = (prodId) => {
    dispatchCartAction({ type: "REMOVE_ITEM", payload: prodId });
  };

  const completeRemoveFromCartHandler = (prodId) => {
    dispatchCartAction({ type: "DELETE_ITEM", payload: prodId });
  };

  const cartContext = {
    items: cartState.items,
    totalPrice: cartState.totalPrice,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    deleteItem: completeRemoveFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
