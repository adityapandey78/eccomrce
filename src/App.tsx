import './App.css';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import ItemPage from './features/itemPage/Page/ItemPage';
import CartPage from './features/cart/page/CartPage';
import Error from './commons/pages/Error';
import Navbar from './commons/header/page/Navbar';
import { globalStyles } from './commons/styles/globalStyles';
import Footer from './commons/footer/page/Footer';
import BillingPage from './features/billing-details/page/BillingPage';
import HomePage from './features/homepage/page/HomePage';
import ProductPage from './features/products/page/ProductPage';
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Navbar />
        <Outlet />
        <Footer/>
      </>),
      errorElement:(
        <>
        <Navbar />
        <Error/>
        <Footer/>
        </>
      ),
    children: [
      {
        index: true,
        element: <HomePage />
      },
      { path: 'about', element: <Error /> },
      { path: 'productspage', element: <ProductPage /> },
      { path: 'products',
        children:[
          {index:true, element:<HomePage/>},
          {path:':slug',element:<ItemPage/>}
        ]
       },
       {path:'cart',element:<CartPage/>},
       {path:'itemPage',element:<ItemPage/>},
       {path:'billingPage',element:<BillingPage/>},
    ]
  }
]);

const App = () => {
  globalStyles();
  return <RouterProvider router={router} />;
};

export default App;
