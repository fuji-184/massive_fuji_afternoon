import React from 'react'
import ReactDOM from 'react-dom/client'
import { Outlet, createBrowserRouter, RouterProvider, Form } from 'react-router-dom'
import './index.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Youtube from './components/Youtube'
import MusicPlayer from './components/MusicPlayer'

const Layout = () =>{

  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  )
}


const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Youtube />,
      },
      {
        path: '/upload_dan_play',
        element: <MusicPlayer />,
      },
    ],
  },

])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);