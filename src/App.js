import ProductDashboard from "./components/product/ProductDashboard";
import {ContextProvider} from './context/productContext';

function App() {
  return (
    <ContextProvider>
      <ProductDashboard />
    </ContextProvider>
  );
}

export default App;
