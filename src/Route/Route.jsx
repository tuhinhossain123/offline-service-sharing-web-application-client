import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AddService from "../pages/AddService/AddService";
import ManageService from "../pages/ManageService/ManageService";
import UpdateService from "../pages/UpdateService/UpdateService";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
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
        path: '/addService',
        element: <AddService></AddService>
      },
      {
        path: '/manageService',
        element: <ManageService></ManageService>,
        loader: ()=> fetch('http://localhost:5000/services')
      },
      {
        path: '/update/:id',
        element: <UpdateService></UpdateService>,
        loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
      }
     
    ]
  },
]);

export default router;
