import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import LoginPage from "./src/pages/Login.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegisterPage from "./src/pages/Register.jsx";
import ProductsPage from "./src/pages/products.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>
      Silahkan <a href="/login">Login </a>
    </div>,
  },
  {
    path: '/login',
    element: <LoginPage/>,
  },
  {
    path: '/register',
    element: <RegisterPage/>,
  },
  {
    path: '/products',
    element: <ProductsPage/>,
  },
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);
