import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import Home from './pages/Home';
import About from './pages/About';
import Recommendations from './pages/Recommendations';
import Result from './pages/Result';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/recommendation",
    element: <Recommendations />
  },
  {
    path: "/result",
    element: <Result />
  }
]);

function App() {

  return (
    <>    
      <RouterProvider router={router} />
    </>
  )
}

export default App
