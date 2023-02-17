import "./App.css";
import { Routes, Route } from "react-router-dom";

import Signin from "./components/Signin";
import Signup from "./components/Signup";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Account from "./pages/Account";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import ProductsList from "./pages/ProductsList";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account/products" element={<ProductsList />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account>
                  <Products></Products>
                </Account>
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
