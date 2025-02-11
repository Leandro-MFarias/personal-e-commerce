import { createBrowserRouter, RouterProvider } from "react-router"
import { Home } from "../Home"
import { ProductDetails } from "../ProductDetails"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/games/:gameId',
    element: <ProductDetails />
  },
])

export function AppRoutes() {
  return <RouterProvider router={router} />
}