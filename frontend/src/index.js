import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./context/ErrorBoundary";
import { CartProvider } from "./context/CartContext";
import { AuthContextProvider } from "./context/AuthContext";
import { ThemeProvider } from "./theme/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ThemeProvider>
      <ErrorBoundary>
        <CartProvider>
          <AuthContextProvider>
            <App />
          </AuthContextProvider>
        </CartProvider>
      </ErrorBoundary>
    </ThemeProvider>
  </BrowserRouter>
);
