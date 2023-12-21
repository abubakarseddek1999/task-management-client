import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Contact from "../pages/Contact";
import Home from "../pages/Home/Home";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      }
    ]
  },
]);