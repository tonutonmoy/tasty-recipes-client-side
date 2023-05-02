import { createBrowserRouter } from "react-router-dom";
import Home from "../Component/Home/Home";
import Login from "../Component/Login/Login";
import Register from "../Component/Register/Register";
import HomeLayOut from "../Component/HomeLayOut/HomeLayOut";
import ViewRecipes from "../Component/ViewRecipes/ViewRecipes";

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
          element:<ViewRecipes></ViewRecipes>,
          loader:({params})=> fetch(`http://localhost:5000/recipesData/${params.id}`)   
        }
      ]
    },
   
 
]);