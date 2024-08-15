import "./index.css";

import React, { Suspense, lazy } from "react";

import { BrowserRouter } from "react-router-dom";
import LazyLoading from "./components/lazyLoading/LazyLoading";
import { createRoot } from "react-dom/client";

const App = lazy(() => import("./App.jsx"));

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<LazyLoading />}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>
);
