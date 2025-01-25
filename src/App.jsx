import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router'
import AppLayout from './Layout/AppLayout/AppLayout'
import Home from './pages/Home'

function App() {

  const router = createBrowserRouter([
    {
    path: "/",
    element: <AppLayout />,
    errorElement:<Error />,
    children:[
      {
        path:"/",
        element:<Home/>
      },
    ]
  }])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
