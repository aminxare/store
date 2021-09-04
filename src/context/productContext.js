import { createContext, useEffect, useState } from "react";

export const productContext = createContext();

export const ContextProvider = (props) =>{
    const [products,setProducts]=useState([]);
    
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products').then(res=>res.json()).then(data=>setProducts(data)).catch(()=>console.log('An error happened while fetching data'));
    },[])

    return (
      <productContext.Provider value={{
        products
      }}>
        {props.children}
      </productContext.Provider>
    );
}