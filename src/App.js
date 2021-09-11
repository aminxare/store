import Navbar from "./components/layout/navbar/Navbar";
import ProductDashboard from "./components/product/ProductDashboard";
import ProductProvider from "./context/productContext";
import CartProvider from "./context/cartContext";

function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <Navbar />
        <ProductDashboard />
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
