import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import App from './App.jsx';

import ProductProvider from "./context/ProductContext.jsx";
import CartProvider from './context/CartContext.jsx';

import './index.css';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductProvider>
          <CartProvider>
            <App />
            <ToastContainer />
          </CartProvider>
      </ProductProvider>
    </BrowserRouter>
  </React.StrictMode>
);