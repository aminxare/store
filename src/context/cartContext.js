import { createContext, useContext, useState } from "react";

export const cartContext = createContext();
export const useCartContext = () => useContext(cartContext);

const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addItemToCart = newItem => {
    const eItem = items.find(item => item.product === newItem.product);
    if (eItem) {
      eItem.count += newItem.count;
    } else {
      setItems(pItems => [newItem, ...pItems]);
    }
    setCount(pCount => pCount + newItem.count);
    setTotalPrice(pTotal => pTotal + newItem.count * newItem.product.price);
  };

  const removeItem = id => {
    const newItems = items.filter(i => i.product.id !== id);
    const removedItem = items.find(i => i.product.id === id);

    setCount(pCount => pCount - removedItem.count);
    setTotalPrice(
      pTotal => pTotal - removedItem.product.price * removedItem.count
    );

    setItems(newItems);
  };

  return (
    <cartContext.Provider
      value={{
        removeItem,
        addItemToCart,
        items,
        count,
        totalPrice,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;
