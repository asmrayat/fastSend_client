import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import ABC from "../pages/Confirm/ABC/ABC";
import Login from "../pages/Auth/Login/Login";
import Reg from "../pages/Auth/Reg/Reg";
import Bookings from "../pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"/booking/:id",
          element:<PrivateRoute>
            <ABC></ABC>
          </PrivateRoute>,
          loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/signup",
          element:<Reg></Reg>
        },
        {
          path:"/mybookings",
          element:<PrivateRoute>
            <Bookings></Bookings>
          </PrivateRoute>
        }
      ]
    },
  ]);

  export default router