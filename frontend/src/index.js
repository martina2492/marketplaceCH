import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./context/ErrorBoundary";
import { CartProvider } from "./context/CartContext";
import { AuthContextProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ErrorBoundary>
      <CartProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </CartProvider>
    </ErrorBoundary>
  </BrowserRouter>
);
