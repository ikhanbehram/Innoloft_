// App.jsx
import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import NavbarComponent from './components/navbar/index';
import InnoloftContainer from './layouts/InnoloftContainer';
import MainPage from './pages/main';
import ProductPage from './pages/product';
import ProductEditPage from './pages/product/productEdit/product.edit';
import { getConfig } from './utils/helpers';

function App() {
  const { user } = useSelector((state) => state.product);

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const response = await getConfig();
        const data = await response.json();
        window.innoloftConfig = data;
      } catch (e) {
        return;
      }
    };

    fetchConfig();
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainPage />,
    },
    {
      path: '/product',
      element: <ProductPage />,
    },
    {
      path: 'product/edit/:editId',
      element: <ProductEditPage />,
    },
  ]);
  return (
    <>
      <Toaster />
      <NavbarComponent profile={user} />
      <InnoloftContainer>
        <RouterProvider router={router} />
      </InnoloftContainer>
    </>
  );
}

export default App;
