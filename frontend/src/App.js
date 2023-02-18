import "./App.css";
import { Routes, Route } from "react-router-dom";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Account from "./pages/Account";
import Home from "./pages/Home";
import ShoppingCart from "./components/ShoppingCart";
import ProductsList from "./pages/ProductsList";
import ProductDetail from "./pages/ProductDetail";
import CartContextProvider from "./context/CartContext";

function App() {
  return (
    <CartContextProvider value={{}}>
      <div className="App">
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<Signin />} />
            <Route path="/home" element={<Home />} />
            <Route path="/account" element={<Account />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/products" element={<ProductsList />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/products/:id" element={<ProductDetail />} />

            <Route
              path="/cart"
              element={
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              }
            />
          </Routes>
        </AuthContextProvider>
      </div>
    </CartContextProvider>
  );
}

export default App;
