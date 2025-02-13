import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import LoginPage from "./src/pages/Login.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegisterPage from "./src/pages/Register.jsx";
import ProductsPage from "./src/pages/products.jsx";
import ProfilePage from "./src/pages/profile.jsx";
import DetailProductPage from "./src/pages/dteailproduct.jsx";
import { Provider } from "react-redux";
import store from "./src/redux/store.js";
import DarkModeContextProvider from "./src/context/DarkMode.jsx";
import { TotalPriceProvider } from "./src/context/TotalPriceContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        Silahkan <a href="/login">Login </a>
      </div>
    ),
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/product/:id",
    element: <DetailProductPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <DarkModeContextProvider>
        <TotalPriceProvider>
          <RouterProvider router={router} />
        </TotalPriceProvider>
      </DarkModeContextProvider>
    </Provider>
  </StrictMode>
);
