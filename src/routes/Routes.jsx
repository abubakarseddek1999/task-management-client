import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Contact from "../pages/Contact";
import Home from "../pages/Home/Home";
import SignUp from "../pages/SignUp";
import Dashboard from "../Layout/Dashboard";
import AddTask from "../pages/Dashboard/AddTask";
import TaskMange from "../pages/Dashboard/TaskMange";
import About from "../pages/About";



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
        path:'/signup',
        element:<SignUp></SignUp>
      },
      {
        path:'/dashboard',
        element:<Dashboard></Dashboard>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/about',
        element:<About></About>
      }
    ]
  },
  {
    path:'dashboard',
    element: <Dashboard></Dashboard>,
    children:[
      {
        path:'addTask',
        element:<AddTask></AddTask>
      },
      {
        path:'manage',
        element:<TaskMange></TaskMange>
      }
    ]
  }
]);