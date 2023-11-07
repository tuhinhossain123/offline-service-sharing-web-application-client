import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AddService from "../pages/AddService/AddService";
import ManageService from "../pages/ManageService/ManageService";
import UpdateService from "../pages/UpdateService/UpdateService";
import PrivateRoute from "../pages/PrivateRoute/PrivateRoute";
import AllServices from "../pages/AllServices/AllServices";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('http://localhost:5000/services')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/addServices',
        element: <PrivateRoute><AddService></AddService></PrivateRoute>,
      },
      {
        path: '/manageServices',
        element:<PrivateRoute> <ManageService></ManageService></PrivateRoute>,
        loader: ()=> fetch('http://localhost:5000/services')
      },
      {
        path: '/update/:id',
        element: <UpdateService></UpdateService>,
        loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: '/allServices',
        element: <AllServices></AllServices>,
        loader: ()=> fetch('http://localhost:5000/services')
      }
     
    ]
  },
]);

export default router;
