// App.jsx
import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavbarComponent from "./components/navbar/index";
import InnoloftContainer from "./layouts/InnoloftContainer";
import MainPage from "./pages/main";
import ProductPage from "./pages/product";
import { useSelector } from "react-redux";
import ProductEditPage from "./pages/product/productEdit/product.edit";

function App() {
  const { user } = useSelector((state) => state.product);
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
      <NavbarComponent profile={user}/>
      <InnoloftContainer>
        <RouterProvider router={router} />
      </InnoloftContainer>
    </>
  );
}

export default App;
