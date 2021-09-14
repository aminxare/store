import Navbar from "./components/layout/navbar/Navbar";
import ProductDashboard from "./components/product/ProductDashboard";
import ProductProvider from "./context/productContext";
import CartProvider from "./context/cartContext";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products">
            <ProductDashboard />
          </Route>
        </Switch>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
