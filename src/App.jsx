// App.jsx
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavbarComponent from "./components/navbar/index";
import InnoloftContainer from "./layouts/InnoloftContainer";
import MainPage from "./pages/main";
import ProductPage from "./pages/product";
import ProductEditPage from "./pages/product-edit";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
    },
    {
      path: "/product",
      element: <ProductPage />,
    },
    {
      path: "product/edit/:editId",
      element: <ProductEditPage />,
    },
  ]);
  return (
    <>
      <NavbarComponent />
      <InnoloftContainer>
        <RouterProvider router={router} />
      </InnoloftContainer>
    </>
  );
}

export default App;
