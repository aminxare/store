import { createContext, useCallback, useContext, useEffect, useState } from "react";
import agent from "../api/agent";

export const productContext = createContext();

export const useProductContext = () => useContext(productContext);

const ProductProvider = props => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isProductsLoading, setIsProductsLoading] = useState(false);
  const [isCategoriesLoading, setIsCategoriesLoading] = useState(false);
  const [productPerPage, setProductPerPage] = useState(12);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  const loadProducts = async () => {
    setIsProductsLoading(true);
    const data = await agent.products.list();
    setIsProductsLoading(false);
    setProducts(data);
  };
  const loadCategories = useCallback(async () => {
    setIsCategoriesLoading(true);
    const newCategories = await agent.categories.getCategoryList();
    setIsCategoriesLoading(false);
    setCategories(newCategories);
  },[]);
  // useEffect(() => {

  //   loadProducts();
  //   loadCategories();
  // }, []);

  useEffect(() => {
    setLastPage(Math.ceil(products.length / productPerPage));
  }, [products, productPerPage, setLastPage]);

  function handlePageBack() {
    if (page !== 1) setPage(p => p - 1);
  }
  function handlePageNext() {
    console.log(lastPage, page);
    if (page < lastPage) setPage(p => p + 1);
  }
  function handleLoading(loadingStatus) {
    setIsProductsLoading(loadingStatus);
  }

  async function loadProductsByCategory(categoryName) {
    setIsProductsLoading(true);
    const newProducts = await agent.categories.getCategory(categoryName);
    setIsProductsLoading(false);
    console.log(newProducts)
    setProducts(newProducts);
  }

  return (
    <productContext.Provider
      value={{
        products: products.slice(
          (page - 1) * productPerPage,
          page * productPerPage
        ),
        isProductsLoading,
        isCategoriesLoading,
        categories,
        productPerPage,
        lastPage,
        page,
        loadProducts,
        loadCategories,
        loadProductsByCategory,
        handlePageBack,
        handlePageNext,
        handleLoading,
      }}
    >
      {props.children}
    </productContext.Provider>
  );
};

export default ProductProvider;
