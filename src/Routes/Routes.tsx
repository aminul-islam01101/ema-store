import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Error from '~/pages/Error';
import ProductDetails from '~/pages/Shop/ProductDetails';
import Home from '../pages/Home';
import Inventory from '../pages/Inventory';
import Login from '../pages/Login';
import Orders from '../pages/Orders';
import Shop from '../pages/Shop/Shop';
import Root from './Root';

// const Roots = createBrowserRouter([
//   {
//     path: '/',
//     element: <Root />,
//     errorElement: <Error />,
//     children: [
//       { path: '/', element: <Home /> },
//       {
//         path: '/shop',
//         element: <Shop />,
//         loader: Loader,
//       },
//       { path: '/orders', element: <Orders /> },
//       { path: '/inventory', element: <Inventory /> },
//       { path: '/login', element: <Login /> },
//     ],
//   },
// ]);

// export default Roots;
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/'
      element={<Root />}
      errorElement={<Error />}
      loader={async () => fetch('products.json')}
    >
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/shop' element={<Shop />} />
      <Route path='/shop/:shopId' element={<ProductDetails />} />

      <Route path='/orders' element={<Orders />} />
      <Route path='/inventory' element={<Inventory />} />
      <Route path='/login' element={<Login />} />
    </Route>,
  ),
);
