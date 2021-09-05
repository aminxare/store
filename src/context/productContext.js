import { createContext, useEffect, useState } from "react";
import agent from "../api/agent";

export const productContext = createContext();

export const ContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [productPerPage, setProductPerPage] = useState(12);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(0);

  useEffect(() => {
    const load = async () => {
      setIsLoading(true);
      const data = await agent.products.list();
      setProducts(data);
      setIsLoading(false);
      setLastPage(Math.ceil(products.length / productPerPage));
    };
    load();

  }, []);

  function handlePageBack() {
    if (page !== 1) setPage((p) => p - 1);
  }
  function handlePageNext() {
    if (page !== lastPage) setPage((p) => p + 1);
  }

  return (
    <productContext.Provider
      value={{
        products: products.slice((page - 1)*productPerPage, page* productPerPage),
        isLoading,
        productPerPage,
        lastPage,
        page,
        handlePageBack,
        handlePageNext,
      }}
    >
      {props.children}
    </productContext.Provider>
  );
};
