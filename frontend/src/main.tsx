import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import App from './App.tsx'
import Main from './pages/Main/Main.tsx';
import Products from './pages/Products/Products.tsx';
import Recipes from './pages/Recipes/Recipes.tsx';
import Rating from './pages/Rating/Rating.tsx';

const router = createBrowserRouter([
  {
      path: "/",
      element: <App />,
      children: [
        {
          path: '',
          element: <Main />,
        },
        {
          path: 'products',
          element: <Products />
        },
        {
          path: 'recipes',
          element: <Recipes />
        },
        {
          path: 'rating',
          element: <Rating />
        },
      ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
