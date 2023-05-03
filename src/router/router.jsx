import { createBrowserRouter } from "react-router-dom";
import Home from "../Component/Home/Home";
import Login from "../Component/Login/Login";
import Register from "../Component/Register/Register";
import HomeLayOut from "../Component/HomeLayOut/HomeLayOut";
import ViewRecipes from "../Component/ViewRecipes/ViewRecipes";
import Blog from "../Component/Blog/Blog";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayOut></HomeLayOut>,
      children:[
        {
          path:'/',
          element: <Home></Home>,
          loader:()=> fetch('http://localhost:5000/chefData')
        },

        {
          path:'/login',

          element: <Login></Login>
        },
     
        {
          path:'/register',

          element: <Register></Register>
        },

        {
          path:'/recipesData/:id',

          element: <PrivateRoute>

                    <ViewRecipes></ViewRecipes>

                   </PrivateRoute>,

          loader:({params})=> fetch(`http://localhost:5000/recipesData/${params.id}`)   
        },

        {
          path:'/blog',
          
          element:<Blog></Blog>
        }
      ]
    },
   
 
]);