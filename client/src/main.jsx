import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Error from './pages/Error.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Books from './pages/Books.jsx';
import Glossary from './pages/Glossary.jsx';
import Signup from './pages/Signup.jsx';
import Blog from './pages/Blog.jsx';
import SingleBlog from './pages/SingleBlog';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
       index: true,
       element: <Home />
      },
      {
       path: '/about',
       element: <About />
      },
      {
        path: '/other-works',
        element: <Books />
      },
      {
        path: '/glossary',
        element: <Glossary />
      },
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/blogs',
        element: <Blog />
      },
      {
        path: '/blogs/:id',
        element: <SingleBlog />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);