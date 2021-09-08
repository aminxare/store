import Navbar from "./components/layout/Navbar";
import ProductDashboard from "./components/product/ProductDashboard";
import {ContextProvider} from './context/productContext';

function App() {
  return (
    <ContextProvider>
      <Navbar />
      <ProductDashboard />
    </ContextProvider>
  );
}

export default App;
