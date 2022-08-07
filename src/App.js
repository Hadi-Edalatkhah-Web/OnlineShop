import { Routes, Route, Navigate } from "react-router-dom";

// Contexts
import ProductContextProvider from "./Context/ProductContextProvider";
import CartContextProvider from "./Context/CartContextProvider";
//Components
import Store from "./Components/Store";
import ProductDetails from "./Shared/ProductDetails";
import Header from "./Components/Header";
import ShopCart from "./Components/ShopCart";


function App() {
  return (
    <div style={{width:"100vw" , background:"#eeeeee",margin:"0",padding:"0",minHeight:"100vh",maxHeight:"fitContent"}}>
 <ProductContextProvider>
      <CartContextProvider>
        <Header />
        <Routes>
          <Route path="/store/:id" element={<ProductDetails />} />
          <Route path="/store" element={<Store />} />
          <Route path="/shopCart" element={<ShopCart />} />
          <Route path="*" element={<Navigate to="/store" replace />} />
        </Routes>
      </CartContextProvider>
    </ProductContextProvider>
    </div>
   
  );
}
export default App;
