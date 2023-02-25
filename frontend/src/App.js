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
import { CartProvider } from "./context/CartContext";
import ProductContext from "./context/productContext";
import { productReducer, initialState } from "./context/ProductReducer";
import { useReducer } from "react";
import { ThemeProvider } from "./theme/ThemeContext";
import { useContext } from "react";
import { ThemeContext } from "./theme/ThemeContext";
import Checkout from "./pages/Checkout";
function App() {
  const [state, dispatch] = useReducer(productReducer, initialState);
  const { themeMode } = useContext(ThemeContext);

  return (
    <ThemeProvider themeMode={themeMode}>
      <ProductContext.Provider value={{ state, dispatch }}>
        <CartProvider value={{}}>
          <div className="App">
            <AuthContextProvider>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/account" element={<Account />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/products" element={<ProductsList />} />
                <Route path="/cart" element={<ShoppingCart />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/checkout" element={<Checkout />} />

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
        </CartProvider>
      </ProductContext.Provider>
    </ThemeProvider>
  );
}

export default App;
