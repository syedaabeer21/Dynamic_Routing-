
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Pages/Login.jsx'
import Register from './Pages/Register.jsx'
import Products from './Pages/Products.jsx'
import Layout from './Layout.jsx'
import SingleProduct from './Pages/SingleProduct.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

;
const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
    {
      path:'',
      element:<Login/>
    },
    {
      path:'register',
      element:<Register/>
    },
    {
      path:'products',
      element:<Products/>
    },
    {
      path:'products/:id',
      element:<SingleProduct/>
    }
  ]
  }
])

createRoot(document.getElementById('root')).render(

  <RouterProvider router={router}>
     <App />
  </RouterProvider>
   
)
