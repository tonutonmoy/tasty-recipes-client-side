import { createBrowserRouter } from "react-router-dom";
import Home from "../Component/Home/Home";
import Login from "../Component/Login/Login";
import Register from "../Component/Register/Register";
import HomeLayOut from "../Component/HomeLayOut/HomeLayOut";

export  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayOut></HomeLayOut>,
      children:[
        {
          path:'/',
          element: <Home></Home>
        },

        {
          path:'/login',
          element: <Login></Login>
        },
     
        {
          path:'/register',
          element: <Register></Register>
        }
      ]
    },
   
 
]);