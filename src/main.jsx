import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayOut from './Layout/MainLayOut.jsx'
import Home from './Components/Home.jsx'
import AddCoffee from './Components/AddCoffee.jsx'
import CoffeeDetels from './Components/CoffeeDetels.jsx'
import updatedCoffee from './Components/updatedCoffee.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayOut,
    children: [
      {
        index: true,
        loader: ()=> fetch('http://localhost:4000/coffees'),
        Component: Home
      },
      {
        path: 'addCoffee',
        Component: AddCoffee
      },
      {
        path: 'updatedCoffee/:id',
        loader: ({params}) => fetch(`http://localhost:4000/coffees/${params.id}`),
        Component: updatedCoffee
      },
      {
        path:'coffee/:id', 
        loader: ({params}) => fetch(`http://localhost:5173/coffee/${params.id}`),
        Component: CoffeeDetels 
            }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}> </RouterProvider>
  </StrictMode>,
)
