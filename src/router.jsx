import { createBrowserRouter } from 'react-router-dom';
import Pagelayout from './layout/Pagelayout';
import HomePage from './pages/HomePage';
import Product from './pages/Product';
import Contact from './pages/Contact'
import About from './pages/About'
import { NotFound } from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Pagelayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'product',
        element: <Product />,
      },
      {
        path:'about',
        element: <About/>
      },
      {
        path: 'contact',
        element: <Contact/>
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
