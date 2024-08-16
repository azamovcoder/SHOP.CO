import "./index.css";

import React, { Suspense, lazy } from "react";

import { BrowserRouter } from "react-router-dom";
import LazyLoading from "./components/lazyLoading/LazyLoading";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { store } from "./context";

const App = lazy(() => import("./App.jsx"));

createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Suspense fallback={<LazyLoading />}>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </Suspense>
  // </React.StrictMode>
);
