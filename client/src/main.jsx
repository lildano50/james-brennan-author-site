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
import Contact from './pages/Contact.jsx';

//Individual Books
import Dust from './pages/Books/Dust.jsx';
import Outlaws from './pages/Books/Outlaws.jsx';
import Midnight from './pages/Books/Midnight.jsx';
import Ruins from './pages/Books/Ruins.jsx';

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
        path: '/books',
        element: <Books />
      },
      {
        path: '/extras',
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
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/dust-on-the-trail',
        element: <Dust />
      },
      {
        path: '/outlaws-on-the-bayou',
        element: <Outlaws />
      },
      {
        path: '/midnight-in-the-delta',
        element: <Midnight />
      },
      {
        path: '/ruins-on-the-savannah',
        element: <Ruins />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
